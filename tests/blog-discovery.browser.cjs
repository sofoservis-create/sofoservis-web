// Run: BLOG_DISCOVERY_BASE_URL=https://$REPLIT_DEV_DOMAIN node tests/blog-discovery.browser.cjs
// Uses the existing Chromium executable and Next's bundled WebSocket implementation.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { spawn } = require("node:child_process");
const WebSocket = require("next/dist/compiled/ws");
const { render, fixture } = require("./helpers/blog-discovery.cjs");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  assert.ok(process.env.BLOG_DISCOVERY_BASE_URL, "Set BLOG_DISCOVERY_BASE_URL");
  const browser = spawn("chromium", [
    "--headless", "--no-sandbox", "--disable-dev-shm-usage",
    "--remote-debugging-port=9227", "--user-data-dir=/tmp/blog-discovery-chromium",
    "about:blank",
  ], { stdio: "ignore" });
  let socket;
  try {
    let targets;
    for (let i = 0; i < 50; i++) {
      try {
        targets = await (await fetch("http://127.0.0.1:9227/json")).json();
        break;
      } catch { await delay(200); }
    }
    assert.ok(targets, "Chromium must start");
    socket = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { socket.once("open", resolve); socket.once("error", reject); });
    const pending = new Map();
    let id = 0;
    socket.on("message", (data) => {
      const response = JSON.parse(data);
      if (!response.id) return;
      const job = pending.get(response.id);
      if (!job) return;
      pending.delete(response.id);
      response.error ? job.reject(response.error) : job.resolve(response.result);
    });
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      pending.set(++id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });
    const evaluate = async (expression) => {
      const response = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
      assert.equal(response.exceptionDetails, undefined, JSON.stringify(response.exceptionDetails));
      return response.result.value;
    };
    await send("Page.enable");
    await send("Runtime.enable");
    const rows = [];
    for (const width of [390, 768, 1440]) {
      await send("Emulation.setDeviceMetricsOverride", { width, height: 1000, deviceScaleFactor: 1, mobile: false });
      for (const route of ["/", "/stahovanie", "/vypratavanie", "/montaz-nabytku"]) {
        await send("Page.navigate", { url: `${process.env.BLOG_DISCOVERY_BASE_URL}${route}` });
        let ready = false;
        for (let i = 0; i < 100; i++) {
          ready = await evaluate(`document.readyState === 'complete' && location.pathname === ${JSON.stringify(route)} && document.querySelectorAll('form').length >= 2`);
          if (ready) break;
          await delay(200);
        }
        assert.ok(ready, `${route}: loaded`);
        const expected = route === "/" || route === "/stahovanie";
        assert.equal(await evaluate(`!!document.querySelector('[aria-labelledby="article-discovery-title"]')`), expected);
        if (!expected) { rows.push({ width, route, cards: 0 }); continue; }
        // Wait for page hydration/scroll restoration, then let cv-auto sections settle.
        await delay(1000);
        for (let i = 0; i < 3; i++) {
          await evaluate(`window.scrollTo({ top: window.scrollY + document.querySelector('[aria-labelledby="article-discovery-title"]').getBoundingClientRect().top - 140, behavior: 'instant' })`);
          await delay(300);
        }
        const metrics = await evaluate(`(() => {
          const section = document.querySelector('[aria-labelledby="article-discovery-title"]');
          const rect = section.getBoundingClientRect();
          return {
            cards: section.querySelectorAll('article').length,
            overflow: [...section.querySelectorAll('*')].some(el => {
              const r = el.getBoundingClientRect(); return r.left < -1 || r.right > innerWidth + 1;
            }),
            lazy: section.querySelector('img').loading,
            imageHeight: section.querySelector('img').getBoundingClientRect().height,
            top: rect.top
          };
        })()`);
        assert.equal(metrics.cards, 1);
        assert.equal(metrics.overflow, false, `${route} at ${width}`);
        assert.equal(metrics.lazy, "lazy");
        assert.ok(metrics.imageHeight > 100);
        assert.ok(metrics.top >= 0 && metrics.top < 200, "Discovery section scrolled into viewport");
        rows.push({ width, route, ...metrics });
        if (route === "/" && width !== 768) {
          const screenshot = await send("Page.captureScreenshot", { format: "png" });
          fs.writeFileSync(`/tmp/blog-discovery-${width}.png`, Buffer.from(screenshot.data, "base64"));
        }
        // Exercise real server markup for multiple-card states in this browser only.
        for (const count of [2, 3]) {
          const html = render(Array.from({ length: count }, (_, i) => fixture(`browser-fixture-${i}`, "2026-09-13")));
          await evaluate(`document.querySelector('[aria-labelledby="article-discovery-title"]').outerHTML = ${JSON.stringify(html)}`);
          const state = await evaluate(`(() => {
            const s = document.querySelector('[aria-labelledby="article-discovery-title"]');
            const grid = s.querySelector('ul');
            return { cards: s.querySelectorAll('article').length,
              columns: getComputedStyle(grid).gridTemplateColumns.split(' ').length,
              overflow: [...s.querySelectorAll('*')].some(el => { const r = el.getBoundingClientRect(); return r.left < -1 || r.right > innerWidth + 1; }) };
          })()`);
          assert.equal(state.cards, count);
          assert.equal(state.columns, width < 640 ? 1 : width < 1024 ? 2 : count);
          assert.equal(state.overflow, false);
          rows.push({ width, route, fixtureCount: count, ...state });
        }
      }
    }
    console.log(JSON.stringify(rows, null, 2));
    console.log("PASS: four routes at phone/tablet/desktop widths; SSR 1/2/3/empty states; no discovery overflow.");
  } finally {
    socket?.close();
    browser.kill();
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });

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
    for (const width of [320, 390, 768, 1024, 1440]) {
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
          const card = section.querySelector('article').getBoundingClientRect();
          const blog = section.querySelector('a[href="/blog"]').getBoundingClientRect();
          return {
            cards: section.querySelectorAll('article').length,
            overflow: [...section.querySelectorAll('*')].some(el => {
              const r = el.getBoundingClientRect(); return r.left < -1 || r.right > innerWidth + 1;
            }),
            lazy: section.querySelector('img').loading,
            imageHeight: section.querySelector('img').getBoundingClientRect().height,
            cardWidth: card.width,
            cardHeight: card.height,
            sectionHeight: rect.height,
            leftAligned: Math.abs(card.left - section.querySelector('h2').getBoundingClientRect().left) < 2,
            blogTarget: { width: blog.width, height: blog.height },
            articleLinks: section.querySelectorAll('article a').length,
            excerptLines: section.querySelector('article a > span:nth-child(3) > span').getBoundingClientRect().height /
              parseFloat(getComputedStyle(section.querySelector('article a > span:nth-child(3) > span')).lineHeight),
            top: rect.top
          };
        })()`);
        assert.equal(metrics.cards, 1);
        assert.equal(metrics.overflow, false, `${route} at ${width}`);
        assert.equal(metrics.lazy, "lazy");
        assert.equal(metrics.articleLinks, 1);
        assert.ok(metrics.blogTarget.width >= 44 && metrics.blogTarget.height >= 44);
        if (width < 768) {
          assert.ok(metrics.imageHeight >= 78 && metrics.imageHeight <= 98, "compact thumbnail");
          if (width === 390) {
            assert.ok(metrics.excerptLines <= 2.1, "phone excerpt stays compact");
            assert.ok(metrics.cardHeight >= 160 && metrics.cardHeight <= 220, JSON.stringify(metrics));
            assert.ok(metrics.sectionHeight <= 400, JSON.stringify(metrics));
          }
        } else {
          assert.ok(metrics.cardWidth <= 380.5, "single card does not enlarge");
          assert.ok(metrics.leftAligned, "single card aligns with the heading");
          if (width === 1440) {
            assert.ok(metrics.excerptLines <= 2.1, "desktop excerpt stays compact");
            assert.ok(metrics.cardHeight >= 350 && metrics.cardHeight <= 430, JSON.stringify(metrics));
            assert.ok(metrics.sectionHeight <= 560, JSON.stringify(metrics));
          }
        }
        assert.ok(metrics.top >= 0 && metrics.top < 200, "Discovery section scrolled into viewport");
        rows.push({ width, route, ...metrics });
        if (route === "/" && width !== 768) {
          const screenshot = await send("Page.captureScreenshot", { format: "png" });
          fs.writeFileSync(`/tmp/blog-discovery-${width}.png`, Buffer.from(screenshot.data, "base64"));
        }
        // A real keyboard Tab should focus the single descriptive card link visibly.
        await evaluate(`document.querySelector('[aria-labelledby="article-discovery-title"] a[href="/blog"]').focus()`);
        await send("Input.dispatchKeyEvent", { type: "keyDown", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9 });
        await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Tab", code: "Tab", windowsVirtualKeyCode: 9 });
        assert.ok(await evaluate(`(() => {
          const link = document.querySelector('[aria-labelledby="article-discovery-title"] article a');
          const style = getComputedStyle(link);
          return document.activeElement === link && link.matches(':focus-visible') &&
            (style.outlineStyle !== 'none' || style.boxShadow !== 'none');
        })()`), "keyboard focus visible on article link");
        const classNames = await evaluate(`(() => {
          const s = document.querySelector('[aria-labelledby="article-discovery-title"]');
          const link = s.querySelector('article a');
          const content = link.querySelector('div');
          const meta = content.firstElementChild;
          return Object.fromEntries(Object.entries({
            section: s, container: s.firstElementChild, header: s.querySelector('header'),
            heading: s.querySelector('header > div'), eyebrow: s.querySelector('header p'),
            title: s.querySelector('h2'), blogLink: s.querySelector('a[href="/blog"]'),
            grid: s.querySelector('ul'), item: s.querySelector('li'), card: s.querySelector('article'),
            articleLink: link, image: link.children[0], imageContent: link.querySelector('img'),
            content, meta, category: meta.children[0], readingTime: meta.children[1],
            articleTitle: s.querySelector('h3'), excerpt: link.children[2],
            excerptText: link.children[2].firstElementChild, readMore: link.children[3]
          }).map(([name, el]) => [name, el.className]));
        })()`);
        const liveMarkup = (articles) => render(articles).replace(
          /discovery-test-([A-Za-z]+)/g, (_, name) => {
            assert.ok(classNames[name], `live CSS module mapping for ${name}`);
            return classNames[name];
          },
        );
        // Exercise real server markup for multiple-card states in this browser only.
        for (const count of [2, 3]) {
          const html = liveMarkup(Array.from({ length: count }, (_, i) => fixture(`browser-fixture-${i}`, "2026-09-13")));
          await evaluate(`document.querySelector('[aria-labelledby="article-discovery-title"]').outerHTML = ${JSON.stringify(html)}`);
          const state = await evaluate(`(() => {
            const s = document.querySelector('[aria-labelledby="article-discovery-title"]');
            const grid = s.querySelector('ul');
            return { cards: s.querySelectorAll('article').length,
              columns: getComputedStyle(grid).gridTemplateColumns.split(' ').length,
              overflow: [...s.querySelectorAll('*')].some(el => { const r = el.getBoundingClientRect(); return r.left < -1 || r.right > innerWidth + 1; }) };
          })()`);
          assert.equal(state.cards, count);
          assert.equal(state.columns, width < 768 ? 1 : width < 1024 ? 2 : 3);
          assert.equal(state.overflow, false);
          rows.push({ width, route, fixtureCount: count, ...state });
        }
        const longTitle = "Ako bezpečne pripraviť sťahovanie veľkej domácnosti vrátane nábytku, spotrebičov a ďalšieho vybavenia bez poškodenia a zbytočných komplikácií";
        await evaluate(`(() => {
          const section = document.querySelector('[aria-labelledby="article-discovery-title"]');
          section.querySelectorAll('h3').forEach(el => el.textContent = ${JSON.stringify(longTitle)});
          document.documentElement.style.fontSize = '200%';
        })()`);
        const enlarged = await evaluate(`(() => {
          const section = document.querySelector('[aria-labelledby="article-discovery-title"]');
          return {
            overflow: [...section.querySelectorAll('*')].some(el => { const r = el.getBoundingClientRect(); return r.left < -1 || r.right > innerWidth + 1; }),
            overflowElements: [...section.querySelectorAll('*')].filter(el => { const r = el.getBoundingClientRect(); return r.left < -1 || r.right > innerWidth + 1; }).map(el => ({ tag: el.tagName, class: el.className })),
            titlesUnclipped: [...section.querySelectorAll('h3')].every(el => el.scrollHeight <= el.clientHeight + 1),
            cardHeight: section.querySelector('article').getBoundingClientRect().height,
            excerptsUnclamped: [...section.querySelectorAll('article a > span:nth-child(3) > span')].every(el => getComputedStyle(el).webkitLineClamp === 'none')
          };
        })()`);
        assert.equal(enlarged.overflow, false, `enlarged text ${route} at ${width}: ${JSON.stringify(enlarged)}`);
        assert.ok(enlarged.titlesUnclipped, "long titles grow rather than clip");
        assert.ok(enlarged.cardHeight > metrics.cardHeight, "cards accommodate enlarged text");
        assert.ok(enlarged.excerptsUnclamped, "enlarged text excerpts are not clipped");
        rows.push({ width, route, enlargedText: true, ...enlarged });
        await evaluate(`document.documentElement.style.fontSize = ''`);
        await evaluate(`document.querySelector('[aria-labelledby="article-discovery-title"]').outerHTML = ${JSON.stringify(render([]))}`);
        assert.equal(await evaluate(`!!document.querySelector('[aria-labelledby="article-discovery-title"]')`), false);
      }
    }
    console.log(JSON.stringify({ measurements: rows.filter(row => row.cards === 1), scenarios: rows.length }, null, 2));
    console.log("PASS: four routes at 320/390/768/1024/1440; compact size targets, keyboard focus, long titles, enlarged text and 1/2/3/empty states.");
  } finally {
    socket?.close();
    browser.kill();
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });

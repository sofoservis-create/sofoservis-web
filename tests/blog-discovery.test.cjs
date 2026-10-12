const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { blogArticles, refrigeratorArticle, selectDiscoveryArticles, render, fixture } =
  require("./helpers/blog-discovery.cjs");

test("current article is newest on home and moving only", () => {
  assert.deepEqual(selectDiscoveryArticles(), [refrigeratorArticle]);
  assert.deepEqual(selectDiscoveryArticles("stahovanie"), [refrigeratorArticle]);
  assert.deepEqual(selectDiscoveryArticles("vypratavanie"), []);
  assert.deepEqual(selectDiscoveryArticles("montaz-nabytku"), []);
});

test("selection sorts dates descending, ties by slug, caps at three, and does not mutate input", () => {
  const source = [
    fixture("old", "2025-12-31"), fixture("z-tie", "2026-10-01"),
    fixture("new", "2026-10-02"), fixture("a-tie", "2026-10-01"),
  ];
  const before = source.slice();
  assert.deepEqual(selectDiscoveryArticles(undefined, source).map((a) => a.slug), ["new", "a-tie", "z-tie"]);
  assert.deepEqual(source, before);
});

test("relevance is explicit and applied before the limit", () => {
  const source = [
    fixture("new-assembly", "2026-10-10", ["montaz-nabytku"]),
    fixture("new-clearance", "2026-10-09", ["vypratavanie"]),
    fixture("unrelated", "2026-10-08", []),
    fixture("moving", "2026-10-01", ["stahovanie", "vypratavanie"]),
  ];
  assert.deepEqual(selectDiscoveryArticles("stahovanie", source).map((a) => a.slug), ["moving"]);
  assert.deepEqual(selectDiscoveryArticles("vypratavanie", source).map((a) => a.slug), ["new-clearance", "moving"]);
  assert.deepEqual(selectDiscoveryArticles("montaz-nabytku", source).map((a) => a.slug), ["new-assembly"]);
});

test("new registry entry is discovered automatically without page edits; no fixture remains", () => {
  const before = blogArticles.slice();
  const temporary = fixture("temporary-registry-test", "2026-10-01", ["montaz-nabytku"]);
  try {
    blogArticles.push(temporary);
    assert.equal(selectDiscoveryArticles()[0], temporary);
    assert.deepEqual(selectDiscoveryArticles("montaz-nabytku"), [temporary]);
    assert.deepEqual(selectDiscoveryArticles("stahovanie"), [refrigeratorArticle]);
  } finally {
    blogArticles.splice(0, blogArticles.length, ...before);
  }
  assert.deepEqual(blogArticles, before);
});

test("empty renders nothing; 1/2/3 cards have one H2, descriptive H3 links and responsive lazy images", () => {
  assert.equal(render([]), "");
  for (const count of [1, 2, 3]) {
    const articles = Array.from({ length: count }, (_, i) => fixture(`fixture-${i}`, "2026-09-13"));
    const html = render(articles);
    assert.equal((html.match(/<h2\b/g) || []).length, 1);
    assert.equal((html.match(/<h3\b/g) || []).length, count);
    assert.equal((html.match(/<article\b/g) || []).length, count);
    assert.equal((html.match(/loading="lazy"/g) || []).length, count);
    assert.equal((html.match(/sizes="/g) || []).length, count);
    assert.equal((html.match(/<a\b/g) || []).length, count + 1, "one large article link per card plus blog index");
    assert.match(html, /href="\/blog"/);
    assert.doesNotMatch(html, /<a\b[^>]*>(?:(?!<\/a>)[\s\S])*<a\b/, "no nested article links");
    assert.doesNotMatch(html, /nofollow|Čítajte viac/);
    for (const article of articles) assert.ok(html.includes(`href="/blog/${article.slug}"`));
  }
});

test("excerpt falls back to the existing summary when no discovery override is supplied", () => {
  assert.match(render([{ ...refrigeratorArticle, cardExcerpt: undefined, summary: "Accurate fallback summary." }]), /Accurate fallback summary\./);
  assert.ok(render([refrigeratorArticle]).includes(refrigeratorArticle.cardExcerpt));
});

test("homepage and service pages integrate after quote forms, never in footer", () => {
  for (const route of ["", "stahovanie", "vypratavanie", "montaz-nabytku"]) {
    const source = fs.readFileSync(path.join("src/app", route, "page.tsx"), "utf8");
    assert.match(source, /<ContactFormSection \/>\s*<ArticleDiscovery articles=\{selectDiscoveryArticles\(/);
  }
  assert.doesNotMatch(fs.readFileSync("src/components/layout/Footer.tsx", "utf8"), /ArticleDiscovery/);
});

// Opt in to HTTP checks with BLOG_DISCOVERY_BASE_URL=https://$REPLIT_DEV_DOMAIN.
test("initial HTML has canonical crawlable cards only on home/moving and preserves quote forms", {
  skip: !process.env.BLOG_DISCOVERY_BASE_URL,
}, async () => {
  const base = process.env.BLOG_DISCOVERY_BASE_URL;
  for (const route of ["/", "/stahovanie", "/vypratavanie", "/montaz-nabytku"]) {
    const response = await fetch(`${base}${route}`);
    assert.equal(response.status, 200, route);
    const html = (await response.text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
    assert.ok((html.match(/<form\b/g) || []).length >= 2, `${route}: quote forms preserved`);
    const section = html.match(/<section\b[^>]*aria-labelledby="article-discovery-title"[\s\S]*?<\/section>/)?.[0];
    if (route === "/" || route === "/stahovanie") {
      assert.ok(section, route);
      assert.match(section, new RegExp(`href="/blog/${refrigeratorArticle.slug}"`));
      assert.ok(section.includes(refrigeratorArticle.title));
      assert.doesNotMatch(section, /nofollow/);
      assert.ok(html.lastIndexOf("</form>") < html.indexOf(section));
      if (route === "/stahovanie") assert.ok(html.indexOf(section) < html.indexOf("Súvisiace služby"));
    } else {
      assert.equal(section, undefined, route);
    }
  }
  const article = await fetch(`${base}/blog/${refrigeratorArticle.slug}`);
  assert.equal(article.status, 200);
  const html = await article.text();
  assert.match(html, /"@type":"BlogPosting"/);
  assert.ok(html.includes(`href="https://www.sofoservis.sk/blog/${refrigeratorArticle.slug}"`));
});

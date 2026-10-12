const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

// Node does not process CSS modules. Stable tokens let browser fixtures map
// these names onto the real Next-generated class names from the live widget.
require.extensions[".css"] = (module) => {
  module.exports = new Proxy({}, {
    get: (_, name) => name === "__esModule" ? false : `discovery-test-${name}`,
  });
};

// Isolated-process loader keeps these small tests dependency-free.
for (const extension of [".ts", ".tsx"]) {
  require.extensions[extension] = (module, filename) => {
    const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
    });
    module._compile(outputText, filename);
  };
}
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...rest) {
  if (request.startsWith("@/")) request = path.resolve("src", request.slice(2));
  return resolve.call(this, request, parent, ...rest);
};
const { blogArticles, refrigeratorArticle } = require("../../src/lib/blog/articles.ts");
const { selectDiscoveryArticles } = require("../../src/lib/blog/discovery.ts");
const ArticleDiscovery = require("../../src/components/sections/ArticleDiscovery.tsx").default;
const render = (articles) => renderToStaticMarkup(React.createElement(ArticleDiscovery, { articles }));
const fixture = (slug, datePublished, relevantServices = ["stahovanie"]) => ({
  ...refrigeratorArticle, slug, datePublished, relevantServices,
});

module.exports = { blogArticles, refrigeratorArticle, selectDiscoveryArticles, render, fixture };

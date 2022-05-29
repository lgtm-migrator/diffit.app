var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/drazisil/gh/diffit.app/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-XL4BKCHG.css";

// route:/home/drazisil/gh/diffit.app/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = () => ({
  charset: "utf-8",
  title: "DiffIt.app",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "dark"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/home/drazisil/gh/diffit.app/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var diffHelper = __toESM(require("diff"));
var import_react3 = require("react");
var import_react4 = require("@remix-run/react");
var demoDiffs = {
  one: `
    uses: actions/checkout@master

- name: Setup node env \u{1F3D7}
uses: actions/setup-node@v2.1.2
with:
node-version: 12
check-latest: true`,
  two: `
    uses: actions/checkout@master

- name: Setup node env \u{1F3D7}
uses: actions/setup-node@v2.1.5
with:
node-version: 14
check-latest: true`
};
function Index() {
  const [diff1, setDiff1] = (0, import_react3.useState)("");
  const [diff2, setDiff2] = (0, import_react3.useState)("");
  const [diffResults, setDiffResults] = (0, import_react3.useState)([{ text: "", color: "", change: "" }]);
  function diffCalculate() {
    const diffObjects = diffHelper.diffChars(diff1, diff2);
    const result = [];
    diffObjects.forEach((part) => {
      const color = part.added ? "green" : part.removed ? "red" : "";
      result.push({
        text: part.value,
        color,
        change: part.added ? "added" : part.removed ? "removed" : "same"
      });
    });
    setDiffResults(result);
  }
  function loadDemo() {
    setDiff1(demoDiffs.one);
    setDiff2(demoDiffs.two);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex mb-6 pa-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-auto"
  }), /* @__PURE__ */ React.createElement(import_react4.Form, {
    className: "flex-auto text-center"
  }, /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: diff1,
    rows: 5,
    wrap: "false",
    className: "bg-transparent border border-white border-opacity-60"
  })), /* @__PURE__ */ React.createElement(import_react4.Form, {
    className: "flex-auto text-center"
  }, /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: diff2,
    rows: 5,
    wrap: "false",
    className: "bg-transparent border border-white border-opacity-60"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex-auto"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center mb-6 pa-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-auto"
  }), /* @__PURE__ */ React.createElement("button", {
    name: "diff",
    className: "mx-4 rounded-full px-4 py-1  bg-purple-200 hover:bg-purple-600 opacity-80 text-md-primary",
    onClick: diffCalculate
  }, "Diff"), /* @__PURE__ */ React.createElement("button", {
    name: "demo",
    className: "mx-4 rounded-full px-4 py-1 text-gray-900 bg-purple-200 hover:bg-purple-600",
    onClick: loadDemo
  }, "Demo"), /* @__PURE__ */ React.createElement("div", {
    className: "flex-auto"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center pa-6"
  }, /* @__PURE__ */ React.createElement("div", null, diffResults.map((c) => {
    return /* @__PURE__ */ React.createElement("span", {
      className: c.color
    }, c.text);
  }))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "212210c3", "entry": { "module": "/build/entry.client-PMK4N3Z6.js", "imports": ["/build/_shared/chunk-TXCVJUB4.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-DQVEC6DW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-YN6E5OLI.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-212210C3.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=server.js.map

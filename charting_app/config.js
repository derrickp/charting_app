System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "knockout": "github:knockout/knockout@3.4.0",
    "typescript": "npm:typescript@1.8.0"
  }
});

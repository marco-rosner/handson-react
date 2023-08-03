import { jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
const render = (url) => {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url }) })
  );
};
export {
  render
};

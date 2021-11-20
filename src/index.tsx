import ReactDOM from "react-dom";
import React, { lazy, Suspense } from "react";

import PageLoading from "./partials/PageLoading";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";

import "admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js";
import "admin-lte/dist/js/adminlte.min.js";
import "./styles/index.css";

const App = lazy(() => import("./app/App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<PageLoading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

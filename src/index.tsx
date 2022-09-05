/* eslint-disable import/no-unresolved */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// eslint-disable-next-line import/no-unresolved
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

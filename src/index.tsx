import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);

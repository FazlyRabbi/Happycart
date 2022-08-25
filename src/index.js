import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./asstes/fonts/AmazonEmber/AmazonEmber_Bd.ttf";
import "./asstes/fonts/AmazonEmber/AmazonEmber_Rg.ttf";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Router>
      <App />
    </Router>
  // </React.StrictMode>
);

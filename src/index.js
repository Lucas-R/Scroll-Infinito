import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./global.css";

import Routes from "./Routes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Routes />
  </StrictMode>,
  rootElement
);

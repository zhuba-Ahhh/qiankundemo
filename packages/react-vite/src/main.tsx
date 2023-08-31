import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App.tsx";
import "./styles/css/index.css";
import { BrowserRouter as Router } from "react-router-dom";

let root: Root = ReactDOM.createRoot(
  document.querySelector("#root") as Element
);

const initQianKun = () => {
  renderWithQiankun({
    mount: (props) => {
      console.log("[react-vite] props from main framework", props);
      render(props.container);
    },
    bootstrap: async () => {
      console.log("[react-vite] react app bootstrap");
    },
    unmount: async () => {
      await unmount();
    },
    update: async () => {
      throw new Error("Function not implemented.");
    },
  });
};

const render = (container?: Element) => {
  if (container && container.querySelector("#root")) {
    root = ReactDOM.createRoot(container.querySelector("#root") as Element);
  }
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
};

const unmount = async () => {
  root.unmount();
};

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  initQianKun();
} else {
  render();
}
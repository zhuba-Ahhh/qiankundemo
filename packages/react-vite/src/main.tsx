import React from "react";
import App from "./App.tsx";
import "./styles/css/index.css";
import ReactDOM, { Root } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import { propsType } from "../../../types";

let root: Root | null = ReactDOM.createRoot(
  document.querySelector("#root") as Element
);

const initQianKun = () => {
  renderWithQiankun({
    mount: (props: propsType) => {
      console.log("[react-vite] props from main framework", props);
      render(props);
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

const render = ({ container, routerBase }: propsType) => {
  if (!root && container && container.querySelector("#root")) {
    root = ReactDOM.createRoot(container.querySelector("#root") as Element);
  }
  root?.render(
    <React.StrictMode>
      <Router>
        <App routerBase={routerBase ? routerBase : ""} />
      </Router>
    </React.StrictMode>
  );
};

const unmount = async () => {
  if (root) {
    root.unmount();
    root = null;
    return;
  }
};

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  initQianKun();
} else {
  render({});
}

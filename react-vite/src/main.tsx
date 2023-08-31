import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./public-path";
import "./index.css";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

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
  const appDom = container ?? document.getElementById("app");
  appDom &&
    ReactDOM.createRoot(appDom).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
};

const unmount = async () => {
  const appDom = document.getElementById("app");
  appDom && ReactDOM.createRoot(appDom).unmount();
};

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  initQianKun();
} else {
  render();
}

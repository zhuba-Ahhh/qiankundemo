import App from "./App";
import "./public-path";
import React from "react";
import "./styles/css/index.css";
import ReactDOM, { Root } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

let root: Root | null = ReactDOM.createRoot(
  document.querySelector("#root") as Element
);

function render(props: any) {
  let { container } = props;
  if (!root && container && container.querySelector("#root")) {
    root = ReactDOM.createRoot(container.querySelector("#root") as Element);
  }
  root?.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

// 导出 bootstrap 函数
export async function bootstrap() {
  console.log("[react-ts] react app bootstrap");
}

export async function mount(props: any) {
  console.log("[react-ts] props from main framework", props);
  render(props);
}

export async function unmount(props: any) {
  console.log("[react-ts] props from main framework unmount", props);
  if (root) {
    root.unmount();
    root = null;
    return;
  }
}

export async function update(props: any) {
  console.log("[react-ts] props from main framework for update", props);
}
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/css/index.css";
import App from "./App";
import "./public-path";
import { BrowserRouter as Router } from "react-router-dom";

let root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

function render(props: any) {
  let { container } = props;
  if (container) {
    root = ReactDOM.createRoot(container.querySelector("#root"));
  }
  root.render(
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

export async function bootstrap() {
  console.log("[react-ts] react app bootstrap");
}

export async function mount(props: any) {
  console.log("[react-ts] props from main framework", props);
  render(props);
}

export async function unmount(props: any) {
  console.log("[react-ts] props from main framework unmount", props);
  root.unmount();
}

export async function update(props: any) {
  console.log("[react-ts] props from main framework for update", props);
}

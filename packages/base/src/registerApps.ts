// 使用qiankun来注册应用

import { registerMicroApps, setDefaultMountApp, start } from "qiankun";

const loader = (loading: any) => {
  console.log(loading);
};

let styleMap = new Map<string, Element[]>();

registerMicroApps(
  [
    {
      name: "vue-ts", // 子应用的名称
      entry: "//localhost:4003", // 子应用的访问地址
      container: "#container", // 子应用应该挂载的位置（后面会解释）
      activeRule: "/vue", // 在路径为xxx的时候让子应用渲染
      loader, // loader是乾坤提供的一个类似于加载中的函数、
      props: {
        routerBase: "/vue",
      },
    },
    {
      name: "vue-vite",
      entry: "//localhost:4004",
      container: "#container",
      activeRule: "/vue-vite",
      loader,
      props: {
        routerBase: "/vue-vite",
      },
    },
    {
      name: "react-ts",
      entry: "//localhost:4001",
      container: "#container",
      activeRule: "/react",
      loader,
      props: {
        routerBase: "/react",
      },
    },
    {
      name: "react-vite",
      entry: "//localhost:4002",
      container: "#container",
      activeRule: "/react-vite",
      loader,
      props: {
        routerBase: "/react-vite",
      },
    },
  ],
  {
    // 乾坤为提供了一系列的生命周期函数，会在子应用加载前后生效
    beforeLoad: (app: any) => {
      // 加载微应用前，加载进度条
      console.log("before load", app.name);
      Array.from(document.getElementsByTagName("head")[0].children)
        .filter((item) => item.tagName === "STYLE")
        .forEach((element) => {
          element.setAttribute("data-app", "main");
        });
      return Promise.resolve();
    },
    beforeMount: (app: any) => {
      console.log("子应用挂载前", app.name);
      let appStyleList: Element[] = [];
      Array.from(document.getElementsByTagName("head")[0].children)
        .filter((item) => item.tagName === "STYLE")
        .forEach((element) => {
          let attr = element.getAttribute("data-app");
          if (!attr) {
            element.setAttribute("data-app", app.name);
            appStyleList.push(element);
            document
              .getElementsByTagName("qiankun-head")[0]
              .appendChild(element);
          }
          if (attr !== "main" && attr) {
            element.remove();
          }
        });

      let styleList = styleMap.get(app.name);
      if (styleList) {
        styleList.forEach((s) => {
          document.getElementsByTagName("qiankun-head")[0].appendChild(s);
        });
      } else {
        styleMap.set(app.name, appStyleList);
      }
      return Promise.resolve();
    },
    // qiankun 生命周期钩子 - 微应用挂载后
    afterMount: (app: any) => {
      // 加载微应用前，进度条加载完成
      console.log("after mount", app.name);
      return Promise.resolve();
    },
    beforeUnmount: (app: any) => {
      console.log("子应用销毁前", app.name);
      return Promise.resolve();
    },
    afterUnmount: (app: any) => {
      console.log("子应用销毁后", app.name);
      return Promise.resolve();
    },
  }
);

// 设置默认挂载子应用
setDefaultMountApp('/vue');

// 调用start用于启动子应用
start({
  sandbox: {
    experimentalStyleIsolation: true,
  },
});

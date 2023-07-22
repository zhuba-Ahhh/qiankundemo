// 使用qiankun来注册应用

import { registerMicroApps, start } from "qiankun";

const loader = (loading: any) => {
  console.log(loading);
};

registerMicroApps(
  [
    {
      name: "vue-ts", // 子应用的名称
      entry: "//localhost:7001", // 子应用的访问地址
      container: "#container", // 子应用应该挂载的位置（后面会解释）
      activeRule: "/vue", // 在路径为xxx的时候让子应用渲染
      loader, // loader是乾坤提供的一个类似于加载中的函数、
      props: {
        routerBase: "/vue"
      }
    },
    {
      name: "react-ts",
      entry: "//localhost:3001",
      container: "#container",
      activeRule: "/react",
      loader,
      props: {
        routerBase: "/react",
      }
    },
  ],
  {
    // 乾坤为提供了一系列的生命周期函数，会在子应用加载前后生效
    beforeLoad: (app: any) => {
      // 加载微应用前，加载进度条
      console.log("before load", app.name);
      return Promise.resolve();
    },
    beforeMount: (app: any) => {
      console.log("子应用挂载前", app.name);
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

// 调用start用于启动子应用
start({
  sandbox: {
    experimentalStyleIsolation: true
  }
});

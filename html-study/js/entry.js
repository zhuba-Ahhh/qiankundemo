__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;

const render = () => {
  // 这里可以在渲染之前做些什么
  return Promise.resolve();
};

((global) => {
  //html-study 是对应的微应用名称
  global["html-study"] = {
    bootstrap: () => {
      console.log("html-study bootstrap");
      return Promise.resolve();
    },
    mount: (props) => {
      console.log("html-study mount", props);
      props.onGlobalStateChange((state, prev) => {
        console.log(state, prev);
      });
      if (window.__POWERED_BY_QIANKUN__) {
        __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
      }
      return render();
    },
    unmount: () => {
      console.log("html-study unmount");
      return Promise.resolve();
    },
  };
})(window);

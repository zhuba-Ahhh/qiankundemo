__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;

const render = () => {
  // 这里可以在渲染之前做些什么
  return Promise.resolve();
};

((global) => {
  //html-music 是对应的微应用名称
  global["html-music"] = {
    bootstrap: () => {
      console.log("html-music bootstrap");
      return Promise.resolve();
    },
    mount: (props) => {
      console.log("html-music mount", props);
      props.onGlobalStateChange((state, prev) => {
        console.log(state, prev);
      });
      return render();
    },
    unmount: () => {
      console.log("html-music unmount");
      return Promise.resolve();
    },
  };
})(window);

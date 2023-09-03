const render = () => {
  // 这里可以在渲染之前做些什么
  return Promise.resolve();
};

((global) => {
  //purehtml 是对应的微应用名称
  global["purehtml"] = {
    bootstrap: () => {
      console.log("purehtml bootstrap");
      return Promise.resolve();
    },
    mount: (props) => {
      console.log("purehtml mount", props);
      props.onGlobalStateChange((state, prev) => {
        console.log(state, prev);
      });
      return render($);
    },
    unmount: () => {
      console.log("purehtml unmount");
      return Promise.resolve();
    },
  };
})(window);

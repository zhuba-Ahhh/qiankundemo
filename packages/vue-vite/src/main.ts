import { App as VueApp, createApp } from "vue";
import "./styles/css/style.css";
import "./public-path";
import App from "./App.vue";
import "element-plus/dist/index.css";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

// let history;
// let router: Plugin | null;
let app: VueApp<Element> | null;
function render(container?: any) {
  // history = createWebHistory("/vue");
  //   history = createWebHistory(process.env.BASE_URL);
  //   router = createRouter({
  //     history,
  //     routes,
  //   });
  app = createApp(App);
  // 子应用在被注册到主应用中的时候，我们希望将子应用最后打包的代码挂载到主应用的DOM结构中，当其自己独立运行成项目时挂载到自己的'#app'中
  //   if (router === null) return;
  app.mount(container ? container.querySelector("#app") : "#app");
}

let headStyles = []

const initQianKun = () => {
  renderWithQiankun({
    mount: (props) => {
      console.log("vue-vite app mount", props);
      render(props?.container);
    },
    bootstrap: async () => {
      console.log("vue-vite app bootstraped");
    },
    unmount: async () => {
      console.log("vue-vite app unmount");
      app?.unmount();
      //   history = null; // 当子应用被卸载后我们将路由等全部清空
      app = null;
      //   router = null;
    },
    update: async () => {
      throw new Error("Function not implemented.");
    },
  });
};

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  initQianKun();
} else {
  render();
}

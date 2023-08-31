import { App as VueApp, createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./public-path";

// let history;
// let router: Plugin | null;
let app: VueApp<Element> | null;
function render(props: any) {
  // history = createWebHistory("/vue");
  //   history = createWebHistory(process.env.BASE_URL);
  //   router = createRouter({
  //     history,
  //     routes,
  //   });
  app = createApp(App);
  const { container } = props;
  // 子应用在被注册到主应用中的时候，我们希望将子应用最后打包的代码挂载到主应用的DOM结构中，当其自己独立运行成项目时挂载到自己的'#app'中
  //   if (router === null) return;
  app.mount(container ? container.querySelector("#app") : "#app");
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  // 该应用没有加入到父应用中，独立运行
  render({});
}

// 需要暴露接入协议
export async function bootstrap() {
  console.log("vue-vite app bootstraped");
}
export async function mount(props: any) {
  // 参数props包含了主应用中的注册信息
  console.log("vue-vite app mount", props);
  render(props);
}
export async function unmount() {
  console.log("vue-vite app unmount");
  app?.unmount();
  //   history = null; // 当子应用被卸载后我们将路由等全部清空
  app = null;
  //   router = null;
}

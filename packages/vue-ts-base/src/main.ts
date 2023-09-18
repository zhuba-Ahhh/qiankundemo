/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import { createRouter, createWebHistory } from "vue-router";
import "./registerApps";

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
});
const app = createApp(App);
app.use(router).mount(document.querySelector("#app") as Element);

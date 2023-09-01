import { RouteRecordRaw } from "vue-router";
import HomeView from "../Views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/home", // 设置默认路由重定向到 '/home'
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView, //() =>
    //   import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
];

export default routes;

import { RouteRecordRaw } from "vue-router";
import TodoView from "../views/TodoView";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/todo", // 设置默认路由重定向到 '/home'
  },
  {
    path: "/todo",
    name: "todo",
    component: TodoView,
  },
]

export default routes;

import HomeView from "../views/HomeView";

export interface routeType {
  path: string;
  element: () => JSX.Element;
}

const routes: Array<routeType> = [
  {
    path: "/",
    element: HomeView,
  },
  {
    path: "*",
    element: HomeView,
  },
];

export default routes;

import HomeView from "../views/HomeView";

export interface routeTpe {
  path: string,
  element: () => JSX.Element
}

const routes: Array<routeTpe> = [
  {
    path: '/',
    element: HomeView,
  },
  {
    path: '*',
    element: HomeView,
  },
];

export default routes;

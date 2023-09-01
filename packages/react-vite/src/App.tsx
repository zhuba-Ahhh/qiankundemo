import "./styles/css/App.css";
import HomeView from "./views/HomeView";
import { Route, Routes } from "react-router-dom";
import { propsType } from "../../../types";

const App: React.FC<propsType> = (props?) => {
  const { routerBase } = props;
  return (
    <Routes>
      <Route path={`${routerBase}/`} element={<HomeView />} />
      <Route path="*" element={<HomeView />} />
    </Routes>
  );
};

export default App;

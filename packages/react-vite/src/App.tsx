import "./styles/css/App.css";
import HomeView from "./views/HomeView";
import { Route, Routes } from "react-router-dom";
import { propsType } from "../../../types";

const App: React.FC<propsType> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="*" element={<HomeView />} />
    </Routes>
  );
};

export default App;

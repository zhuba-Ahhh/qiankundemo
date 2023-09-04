import "./styles/css/App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./router";
import { uuid } from "./utils";

const App: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element()} key={uuid()} />
      ))}
    </Routes>
  );
};

export default App;

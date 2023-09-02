import "./styles/css/App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./router";

const App: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element()} />
      ))}
    </Routes>
  );
};

export default App;

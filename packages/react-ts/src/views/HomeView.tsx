import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import logo from "../assets/svg/logo.svg";
import "../styles/css/App.css";
import "../styles/scss/index.scss";

function HomeView() {
  const navigate = useNavigate();

  const routerPush: (path: string) => void = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Header routerPush={routerPush} />
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default HomeView;

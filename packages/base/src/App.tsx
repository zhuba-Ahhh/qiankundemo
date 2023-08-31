import "./App.css";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import SiderComponent from "./components/Sider";

const { Content } = Layout;

function App() {
  const navigate = useNavigate();

  const routerPush: Function = (path: string) => {
    navigate(path);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderComponent routerPush={routerPush} />
      <Layout>
        <Content>
          {/* 切换导航将微应用渲染到container容器中 */}
          <div id="container" style={{ height: "100%" }} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

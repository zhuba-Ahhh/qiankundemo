import "./style/css/App.css";
import "./style/scss/index.scss";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import SiderComponent from "./components/Sider";
const { Header, Footer, Content } = Layout;

function App() {
  const navigate = useNavigate();

  const routerPush: Function = (path: string) => {
    navigate(path);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderComponent routerPush={routerPush} />
      <Layout>
        <Header style={{display: "none"}}></Header>
        <Content>
          {/* 切换导航将微应用渲染到container容器中 */}
          <div id="container" style={{ height: "100%" }} />
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}

export default App;

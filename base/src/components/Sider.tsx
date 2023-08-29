import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { ReactComponent as VueSvg } from "../img/svg/Vue.svg";
import { ReactComponent as ReactSvg } from "../img/svg/React.svg";
const { Sider } = Layout;

interface SiderComponentProps {
  routerPush: Function;
}

const SiderComponent: React.FC<SiderComponentProps> = (props) => {
  const { routerPush } = props;
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const divStyle: React.CSSProperties = {
    height: '100%',
    // width: '24px',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  }

  const menuItems = [
    {
      key: "vue",
      icon: <div style={divStyle}><VueSvg width={24} height={24} /></div>,
      label: "Vue",
    },
    {
      key: "react",
      icon: <div style={divStyle}><ReactSvg width={24} height={24} /></div>,
      label: "React",
    },
  ];

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed} collapsedWidth={70} width={120}>
      <Menu
        theme="dark"
        defaultSelectedKeys={["Vue"]}
        mode="inline"
        items={menuItems}
        onClick={({ key }) => routerPush(key)}
      ></Menu>
    </Sider>
  );
};

export default SiderComponent;

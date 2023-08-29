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

  const menuItems = [
    {
      key: "vue",
      icon: <VueSvg width={24} height={24} />,
      label: "Vue",
    },
    {
      key: "react",
      icon: <ReactSvg width={24} height={24} />,
      label: "React",
    },
  ];

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
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

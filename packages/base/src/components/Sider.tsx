import React, { useState, useCallback } from "react";
import { Menu, Layout } from "antd";
import { ReactComponent as VueSvg } from "../img/svg/Vue.svg";
import { ReactComponent as ReactSvg } from "../img/svg/React.svg";
import { ReactComponent as HtmlSvg } from "../img/svg/Html.svg";
import "../style/scss/sider.scss";

const { Sider } = Layout;

interface SiderComponentProps {
  routerPush: Function;
}

const SiderComponent: React.FC<SiderComponentProps> = (props) => {
  const { routerPush } = props;
  const [collapsed, setCollapsed] = useState(true);

  const getCurrentPath = useCallback(() => {
    const { pathname } = window.location;
    const firstSlashIndex = pathname.indexOf("/");
    if (firstSlashIndex !== -1) {
      const secondSlashIndex = pathname.indexOf("/", firstSlashIndex + 1);
      const endPosition =
        secondSlashIndex !== -1 ? secondSlashIndex : pathname.length;
      return pathname.substring(firstSlashIndex + 1, endPosition);
    }
    return "vue";
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const divStyle: React.CSSProperties = {
    height: "100%",
  };

  const menuItems = [
    {
      key: "vue",
      icon: (
        <div style={divStyle}>
          <VueSvg width={24} height={24} />
        </div>
      ),
      label: "Vue",
    },
    {
      key: "vue-tsx",
      icon: (
        <div style={divStyle}>
          <VueSvg width={24} height={24} />
        </div>
      ),
      label: "Vue-Tsx",
    },
    {
      key: "vue-vite",
      icon: (
        <div style={divStyle}>
          <VueSvg width={24} height={24} />
        </div>
      ),
      label: "Vue-Vite",
    },
    {
      key: "react",
      icon: (
        <div style={divStyle}>
          <ReactSvg width={24} height={24} />
        </div>
      ),
      label: "React",
    },
    {
      key: "react-vite",
      icon: (
        <div style={divStyle}>
          <ReactSvg width={24} height={24} />
        </div>
      ),
      label: "React-Vite",
    },
    {
      key: "html-music",
      icon: (
        <div style={divStyle}>
          <HtmlSvg width={24} height={24} />
        </div>
      ),
      label: "Html-Music",
    },
    {
      key: "html-study",
      icon: (
        <div style={divStyle}>
          <HtmlSvg width={24} height={24} />
        </div>
      ),
      label: "Html-Study",
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      collapsedWidth={80}
      width={160}
    >
      <Menu
        theme="dark"
        defaultSelectedKeys={[getCurrentPath()]}
        mode="inline"
        items={menuItems}
        onClick={({ key }) => routerPush(key)}
      ></Menu>
    </Sider>
  );
};

export default SiderComponent;

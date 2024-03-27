import { Button, Flex, Menu } from "antd";
import { itemsTabsMenu } from "../variables/itemsTabsMenu";
import { useState } from "react";

export default function TabsMenu({ currentTab, setCurrentTab }) {
  const [showMenuReport, setShowMenuReport] = useState(false);
  const handleChangeTab = (e) => {
    console.log(e);
    setCurrentTab(e.key);
  };

  return (
    <Flex id="menuu" align="center">
      <Menu
        onClick={handleChangeTab}
        selectedKeys={[currentTab]}
        mode="horizontal"
        items={itemsTabsMenu}
      />
      <Button
        className="ml-auto bg-slate-500 p-1"
        onClick={() => {
          setShowMenuReport(!showMenuReport);
        }}
      >
        ...
      </Button>
    </Flex>
  );
}

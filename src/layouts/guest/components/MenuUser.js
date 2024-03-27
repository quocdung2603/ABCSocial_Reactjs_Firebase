import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Avatar } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
        className="flex items-center gap-x-2"
      >
        <Avatar
          alt="ava-user"
          src={require("assets/images/banner_fanpage.png")}
        />
        <span className="font-semibold">Toi la ai</span>
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
       
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu itemdisabled",
    key: "3",
    disabled: true,
  },
];
const MenuUser = ({ className }) => {
  const [showDropMenuUser, setShowDropMenuUser] = useState(false);

  return (
    <Dropdown
      menu={{
        items,
      }}
      className={className}
    >
        
      <Link onClick={(e) => e.preventDefault()}>
        <Space className="flex items-center">
          <Avatar
            alt="ava-user"
            size={30}
            src={require("assets/images/banner_fanpage.png")}
            className="cursor-pointer"
            onClick={() => {
              setShowDropMenuUser(!showDropMenuUser);
            }}
          />
          <DownOutlined />
        </Space>
      </Link>
    </Dropdown>
  );
};
export default MenuUser;

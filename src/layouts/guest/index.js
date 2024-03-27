import { Avatar, Flex, Input, Layout } from "antd";
import {
  HomeOutlined,
  FundProjectionScreenOutlined,
  GroupOutlined,
} from "@ant-design/icons";

import MenuUser from "./components/MenuUser";
import { useState } from "react";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const CustomHeader = () => {
  return (
    <Header
      id="header"
      className="relative bg-white text-secondaryText w-full text-center px-3 py-2 shadow-sm flex items-center justify-between"
    >
      <Flex align="center" gap={10}>
        <Avatar
          alt="ava-logo"
          size={40}
          src={require("assets/images/banner_fanpage.png")}
        />
        <Input.Search placeholder="Tìm kiếm trên ABC" />
      </Flex>

      <Flex gap={50}>
        <HomeOutlined className=" text-[25px] cursor-pointer bg-red-50 px-10 py-3" />
        <FundProjectionScreenOutlined className=" text-[25px] cursor-pointer bg-red-50 px-10 py-3" />
        <GroupOutlined className=" text-[25px] cursor-pointer bg-red-50 px-10 py-3" />
      </Flex>


        <MenuUser className={"shadow-sm"} />
 
    </Header>
  );
};
export default function LayoutGuest({ children }) {
  return (
    <Layout>
      <CustomHeader />
      <Link to={"abc"}>SAFJ</Link>
      <Content id="content" style={{ width: "70%", margin: "0 auto" }}>
        {children}
      </Content>

      <Footer id="footer" className="text-center">
        <span>© 2021 ABC</span>
      </Footer>
    </Layout>
  );
}

import { useState } from "react";

import { Avatar, Flex } from "antd";
import ActionButtonsHeader from "./components/ActionButtonsHeader";
import TabsMenu from "./components/TabsMenu";
import Posts from "./Posts";
import Followers from "./Followers";
import { Link, useParams } from "react-router-dom";

export default function Fanpage() {
  const {uid} = useParams()
  console.log("🚀 ~ Fanpage ~ uid:", uid)
  const [user, setuser] = useState({
    userName: "Ban la ai ?", // fetch user
    type: "user",
  });
  const [page, setPage] = useState({
    name: "E-Learning - Đại học thủ dầu một",
    like: 12,
    follower: 13,
  }); // fetch page
  const [currentTab, setCurrentTab] = useState("posts");

  return (
    <div>
      <img
        alt="banner-fanpage"
        src={require("assets/images/banner_fanpage.png")}
      />

      <Flex align="flex-end" gap={15} className="w-full relative top-[-20px]">
        <Avatar
          alt="ava-fanpage"
          src={require("assets/images/banner_fanpage.png")}
          size={100}
        />
        <Flex id="info" align="end" flex={1}>
          <Flex vertical={true}>
            <span className="font-bold text-2xl">
              E-Learning - Đại học thủ dầu một
            </span>
            <Flex align="center" className="font-bold text-secondaryText">
              <Link to={`/friends_likes`}>12 lượt thích</Link>
              <span className="mx-1 font-bold">·</span>
              <Link to={`/followers`}>13 người theo dõi</Link>
            </Flex>
            <span>YOUR USER</span>
          </Flex>
          <ActionButtonsHeader isMember={false} />
        </Flex>
      </Flex>
      <hr />
      <TabsMenu currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {currentTab === "posts" && <Posts />}
      {currentTab === "about" && <div>ABOUT</div>}
      {currentTab === "ln" && <div>LN</div>}
      {currentTab === "reviews" && <div>REVIEWS</div>}
      {currentTab === "follwers" && <Followers />}
      {currentTab === "pictures" && <div>PICTURES</div>}
      {currentTab === "more" && <div>MORE</div>}
    </div>
  );
}

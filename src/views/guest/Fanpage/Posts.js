import { useState } from "react";

import { MailOutlined, SendOutlined} from "@ant-design/icons";
import { Avatar, Button, Flex, Input } from "antd";
import { Link } from "react-router-dom";

const { TextArea } = Input;

function PostCard() {
  const [user, setUser] = useState({}); // fetch user current
  const [comment, setComment] = useState(""); // comment of user

  const handleLikePost = () => {
    // like post
  };
  const handleSharePost = () => {
    // share post
  };

  const handleSendComment = () => {
    //send comment
  };

  return (
    <div className="w-[60%] mx-auto py-2 px-3 bg-red-50 rounded-md">
      <Flex id="card_header" align="center">
        <Flex id="info" align="center" gap={10}>
          <Avatar
            alt="ava-fanpage"
            src={require("assets/images/banner_fanpage.png")}
            size={30}
          />
          <Flex vertical={true}>
            <Link to={`/tdmu`} className="font-semibold hover:underline">Fanpage posted</Link>
            <span>22/10/2023</span>
          </Flex>
        </Flex>
        <Button type="primary" className={` bg-slate-400 ml-auto`}>
          ...
        </Button>
      </Flex>

      <div id="card_body" className="p-3">
        <span>HELLJASLKFJKLASF</span>
      </div>

      <Flex id="card_footer" vertical={true}>
        <hr />
        <Flex justify="space-between" className="py-1">
          <div>@ @</div>
          <div>1 bình luận</div>
        </Flex>
        <hr />
        <Flex
          id="actions_post"
          justify="space-between"
          className="py-2 px-3 text-black"
        >
          <Button className={`flex-1 border-none`} onClick={handleLikePost}>
            {" "}
            Thích{" "}
          </Button>
          <Button className={`flex-1 border-none`}> Bình Luận </Button>
          <Button className={`flex-1 border-none`} onClick={handleSharePost}>
            {" "}
            Chia sẻ{" "}
          </Button>
        </Flex>
        <hr />
        <Flex align="start" className="mt-5">
          <Avatar
            alt="user-ava"
            src={
              user?.avatar
                ? user.avatar
                : require("assets/images/banner_fanpage.png")
            }
          />

          <Flex align="center" className="relative w-full">
            <TextArea
              value={comment}
              onChange={(text) => {
                setComment(text);
              }}
              placeholder="Viết bình luận..."
              className="bg-secondary flex-1 ml-2"
              autoSize={{
                minRows: 2,
                maxRows: 6,
              }}
            />
            <SendOutlined onClick={handleSendComment} className="absolute end-3" />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
export default function Posts() {
  const [posts, setPosts] = useState([]); // fetch posts of fanpage

  return (
    <div className="mt-5">
      <Flex
        id="header"
        align="center"
        justify="space-between"
        className={`bg-background py-2 px-4 rounded-md`}
      >
        <span>Bài viết</span>
        <Button type="primary" className={`bg-primary`}>
          Bộ lọc
        </Button>
      </Flex>

      <Flex id="list_posts" vertical={true} gap={15} className="py-5">
        {(posts.length > 0 ? posts : Array.from({ length: 3 })).map(
          (post, index) => (
            <PostCard key={index} />
          )
        )}
      </Flex>
    </div>
  );
}

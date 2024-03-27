import { Avatar, Button, Col, Flex, Input, Row, Space } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const FollowerCard = (user) => {
  return (
    <Col span={12}>
      <Flex
        align="center"
        className="bg-background w-full p-2 rounded-md gap-x-3 "
      >
        <Flex align="center">
          <Link to={`/userid`}>
            <Avatar
              alt="ava-follower"
              src={require("assets/images/banner_fanpage.png")}
              size={50}
              className=" rounded-md"
            />
          </Link>
          <Link to={`/userid`} className="hover:underline">
            <span className="ml-2">Tên là gì ? </span>
          </Link>
        </Flex>
        <Button className="ml-auto">...</Button>
      </Flex>
    </Col>
  );
};
export default function Followers() {
  const [followers, setFollowers] = useState([]);
  const [user, setUser] = useState({}); // fetch user
  const [isShowFollowers, setIsShowFollowers] = useState(false);

  return (
    <div className="my-5 bg-secondary py-3 px-4">
      <Flex id="header" justify="space-between" align="center">
        <span className="text-xl font-bold">Người theo dõi</span>
        <Input.Search
          placeholder="Tìm kiếm người theo dõi"
          className="ml-auto w-[20%]"
        />
      </Flex>

      {!isShowFollowers || followers.length === 0 ? (
        <div className="mt-10">
          <span className="font-bold text-3xl italic">
            Danh sách người theo dõi của Cộng Đồng CrossTech hiện không hiển
            thị.
          </span>
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {(followers.length > 0 ? followers : Array.from({ length: 6 })).map(
            (follower, i) => (
              <FollowerCard key={i} {...follower} />
            )
          )}
        </Row>
      )}
    </div>
  );
}

import { Button, Flex } from "antd";

export default function ActionButtonsHeader({ isMember }) {
  return (
    <>
      {!isMember ? (
        <Flex className="text-black ml-auto" gap={5}>
          <Button type="primary" className={`bg-primary`}>
            Thích
          </Button>
          <Button type="primary" className={`bg-primary`}>
            Nhắn tin
          </Button>
          <Button type="primary" className={`bg-primary`}>
            Tìm kiếm
          </Button>
        </Flex>
      ) : (
        <Flex className="text-black ml-auto" gap={5}>
          <Button type="primary" className={`bg-primary`}>
            Quảng cáo
          </Button>
          <Button type="primary" className={`bg-primary`}>
            Quản lý
          </Button>
          <Button type="primary" className={`bg-primary`}>
            Chỉnh sửa
          </Button>
        </Flex>
      )}
    </>
  );
}

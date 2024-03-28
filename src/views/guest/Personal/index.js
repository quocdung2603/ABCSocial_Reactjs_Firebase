import { useContext } from "react";
import {
    StepBackwardOutlined,
    GlobalOutlined,
    CaretRightOutlined,
    MenuOutlined,
    CameraOutlined,
    UserOutlined,
    SettingOutlined,
    DownOutlined
} from '@ant-design/icons';
import { Space, Button, Flex, Avatar } from 'antd';

const index = () => {
    return (
        <div className="border-[5px] border-black">
            <div className="mx-[200px] h-[400px] border-[2px] border-blue relative">
                <div className=" absolute bottom-4 right-5">
                    <Button className=" flex items-center rounded-[20px]">
                        <CameraOutlined />
                        <p className="font-[600]">
                            Thêm ảnh đại diện
                        </p>
                    </Button>
                </div>
            </div>

            <div>
                <div // khung ảnh khung tên
                    className="border-[2px] mx-[250px] border-black h-[200px] flex"
                >
                    <div className="w-1/4">
                        <Avatar size={200} icon={<UserOutlined />} />
                    </div>
                    <div className="w-[700px] flex flex-col mt-[40px]">
                        <test>Tài sống lỏ</test>
                        <text>số bạn bè 301</text>
                        <div className="border-[1px] border-black w-[150px]">
                            <text> 1 số bạn bè của trang cá nhân người dùng</text>
                        </div>
                    </div>
                    <div className=" w-[200px] mt-[70px]">
                        <Button className=" flex items-center rounded-[20px]" type="primary">
                            <SettingOutlined />
                            <p className="font-[600]">
                                <text className="text-black">
                                    Chỉnh sửa trang cá nhân
                                </text>
                            </p>
                        </Button>

                        <Button shape="round" icon={<DownOutlined />} size={30} className="flex items-center ml-[80px]" />


                    </div>
                </div>

            </div>
        </div>
    )
}

export default index;
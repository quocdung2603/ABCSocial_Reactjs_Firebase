import { useContext, useState } from "react";
import {
    StepBackwardOutlined,
    GlobalOutlined,
    CaretRightOutlined,
    MenuOutlined,
    PlusOutlined,
    ShareAltOutlined,
    UserOutlined,
    DownOutlined,
    UpOutlined,
    SearchOutlined,
    EllipsisOutlined,
    VideoCameraOutlined,
    FileImageOutlined,
    BarChartOutlined,
    EyeOutlined,
    UserAddOutlined,
    CheckOutlined,
    TableOutlined,
    CloseOutlined,
} from '@ant-design/icons';
import { IoLockClosedSharp } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { Space, Modal, Alert, Checkbox, Dropdown, Button } from 'antd';
const Index = () => {
    // su dung lam dong mo Leftmenu ở button MenuOutlined
    const [LeftMenu, setLeftMenu] = useState(1)

    //tabbar
    const [Thaoluan, setThaoluan] = useState(1)
    const [Dangchuy, setDangchuy] = useState(0)
    const [Moinguoi, setMoinguoi] = useState(0)
    const [Sukien, setSukien] = useState(0)
    const [Filephuongtien, setFilephuongtien] = useState(0)
    const [File, setFile] = useState(0)

    //tabbar child File phuong tien: 
    const [ChildTabFilePT, setChildTabFilePT] = useState(1);

    //Modal 
    const [Invitep, setInvitep] = useState(0);

    // handle 
    const handleInvitePerson = () => {
        // hàm xử lý mời người khác vào nhóm 
        console.log('them thanh cong');
    }
    //dropdown button của chức năng chia sẻ 
    const dbShare = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <div className="flex items-center">
                        <CloseOutlined /> 
                        <p className="ms-[10px]">Chia sẻ lên Bảng Feed</p>
                    </div>
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <div className="flex items-center">
                        <CloseOutlined /> 
                        <p className="ms-[10px]">Chia sẻ lên Messenger</p>
                    </div>
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <div className="flex items-center">
                        <CloseOutlined /> 
                        <p className="ms-[10px]">Chia sẻ lên WhatsApp</p>
                    </div>
                </a>
            ),
        },
        {
            key: '4',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <div className="flex items-center">
                        <CloseOutlined /> 
                        <p className="ms-[10px]">Chia sẻ lên nhóm</p>
                    </div>
                </a>
            ),
        },
        {
            key: '5',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <div className="flex items-center">
                        <CloseOutlined /> 
                        <p className="ms-[10px]">Chia sẻ lên trang cá nhân bạn bè</p>
                    </div>
                </a>
            ),
        },
        {
            key: '6',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <div className="flex items-center">
                        <CloseOutlined /> 
                        <p className="ms-[10px]">Sao chép liên kết</p>
                    </div>
                </a>
            ),
        },
    ];

    //dropdown button của nút đã tham gia
    const dbJoined = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <div className="flex items-center">
                        <CloseOutlined /> 
                        <p className="ms-[10px]">Quản lý thông báo</p>
                    </div>
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <div className="flex items-center">
                        <CloseOutlined /> 
                        <p className="ms-[10px]">Bỏ theo dõi nhóm</p>
                    </div>
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <div className="flex items-center">
                        <CloseOutlined /> 
                        <p className="ms-[10px]">Rời nhóm</p>
                    </div>
                </a>
            ),
        },
    ];
    
    // button của các nhóm khác
    const [Othergroup, setOthergroup] = useState(0);
    return (
        <div className="flex ">
            {/* trái */}
            <div className="flex-col border-2 w-1/4">
                <div className="flex w-full items-center">
                    <div className="w-[60px] h-[60px] bg-black rounded-[10px]">
                        {/* ảnh thu nhỏ của nhóm */}
                    </div>
                    <div className="flex-col ml-[8px] me-auto ms-[10px]">
                        <p className="text-[20px] font-bold">Dev ơi mình đi đâu thía?</p>
                        <div className="flex items-center ">
                            <GlobalOutlined style={{ fontSize: 15 }} />
                            <p className="ml-[3px] text-[15px]">Công khai</p>
                            <CaretRightOutlined style={{ fontSize: 15 }} />
                            <p className="ml-[3px] text-[15px]">117.7k thành viên</p>
                        </div>
                    </div>
                    <MenuOutlined onClick={() => { setLeftMenu(!LeftMenu) }} style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 'auto', marginRight: 10, borderWidth: 1, borderRadius: 10, padding: 5 }} />
                </div>
                <div className="ms-[10px] mt-[40px] font-bold">
                    <p>Các đoạn chat trong nhóm này</p>
                </div>
                <div className="flex-col ms-[10px] mt-[10px]">
                    {/* mau 1 */}
                    <div className="flex items-center mx-[10px] my-[5px]">
                        <div className="w-[50px] h-[50px] bg-black rounded-[10px]">
                            {/* ảnh thu nhỏ của nhóm */}
                        </div>
                        <div className="flex-col ms-[10px]">
                            <p className="text-[15px] font-bold">Nhom chat 1</p>
                            <p className="text-[13px]">Nhấp để tham gia</p>
                        </div>
                    </div>
                    {/* mau 2 */}
                    <div className="flex items-center mx-[10px] my-[5px]">
                        <div className="w-[50px] h-[50px] bg-black rounded-[10px]">
                            {/* ảnh thu nhỏ của nhóm */}
                        </div>
                        <div className="flex-col ms-[10px]">
                            <p className="text-[15px] font-bold">Nhom chat 1</p>
                            <p className="text-[13px]">Nhấp để tham gia</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* phải */}
            <div className="flex-col border-2 w-3/4">
                <div className="flex-col">
                    <div className="w-full bg-[yellow] h-[300px]">
                        {/* ảnh bìa của group */}
                    </div>
                    {/* nut bam dan qua trang cua group */}
                    <button className="flex w-full bg-[orange] p-[10px] rounded-b-[10px]">
                        <p>Theo dõi trang của Dev oi minh di dau thia ?</p>
                    </button>
                </div>
                <p className="m-[10px] mt-[20px] mx-[30px] text-[25px] font-bold">Dev oi minh di dau thia ?</p>
                <div className="flex items-center mx-[30px]">
                    <GlobalOutlined style={{ fontSize: 15 }} />
                    <p className="ml-[3px] text-[15px]">Công khai</p>
                    <CaretRightOutlined style={{ fontSize: 15 }} />
                    <p className="ml-[3px] text-[15px]">117.7k thành viên</p>
                </div>
                <div className="flex m-[10px] mx-[30px]">
                    <div className="flex items-center w-2/4 border-2">
                        <p>ABC</p>
                    </div>
                    <div className="flex items-center w-2/4 border-2">
                        <button
                            onClick={() => { setInvitep(1); }}
                            className="flex items-center border-[1px] border-[#000] px-[10px] py-[3px] rounded-[5px] ms-auto ">
                            <PlusOutlined />
                            <p className="ms-[5px] text-[16px]">Mời</p>
                        </button>
                        <Modal title="Mời người dùng khác vào nhóm" open={Invitep} onCancel={() => { setInvitep(0) }} onOk={handleInvitePerson()}>
                            <div className="flex-col m-[10px] items-center">
                                <div className="flex m-[10px] items-center border-[1px] rounded-[10px] py-[5px] ">
                                    <SearchOutlined className="text-[18px] ms-[10px]" />
                                    <input type="text" placeholder="Tìm kiếm thành viên nhóm" className="ms-[10px] w-full" />
                                </div>
                                <div className="flex m-[10px]">
                                    {/* trái */}
                                    <div className="flex-col w-3/5 border-[1px] rounded-[10px] me-[5px]">
                                        <p className="text-[16px] font-bold">Gợi ý</p>
                                        <div className="flex m-[10px] items-center">
                                            <div className="w-[30px] h-[30px] bg-[#000] rounded-[15px]">
                                                {/* ảnh đại diện */}
                                            </div>
                                            <p className="text-[14px] font-bold ms-[8px]">Nguyen Quoc Dung</p>
                                            <Checkbox className="ms-auto" ></Checkbox>
                                        </div>
                                        <div className="flex m-[10px] items-center">
                                            <div className="w-[30px] h-[30px] bg-[#000] rounded-[15px]">
                                                {/* ảnh đại diện */}
                                            </div>
                                            <p className="text-[14px] font-bold ms-[8px]">Le Tuan Kiet</p>
                                            <Checkbox className="ms-auto" checked></Checkbox>
                                        </div>
                                    </div>
                                    {/* phải */}
                                    <div className="flex-col w-2/5">
                                        <p className="text-[13px]">Đã chọn 1 người bạn</p>
                                        <div className="flex m-[10px] items-center">
                                            <div className="w-[20px] h-[20px] bg-[#000] rounded-[10px]">
                                                {/* ảnh đại diện */}
                                            </div>
                                            <p className="text-[10px] font-bold ms-[5px]">Nguyen Quoc Dung</p>
                                            <CloseOutlined className="ms-auto" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="m-[10px]" />
                                <p>Bạn bè của bạn cần được quản trị viên hoặc người kiểm duyệt phê duyệt trước khi được thêm vào nhóm.</p>
                            </div>
                        </Modal>
                        <Dropdown
                            className="flex items-center border-[1px] border-[#000] px-[10px] py-[3px] rounded-[5px] ms-auto"
                            menu={{ items: dbShare, }}
                            placement="bottom" >
                            <Button className="flex items-center ">
                                <ShareAltOutlined /> 
                                <p className="ms-[5px] text-[16px]">Chia sẻ</p>
                            </Button>
                        </Dropdown>
                        <Dropdown
                            className="flex items-center border-[1px] border-[#000] px-[10px] py-[3px] rounded-[5px] ms-auto"
                            menu={{ items: dbJoined, }}  
                            placement="bottom" >
                            <Button className="flex items-center ">
                                <UserOutlined />
                                <p className="ms-[5px] text-[16px]">Đã tham gia</p>
                            </Button>
                        </Dropdown>
                        <button 
                            onClick={() => {Othergroup === 1 ? setOthergroup(0) : setOthergroup(1)}} className="flex items-center border-[1px] border-[#000] px-[10px] py-[3px] rounded-[5px] ms-auto ">
                            <p className="me-[5px] text-[16px]">Nhóm liên quan</p>
                            {Othergroup === 1 ? <UpOutlined /> : <DownOutlined />}
                        </button>
                    </div>
                </div>
                {Othergroup === 1 ? (
                    <div className="flex-col m-[10px] mx-[30px]">
                        <p className="text-[16px] font-bold">Khám phá các nhóm khác</p>
                        <div className="flex items-center m-[10px] mx-[10px]">
                            <div className="flex-rol border-[1px] border-[#000] rounded-[10px] w-[200px]">
                                <div className="w-full h-[80px] bg-[yellow] rounded-[10px]">
                                    {/* ảnh của nhóm khác */}
                                </div>
                                <p className="text-[15px] font-bold my-[5px] ms-[5px]">Muốn biết phải học ? </p>
                                <div className="flex items-center my-[5px] ms-[5px]">
                                    <p className="text-[11px]">317k thành viên</p>  
                                    <BsDot />   
                                    <p className="text-[11px]">Hơn 10 bài viết/ngày</p>
                                </div>
                                <div className="flex items-center my-[5px] ms-[5px]">
                                    <IoLockClosedSharp />
                                    <p className="text-[12px] ms-[5px]">Nhóm riêng tư</p>
                                </div>
                                <div className="mx-[20px] my-[10px] border-[1px] rounded-[10px] p-[3px]">
                                    <p className="text-center">Tham gia nhóm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ""}
                <hr className="m-[10px]" />
                <div className="flex m-[10px] mx-[30px] border-4 py-[3px]">
                    <div className="flex items-center m-[10] w-3/4 border-2">
                        <button onClick={() => { setThaoluan(1); setDangchuy(0); setMoinguoi(0); setSukien(0); setFilephuongtien(0); setFile(0) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: Thaoluan === 1 ? "#0866FF" : "#000", borderBottomWidth: Thaoluan === 1 ? 2 : 0, borderColor: Thaoluan === 1 ? "#0866FF" : "#fff" }}>Thảo luận</button>
                        <button onClick={() => { setThaoluan(0); setDangchuy(1); setMoinguoi(0); setSukien(0); setFilephuongtien(0); setFile(0) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: Dangchuy === 1 ? "#0866FF" : "#000", borderBottomWidth: Dangchuy === 1 ? 2 : 0, borderColor: Dangchuy === 1 ? "#0866FF" : "#fff" }}>Đáng chú ý</button>
                        <button onClick={() => { setThaoluan(0); setDangchuy(0); setMoinguoi(1); setSukien(0); setFilephuongtien(0); setFile(0) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: Moinguoi === 1 ? "#0866FF" : "#000", borderBottomWidth: Moinguoi === 1 ? 2 : 0, borderColor: Moinguoi === 1 ? "#0866FF" : "#fff" }}>Mọi người</button>
                        <button onClick={() => { setThaoluan(0); setDangchuy(0); setMoinguoi(0); setSukien(1); setFilephuongtien(0); setFile(0) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: Sukien === 1 ? "#0866FF" : "#000", borderBottomWidth: Sukien === 1 ? 2 : 0, borderColor: Sukien === 1 ? "#0866FF" : "#fff" }}>Sự kiện</button>
                        <button onClick={() => { setThaoluan(0); setDangchuy(0); setMoinguoi(0); setSukien(0); setFilephuongtien(1); setFile(0) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: Filephuongtien === 1 ? "#0866FF" : "#000", borderBottomWidth: Filephuongtien === 1 ? 2 : 0, borderColor: Filephuongtien === 1 ? "#0866FF" : "#fff" }}>File phương tiện</button>
                        <button onClick={() => { setThaoluan(0); setDangchuy(0); setMoinguoi(0); setSukien(0); setFilephuongtien(0); setFile(1) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: File === 1 ? "#0866FF" : "#000", borderBottomWidth: File === 1 ? 2 : 0, borderColor: File === 1 ? "#0866FF" : "#fff" }}>File</button>
                    </div>
                    <div className="flex m-[10] w-1/4 border-2">
                        <div className="ms-auto">
                            <SearchOutlined className="text-[20px] border-[1px] p-[10px] mr-[10px]" />
                            <EllipsisOutlined className="text-[20px] border-[1px] p-[10px]" />
                        </div>
                    </div>
                </div>
                {Thaoluan === 1 ? (
                    <div className="flex mx-[30px]">
                        {/* trai */}
                        <div className="flex-col m-[10px] w-3/5 border-[1px]">
                            <div className="flex-col m-[10px] border-2">
                                <div className="flex items-center">
                                    <div className="w-[50px] h-[50px] bg-[#000] rounded-[30px]">
                                        {/* ảnh đại diện thu nhỏ */}
                                    </div>
                                    <div className="w-full border-[1px] rounded-[10px] ms-[10px] me-[10px] py-[5px]">
                                        <p className="ms-[10px]">Bạn đang nghĩ gì ? </p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="flex items-center m-[10px]">
                                    <div className="flex items-center border-[1px] border-[#000] px-[10px] py-[3px] rounded-[5px] me-auto">
                                        <VideoCameraOutlined />
                                        <p className="ms-[5px] text-[16px]">Thước phim</p>
                                    </div>
                                    <div className="flex items-center border-[1px] border-[#000] px-[10px] py-[3px] rounded-[5px]">
                                        <FileImageOutlined />
                                        <p className="ms-[5px] text-[16px]">Ảnh/Video</p>
                                    </div>
                                    <div className="flex items-center border-[1px] border-[#000] px-[10px] py-[3px] rounded-[5px] ms-auto">
                                        <BarChartOutlined />
                                        <p className="ms-[5px] text-[16px]">Thăm dò ý kiến</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* phai */}
                        <div className="flex-col m-[10px] w-2/5 border-[1px]">
                            <div className="flex-col, m-[10px] border-[1px] rounded-[10px]">
                                <div className="flex-col m-[10px]">
                                    <p className="text-[17px] font-bold">Giới Thiệu</p>
                                    <p className="px-[10px]">Group Chính Thức của Tiểu Yêu Tầm Đạo FunTap...</p>
                                </div>
                                <div className="flex-col m-[10px]">
                                    <div className="flex items-center">
                                        <IoLockClosedSharp className="text-[17px] font-bold" />
                                        <p className="text-[17px] font-bold ms-[5px]">Riêng tư</p>
                                    </div>
                                    <p className="px-[10px]">Group Chính Thức của Tiểu Yêu Tầm Đạo FunTap...</p>
                                </div>
                                <div className="flex-col m-[10px]">
                                    <div className="flex items-center">
                                        <EyeOutlined className="text-[17px] font-bold" />
                                        <p className="text-[17px] font-bold ms-[5px]">Hiển thị</p>
                                    </div>
                                    <p className="px-[10px]">Group Chính Thức của Tiểu Yêu Tầm Đạo FunTap...</p>
                                </div>
                                <button className="border-[1px] rounded-[10px] mx-[80px] my-[10px] py-[5px]">
                                    <p className="text-center">Xem Chi Tiết</p>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : ""}
                {Dangchuy === 1 ? (
                    <div className="flex mx-[30px]">
                        {/* trai */}
                        <div className="flex-col m-[10px] w-3/5 border-[1px]">
                            {/* cac bai viet */}
                        </div>
                        {/* phai */}
                        <div className="flex-col m-[10px] w-2/5 border-[1px]">
                            <div className="flex-col, m-[10px] border-[1px] rounded-[10px]">
                                <div className="flex-col m-[10px]">
                                    <p className="text-[17px] font-bold">Giới Thiệu</p>
                                    <p className="px-[10px]">Group Chính Thức của Tiểu Yêu Tầm Đạo FunTap...</p>
                                </div>
                                <div className="flex-col m-[10px]">
                                    <div className="flex items-center">
                                        <IoLockClosedSharp className="text-[17px] font-bold" />
                                        <p className="text-[17px] font-bold ms-[5px]">Riêng tư</p>
                                    </div>
                                    <p className="px-[10px]">Group Chính Thức của Tiểu Yêu Tầm Đạo FunTap...</p>
                                </div>
                                <div className="flex-col m-[10px]">
                                    <div className="flex items-center">
                                        <EyeOutlined className="text-[17px] font-bold" />
                                        <p className="text-[17px] font-bold ms-[5px]">Hiển thị</p>
                                    </div>
                                    <p className="px-[10px]">Group Chính Thức của Tiểu Yêu Tầm Đạo FunTap...</p>
                                </div>
                                <button className="border-[1px] rounded-[10px] mx-[80px] my-[10px] py-[5px]">
                                    <p className="text-center">Xem Chi Tiết</p>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : ""}
                {Moinguoi === 1 ? (
                    <div className="flex-col mx-[150px] my-[10px] border-[1px] rounded-[10px]">
                        <div className="flex m-[10px]">
                            <p className="text-[16px] font-bold">Thành viên:</p>
                            <p className="text-[16px] ms-[10px]">31.725</p>
                        </div>
                        <div className="flex m-[10px] items-center border-[1px] rounded-[10px] py-[5px] ">
                            <SearchOutlined className="text-[18px] ms-[10px]" />
                            <input type="text" placeholder="Tìm kiếm thành viên nhóm" className="ms-[10px] w-full" />
                        </div>
                        <hr className="m-[10px]" />
                        <div className="flex m-[10px] items-center">
                            <div className="w-[50px] h-[50px] bg-[#000] rounded-[25px]">
                                {/* anh dai dien */}
                            </div>
                            <p className="text-[16px] font-bold ms-[10px]">Nguyen Quoc Dung</p>
                        </div>
                        <hr className="m-[10px]" />
                        <div className="flex m-[10px]">
                            <p className="text-[16px] font-bold">Quản trị viên & người kiểm duyệt:</p>
                            <p className="text-[16px] ms-[10px]">4</p>
                        </div>
                        {/* list quản trị viên và người kiểm duyệt */}
                        <div className="flex m-[10px] items-center">
                            <div className="w-[50px] h-[50px] bg-[#000] rounded-[25px]">
                                {/* anh dai dien */}
                            </div>
                            <p className="text-[16px] font-bold ms-[10px]">Nguyen Quoc Dung</p>
                        </div>
                        <div className="flex m-[10px] items-center">
                            <div className="w-[50px] h-[50px] bg-[#000] rounded-[25px]">
                                {/* anh dai dien */}
                            </div>
                            <p className="text-[16px] font-bold ms-[10px]">Nguyen Van Minh</p>
                            <div className="flex item-center border-[1px] rounded-[10px] px-[5px] py-[3px] ms-auto">
                                <CheckOutlined className="text-[17px]" />
                                <p className="ms-[5px] text-[15px] ">bạn bè</p>
                            </div>
                        </div>
                        <div className="flex m-[10px] items-center">
                            <div className="w-[50px] h-[50px] bg-[#000] rounded-[25px]">
                                {/* anh dai dien */}
                            </div>
                            <p className="text-[16px] font-bold ms-[10px]">Nguyen Minh Thang</p>
                            <div className="flex item-center border-[1px] rounded-[10px] px-[5px] py-[3px] ms-auto">
                                <UserAddOutlined className="text-[17px]" />
                                <p className="ms-[5px] text-[15px] ">Thêm bạn bè</p>
                            </div>
                        </div>
                        <div className="my-[10px] mx-[20px] py-[5px] border-[1px] rounded-[10px] bg-[#c1c4bf]">
                            <p className="text-center">Xem tất cả</p>
                        </div>
                        <hr className="m-[10px]" />
                        <div className="flex m-[10px]">
                            <p className="text-[16px] font-bold">Các thành viên khác:</p>
                            <p className="text-[16px] ms-[10px]">31.123</p>
                        </div>
                        <div className="flex m-[10px] items-center">
                            <div className="w-[50px] h-[50px] bg-[#000] rounded-[25px]">
                                {/* anh dai dien */}
                            </div>
                            <p className="text-[16px] font-bold ms-[10px]">Nguyen Tan Tai</p>
                        </div>
                        <div className="my-[10px] mx-[20px] py-[5px] border-[1px] rounded-[10px] bg-[#c1c4bf]">
                            <p className="text-center">Xem tất cả</p>
                        </div>
                    </div>
                ) : ""}
                {/* tab su kien */}
                {Sukien === 1 ? (
                    <div className="flex-col mx-[150px] my-[10px]">
                        <div className="flex-col border-[1px] rounded-[10px] p-[5px] my-[10px]">
                            <div className="flex m-[10px] items-center">
                                <p className="text-[18px] font-bold me-auto">Sự kiến sắp diễn ra</p>
                                <div className="ms-auto flex">
                                    <div className="border-[1px] rounded-[10px] px-[5px] py-[3px] me-[10px]">
                                        <p>Tìm sự kiện</p>
                                    </div>
                                    <div className="border-[1px] rounded-[10px] px-[5px] py-[3px]">
                                        <p>Tạo sự kiện</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col m-[10]">
                                <div className="text-center">
                                    <TableOutlined className="text-[150px] " />
                                </div>
                                <p className="text-center ">Không có sự kiện nào sắp diễn ra ... </p>
                            </div>
                        </div>
                        <div className="flex-col border-[1px] rounded-[10px] p-[5px] my-[10px]">
                            <p className="m-[10px] text-[18px] font-bold me-auto">Sự kiến sắp diễn ra</p>
                            <div className="flex items-center m-[10px] border-[1px] rounded-[10px]">
                                <div className="w-[130px] h-[150px] bg-[#000] rounded-[10px]">
                                    {/* hình ảnh của sự kiện */}
                                </div>
                                <div className="flex-col ms-[10px]">
                                    <p className="my-[5px] text-[15px] font-bold text-[red]">T6, 29 Tháng 3</p>
                                    <p className="my-[5px] text-[20px] font-bold">TẶNG HẾT GIFTCODE CUỐI THÁNG</p>
                                    <div className="my-[5px] flex items-center">
                                        <div className="w-[40px] h-[40px] rounded-[20px] bg-[#000]">
                                            {/* ảnh đại diện người đăng */}
                                        </div>
                                        <p className="ms-[10px] text-[15px]">Nguời chia sẻ:</p>
                                        <p className="ms-[10px] text-[16px]">Tiểu Yêu Tầm Đạo - Funtap</p>
                                    </div>
                                    <EllipsisOutlined className="my-[5px] py-[5px] px-[10px] border-[1px] rounded-[10px] text-[18px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ""}
                {Filephuongtien === 1 ? (
                    <div className="flex-col mx-[30px] m-[10px] border-[1px] rounded-[10px] p-[5px]">
                        <div className="flex m-[10px] items-center">
                            <p className="text-[18px] font-bold me-auto">File phương tiện</p>
                            <div className="ms-auto flex">
                                <div className="flex border-[1px] rounded-[10px] px-[5px] py-[3px] me-[10px]">
                                    <PlusOutlined />
                                    <p>Tạo album</p>
                                </div>
                                <div className="border-[1px] rounded-[10px] px-[5px] py-[3px]">
                                    <p>Thêm ảnh/video</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button onClick={() => { setChildTabFilePT(1) }} className="mx-[10px] text-[16px] p-[5px] font-bold"
                                style={{ color: ChildTabFilePT === 1 ? "#0866FF" : "#000", borderBottomWidth: ChildTabFilePT === 1 ? 2 : 0, borderColor: ChildTabFilePT === 1 ? "#0866FF" : "#000" }}>Ảnh</button>
                            <button onClick={() => { setChildTabFilePT(2) }} className="mx-[10px] text-[16px] p-[5px] font-bold"
                                style={{ color: ChildTabFilePT === 2 ? "#0866FF" : "#000", borderBottomWidth: ChildTabFilePT === 2 ? 2 : 0, borderColor: ChildTabFilePT === 2 ? "#0866FF" : "#000" }}>Video</button>
                            <button onClick={() => { setChildTabFilePT(3) }} className="mx-[10px] text-[16px] p-[5px] font-bold"
                                style={{ color: ChildTabFilePT === 3 ? "#0866FF" : "#000", borderBottomWidth: ChildTabFilePT === 3 ? 2 : 0, borderColor: ChildTabFilePT === 3 ? "#0866FF" : "#000" }}>Album</button>
                        </div>
                        {ChildTabFilePT === 1 ? (
                            <div className="m-[10px] bg-[yellow]">
                                <p>abc</p>
                            </div>
                        ) : ChildTabFilePT === 2 ? (
                            <div className="m-[10px] bg-[red]">
                                <p>def</p>
                            </div>
                        ) : ChildTabFilePT === 3 ? (
                            <div className="m-[10px] bg-[violet]">
                                <p>ghi</p>
                            </div>
                        ) : ""}
                    </div>
                ) : ""}
                {File === 1 ? (
                    <div className="flex-col bg-[white] mx-[30px] my-[10px] border-[1px] rounded-[10px] p-[5px]">
                        <div className="flex m-[10px] items-center">
                            <p className="text-[18px] font-bold me-auto">File</p>
                            <div className="ms-auto flex">
                                <div className="flex border-[1px] rounded-[10px] px-[5px] py-[3px] me-[10px]">
                                    <SearchOutlined />
                                    <input type="text" className="w-full" placeholder="Tìm kiếm file" />
                                </div>
                                <div className="border-[1px] rounded-[10px] px-[5px] py-[3px]">
                                    <p>Tải file lên</p>
                                </div>
                            </div>
                        </div>
                        <hr className="m-[10px]" />
                        <div className="flex items-center m-[10px]">
                            <div className="border-[1px] rounded-[10px] py-[5px] w-2/5 me-auto">
                                <p className="text-center text-[16px] font-bold">Tên file</p>
                            </div>
                            <div className="border-[1px] rounded-[10px] py-[5px] w-1/5 mx-[10px]">
                                <p className="text-center text-[16px] font-bold">Loại</p>
                            </div>
                            <div className="border-[1px] rounded-[10px] py-[5px] w-2/5 ms-auto">
                                <p className="text-center text-[16px] font-bold">Lần sửa đổi gần đây nhất</p>
                            </div>
                        </div>
                    </div>
                ) : ""}
            </div>
        </div>
    )
}

export default Index;
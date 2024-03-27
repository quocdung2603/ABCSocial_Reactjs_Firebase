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
    SearchOutlined,
    DashOutlined
} from '@ant-design/icons';
import { Space } from 'antd';

const Index = () => {
    const [LeftMenu, setLeftMenu] = useState(1) // su dung lam dong mo Leftmenu ở button MenuOutlined

    //tabbar
    const [Thaoluan, setThaoluan] = useState(1)
    const [Huongdan, setHuongdan] = useState(0)
    const [Dangchuy, setDangchuy] = useState(0)
    const [Moinguoi, setMoinguoi] = useState(0)
    const [Sukien, setSukien] = useState(0)
    const [Filephuongtien, setFilephuongtien] = useState(0)
    const [File, setFile] = useState(0)
    return (
        <div className="flex w-full">
            <div className="flex-col border-2 w-1/4 h-full">
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
                    <MenuOutlined style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 'auto', marginRight: 10, borderWidth: 1, borderRadius: 10, padding: 5 }} />
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
            <div className="flex-col border-2 flex-7 w-3/4 h-full">
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
                        <div className="flex items-center border-[1px] border-[#000] px-[10px] py-[3px] rounded-[5px] ms-auto ">
                            <PlusOutlined />
                            <p className="ms-[5px] text-[16px]">Mời</p>
                        </div>
                        <div className="flex items-center border-[1px] border-[#000] px-[10px] py-[3px] rounded-[5px] ms-auto ">
                            <ShareAltOutlined />
                            <p className="ms-[5px] text-[16px]">Chia sẻ</p>
                        </div>
                        <div className="flex items-center border-[1px] border-[#000] px-[10px] py-[3px] rounded-[5px] ms-auto  ">
                            <UserOutlined />
                            <p className="ms-[5px] text-[16px]">Đã tham gia</p>
                        </div>
                        <div className="flex items-center border-[1px] border-[#000] px-[10px] py-[3px] rounded-[5px] ms-auto ">
                            <DownOutlined />
                            <p className="ms-[5px] text-[16px]">Nhóm liên quan</p>
                        </div>
                    </div>
                </div>
                <div className="flex m-[10px] mx-[30px] border-4 py-[3px]">
                    <div className="flex items-center m-[10] w-3/4 border-2">
                        <button onClick={() => { setThaoluan(1); setHuongdan(0); setDangchuy(0); setMoinguoi(0); setSukien(0); setFilephuongtien(0); setFile(0) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: Thaoluan === 1 ? "#0866FF" : "#000", borderBottomWidth: Thaoluan === 1 ? 2 : 0, borderColor: Thaoluan === 1 ? "#0866FF" : "#fff" }}>Thảo luận</button>
                        <button onClick={() => { setThaoluan(0); setHuongdan(1); setDangchuy(0); setMoinguoi(0); setSukien(0); setFilephuongtien(0); setFile(0) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: Huongdan === 1 ? "#0866FF" : "#000", borderBottomWidth: Huongdan === 1 ? 2 : 0, borderColor: Huongdan === 1 ? "#0866FF" : "#fff" }}>Hướng dẫn</button>
                        <button onClick={() => { setThaoluan(0); setHuongdan(0); setDangchuy(1); setMoinguoi(0); setSukien(0); setFilephuongtien(0); setFile(0) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: Dangchuy === 1 ? "#0866FF" : "#000", borderBottomWidth: Dangchuy === 1 ? 2 : 0, borderColor: Dangchuy === 1 ? "#0866FF" : "#fff" }}>Đáng chú ý</button>
                        <button onClick={() => { setThaoluan(0); setHuongdan(0); setDangchuy(0); setMoinguoi(1); setSukien(0); setFilephuongtien(0); setFile(0) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: Moinguoi === 1 ? "#0866FF" : "#000", borderBottomWidth: Moinguoi === 1 ? 2 : 0, borderColor: Moinguoi === 1 ? "#0866FF" : "#fff" }}>Mọi người</button>
                        <button onClick={() => { setThaoluan(0); setHuongdan(0); setDangchuy(0); setMoinguoi(0); setSukien(1); setFilephuongtien(0); setFile(0) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: Sukien === 1 ? "#0866FF" : "#000", borderBottomWidth: Sukien === 1 ? 2 : 0, borderColor: Sukien === 1 ? "#0866FF" : "#fff" }}>Sự kiện</button>
                        <button onClick={() => { setThaoluan(0); setHuongdan(0); setDangchuy(0); setMoinguoi(0); setSukien(0); setFilephuongtien(1); setFile(0) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: Filephuongtien === 1 ? "#0866FF" : "#000", borderBottomWidth: Filephuongtien === 1 ? 2 : 0, borderColor: Filephuongtien === 1 ? "#0866FF" : "#fff" }}>File phương tiện</button>
                        <button onClick={() => { setThaoluan(0); setHuongdan(0); setDangchuy(0); setMoinguoi(0); setSukien(0); setFilephuongtien(0); setFile(1) }}
                            className="mx-[10px] text-[16px] p-[5px] font-bold"
                            style={{ color: File === 1 ? "#0866FF" : "#000", borderBottomWidth: File === 1 ? 2 : 0, borderColor: File === 1 ? "#0866FF" : "#fff" }}>File</button>
                    </div>
                    <div className="flex m-[10] w-1/4 border-2 items-center">
                        <div className="ms-auto">
                            <SearchOutlined/>
                        </div>
                        <div className="ms-auto">
                            <DashOutlined />
                        </div>
                    </div>
                </div>
                {Thaoluan === 1 ? (
                    <div className="flex-col w-full bg-[red]">
                        <p>abc</p>
                    </div>
                ) : ""}
                {Huongdan === 1 ? (
                    <div className="flex-col w-full bg-[yellow]">
                        <p>abc</p>
                    </div>
                ) : ""}
                {Dangchuy === 1 ? (
                    <div className="flex-col w-full bg-[green]">
                        <p>abc</p>
                    </div>
                ) : ""}
                {Moinguoi === 1 ? (
                    <div className="flex-col w-full bg-[violet]">
                        <p>abc</p>
                    </div>
                ) : ""}
                {Sukien === 1 ? (
                    <div className="flex-col w-full bg-[blue]">
                        <p>abc</p>
                    </div>
                ) : ""}
                {Filephuongtien === 1 ? (
                    <div className="flex-col w-full bg-[brown]">
                        <p>abc</p>
                    </div>
                ) : ""}
                {File === 1 ? (
                    <div className="flex-col w-full bg-[white]">
                        <p>abc</p>
                    </div>
                ) : ""}
            </div>
        </div>
    )
}

export default Index;
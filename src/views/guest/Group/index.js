import { useContext } from "react";
import {
    StepBackwardOutlined,
    GlobalOutlined,
    CaretRightOutlined,
    MenuOutlined
} from '@ant-design/icons';
import { Space } from 'antd';

const Index = () => {
    return (
        <div className="flex bg-primary w-full"> 
            <div className="flex-col border-2 w-1/4 h-full">
                <div className="flex w-full items-center">
                    <div className="w-[100px] h-[100px] bg-black rounded-[10px]">
                        {/* ảnh thu nhỏ của nhóm */}
                    </div>
                    <div className="flex-col ml-[8px] me-auto ms-[10px]">
                        <p className="text-[30px] font-bold">Dev ơi mình đi đâu thía?</p>
                        <div className="flex items-center ">
                            <GlobalOutlined style={{fontSize:28}}/> 
                            <p className="ml-[3px] text-[25px]">Nhóm công khai</p>
                            <CaretRightOutlined style={{fontSize:28}}/>
                            <p className="ml-[3px] text-[25px]">117.7k thành viên</p>
                        </div>
                    </div>
                    <MenuOutlined style={{fontSize:25, fontWeight:'bold', marginLeft:'auto', marginRight:10, borderWidth:1, borderRadius:10, padding:5}} />
                </div>  
            </div>
            <div className="flex-col border-2 flex-7 w-3/4 h-full">
                <p>DEF</p>
            </div>
        </div>
    )
}

export default Index;
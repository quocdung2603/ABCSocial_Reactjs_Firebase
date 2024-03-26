import { useContext } from "react";
import { ThemeContext } from "contexts/ThemeProvider";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Button } from "antd";




export default function PageEx() {

    const { COLORS, SIZES, FONTS } = useContext(ThemeContext);
    const handleTest= async ()=>{
        try {
            await setDoc(doc(db,"users","1"),{
                name: "Kiệt Lê",
                age: "20",
            })
        } catch (error) {
            alert("Lỗi mẹ rồi");
            console.log(error);
        }
        
    }
    return <div className=" text-center">
        Hello world
        <Button onClick={handleTest}>Test</Button>
    </div>
}
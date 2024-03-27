import { useContext } from "react";
import { ThemeContext } from "contexts/ThemeProvider";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../database/firebase-config";
import { Button } from "antd";
import { AuthContext } from "contexts/AuthContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";




export default function PageEx() {
    const {currentUser}=useContext(AuthContext);
    console.log(currentUser);
    const navigate = useNavigate();
    const { COLORS, SIZES, FONTS } = useContext(ThemeContext);
    const handleTest= async ()=>{
        signOut(auth);
        navigate("/Account/login");
    }
    return <div className=" text-center">
        {currentUser.email}
        <Button onClick={handleTest}>Test</Button>
    </div>
}
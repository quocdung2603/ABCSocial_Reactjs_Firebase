import { useContext } from "react";
import { ThemeContext } from "contexts/ThemeProvider";




export default function PageEx() {

    const { COLORS, SIZES, FONTS } = useContext(ThemeContext);
    return <div className=" text-center">
        Hello World
    </div>
}
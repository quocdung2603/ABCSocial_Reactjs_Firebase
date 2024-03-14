import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const COLORS = {
    background: "#FFF",
  };

  const SIZES = {
    sm: "16px",
    m: "18px",
    lg: "20px",
    head: "30px",
  };

  const FONTS = {
    poppins: "Arial, sans-serif",
  };

  const theme = {
    COLORS,
    SIZES,
    FONTS,
  };
  
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

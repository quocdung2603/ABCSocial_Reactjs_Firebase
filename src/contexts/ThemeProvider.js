import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const COLORS = {
    background: "#F0F2F5",
    primary: "#0866FF",
    secondary: "#E4E6EB",
    text: "#050505"
  };

  const SIZES = {
    sm: "14px",
    m: "16px",
    lg: "20px",
    head: "30px",
  };

  const SPACING = {

  }

  const FONTS = {
    primary: "Nunito Sans, Arial, sans-serif",
  };

  const theme = {
    COLORS,
    SIZES,
    FONTS,
    SPACING,
  };
  
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

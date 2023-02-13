import { CurrentTheme } from "../types/index";
import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<CurrentTheme>({ theme: "light" });

  const setCurrentTheme = (theme: CurrentTheme) => {
    setTheme(theme);
    localStorage.setItem("@theme", JSON.stringify({ theme }));
  };

  let value = { theme, setCurrentTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;

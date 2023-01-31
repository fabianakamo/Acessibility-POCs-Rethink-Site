import React, { useEffect, useState } from "react";
import { useTheme } from "@/src/context/ThemeContext";

import WppIcon from "@mui/icons-material/WhatsApp";
import light from "./lightTheme.module.css";
import dark from "./darkTheme.module.css";
import mainTheme from "./floatingWpp.module.css";

const FloatingWpp = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const currentTheme = useTheme();

  useEffect(() => {
    setTheme(currentTheme.theme.theme);
  }, [currentTheme]);

  const styles = { light, dark };
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://wa.me/5527998439277?text=Olá%20!%20Bom%20dia"
      className={`${styles[theme].wpp_container} ${mainTheme.wpp_container}`}
    >
      <WppIcon className={`${styles[theme].iconWpp} ${mainTheme.iconWpp}`} />
    </a>
  );
};

export default FloatingWpp;

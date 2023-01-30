import React, { useEffect, useState } from "react";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import ContrastIcon from "@mui/icons-material/Contrast";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { useTheme } from "@/src/context/ThemeContext";
import mainTheme from "./retractableMenu.module.css";
import light from "./lightTheme.module.css";
import dark from "./darkTheme.module.css";

const RetractableMenu = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [fontNumber, setFontNumber] = useState(16);
  // const [countFont, setCountFont] = useState(0);
  const [toggle, setToggle] = useState(false);

  // Mudança de cor
  const newTheme = useTheme();
  const currentTheme = useTheme();
  const styles = { light, dark };

  const handleTheme = () => {
    const currentTheme = newTheme.theme.theme === "dark" ? "light" : "dark";
    newTheme.setCurrentTheme({ theme: currentTheme });
  };

  useEffect(() => {
    setTheme(currentTheme.theme.theme);
  }, [currentTheme]);

  // Mudança de letras
  const increaseSize = () => {
    if (fontNumber <= 24 && fontNumber >= 10) {
      setFontNumber((prevValue) => (prevValue += prevValue / 10));
      document.documentElement.style.setProperty(
        "--font-size",
        `${fontNumber + 2}px`
      );
    }
  };

  const decreaseSize = () => {
    if (fontNumber <= 26 && fontNumber >= 14) {
      setFontNumber((prevValue) => (prevValue -= prevValue / 10));
      document.documentElement.style.setProperty(
        "--font-size",
        `${fontNumber - 2}px`
      );
    }
  };

  const normalSize = () => {
    document.documentElement.style.setProperty("--font-size", `1rem`);
    setFontNumber(16);
  };

  return (
    <div
      className={`${styles[theme].menu_container} ${mainTheme.menu_container}`}
      style={{ width: toggle ? " 400px" : "60px" }}
    >
      <div className={mainTheme.relative_div}>
        <div>
          <button
            onClick={() => {
              setToggle((state) => !state);
            }}
            className={`${styles[theme].menu_button} ${mainTheme.menu_button}`}
          >
            <AccessibilityNewIcon
              className={`${styles[theme].icon_accessibility} ${mainTheme.icon_accessibility}`}
            />
          </button>
        </div>
        <div
          id="options"
          className={`${mainTheme.content} ${toggle && mainTheme.active}`}
        >
          <button
            onClick={increaseSize}
            className={`${styles[theme].retractable_menu_button} ${mainTheme.retractable_menu_button}`}
          >
            <TextIncreaseIcon />
          </button>
          <button
            onClick={normalSize}
            className={`${styles[theme].retractable_menu_button} ${mainTheme.retractable_menu_button}`}
          >
            <FormatClearIcon />
          </button>
          <button
            onClick={decreaseSize}
            className={`${styles[theme].retractable_menu_button} ${mainTheme.retractable_menu_button}`}
          >
            <TextDecreaseIcon />
          </button>
          <button
            onClick={handleTheme}
            className={`${styles[theme].retractable_menu_button} ${mainTheme.retractable_menu_button}`}
          >
            <ContrastIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RetractableMenu;

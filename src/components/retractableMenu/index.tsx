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
  const [toggle, setToggle] = useState(false);
  const newTheme = useTheme();

  const handleTheme = () => {
    const currentTheme = newTheme.theme.theme === "dark" ? "light" : "dark";
    newTheme.setCurrentTheme({ theme: currentTheme });
  };

  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const currentTheme = useTheme();

  useEffect(() => {
    setTheme(currentTheme.theme.theme);
  }, [currentTheme]);

  const styles = { light, dark };

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
          {/* O TAB NAO PASSA POR AQUI */}
          <div
            className={`${styles[theme].icon_increaseText} ${mainTheme.icon_increaseText}`}
          >
            <TextIncreaseIcon
              className={`${styles[theme].icon_increaseText} ${mainTheme.icon_increaseText}`}
            />
          </div>

          {/* <TextIncreaseIcon /> */}
          <FormatClearIcon />
          <TextDecreaseIcon />
          <ContrastIcon onClick={handleTheme} />
        </div>
      </div>
    </div>
  );
};

export default RetractableMenu;

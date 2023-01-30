import { useTheme } from "@/src/context/ThemeContext";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";
import mainTheme from "./header.module.css";
import light from "./lightTheme.module.css";
import dark from "./darkTheme.module.css";

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const currentTheme = useTheme();

  useEffect(() => {
    setTheme(currentTheme.theme.theme);
  }, [currentTheme]);

  const styles = { light, dark };

  // Hamburguer Menu
  const handleScroll = () => {
    const menu = document.getElementById("menu");
    if (document.documentElement.scrollTop > 100) {
      if (menu) {
        menu.style.display = "flex";
        menu.style.position = "fixed";
      }
    } else {
      if (menu) menu.style.display = "none";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${styles[theme].header_container} ${mainTheme.header_container}`}
      >
        <button
          id="menu"
          className={`${styles[theme].header_hamburguer} ${mainTheme.header_hamburguer}`}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <MenuIcon />
        </button>
        <div
          id="menu"
          className={
            isNavExpanded
              ? `${styles[theme].header_menuExpanded} ${mainTheme.header_menuExpanded}`
              : `${styles[theme].header_menuHidden} ${mainTheme.header_menuHidden}`
          }
          onClick={() => {
            setIsNavExpanded(false);
          }}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Projetos</Link>
          <Link href={"/"}>Eventos</Link>
          <Link href={"/"}>Equipe</Link>
          <Link href={"/"}>Rethink Design Studio </Link>
        </div>

        <div className={`${mainTheme.header_logo}`}>
          <img
            src="https://res.cloudinary.com/dyszk230x/image/upload/v1670266771/0_Logo_caba77f342.png"
            alt="Rethink Logo"
          />
        </div>

        <button
          className={`${styles[theme].header_hamburguer} ${mainTheme.header_hamburguer}`}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <MenuIcon />
        </button>

        <div
          // className={
          //   isNavExpanded
          //     ? `${styles[theme].mobile_buttons} ${mainTheme.mobile_buttons}`
          //     : `${styles[theme].header_buttons} ${mainTheme.header_buttons}`
          // }
          // onClick={() => {
          //   setIsNavExpanded(false);
          // }}
          className={`${styles[theme].header_buttons} ${mainTheme.header_buttons}`}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Projetos</Link>
          <Link href={"/"}>Eventos</Link>
          <Link href={"/"}>Equipe</Link>
        </div>
      </div>
    </>
  );
}

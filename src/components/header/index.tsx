import { useTheme } from "@/src/context/ThemeContext";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";
import mainTheme from "./header.module.css";
import light from "./lightTheme.module.css";
import dark from "./darkTheme.module.css";

import ReactDOM from "react-dom";

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [display, setDisplay] = useState(false);

  const currentTheme = useTheme();

  useEffect(() => {
    setTheme(currentTheme.theme.theme);
  }, [currentTheme]);

  const styles = { light, dark };

  // Hamburguer Menu
  // const handleScroll = () => {
  //   const menu = document.getElementById("menu");
  //   // let bool = true;
  //   if (document.documentElement.scrollTop > 100) {
  //     if (menu) {
  //       menu.style.display = "flex";
  //       menu.style.position = "fixed";
  //     }
  //   } else {
  //     if (menu) menu.style.display = "none";
  //   }
  // };

  // useEffect(() => {
  //   console.log(display);
  // }, [display]);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setDisplay(document.documentElement.scrollTop > 100)
    );
  }, []);

  function openMenu() {
    setIsNavExpanded(!isNavExpanded);

    // const menu = document.getElementById("menu_button");
    // const content_menu = document.getElementById("content_container");
    // const relative_div = document.getElementById("relative_div");
    // if (menu && content_menu && relative_div) {
    //   if (toogleOpen) {
    //     content_menu.style.opacity = "1";
    //     content_menu.style.zIndex = "1";
    //     relative_div.style.scale = "50";
    //   } else {
    //     relative_div.style.scale = "1";
    //     content_menu.style.opacity = "0";
    //     content_menu.style.zIndex = "-1";
    //     relative_div.style.zIndex = "0";
    //   }
    // }
  }

  return (
    <>
      <div
        className={`${styles[theme].header_container} ${mainTheme.header_container}`}
      >
        <div className={mainTheme.container_menu_hamb}>
          <button
            id="menu"
            className={`${styles[theme].header_hamburguer} ${
              mainTheme.header_hamburguer_on
            } ${!display && mainTheme.header_hamburguer_off}`}
            onClick={openMenu}
          >
            <MenuIcon />
          </button>
          <div className={mainTheme.increase_div} id="increase_div"></div>
        </div>

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

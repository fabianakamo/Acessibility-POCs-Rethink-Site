import Link from "next/link";
import React, { useState } from "react";
import mainTheme from "./header.module.css";
import light from "./lightTheme.module.css";
import dark from "./darkTheme.module.css";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const styles = { light, dark };

  const changeColor = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <>
      <p>
        <button onClick={changeColor}>Trocar Cor</button>
      </p>
      <div
        className={`${styles[theme].header_container} ${mainTheme.header_container}`}
      >
        <div>
          <img
            src="https://res.cloudinary.com/dyszk230x/image/upload/v1670266771/0_Logo_caba77f342.png"
            alt="Rethink Logo"
          />
        </div>

        <button
          className={`${styles[theme].hamburger} ${mainTheme.hamburger}`}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <MenuIcon />
        </button>

        <div
          className={
            isNavExpanded
              ? `${styles[theme].mobile_buttons} ${mainTheme.mobile_buttons}`
              : `${styles[theme].header_buttons} ${mainTheme.header_buttons}`
          }
          onClick={() => {
            setIsNavExpanded(false);
          }}
        >
          <Link href={"/"}>Home</Link>
          {/* <a href={"/#Sobre"}>Sobre</a> */}
          <Link href={"/"}>Projetos</Link>
          <Link href={"/"}>Eventos</Link>
          <Link href={"/"}>Equipe</Link>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import React, { useState } from "react";
import styles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.header_container}>
      <div>
        <img
          src="https://res.cloudinary.com/dyszk230x/image/upload/v1670266771/0_Logo_caba77f342.png"
          alt="Rethink Logo"
        />
      </div>

      <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <MenuIcon />
      </button>

      <div
        className={
          isNavExpanded ? styles.mobile_buttons : styles.header_buttons
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
  );
}

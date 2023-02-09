import React, { useState } from "react";
import style from "./buttonMenu.module.css";

const ButtonMenu = () => {
  const [toogleOpen, setToogleOpen] = useState(true);

  function close() {
    setToogleOpen((state) => !state);
    const menu = document.getElementById("menu_button");
    const content_menu = document.getElementById("content_container");
    const relative_div = document.getElementById("relative_div");
    if (menu && content_menu && relative_div) {
      if (toogleOpen) {
        content_menu.style.opacity = "1";
        content_menu.style.zIndex = "1";
        relative_div.style.scale = "50";
      } else {
        relative_div.style.scale = "1";
        content_menu.style.opacity = "0";
        content_menu.style.zIndex = "-1";
        relative_div.style.zIndex = "0";
      }
    }
  }

  return (
    <div className={style.container_button} id="menu_button">
      <div className={style.ralative_div} id="relative_div"></div>
      <div id="content_container" className={style.content_container}>
        <div>
          <p>CONTENT CONTAINER</p>
        </div>
      </div>
      <button className={style.buttonTeste} onClick={close} role="button">
        <span className={style.text}>B57</span>
      </button>
    </div>
  );
};

export default ButtonMenu;

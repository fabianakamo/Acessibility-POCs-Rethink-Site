import React, { useState } from "react";
import style from "./MenuOpen.module.css";

const MenuOpen = () => {
  const [toogleOpen, setToogleOpen] = useState(false);

  function openMenu() {
    const element = document.createElement("div");
  }

  function close() {
    setToogleOpen((state) => !state);
    console.log(toogleOpen);
    const container = document.getElementById("container");
    // if(container){
    //   if(toogleOpen){

    //   }
    //   else{

    //   }
    // }

    // const content_menu = document.getElementById("content_container");
    // const relative_div = document.getElementById("relative_div");
    // if (menu && content_menu && relative_div) {
    //   if (toogleOpen) {
    //     content_menu.style.opacity = "1";
    //     relative_div.style.width = "50%";
    //     relative_div.style.height = "50%";
    //     relative_div.style.position = "relative";
    //     content_menu.style.display = "flex";
    //   } else {
    //     relative_div.style.width = "100px";
    //     relative_div.style.height = "100px";
    //     content_menu.style.opacity = "0";
    //   }
    // }
  }

  return (
    <section className={style.container} id="container">
      <div className={style.rel_container}>
        <div className={style.content_menu}>
          <h2>Content</h2>
          <p>Description</p>
        </div>
      </div>
      <div className={style.button_menu}>
        <button onClick={close} role="button">
          <span className={style.text}>B57</span>
        </button>
      </div>
    </section>
  );
};

export default MenuOpen;

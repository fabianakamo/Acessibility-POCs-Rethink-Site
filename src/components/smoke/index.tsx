import { log } from "console";
import React, { useEffect, useState } from "react";
import style from "./smoke.module.css";

const Smoke = () => {
  function parallax(e: MouseEvent) {
    const smoke_container = document.getElementById("smoke_container");
    const smoke1 = document.getElementById("smoke1");
    const smoke2 = document.getElementById("smoke2");
    const smoke3 = document.getElementById("smoke3");
    const smoke4 = document.getElementById("smoke4");
    const smoke5 = document.getElementById("smoke5");
    // console.log(e.clientX);

    // if (smoke_container) {
    // }
    // if (smoke3) {
    //   smoke3.style.background =
    //     "linear-gradient(to right, black 40%, rgba(152,179,43,0.7), black 60%)";
    // }
    if (smoke2) {
      //   smoke2.style.transform = "rotate(" + -(e.clientX * 0.05) + "deg)";
      //   smoke2.style.background =
      //     "linear-gradient(90deg, rgba(152,179,43,1), rgba(133,178,105,1) 70%)";
    }
    if (smoke1) {
      smoke1.style.transform =
        "rotate(" +
        -(e.clientX * 0.05) +
        "deg) translate(" +
        -(e.clientX * 0.03) +
        "%," +
        e.clientX * 0.007 +
        "%)";
      //   smoke1.style.transition = "background-color 1s ease";
    }
    if (smoke4) {
      smoke4.style.transform =
        " rotate(" +
        -(e.clientX * 0.01) +
        "deg) translate(" +
        e.clientX * 0.015 +
        "%, " +
        e.clientX * 0.01 +
        "%)";
      //   smoke4.style.width = "70vw";
    }
    if (smoke5) {
      smoke5.style.transform =
        " rotate(" +
        -(e.clientX * 0.07) +
        "deg) translate(" +
        e.clientX * 0.008 +
        "%, " +
        -(e.clientX * 0.009) +
        "%)";
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
  }, []);

  return (
    <div className={style.smoke_container} id="smoke_container">
      <div className={style.container_title}>
        {/* <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CRIAMOS PRODUTOS DIGITAIS
          QUE AS PESSOAS AMAM USAR
        </p> */}
      </div>
      {/* <div className={style.smoke1} id="smoke1"></div>
      <div className={style.smoke3} id="smoke3"></div>
      <div className={style.smoke5} id="smoke5"></div>
      <div className={style.smoke4} id="smoke4"></div> */}
    </div>
  );
};

export default Smoke;

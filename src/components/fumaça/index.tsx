import React, { useEffect } from "react";
import style from "./fumaça.module.css";

const Fumaça = () => {
  function parallax(e: MouseEvent) {
    const white_cloud = document.getElementById("fuma1");
    const blue_cloud = document.getElementById("fuma2");
    const cloud1 = document.getElementById("fuma3");
    const cloud2 = document.getElementById("fuma4");
    console.log(e.clientY);
    if (blue_cloud && white_cloud && cloud1 && cloud2) {
      if (e.clientX <= 400) {
        blue_cloud.style.transform =
          "translateX(" + -((e.clientX - 400) * 0.32) + "%)";
        white_cloud.style.transform =
          "translateX(" + -((e.clientX - 400) * 0.32) + "%)";
        cloud1.style.transform =
          "translateX(" +
          -((e.clientX - 400) * 0.32) +
          "%) matrix(0.92, -0.39, -0.39, -0.92, 0, 0)";
        cloud2.style.transform =
          "translateX(" + -((e.clientX - 400) * 0.32) + "%) rotate(180deg)";
      } else {
        blue_cloud.style.transform =
          "translate(" +
          -((e.clientX - 600) * 0.25) +
          "%, " +
          -(e.clientX * 0.2) +
          "px) rotate(" +
          -(e.clientX / 90) +
          "deg) scale(" +
          e.clientX / 360 +
          "," +
          e.clientX / 360 +
          ")";
        blue_cloud.style.filter = "blur(" + e.clientX / 20 + "px)";
        if (e.clientX >= 1200) {
          blue_cloud.style.transform =
            "translate(" +
            -((e.clientX - 600) * 0.25) +
            "%, " +
            -((2000 - e.clientX) * 0.2) +
            "px) rotate(" +
            -(e.clientX / 90 + 20) +
            "deg) scale(" +
            e.clientX / 360 +
            "," +
            e.clientX / 360 +
            ")";
          blue_cloud.style.filter = "blur(" + e.clientX / 20 + "px)";
        }
      }
    }
  }
  useEffect(() => {
    document.addEventListener("mousemove", parallax);
  }, []);

  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.fuma1} id="fuma1"></div>
        <div className={style.fuma2} id="fuma2"></div>
        <div className={style.fuma3} id="fuma3"></div>
        <div className={style.fuma4} id="fuma4"></div>
      </div>
    </div>
  );
};

export default Fumaça;

import React, { useEffect } from "react";
import style from "./cloud.module.css";

const Cloud = () => {
  //   useEffect(() => {
  function parallax(e: MouseEvent) {
    // e.preventDefault();
    const cloud = document.getElementById("cloud");
    const bottom_cloud = document.getElementById("bottom_cloud");
    if (cloud) {
      //   var move = cloud.getAttribute("data-value");
      //   var bottom_move = bottom_cloud?.getAttribute
      //   getAttribute("data-value");
      //   if (move) {
      //     var x = e.clientX * parseInt(move);
      //     var y = e.clientY * parseInt(move);
      //   move.style.transform = "translateX("+ x + "px) translateY(" + y + "px)";
      //   cloud.style.transform = "skew(" + e.clientX + "deg," + e.clientY + "deg)";
      // cloud.style.transform =
      //   "translateX(" +
      //   e.clientX * 1.5 +
      //   "px) translateY(" +
      //   e.clientY * -1.5 +
      //   "px)";
      //   }
    }
    // if (bottom_cloud) {
    //   bottom_cloud.style.transform = "skew(" + e.clientX + "deg," + e.clientY + "deg)";
    // }

    // var val = document.getElementById("cloud")?.getAttribute("data-value");
    // // var val = document.querySelector(".cloud")?.getAttribute("data-value");
    // console.log(val);
    // document.querySelectorAll(".clouds").forEach(function (move) {
    //   const moving_value = move.getAttribute("data-value") || 1;
    //   var x = e.clientX * moving_value;
    // });
  }
  //   }, []);
  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    //   window.addEventListener("scroll", () =>
    //     setDisplay(document.documentElement.scrollTop > 100)
    //   );
  }, []);

  return (
    <section className={style.container}>
      <div className={style.container_cloud}>
        <div
          id="cloud"
          data-value={-5}
          className={`${style.cloud} ${style.clouds}`}
        ></div>
        <div
          data-value={-9}
          className={`${style.cloud3} ${style.clouds}`}
        ></div>
      </div>
      <div className={style.container_cloud2}>
        <div className={style.ret_bottom}>
          <div className={style.bottom_cloud}></div>
          <div className={style.solid_bottom_cloud}></div>
        </div>
        <div className={style.ball_bottom}>
          <div className={style.bottom_ball}></div>
        </div>
      </div>
    </section>
  );
};

export default Cloud;

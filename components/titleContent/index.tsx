import React, { useState } from "react";
import mainTheme from "./titleContent.module.css";
import light from "./lightTheme.module.css";
import dark from "./darkTheme.module.css";

export default function TitleContent() {
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
        className={`${styles[theme].text_container} ${mainTheme.text_container}`}
      >
        <h1>Rethink Academy</h1>
        <p>
          O Rethink Academy é o programa de estágio e formação da Rethink,
          empresa especializada na criação de produtos digitais. O programa
          surgiu com o objetivo de qualificar pessoas para atuarem nas áreas de{" "}
          <span> Desenvolvimento, Design e Produto.</span>
        </p>
      </div>
    </>
  );
}

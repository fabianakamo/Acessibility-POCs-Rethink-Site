import React, { useEffect, useState } from "react";
import mainTheme from "./titleContent.module.css";
import light from "./lightTheme.module.css";
import dark from "./darkTheme.module.css";
import { useTheme } from "@/src/context/ThemeContext";

export default function TitleContent() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const currentTheme = useTheme();

  useEffect(() => {
    setTheme(currentTheme.theme.theme);
  }, [currentTheme]);

  const styles = { light, dark };

  return (
    <>
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

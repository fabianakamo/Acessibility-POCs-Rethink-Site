import React from "react";
import styles from "./titleContent.module.css";

export default function TitleContent() {
  return (
    <>
      <div className={styles.text_container}>
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

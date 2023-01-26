import React from "react";
import styles from "./floatingWpp.module.css";
import WppIcon from "@mui/icons-material/WhatsApp";

const FloatingWpp = () => {
  return (
    <a
      target="_blank"
      href="https://wa.me/5527998439277?text=Olá%20!%20Bom%20dia"
      className={styles.wpp_container}
    >
      <WppIcon className={styles.iconWpp} />
    </a>
  );
};

export default FloatingWpp;

import React from "react";
import styles from "./footer.module.css";
import { GitHub, LinkedIn, Instagram, YouTube } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <div>
        <img
          src="https://res.cloudinary.com/dyszk230x/image/upload/v1673976585/ezgif.com-gif-maker_2_w7yinr.gif"
          alt="Rethink Logo"
        />
      </div>
      <div className={styles.footer_icons}>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://github.com/gabsrethink/ra-site-nextjs"}
        >
          <GitHub />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={
            "https://www.linkedin.com/in/gabriel-%C3%A2ngelo-de-melo-6701a6168/"
          }
        >
          <LinkedIn />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://www.youtube.com/@rethinktecnologia8650"}
        >
          <YouTube />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://www.instagram.com/rethink.digital"}
        >
          <Instagram />
        </a>
      </div>
      <div className={styles.footer_info}>
        <p>Powered with ♥ by Gabs, Fabi and Ana</p>
      </div>
    </div>
  );
}

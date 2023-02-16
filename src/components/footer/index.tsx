import React, { useEffect, useState } from "react";
import mainTheme from "./footer.module.css";
import light from "./lightTheme.module.css";
import dark from "./darkTheme.module.css";
import { useTheme } from "@/src/context/ThemeContext";

import { GitHub, LinkedIn, Instagram, YouTube } from "@mui/icons-material";

export default function Footer() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const currentTheme = useTheme();

  useEffect(() => {
    setTheme(currentTheme.theme.theme);
  }, [currentTheme]);

  const styles = { light, dark };
  return (
    <div
      className={`${styles[theme].footer_container} ${mainTheme.footer_container}`}
    >
      <div className={`${styles[theme].footer_logo} ${mainTheme.footer_logo}`}>
        <img
          src="https://res.cloudinary.com/dyszk230x/image/upload/v1673976585/ezgif.com-gif-maker_2_w7yinr.gif"
          alt="Rethink Logo"
        />
      </div>
      <div
        className={`${styles[theme].footer_icons} ${mainTheme.footer_icons}`}
      >
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
      <div className={`${styles[theme].footer_info} ${mainTheme.footer_info}`}>
        <p>Powered with ♥ by Gabs, Fabi, Ana and Carol</p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import styles from "./retractableMenu.module.css";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import ContrastIcon from "@mui/icons-material/Contrast";
import FilterBAndWIcon from "@mui/icons-material/FilterBAndW";
import ExposureIcon from "@mui/icons-material/Exposure";
import FlakyIcon from "@mui/icons-material/Flaky";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

const RetractableMenu = () => {
  const [toogle, setToogle] = useState(false);

  return (
    <div
      className={styles.menu_container}
      style={{ width: toogle ? "400px" : "60px" }}
    >
      <div className={styles.relative_div}>
        <div>
          <button
            onClick={() => {
              setToogle((state) => !state);
            }}
            className={styles.menu_button}
          >
            <AccessibilityNewIcon className={styles.icon_accessibility} />
          </button>
        </div>
        <div
          id="options"
          className={`${styles.content} ${toogle && styles.active}`}
        >
          <TextIncreaseIcon />
          <ContrastIcon />
          <FilterBAndWIcon />
          <ExposureIcon />
          <FlakyIcon />
        </div>
      </div>
    </div>
  );
};

export default RetractableMenu;

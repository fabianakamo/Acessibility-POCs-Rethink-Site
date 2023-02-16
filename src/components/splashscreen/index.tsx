import React, { useEffect, useState } from "react";
import styles from "./splashscreen.module.css";

interface SplashScreenProps {
  delay?: number;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ delay = 2800 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <>
      {visible && (
        <div className={styles.splashscreen}>
          <img
            src="https://res.cloudinary.com/dyszk230x/image/upload/v1673976585/ezgif.com-gif-maker_2_w7yinr.gif"
            alt="Rethink Logo"
          />
        </div>
      )}
    </>
  );
};

export default SplashScreen;

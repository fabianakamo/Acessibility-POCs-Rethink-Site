import styles from "./billboard.module.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

const logos = [
  {
    name: "Logo Gol",
    url: "https://res.cloudinary.com/dyszk230x/image/upload/v1676044104/gol-logo-mono-branco-logo-monocromatico-branco_1_wjhifd.png",
  },
  {
    name: "Logo Esfera",
    url: "https://res.cloudinary.com/dyszk230x/image/upload/v1676298991/White_ov0fz7.png",
  },
  {
    name: "Logo Fundep",
    url: "https://res.cloudinary.com/dyszk230x/image/upload/v1676305125/Group_c3eycw.png",
  },
  {
    name: "Logo American Tower",
    url: "https://res.cloudinary.com/dyszk230x/image/upload/v1676305090/Group_1_xrp3zl.png",
  },
  {
    name: "Logo American Tower",
    url: "https://res.cloudinary.com/dyszk230x/image/upload/v1676305476/Subtract_1_tt7nvl.png",
  },
  {
    name: "Logo Smiles",
    url: "https://res.cloudinary.com/dyszk230x/image/upload/v1676306558/Smiles_vy9ovw.png",
  },
  {
    name: "Logo Nerus",
    url: "https://res.cloudinary.com/dyszk230x/image/upload/v1676306727/Frame_1_r8rayv.png",
  },
  {
    name: "Logo BASF",
    url: "https://res.cloudinary.com/dyszk230x/image/upload/v1676306916/BASF_ayt5mk.png",
  },
  {
    name: "Logo Clarice",
    url: "https://res.cloudinary.com/dyszk230x/image/upload/v1676306874/Frame_3_tvfiau.png",
  },
  {
    name: "Logo Sulamerica",
    url: "https://res.cloudinary.com/dyszk230x/image/upload/v1676307255/Sulamerica_pnhpxi.png",
  },
];

interface ParallaxProps {
  children: JSX.Element;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -70, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function Billboard() {
  return (
    <section className={styles.section}>
      <ParallaxText baseVelocity={-2}>
        <div className={styles.logo_and_line}>
          {logos.map((logo: any, i: any) => {
            return (
              <div className={styles.logo_and_line} key={i}>
                <img src={logo.url} alt={logo.name} />
                <div className={styles.line} />
              </div>
            );
          })}
        </div>
      </ParallaxText>
      <ParallaxText baseVelocity={2}>
        <div className={styles.logo_and_line}>
          {logos.map((logo: any, i: any) => {
            return (
              <div className={styles.logo_and_line} key={i}>
                <img src={logo.url} alt={logo.name} />
                <div className={styles.line} />
              </div>
            );
          })}
        </div>
      </ParallaxText>
    </section>
  );
}

import { motion, AnimationControls, useAnimation } from "framer-motion";
import { useEffect } from "react";
import CustomKickIcon from "./icons/CustomKickIcon";

interface AnimatedCharacterProps {
  char: string;
  index: number;
  isTarget: boolean;
  controls: AnimationControls | null;
}

interface KickerSVGProps {
  onKick: () => void;
}

export const AnimatedCharacter = ({
  char,
  isTarget,
  controls,
}: AnimatedCharacterProps) => {
  return (
    <motion.span
      animate={isTarget && controls ? controls : {}}
      whileHover={{ scale: 1.2 }}
      style={{
        display: "inline-block",
        fontWeight: 700,
        marginRight: char === " " ? "0.3em" : "0",
      }}
    >
      {char}
    </motion.span>
  );
};

export const KickerSVG = ({ onKick }: KickerSVGProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        x: [0, 25, -5, 0],
        rotate: [0, 20, -10, 0],
        transition: { duration: 1.2 },
      });
      onKick();
    }, 4000);

    return () => clearInterval(interval);
  }, [controls, onKick]);

  return (
    <motion.div animate={controls} style={{ marginRight: "8px" }}>
      <CustomKickIcon style={{ color: "#f50057" }} />
    </motion.div>
  );
};

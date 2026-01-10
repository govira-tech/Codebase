import { motion } from "framer-motion";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}

const variants = {
  up: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 } },
};

const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants[direction]}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

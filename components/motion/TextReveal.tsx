import { motion } from "framer-motion";
import React from "react";

interface TextRevealProps {
  text: string;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, delay = 0 }) => {
  const letters = Array.from(text);

  return (
    <div className="overflow-hidden flex flex-wrap">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{
            delay: delay + index * 0.05,
            type: "spring",
            stiffness: 100,
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default TextReveal;

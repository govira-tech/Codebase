import React, { useEffect, useState } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // Higher = faster movement
}

const Parallax: React.FC<ParallaxProps> = ({ children, speed = 0.3 }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      style={{
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;

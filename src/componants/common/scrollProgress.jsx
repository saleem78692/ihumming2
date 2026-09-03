import React from "react";
import { motion, useScroll } from "motion/react";

function ScrollLinked() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "5px",
        transformOrigin: "0%",
        backgroundColor: "#16A34A",
        zIndex: 9999,
      }}
    />
  );
}

export default ScrollLinked;
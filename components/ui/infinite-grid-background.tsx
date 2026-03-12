"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

// CSS-animated grid — no JS per-frame work, GPU composited
const gridBg = {
  backgroundImage: [
    "linear-gradient(to right, rgba(139,148,158,0.2) 1px, transparent 1px)",
    "linear-gradient(to bottom, rgba(139,148,158,0.2) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "40px 40px",
  animation: "grid-scroll 6s linear infinite",
} as React.CSSProperties;

export default function InfiniteGridBackground() {
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Base grid – pure CSS, zero JS */}
      <div className="absolute inset-0 opacity-[0.07]" style={gridBg} />
      {/* Mouse-reveal grid – same CSS grid, only the mask is JS-driven */}
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{ ...gridBg, maskImage, WebkitMaskImage: maskImage }}
      />
    </div>
  );
}

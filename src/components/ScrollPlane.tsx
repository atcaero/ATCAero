"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollPlane() {
  const { scrollYProgress } = useScroll();
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const planeSize = 44;
  const offset = 80;

  const travel = Math.max(0, vh - planeSize - offset * 2);

  // ✈️ Bottom → Top movement
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 1],
    [travel, travel * 0.85, travel * 0.15, 0]
  );

  return (
    <div
      className="fixed right-6 z-[9999] pointer-events-none"
      style={{
        top: `${offset}px`,
        height: `calc(100vh - ${offset * 2}px)`,
      }}
    >
      {/* GOLDEN RUNWAY */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[4px] bg-gold-gradient opacity-90 shadow-[0_0_12px_rgba(189,154,104,0.8)] rounded-full"
      />

      {/* PLANE */}
      <motion.div
        style={{ y }}
        className="absolute left-1/2 -translate-x-1/2"
      >
        <div className="w-11 h-11">
          <img
            src="/plane.png"
            alt="plane"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
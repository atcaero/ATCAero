"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface FlipBoxProps {
  front: ReactNode;
  back: ReactNode;
}

export default function FlipBox({ front, back }: FlipBoxProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-full h-full cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{ rotateY: hover ? -180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full h-48"
        style={{ transformStyle: "preserve-3d" as any }}
      >
        {/* FRONT - GOLD */}
        <div
          className="absolute inset-0 bg-gold-radial rounded-2xl p-6 flex flex-col justify-center items-center text-black"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {front}
        </div>

        {/* BACK - RED */}
        <div
          className="absolute inset-0 bg-red rounded-2xl p-6 flex flex-col justify-center items-center text-white"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}

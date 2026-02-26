"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PeelCardProps {
    front: ReactNode;
    back: ReactNode;
}

export default function PeelCard({ front, back }: PeelCardProps) {
    const [hover, setHover] = useState<boolean>(false);
    const [isTouch, setIsTouch] = useState<boolean>(false);

    // Detect if device is touch-primary
    useEffect(() => {
        setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    }, []);

    const handleMouseEnter = () => {
        if (!isTouch) setHover(true);
    };

    const handleMouseLeave = () => {
        if (!isTouch) setHover(false);
    };

    const handleClick = () => {
        setHover((prev) => !prev);
    };

    return (
        <div
            onMouseEnter={!isTouch ? handleMouseEnter : undefined}
            onMouseLeave={!isTouch ? handleMouseLeave : undefined}
            onClick={handleClick}
            className="relative w-full h-48 cursor-pointer overflow-hidden rounded-2xl bg-transparent"
        >
            {/* BACK LAYER (Red - Visible when peeled) */}
            <div className="absolute inset-0 bg-red flex flex-col justify-center items-center p-6 text-white text-center">
                {back}
            </div>

            {/* FRONT LAYER (Gold - Peels away) */}
            <motion.div
                className="absolute inset-0 bg-gold text-black flex flex-col justify-center items-center p-6 text-black text-center z-10"
                initial={false}
                animate={{
                    clipPath: hover
                        ? "circle(0% at 0% 100%)" // Reveals back by shrinking gold layer to bottom-left
                        : "circle(150% at 0% 100%)", // Fully visible
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            >
                {front}

                {/* Mobile Tap Indicator */}
                <div className="absolute bottom-3 right-3 lg:hidden animate-pulse flex items-center gap-1 text-black/60 text-xs font-semibold tracking-wide">
                    <span>MORE INFO</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </motion.div>

            {/* PEEL SHADOW / CURL EFFECT (Optional - Simulation) */}
            {/* This is a visual enhancement to make the cut look like a curl. 
          We animate a gradient over the edge. */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none"
                initial={false}
                animate={{
                    // Attempting to follow the diagonal edge. 
                    // A simple approximation is a gradient that slides.
                    opacity: hover ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
            >
                {/* Could add a specific gradient overlay here if needed, 
             but simple clip-path is often clean enough for this request. */}
            </motion.div>
        </div>
    );
}

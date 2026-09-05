import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const Marquee: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const text = "SOFTWARE ENGINEERING • CREATIVE TECHNOLOGY • UI/UX DESIGN • FULLSTACK DEVELOPMENT • ";
  
  return (
    <div className="w-full overflow-hidden bg-transparent py-4 mt-20 mb-12 border-y border-[#1C1C20]">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="font-display font-medium text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase text-[#333333] flex"
          animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {text.repeat(10)}
        </motion.div>
      </div>
    </div>
  );
};

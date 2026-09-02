import React from 'react';
import { motion } from 'framer-motion';

export const Marquee: React.FC = () => {
  const text = "SOFTWARE ENGINEERING • CREATIVE TECHNOLOGY • UI/UX DESIGN • FULLSTACK DEVELOPMENT • ";
  
  return (
    <div className="w-full overflow-hidden bg-[#0066FF] py-3 sm:py-4 mt-32 mb-12 -rotate-2 scale-110 border-y border-[#004ACC]">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="font-display font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.2em] text-[#050505] opacity-90 flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
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

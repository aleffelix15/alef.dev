import React from 'react';
import { motion } from 'framer-motion';

export const MaskTextReveal = ({ text, className = "" }: { text: string, className?: string }) => {
  const words = text.split(" ");
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
      }}
      className={`flex flex-wrap gap-x-[0.3em] ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden pb-1 inline-flex">
          <motion.span
            variants={{
              hidden: { y: "100%" },
              visible: { 
                y: "0%", 
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
              }
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};


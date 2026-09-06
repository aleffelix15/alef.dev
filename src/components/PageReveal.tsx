import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageReveal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Unmount the component completely after the animation finishes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // 1.2s duration + 0.8s delay + safety margin
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          // Curva cúbica "Awwwards" (fast-in, slow-out)
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] pointer-events-none"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="w-3 h-3 rounded-full bg-[#00C853] shadow-[0_0_15px_rgba(0,200,83,0.8)] animate-pulse" />
            <span className="text-[#F5F5F5] font-mono text-2xl tracking-[0.3em] uppercase drop-shadow-[0_0_10px_rgba(245,245,245,0.2)]">
              ÁLEF FELIX
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

export const Counter: React.FC<{ from: number; to: number; duration?: number; suffix?: string }> = ({ from, to, duration = 2, suffix = '' }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  
  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, from, to, duration, inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

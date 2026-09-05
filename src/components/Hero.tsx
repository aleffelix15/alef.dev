import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SITE_DATA } from '../data';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion 
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    : { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" } };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] pt-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(ellipse 800px 500px at 50% 0%, rgba(0,102,255,0.04) 0%, transparent 70%)`,
        }}
      />
      
      {/* Grid Pattern Minimalist */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: 'linear-gradient(rgba(28,28,32,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(28,28,32,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center z-10 text-center">
        
        <div className="flex flex-col items-center max-w-3xl pt-12 md:pt-0 relative z-10">
          <motion.div
            {...animationProps}
            className="flex items-center gap-3 mb-6"
          >
            <div className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute h-full w-full rounded-full bg-[#00C853] opacity-75 animate-[pulse-dot_2s_ease-in-out_infinite]" />
              <span className="relative h-2 w-2 rounded-full bg-[#00C853]" />
            </div>
            <span className="font-body text-[0.8125rem] font-medium text-[#9A9A9A] tracking-wide uppercase">
              Disponível para novos desafios
            </span>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.1, duration: 0.8 }}
            className="font-body text-xs md:text-sm font-semibold tracking-[0.1em] uppercase text-[#4D94FF] mb-4"
          >
            {SITE_DATA.profile.title}
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.2, duration: 0.8 }}
            className="font-display font-bold text-[#F5F5F5] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-[-0.03em] mb-6"
          >
            Transformando ideias em soluções <span className="text-[#0066FF] relative inline-block">digitais<span className="absolute bottom-2 left-0 w-full h-[0.15em] bg-[#0066FF]/20 -z-10 rounded-sm"></span></span>.
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.3, duration: 0.8 }}
            className="font-body text-[1rem] sm:text-[1.125rem] text-[#9A9A9A] leading-[1.7] max-w-2xl mb-10"
          >
            {SITE_DATA.profile.heroDesc}
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center w-full sm:w-auto"
          >
            <a
              href="#projeto"
              className="relative overflow-hidden group flex items-center justify-center gap-2 bg-[#0066FF] text-white font-body text-[0.9375rem] font-medium px-8 py-3.5 rounded-lg hover:bg-[#1A75FF] transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10">Conhecer os projetos</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </a>
            <a
              href="#contato"
              className="relative flex items-center justify-center bg-transparent text-[#F5F5F5] font-body text-[0.9375rem] font-medium px-8 py-3.5 rounded-lg border border-[#1C1C20] hover:border-[#2A2A30] hover:bg-[#0D0D0F] transition-all duration-300 w-full sm:w-auto"
            >
              Entrar em contato
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center w-full pointer-events-none">
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-[#71717A]" />
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
};

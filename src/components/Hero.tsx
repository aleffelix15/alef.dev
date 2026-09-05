import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SITE_DATA } from '../data';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const fadeUpProps = shouldReduceMotion 
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    : { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" } };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] pt-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background extremamente sutil para profundidade */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse 800px 600px at 50% 0%, rgba(0,102,255,0.03) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center z-10 text-center">
        
        <div className="flex flex-col items-center max-w-3xl pt-12 md:pt-0 relative z-10">
          
          {/* Status */}
          <motion.div
            {...fadeUpProps}
            className="flex items-center gap-3 mb-10"
          >
            <div className="relative flex h-2 w-2 items-center justify-center">
              {!shouldReduceMotion && (
                <span className="absolute h-full w-full rounded-full bg-[#00C853] opacity-60 animate-[pulse-dot_3s_ease-in-out_infinite]" />
              )}
              <span className="relative h-2 w-2 rounded-full bg-[#00C853]" />
            </div>
            <span className="font-body text-[0.75rem] font-medium text-[#9A9A9A] tracking-[0.15em] uppercase">
              Disponível para novos desafios
            </span>
          </motion.div>

          {/* Nome e Especialidade */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.1, duration: 0.8 }}
            className="flex flex-col items-center gap-2 mb-6"
          >
            <p className="font-mono text-sm sm:text-base text-[#0066FF] mb-2">
              Olá, eu sou {SITE_DATA.profile.name}
            </p>
            
            <h2 className="font-display font-bold text-[#F5F5F5] text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight uppercase">
              Desenvolvedor <span className="text-[#4D4D55] font-light">&</span> <br />
              Estudante de <br />
              Engenharia de Software
            </h2>
          </motion.div>

          {/* Proposta Principal */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.2, duration: 0.8 }}
            className="font-display font-medium text-[#A1A1AA] text-[clamp(1.25rem,2.5vw,1.5rem)] leading-snug tracking-tight mb-8"
          >
            Transformando ideias em soluções digitais.
          </motion.h1>

          {/* Descrição Longa */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.3, duration: 0.8 }}
            className="font-body text-[1rem] sm:text-[1.0625rem] text-[#71717A] leading-relaxed max-w-[540px] mb-12"
          >
            {SITE_DATA.profile.heroDesc}
          </motion.p>

          {/* Chamadas para ação */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center w-full sm:w-auto"
          >
            <a
              href="#projeto"
              className="inline-flex items-center justify-center bg-[#F5F5F5] text-[#050505] hover:bg-white font-body text-[0.9375rem] font-semibold px-8 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] w-full sm:w-auto"
            >
              Conhecer projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center bg-transparent text-[#F5F5F5] font-body text-[0.9375rem] font-medium px-8 py-3.5 rounded-lg border border-[#2A2A30] hover:border-[#4D4D55] hover:bg-[#0D0D0F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D4D55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] w-full sm:w-auto"
            >
              Entrar em contato
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center w-full pointer-events-none">
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} className="text-[#4D4D55]" />
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

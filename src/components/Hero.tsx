import React, { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SITE_DATA } from '../data';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

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
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={shouldReduceMotion ? {} : {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
          }}
          className="flex flex-col items-center max-w-3xl pt-12 md:pt-0 relative z-10"
        >
          
          {/* Status */}
          <motion.div
            variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: -10, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
            }}
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
          <div className="flex flex-col items-center gap-4 mb-8 w-full">
            <motion.p
              variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
                hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8 } }
              }}
              className="font-mono text-[0.8125rem] md:text-sm text-[#0066FF] tracking-wide uppercase"
            >
              Olá, eu sou {SITE_DATA.profile.name}
            </motion.p>
            
            <h2 className="font-display font-black text-[#F5F5F5] text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-tighter uppercase w-full flex flex-col items-center">
              <span className="overflow-hidden pb-1">
                <motion.span 
                  variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
                    hidden: { opacity: 0, y: '100%' },
                    visible: { opacity: 1, y: '0%', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-[#A1A1AA] relative"
                >
                  Desenvolvedor <span className="text-[#3F3F46] font-light tracking-normal">&</span>
                </motion.span>
              </span>
              <span className="overflow-hidden pb-1">
                <motion.span 
                  variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
                    hidden: { opacity: 0, y: '100%' },
                    visible: { opacity: 1, y: '0%', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="inline-block text-[#E0E0E0]"
                >
                  Estudante de
                </motion.span>
              </span>
              <span className="overflow-hidden pb-1">
                <motion.span 
                  variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
                    hidden: { opacity: 0, y: '100%' },
                    visible: { opacity: 1, y: '0%', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="inline-block text-[#A1A1AA] relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:-translate-x-full hover:after:animate-[shimmer_2s_infinite] after:pointer-events-none"
                >
                  Engenharia de Software
                </motion.span>
              </span>
            </h2>
          </div>

          {/* Proposta Principal */}
          <motion.h1
            variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="font-body font-medium text-[#71717A] text-[clamp(1.125rem,2vw,1.375rem)] leading-snug tracking-tight mb-10 max-w-2xl"
          >
            Transformando ideias em soluções digitais confiáveis.
          </motion.h1>

          {/* Descrição Longa */}
          <motion.p
            variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="font-body text-[1rem] sm:text-[1.0625rem] text-[#71717A] leading-relaxed max-w-[540px] mb-12"
          >
            {SITE_DATA.profile.heroDesc}
          </motion.p>

          {/* Chamadas para ação */}
          <motion.div
            variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center w-full sm:w-auto"
          >
            <a
              href="#projeto"
              className="inline-flex items-center justify-center bg-[#F5F5F5] text-[#050505] hover:bg-white font-body text-[0.9375rem] font-semibold px-8 py-3.5 rounded-lg transition-all hover:-translate-y-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] w-full sm:w-auto"
            >
              Conhecer projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center bg-transparent text-[#F5F5F5] font-body text-[0.9375rem] font-medium px-8 py-3.5 rounded-lg border border-[#2A2A30] hover:border-[#4D4D55] hover:bg-[#0D0D0F] transition-all hover:-translate-y-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D4D55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] w-full sm:w-auto"
            >
              Entrar em contato
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center w-full pointer-events-none"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} className="text-[#4D4D55]" />
        </motion.div>
      </motion.div>

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
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

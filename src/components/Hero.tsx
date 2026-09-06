import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { HeroSectionWrapper } from './Animations';
import { MaskTextReveal } from './MaskTextReveal';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // --- LÓGICA DO PARALLAX ---
  const { scrollY } = useScroll();
  const parallaxCodeBlock = useTransform(scrollY, [0, 500], [0, -100]);
  const parallaxBackground = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] bg-[#050505] pt-32 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Parallax */}
      <motion.div 
        style={shouldReduceMotion ? {} : { y: parallaxBackground }}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      >
        <div 
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] opacity-[0.05] blur-[120px] rounded-full"
          style={{ background: 'radial-gradient(circle, #00C853 0%, transparent 70%)' }}
        />
      </motion.div>

      <HeroSectionWrapper className="w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={shouldReduceMotion ? {} : {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
          }}
          className="flex flex-col items-start text-left"
        >
          <motion.div
            variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-[#00C853] shadow-[0_0_8px_#00C853]" />
            </div>
            <span className="font-mono text-[0.65rem] font-semibold text-[#00C853] tracking-[0.2em] uppercase drop-shadow-[0_0_5px_rgba(0,200,83,0.3)]">Disponível para novos desafios</span>
          </motion.div>

          <div className="font-display text-[2.25rem] min-[390px]:text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-bold tracking-tight mb-5 sm:mb-6 flex flex-col items-start">
            <MaskTextReveal text="DESENVOLVEDOR &" className="text-[#F5F5F5]" />
            <MaskTextReveal text="ESTUDANTE DE" className="text-[#F5F5F5]" />
            <MaskTextReveal text="ENGENHARIA DE" className="text-[#00C853] drop-shadow-[0_0_15px_rgba(0,200,83,0.2)]" />
            <MaskTextReveal text="SOFTWARE" className="text-[#F5F5F5]" />
          </div>

          <motion.p
            variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="font-body text-base md:text-lg text-[#A1A1AA] max-w-md leading-relaxed mb-10"
          >
            Transformando ideias em soluções digitais escaláveis. Código limpo, design inteligente e performance.
          </motion.p>
          
          <motion.div variants={shouldReduceMotion ? { visible: { opacity: 1 } } : {hidden: { opacity: 0, y: 15 },visible: { opacity: 1, y: 0 }}} className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
            <a
              href="#projeto"
              className="group inline-flex items-center justify-center gap-2 bg-[#00C853] text-[#050505] hover:bg-[#00E676] hover:shadow-[0_0_20px_rgba(0,200,83,0.4)] font-body text-[0.9375rem] font-bold px-6 py-3.5 sm:py-3 rounded-md transition-all active:scale-95 w-full sm:w-auto"
            >
              Ver projetos <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#sobre"
              className="group inline-flex items-center justify-center gap-2 bg-transparent text-[#E0E0E0] border border-[#1C1C20] hover:bg-[#00C853]/10 hover:border-[#00C853]/30 hover:text-[#00C853] font-body text-[0.9375rem] font-medium px-6 py-3.5 sm:py-3 rounded-md transition-all active:scale-95 w-full sm:w-auto"
            >
              Sobre mim <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Code Block - Desktop Only com Parallax */}
        <motion.div 
          style={shouldReduceMotion ? {} : { y: parallaxCodeBlock }}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.38, ease: 'easeOut' }}
          className="hidden lg:block w-full"
        >
          <div className="bg-[#0A0A0C] border border-[#1C1C20] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,200,83,0.08)] hover:shadow-[0_0_40px_rgba(0,200,83,0.15)] hover:border-[#00C853]/30 transition-all duration-500">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1C1C20] bg-[#050505]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B30]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF9500]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C853]/80" />
              </div>
              <span className="ml-2 font-mono text-[10px] text-[#71717A]">dev.alef.ts</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-[1.7]">
                <code>
                  <span className="text-[#00C853]">const</span> <span className="text-[#F5F5F5]">developer</span> <span className="text-[#00C853]">=</span> {'{'}<br/>
                  {'  '}<span className="text-[#71717A]">name:</span> <span className="text-[#FFD700]">'ÁLEF FELIX'</span>,<br/>
                  {'  '}<span className="text-[#71717A]">role:</span> <span className="text-[#FFD700]">'Desenvolvedor Full Stack'</span>,<br/>
                  {'  '}<span className="text-[#71717A]">focus:</span> [<span className="text-[#FFD700]">'React'</span>, <span className="text-[#FFD700]">'Node.js'</span>, <span className="text-[#FFD700]">'TypeScript'</span>],<br/>
                  {'  '}<span className="text-[#71717A]">learning:</span> <span className="text-[#FFD700]">'Todos os dias'</span><br/>
                  {'}'}<br/><br/>
                  <span className="text-[#00C853]">function</span> <span className="text-[#F5F5F5]">transformarIdeia</span>(<span className="text-[#FF9500]">ideia</span>) {'{'}<br/>
                  {'  '}<span className="text-[#00C853]">return</span> <span className="text-[#71717A]">{`/* -> código -> solução -> impacto */`}</span>;<br/>
                  {'}'}<br/><br/>
                  <span className="text-[#F5F5F5]">console</span>.<span className="text-[#00C853]">log</span>(<span className="text-[#F5F5F5]">transformarIdeia</span>(<span className="text-[#FFD700]">'Sua ideia!'</span>));<br/>
                  <span className="text-[#71717A]">// Vamos construir algo incrível juntos! 🚀</span>
                  <span aria-hidden="true" className="terminal-cursor bg-[#00C853]" />
                </code>
              </pre>
            </div>
          </div>
        </motion.div>

      </HeroSectionWrapper>
    </section>
  );
};



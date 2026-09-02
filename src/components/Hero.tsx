import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const codeY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Reactive Grid state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-screen bg-[#050505] pt-16 flex items-center justify-center overflow-hidden"
    >
      {/* Atmospheric gradient */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse 600px 400px at 50% 0%, rgba(0,102,255,0.03) 0%, transparent 70%)`,
        }}
      />
      
      {/* Reactive Glow Grid */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-50"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,102,255,0.06), transparent 40%)`,
          }}
        />
      )}

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 items-center z-10">
        
        {/* Left Column: Content */}
        <div className="flex flex-col items-start pt-12 md:pt-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#4D94FF] mb-4"
          >
            DESENVOLVEDOR & ESTUDANTE DE ENGENHARIA DE SOFTWARE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display font-bold text-[#F5F5F5] text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mb-6"
          >
            Transformando ideias em soluções <span className="text-[#0066FF]">digitais</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7] max-w-[520px] mb-8"
          >
            Construindo minha carreira em Engenharia de Software e desenvolvendo projetos próprios para impactar pessoas através da tecnologia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projeto"
              className="relative overflow-hidden group flex items-center justify-center gap-2 bg-[#0066FF] text-white font-body text-[0.9375rem] font-semibold px-6 py-3 rounded-lg hover:bg-[#1A75FF] hover:shadow-[0_0_20px_rgba(0,102,255,0.1)] hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-[-100%] group-hover:scale-150 transition-transform duration-700 ease-out rotate-12 blur-sm pointer-events-none" />
              <span className="relative z-10">Conhecer o projeto</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </a>
            <a
              href="#contato"
              className="relative overflow-hidden group flex items-center justify-center bg-transparent text-[#F5F5F5] font-body text-[0.9375rem] font-medium px-6 py-3 rounded-lg border border-[#1C1C20] hover:border-[#2A2A30] hover:bg-[#0D0D0F] hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[#0066FF]/10 translate-y-full group-hover:translate-y-[-100%] group-hover:scale-150 transition-transform duration-700 ease-out rotate-12 blur-sm pointer-events-none" />
              <span className="relative z-10">Entrar em contato</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 flex items-center gap-3"
          >
            <div className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute h-full w-full rounded-full bg-[#00C853] opacity-75 animate-[pulse-dot_2s_ease-in-out_infinite]" />
              <span className="relative h-2 w-2 rounded-full bg-[#00C853]" />
            </div>
            <span className="font-body text-[0.8125rem] font-medium text-[#9A9A9A]">
              Disponível para novos desafios
            </span>
          </motion.div>
        </div>

        {/* Right Column: Visual Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative w-full aspect-[4/3] sm:aspect-square max-w-[360px] sm:max-w-[420px] md:max-w-[480px] mx-auto mt-6 md:mt-0 block"
        >
          {/* Grid Background Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 md:opacity-40 -rotate-3"
            style={{
              backgroundImage: 'linear-gradient(rgba(28,28,32,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(28,28,32,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Photo */}
          <motion.div 
            style={{ y: photoY }}
            className="absolute top-1/2 left-0 sm:left-4 -translate-y-1/2 w-[120px] h-[150px] sm:w-[170px] sm:h-[210px] md:w-[200px] md:h-[240px] rounded-xl sm:rounded-2xl border border-[#1C1C20] overflow-hidden shadow-2xl z-10 bg-[#0A0A0C]"
          >
            <img
              src="/assets/alef2.png"
              alt="Alef Felix"
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </motion.div>

          {/* Code Snippet Card with parallax and floating motion */}
          <motion.div 
            style={{ y: codeY }}
            className="absolute top-2 sm:top-4 right-0 w-[190px] sm:w-[250px] md:w-[280px] z-20"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-[#0D0D0F] border border-[#1C1C20] rounded-xl p-2.5 sm:p-4 shadow-2xl"
            >
              <div className="flex gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF5F56] opacity-60" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFBD2E] opacity-60" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#27C93F] opacity-60" />
              </div>
              
              <div className="font-mono text-[0.6rem] sm:text-[0.775rem] md:text-[0.8125rem] leading-relaxed select-none">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.05, delayChildren: 1.2 } }
                  }}
                >
                  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-[#71717A]">// alef.config.ts</motion.div>
                  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                    <span className="text-[#4D94FF]">const</span> developer = &#123;
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="pl-2 sm:pl-3">
                    name: <span className="text-[#E0E0E0]">"Alef Felix"</span>,
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="pl-2 sm:pl-3">
                    focus: [<span className="text-[#E0E0E0]">"Software"</span>, <span className="text-[#E0E0E0]">"Web"</span>],
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="pl-2 sm:pl-3">
                    status: <span className="text-[#E0E0E0]">"building"</span> <span className="text-[#71717A]">// sempre</span>
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>&#125;;</motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Badge */}
          <motion.div 
            style={{ y: badgeY }}
            className="absolute bottom-4 right-2 sm:bottom-8 sm:right-4 bg-[#0D0D0F] border border-[#1C1C20] rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 flex items-center gap-1.5 shadow-[0_0_15px_rgba(28,28,32,0.5)] z-20"
          >
            <span className="text-xs">⚡</span>
            <span className="font-mono text-[10px] sm:text-xs text-[#9A9A9A]">2025.latest</span>
          </motion.div>

          {/* Decorative dots */}
          <div className="absolute top-10 left-10 w-1.5 h-1.5 rounded-full bg-[#0066FF] opacity-30" />
          <div className="absolute bottom-20 right-1/4 w-1 h-1 rounded-full bg-[#0066FF] opacity-20" />
          <div className="absolute top-1/3 right-10 w-1.5 h-1.5 rounded-full bg-[#0066FF] opacity-40" />
        </motion.div>
      </div>

      {/* Scroll indicator with smooth fade and translate */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center w-full pointer-events-none">
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
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

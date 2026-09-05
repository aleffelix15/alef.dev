import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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
      {/* Atmospheric minimal background gradient */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse 800px 500px at 50% 0%, rgba(0,102,255,0.03) 0%, transparent 70%)`,
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

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(28,28,32,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(28,28,32,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 z-10">
        
        {/* Left Column: Content */}
        <div className="flex flex-col items-start w-full md:w-[60%] pt-12 md:pt-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute h-full w-full rounded-full bg-[#00C853] opacity-75 animate-[pulse-dot_2s_ease-in-out_infinite]" />
              <span className="relative h-2 w-2 rounded-full bg-[#00C853]" />
            </div>
            <span className="font-body text-[0.8125rem] font-medium text-[#9A9A9A] tracking-wide">
              Disponível para novos desafios
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-body text-[0.65rem] sm:text-xs font-semibold tracking-[0.1em] uppercase text-[#4D94FF] mb-4"
          >
            Desenvolvedor & Estudante de Engenharia de Software
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display font-bold text-[#F5F5F5] text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] tracking-[-0.03em] mb-6"
          >
            Transformando ideias em soluções <span className="text-[#0066FF] relative inline-block">digitais<span className="absolute bottom-1 left-0 w-full h-[0.15em] bg-[#0066FF]/20 -z-10 rounded-sm"></span></span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-body text-[1rem] sm:text-[1.0625rem] text-[#9A9A9A] leading-[1.7] max-w-[540px] mb-10"
          >
            Construindo minha carreira em Engenharia de Software e desenvolvendo projetos próprios para impactar pessoas através da tecnologia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center w-full sm:w-auto"
          >
            <a
              href="#projeto"
              className="relative overflow-hidden group flex items-center justify-center gap-2 bg-[#0066FF] text-white font-body text-[0.9375rem] font-medium px-7 py-3.5 rounded-lg hover:bg-[#1A75FF] hover:shadow-[0_0_20px_rgba(0,102,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] transition-all duration-300 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-[-100%] group-hover:scale-150 transition-transform duration-700 ease-out rotate-12 blur-sm pointer-events-none" />
              <span className="relative z-10">Conhecer os projetos</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </a>
            <a
              href="#contato"
              className="relative group flex items-center justify-center bg-transparent text-[#F5F5F5] font-body text-[0.9375rem] font-medium px-7 py-3.5 rounded-lg border border-[#1C1C20] hover:border-[#2A2A30] hover:bg-[#0D0D0F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10">Entrar em contato</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Avatar */}
        <div className="hidden md:flex w-[40%] justify-end relative pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="relative w-full aspect-square max-w-[400px]"
          >
            <div className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden border border-[#1C1C20] bg-[#0D0D0F] shadow-[0_0_40px_rgba(0,102,255,0.1)]">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                poster="/assets/avatar/hero-avatar-poster.jpg"
                className="w-full h-full object-cover opacity-90"
              >
                <source src="/assets/avatar/hero-avatar-pull.webm" type="video/webm" />
                <source src="/assets/avatar/hero-avatar-pull.mp4" type="video/mp4" />
              </video>
            </div>
            
            {/* Decorative crosshairs / marks */}
            <div className="absolute top-[10%] left-[10%] w-2 h-2 border-l border-t border-[#4D94FF] opacity-40" />
            <div className="absolute bottom-[10%] right-[10%] w-2 h-2 border-r border-b border-[#4D94FF] opacity-40" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with smooth fade and translate */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center w-full pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.8, 0.3] }}
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

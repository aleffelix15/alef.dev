import React, { useRef, useState } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { SITE_DATA } from '../data';

const MagneticButton = ({ 
  children, 
  className, 
  onClick,
  href
}: { 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
  href?: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    
    // Calcula o centro exato do botão
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // O multiplicador (0.3) dita a força do ímã
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.a>
  );
};

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariant = (shouldReduceMotion ? {} : {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }) as Variants;

  const itemVariant = (shouldReduceMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }) as Variants;

  return (
    <section id="contato" className="bg-[#050505] py-32 border-t border-[#1C1C20]/50 relative overflow-hidden">
      
      {/* Background sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C853] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariant}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={itemVariant} className="flex items-center justify-center gap-2 mb-6">
            <span className="text-[#00C853] animate-pulse">·</span>
            <span className="font-body text-[0.8125rem] font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Próximos Passos
            </span>
          </motion.div>
          
          <h2 className="font-display text-[2.25rem] min-[390px]:text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#F5F5F5] mb-6 tracking-tight leading-[1.1] flex flex-col items-center text-center">
            <span className="overflow-hidden pb-1">
              <motion.span variants={itemVariant} className="inline-block">Vamos transformar uma</motion.span>
            </span>
            <span className="overflow-hidden pb-1">
              <motion.span variants={itemVariant} className="inline-block text-[#00C853] drop-shadow-[0_0_15px_rgba(0,200,83,0.2)]">ideia em projeto?</motion.span>
            </span>
          </h2>
          
          <motion.p variants={itemVariant} className="font-body text-[1.125rem] text-[#9A9A9A] leading-[1.8] mb-12 max-w-lg mx-auto">
            Estou sempre aberto a novos desafios e conversas interessantes sobre tecnologia e desenvolvimento de produtos.
          </motion.p>
          
          <motion.div variants={itemVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton 
              href={`mailto:${SITE_DATA.profile.email}`}
              className="group relative overflow-hidden flex items-center justify-center gap-2 bg-[#00C853] text-[#050505] font-body text-[1.05rem] font-bold px-10 py-5 rounded-full transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] w-full sm:w-auto shadow-[0_0_20px_rgba(0,200,83,0.3)] hover:shadow-[0_0_40px_rgba(0,200,83,0.5)] hover:bg-[#00E676]"
            >
              <Mail className="w-5 h-5" />
              <span>Iniciar conversa</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MagneticButton>
          </motion.div>

          <motion.div variants={itemVariant} className="mt-16 flex items-center justify-center gap-6">
            <a 
              href={SITE_DATA.profile.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-[#71717A] hover:text-[#00C853] transition-colors p-2 hover:bg-[#00C853]/10 hover:shadow-[0_0_15px_rgba(0,200,83,0.2)] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
            >
              <Github className="w-6 h-6" />
            </a>
            
            <a 
              href={SITE_DATA.profile.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-[#71717A] hover:text-[#00C853] transition-colors p-2 hover:bg-[#00C853]/10 hover:shadow-[0_0_15px_rgba(0,200,83,0.2)] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

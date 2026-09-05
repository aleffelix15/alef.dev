import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export const Education: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 50%"]
  });
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const fadeUpVariant = shouldReduceMotion 
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <section id="formacao" className="bg-[#050505] py-24 sm:py-32 border-t border-[#1C1C20]/50">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUpVariant}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#0066FF]">·</span>
              <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
                Educação
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
              Trajetória Acadêmica
            </h2>
          </motion.div>

          <div
            ref={ref}
            className="relative"
          >
            {/* Linha base */}
            <div className="absolute left-[7px] md:left-[23px] top-2 bottom-0 w-[1px] bg-[#1C1C20]" />
            
            {/* Linha animada */}
            {!shouldReduceMotion && (
              <motion.div 
                style={{ height }}
                className="absolute left-[7px] md:left-[23px] top-2 w-[1px] bg-gradient-to-b from-[#0066FF] to-transparent origin-top" 
              />
            )}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUpVariant}
              className="relative pl-10 md:pl-16 pb-0 group"
            >
              {/* Ponto / Nó */}
              <div
                className="absolute left-[4px] md:left-[20px] top-1.5 w-2 h-2 rounded-full border border-[#0066FF] bg-[#0066FF] shadow-[0_0_12px_rgba(0,102,255,0.6)] group-hover:scale-150 transition-transform duration-300"
              />

              <div className="flex flex-col">
                <span className="font-mono text-[0.65rem] font-semibold text-[#0066FF] uppercase tracking-wider bg-[#0066FF]/10 border border-[#0066FF]/20 px-2.5 py-1 rounded w-fit mb-4">
                  Em andamento
                </span>
                
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-1">
                  Engenharia de Software
                </h3>
                
                <h4 className="font-display text-lg text-[#71717A] mb-6">
                  UniAlfa
                </h4>
                
                <p className="font-body text-[0.9375rem] sm:text-base text-[#9A9A9A] leading-relaxed max-w-2xl bg-[#0A0A0C] border border-[#1C1C20] p-6 rounded-2xl group-hover:border-[#2A2A30] transition-colors">
                  Estudando os fundamentos da ciência da computação, engenharia de software e práticas de desenvolvimento de sistemas. Aplicando ativamente os conhecimentos acadêmicos na construção de projetos reais, focando em arquitetura escalável e design focado no usuário.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

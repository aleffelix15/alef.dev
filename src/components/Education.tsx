import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

export const Education: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const timelineContainerVariants = (shouldReduceMotion ? { hidden: {}, visible: {} } : {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
  }) as Variants;

  const lineVariants = (shouldReduceMotion ? { hidden: { height: '100%' }, visible: { height: '100%' } } : {
    hidden: { height: '0%' },
    visible: { height: '100%', transition: { duration: 0.8, ease: "easeInOut" } }
  }) as Variants;

  const itemFade = (shouldReduceMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }) as Variants;

  const dotVariants = (shouldReduceMotion ? { hidden: { opacity: 1, scale: 1 }, visible: { opacity: 1, scale: 1 } } : {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, type: "spring", stiffness: 200 } }
  }) as Variants;

  return (
    <section id="trajetoria" className="bg-[#050505] py-32 border-t border-[#1C1C20]/50">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={itemFade}
            className="mb-20"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#0066FF]">Â·</span>
              <span className="font-body text-[0.8125rem] font-semibold tracking-[0.08em] uppercase text-[#71717A]">
                EducaÃ§Ã£o
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#F5F5F5] tracking-tight">
              TrajetÃ³ria AcadÃªmica
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={timelineContainerVariants}
            className="relative"
          >
            {/* Linha base fixa transparente */}
            <div className="absolute left-[7px] md:left-[23px] top-2 bottom-0 w-[1px] bg-[#1C1C20]/30" />
            
            {/* Linha animada */}
            <motion.div 
              variants={lineVariants}
              className="absolute left-[7px] md:left-[23px] top-2 w-[1px] bg-gradient-to-b from-[#0066FF] to-transparent origin-top z-0" 
            />

            <div className="relative pl-10 md:pl-16 pb-0 group">
              {/* Ponto / NÃ³ */}
              <motion.div
                variants={dotVariants}
                className="absolute left-[4px] md:left-[20px] top-1.5 w-2 h-2 rounded-full border border-[#0066FF] bg-[#0066FF] shadow-[0_0_12px_rgba(0,102,255,0.6)] group-hover:scale-150 transition-transform duration-300 z-10"
              />

              <div className="flex flex-col">
                <motion.div variants={itemFade} className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[0.7rem] font-semibold text-[#E0E0E0] uppercase tracking-widest bg-[#1C1C20] px-3 py-1 rounded-sm">
                    2023 â€” Presente
                  </span>
                  <span className="font-mono text-[0.65rem] text-[#0066FF] uppercase tracking-wider">
                    Em andamento
                  </span>
                </motion.div>
                
                <motion.h3 variants={itemFade} className="font-display text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-2 tracking-tight">
                  Bacharelado em Engenharia de Software
                </motion.h3>
                
                <motion.h4 variants={itemFade} className="font-display text-[1.125rem] text-[#71717A] mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3F3F46]" />
                  UniAlfa
                </motion.h4>
                
                <motion.p variants={itemFade} className="font-body text-[1.125rem] text-[#9A9A9A] leading-[1.8] max-w-2xl bg-[#0A0A0C] border border-[#1C1C20] p-7 rounded-xl group-hover:border-[#3F3F46] transition-colors shadow-sm">
                  Estudando os fundamentos da ciÃªncia da computaÃ§Ã£o, engenharia de software e prÃ¡ticas de desenvolvimento de sistemas. Aplicando ativamente os conhecimentos acadÃªmicos na construÃ§Ã£o de projetos reais, com forte foco em arquitetura de software escalÃ¡vel, seguranÃ§a de dados e experiÃªncia do usuÃ¡rio (UX/UI).
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


import React, { useRef } from 'react';
import { motion, useScroll, useReducedMotion, Variants } from 'framer-motion';

export const Education: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const itemFade = (shouldReduceMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }) as Variants;

  return (
    <section id="trajetoria" className="bg-[#050505] py-32 border-t border-[#1C1C20]/50 relative">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-20"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#00C853] animate-pulse">·</span>
              <span className="font-body text-[0.8125rem] font-semibold tracking-[0.08em] uppercase text-[#71717A]">
                Educação
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#F5F5F5] tracking-tight">
              Trajetória Acadêmica
            </h2>
          </motion.div>

          <div ref={containerRef} className="relative pl-8 md:pl-10">
            
            {/* Linha de Fundo (Estática) */}
            <div className="absolute left-[7px] md:left-[23px] top-2 bottom-0 w-[2px] bg-[#1C1C20] rounded-full" />

            {/* Linha Animada via Scroll */}
            <motion.div
              style={shouldReduceMotion ? {} : { scaleY: scrollYProgress }}
              className="absolute left-[7px] md:left-[23px] top-2 bottom-0 w-[2px] bg-[#00C853] origin-top rounded-full z-10 shadow-[0_0_10px_rgba(0,200,83,0.5)]"
            />

            {/* Ponto / Nó da Linha do Tempo */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="absolute left-[2.5px] md:left-[18.5px] top-2 w-3 h-3 bg-[#0A0A0C] border-2 border-[#00C853] rounded-full z-20 shadow-[0_0_12px_rgba(0,200,83,0.6)]" 
            />

            {/* Conteúdo */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemFade}
              className="mb-12 relative pl-2 md:pl-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[0.7rem] font-semibold text-[#E0E0E0] uppercase tracking-widest bg-[#1C1C20] px-3 py-1 rounded-sm border border-[#2A2A30]">
                  2027 — FUTURO
                </span>
                <span className="font-mono text-[0.65rem] text-[#00C853] uppercase tracking-wider font-bold">
                  A iniciar
                </span>
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-2 tracking-tight">
                Bacharelado em Engenharia de Software
              </h3>
              
              <h4 className="font-display text-[1.125rem] text-[#71717A] mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3F3F46]" />
                UniAlfa
              </h4>
              
              <div className="bg-[#0A0A0C] border border-[#1C1C20] hover:border-[#00C853]/30 hover:shadow-[0_0_15px_rgba(0,200,83,0.05)] rounded-xl p-6 md:p-8 transition-colors duration-500">
                <p className="font-body text-[#9A9A9A] leading-[1.8] max-w-2xl text-sm md:text-base">
                  Estudando os fundamentos da ciência da computação, engenharia de software e práticas de desenvolvimento de sistemas. Aplicando ativamente os conhecimentos acadêmicos na construção de projetos reais, com forte foco em arquitetura de software escalável, segurança de dados e experiência do usuário (UX/UI).
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const steps = [
  {
    title: "Conversa inicial",
    description: "Você me conta o problema, eu entendo o contexto do seu negócio antes de falar em solução.",
  },
  {
    title: "Proposta",
    description: "Envio um escopo claro: o que será feito, prazo estimado e valor — sem letras miúdas.",
  },
  {
    title: "Desenvolvimento",
    description: "Construo o projeto com atualizações periódicas, para você acompanhar o progresso.",
  },
  {
    title: "Entrega",
    description: "Entrego funcionando, com um período de ajustes incluído.",
  },
];

export const HowItWorks: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  const itemVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };

  return (
    <section id="como-funciona" className="bg-[#050505] py-32 border-t border-[#1C1C20]/50 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="w-full max-w-7xl mx-auto px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-accent">·</span>
            <span className="font-body text-[0.8125rem] font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Processo de Trabalho
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F5F5] tracking-tight leading-tight">
            Como funciona a parceria
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl border border-[#1C1C20] bg-[#0A0A0C] transition-all duration-300 hover:border-accent/40 hover:bg-[#0D0D0F] hover:-translate-y-1"
            >
              <div className="absolute top-4 right-6 font-display text-5xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors duration-300 pointer-events-none">
                0{index + 1}
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-[#F5F5F5] mb-3">{step.title}</h3>
                <p className="font-body text-[#9A9A9A] leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

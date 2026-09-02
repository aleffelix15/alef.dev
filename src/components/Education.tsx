import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const Education: React.FC = () => {
  return (
    <section id="formacao" className="bg-[#0A0A0C] py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#0066FF]">·</span>
              <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
                Educação
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold text-[#F5F5F5] mt-3">
              Minha Formação
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#1C1C20] via-[#1C1C20] to-transparent" />

            <motion.div
              variants={itemVariants}
              className="relative pl-16 pb-0"
            >
              {/* Dot with glow */}
              <div
                className="absolute left-[18px] top-1.5 w-3 h-3 rounded-full border-2 border-[#0066FF] bg-[#050505] shadow-[0_0_10px_rgba(0,102,255,0.4)] transition-all"
              />

              <div className="flex flex-col">
                <span className="font-mono text-[13px] font-semibold text-[#0066FF] uppercase tracking-wider bg-[#0066FF15] border border-[#0066FF30] px-3 py-1 rounded-md w-fit mb-3">
                  Em andamento
                </span>
                <h3 className="font-display text-xl font-bold text-[#F5F5F5]">
                  Engenharia de Software
                </h3>
                <h4 className="font-display text-lg font-medium text-[#A1A1AA] mt-1">
                  UniAlfa
                </h4>
                <p className="font-body text-[1.0625rem] text-[#9A9A9A] mt-4 leading-relaxed">
                  Estudando os fundamentos da ciência da computação, engenharia de software e práticas de desenvolvimento de sistemas. Aplicando os conhecimentos acadêmicos na construção de projetos reais e soluções escaláveis.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

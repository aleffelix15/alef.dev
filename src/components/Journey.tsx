import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2024',
    title: 'Primeiras experiências profissionais',
    desc: 'Início da jornada profissional em desenvolvimento, construindo os primeiros projetos reais e aprendendo na prática.',
    isFuture: false
  },
  {
    year: '2025',
    title: 'Evolução',
    desc: 'Aprofundamento em tecnologias modernas, exploração de IA e construção de projetos mais ambiciosos.',
    isFuture: false
  },
  {
    year: '????',
    title: 'Próximo marco',
    desc: 'A ser escrito...',
    isFuture: true
  }
];

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

export const Journey: React.FC = () => {
  return (
    <section id="jornada" className="bg-[#0A0A0C] py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Jornada
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold text-[#F5F5F5] mt-3">
            Minha evolução até aqui
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

          {timeline.map((node, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative pl-16 ${index === timeline.length - 1 ? 'pb-0' : 'pb-12'}`}
            >
              {/* Dot with subtle glow */}
              <div
                className={`absolute left-[18px] top-1.5 w-3 h-3 rounded-full border-2 transition-all ${
                  node.isFuture
                    ? 'border-[#1C1C20] bg-[#0A0A0C]'
                    : 'border-[#0066FF] bg-[#050505] shadow-[0_0_10px_rgba(0,102,255,0.4)]'
                }`}
              />

              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-[#F5F5F5]">
                  {node.year}
                </span>
                <h3 className="font-display text-lg font-semibold text-[#F5F5F5] mt-1">
                  {node.title}
                </h3>
                <p className="font-body text-[0.9375rem] text-[#9A9A9A] mt-1.5 leading-relaxed">
                  {node.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

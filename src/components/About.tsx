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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const stats = [
  { value: 'Engenharia', label: 'Formação' },
  { value: 'Software', label: 'Foco' },
  { value: 'Em evolução', label: 'Carreira' },
  { value: 'DECODE', label: 'Projeto Atual' }
];

export const About: React.FC = () => {
  return (
    <section id="sobre" className="bg-[#0A0A0C] py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Sobre mim
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-[2.25rem] font-bold text-[#F5F5F5] tracking-[-0.02em] mt-3">
            Quem está por trás do código
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[60fr_40fr] gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-5"
          >
            <motion.p variants={itemVariants} className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7]">
              Sou o Alef — desenvolvedor que encontrou na tecnologia não só uma profissão, mas uma forma de pensar. Gosto de entender como as coisas funcionam por dentro, quebrar problemas em partes menores e construir soluções que realmente fazem sentido. Programação pra mim é mais do que escrever código: é criar algo que não existia antes.
            </motion.p>
            <motion.p variants={itemVariants} className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7]">
              Trabalho com desenvolvimento web e mobile, exploro inteligência artificial e estou sempre aprendendo algo novo — seja uma tecnologia, um framework ou uma forma diferente de resolver um problema. Acredito que os melhores produtos nascem da curiosidade, e é isso que me move: transformar ideias em experiências que funcionam no mundo real.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#0D0D0F] border border-[#1C1C20] hover:border-[#2E2E38] hover:bg-[#111114] rounded-xl p-6 transition-all duration-300 group shadow-lg"
              >
                <div className="font-display text-2xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                  {stat.value}
                </div>
                <div className="font-body text-[0.8125rem] font-medium text-[#71717A] mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

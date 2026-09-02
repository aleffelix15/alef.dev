import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Frontend',
    techs: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']
  },
  {
    name: 'Backend & APIs',
    techs: ['Node.js', 'Express', 'Python']
  },
  {
    name: 'Styling & UI',
    techs: ['Tailwind CSS', 'Framer Motion', 'Figma']
  },
  {
    name: 'Tools & DevOps',
    techs: ['Git', 'GitHub', 'Vite', 'Vercel']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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

export const Stack: React.FC = () => {
  return (
    <section id="stack" className="bg-[#050505] py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Tecnologias
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold text-[#F5F5F5] mt-3">
            Ferramentas que uso para criar
          </h2>
          <p className="font-body text-[0.9375rem] text-[#9A9A9A] max-w-[480px] mx-auto mt-4">
            As tecnologias e ferramentas que fazem parte do meu dia a dia de desenvolvimento.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-8 mt-12"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A] mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2.5 bg-[#0D0D0F] border border-[#1C1C20] hover:border-[#2E2E38] hover:bg-[#111114] rounded-xl px-4 sm:px-5 py-3 transition-all duration-200 group shadow-md"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] group-hover:scale-125 transition-transform" />
                    <span className="font-body text-[0.9375rem] font-medium text-[#F5F5F5] group-hover:text-white transition-colors">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

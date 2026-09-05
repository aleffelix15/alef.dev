import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SITE_DATA } from '../data';

export const Stack: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion 
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  const itemVariants = shouldReduceMotion 
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } } };

  return (
    <section id="stack" className="bg-[#050505] py-24 sm:py-32">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Tecnologias
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
            Meu Ecossistema
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SITE_DATA.stackCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group flex flex-col bg-[#0A0A0C] border border-[#1C1C20] p-6 rounded-xl hover:border-[#3F3F46] transition-colors"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3F3F46] group-hover:bg-[#0066FF] transition-colors" />
                <h3 className="font-mono text-xs font-semibold text-[#E0E0E0] uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="font-body text-[0.875rem] text-[#9A9A9A] bg-[#050505] border border-[#1C1C20] px-3 py-1.5 rounded-md hover:text-[#F5F5F5] hover:border-[#4D4D55] cursor-default transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

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
    <section id="stack" className="bg-[#050505] py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Tecnologias
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight">
            O ecossistema que utilizo
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {SITE_DATA.stackCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-[#0A0A0C] border border-[#1C1C20] hover:border-[#2A2A30] p-6 sm:p-8 rounded-2xl transition-colors duration-300"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-6">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2.5 bg-[#0D0D0F] border border-[#1C1C20] rounded-xl px-4 py-2.5 shadow-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    <span className="font-body text-[0.875rem] font-medium text-[#E0E0E0]">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

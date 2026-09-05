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
              className="flex flex-col"
            >
              <div className="pb-4 mb-4 border-b border-[#1C1C20]">
                <h3 className="font-display text-lg font-semibold text-[#E0E0E0]">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-col gap-2.5">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group flex items-center gap-3 transition-colors"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#2A2A30] group-hover:bg-[#0066FF] transition-colors" />
                    <span className="font-body text-[0.9375rem] text-[#9A9A9A] group-hover:text-[#F5F5F5] transition-colors">
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

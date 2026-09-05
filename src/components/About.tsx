import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Counter } from './Counter';
import { SITE_DATA } from '../data';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion 
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  const itemVariants = shouldReduceMotion 
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };

  return (
    <section id="sobre" className="bg-[#0A0A0C] pt-24 pb-32">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="w-full max-w-7xl mx-auto px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-14">
          <div className="flex items-center gap-2">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-[0.8125rem] font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Sobre mim
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-[3rem] font-bold text-[#F5F5F5] tracking-[-0.02em] mt-4">
            Quem está por trás do código
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[60fr_40fr] gap-16 items-start lg:items-center">
          <div className="flex flex-col gap-6">
            <motion.p variants={itemVariants} className="font-body text-[1.125rem] text-[#9A9A9A] leading-[1.8]">
              {SITE_DATA.profile.aboutDesc1}
            </motion.p>
            <motion.p variants={itemVariants} className="font-body text-[1.125rem] text-[#9A9A9A] leading-[1.8]">
              {SITE_DATA.profile.aboutDesc2}
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {SITE_DATA.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden bg-[#0A0A0C] border border-[#1C1C20] rounded-xl p-6 transition-all duration-300 hover:border-[#4D94FF]/50 hover:bg-[#0D0D0F] hover:-translate-y-1 shadow-sm hover:shadow-[#0066FF]/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="block font-mono text-[0.7rem] tracking-[0.15em] text-[#71717A] uppercase mb-2">
                  {stat.label}
                </span>
                <div className="font-display text-2xl sm:text-3xl font-semibold text-[#E0E0E0] group-hover:text-[#F5F5F5] transition-colors relative z-10 group-hover:scale-[1.02] transform origin-left duration-300">
                  {stat.isNumber && !shouldReduceMotion ? (
                    <Counter from={0} to={stat.value as number} duration={2} suffix={stat.prefix} />
                  ) : (
                    <>{stat.prefix}{stat.value}</>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

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
    <section id="sobre" className="bg-[#0A0A0C] py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Sobre mim
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.25rem] font-bold text-[#F5F5F5] tracking-[-0.02em] mt-3">
            Quem está por trás do código
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[60fr_40fr] gap-12 items-start lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-5"
          >
            <motion.p variants={itemVariants} className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7]">
              {SITE_DATA.profile.aboutDesc1}
            </motion.p>
            <motion.p variants={itemVariants} className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7]">
              {SITE_DATA.profile.aboutDesc2}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {SITE_DATA.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#0D0D0F] border border-[#1C1C20] rounded-xl p-5 sm:p-6 transition-colors duration-300 hover:border-[#2E2E38] hover:bg-[#111114]"
              >
                <div className="font-display text-2xl font-bold text-[#F5F5F5]">
                  {stat.isNumber && !shouldReduceMotion ? (
                    <Counter from={0} to={stat.value as number} duration={2} suffix={stat.prefix} />
                  ) : (
                    <>{stat.prefix}{stat.value}</>
                  )}
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

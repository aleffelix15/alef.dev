import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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

export const Stack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Pinned horizontal scrolling for desktop
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section id="stack" className="bg-[#050505]">
      
      {/* MOBILE LAYOUT (Normal Vertical) */}
      <div className="md:hidden py-24 px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Tecnologias
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold text-[#F5F5F5] mt-3">
            Ferramentas que uso
          </h2>
        </div>
        
        <div className="flex flex-col gap-8">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A] mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center gap-2.5 bg-[#0D0D0F] border border-[#1C1C20] rounded-xl px-4 py-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    <span className="font-body text-[0.9375rem] font-medium text-[#F5F5F5]">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP LAYOUT (Horizontal Scroll) */}
      <div ref={containerRef} className="hidden md:block h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          <div className="absolute left-16 top-1/4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#0066FF]">·</span>
              <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
                Tecnologias
              </span>
            </div>
            <h2 className="font-display text-5xl font-bold text-[#F5F5F5] leading-tight">
              O ecossistema <br/> que utilizo
            </h2>
          </div>

          <motion.div style={{ x }} className="flex gap-16 pl-[40vw] pr-[20vw] items-center w-max">
            {categories.map((category, index) => (
              <div key={index} className="w-[400px] flex-shrink-0 bg-[#0A0A0C] border border-[#1C1C20] p-8 rounded-3xl hover:border-[#2A2A30] transition-colors duration-500">
                <h3 className="font-display text-2xl font-bold text-[#F5F5F5] mb-6">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-2.5 bg-[#0D0D0F] border border-[#1C1C20] hover:border-[#2E2E38] hover:bg-[#111114] rounded-xl px-4 py-3 transition-all duration-300 group shadow-md"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] group-hover:scale-125 transition-transform" />
                      <span className="font-body text-[0.9375rem] font-medium text-[#F5F5F5] group-hover:text-white transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

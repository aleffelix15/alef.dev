import React from 'react';
import { SITE_DATA } from '../data';
import { FadeInWhenVisible, InteractiveCard } from './Animations';

export const Stack: React.FC = () => {
  const mainCategories = SITE_DATA.stackCategories.filter(c => c.name !== 'Infra & OS');
  const infraCategory = SITE_DATA.stackCategories.find(c => c.name === 'Infra & OS');

  return (
    <section id="stack" className="bg-[#050505] py-24 sm:py-32 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <FadeInWhenVisible className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#00C853] animate-pulse">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Tecnologias & Ferramentas
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
            Meu Ecossistema
          </h2>
        </FadeInWhenVisible>

        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {mainCategories.map((category, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <div className="flex flex-col bg-[#0A0A0C] border border-[#1C1C20] p-6 rounded-xl h-full">
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3F3F46]" />
                  <h3 className="font-mono text-xs font-semibold text-[#E0E0E0] uppercase tracking-wider">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.techs.map((tech, techIndex) => (
                    <InteractiveCard 
                      key={techIndex}
                      className="inline-flex font-body text-[0.875rem] text-[#9A9A9A] bg-[#050505] border border-[#1C1C20] px-3.5 py-1.5 rounded-md hover:text-[#00C853] hover:border-[#00C853] hover:bg-[#00C853]/10 hover:shadow-[0_0_15px_rgba(0,200,83,0.2)] transition-colors duration-300"
                    >
                      {tech}
                    </InteractiveCard>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Infra & OS Secondary Grid */}
        {infraCategory && (
          <FadeInWhenVisible delay={0.4}>
            <div className="w-full bg-[#0A0A0C] border border-[#1C1C20] p-6 sm:p-8 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700]" />
                <h3 className="font-mono text-xs font-semibold text-[#E0E0E0] uppercase tracking-wider">
                  {infraCategory.name}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {infraCategory.techs.map((tech, techIndex) => (
                  <InteractiveCard 
                    key={techIndex}
                    className="inline-flex font-body text-[0.875rem] text-[#A1A1AA] bg-[#050505] border border-[#1C1C20] px-4 py-2 rounded-md hover:text-[#FFD700] hover:border-[#FFD700] hover:bg-[#FFD700]/10 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-colors duration-300"
                  >
                    {tech}
                  </InteractiveCard>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        )}

      </div>
    </section>
  );
};

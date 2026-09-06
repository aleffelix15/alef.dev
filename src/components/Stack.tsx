import React from 'react';
import { SITE_DATA } from '../data';
import { FadeInWhenVisible } from './Animations';
import { SpotlightCard } from './SpotlightCard';

export const Stack: React.FC = () => {
  const mainCategories = SITE_DATA.stackCategories.filter(c => c.name !== 'Infra & OS');
  const infraCategory = SITE_DATA.stackCategories.find(c => c.name === 'Infra & OS');

  const getCategoryStyles = (name: string) => {
    switch (name) {
      case 'Frontend': return { dotColor: "bg-[#3B82F6]", spotlight: "rgba(59, 130, 246, 0.15)" }; // Blue
      case 'Backend & APIs': return { dotColor: "bg-[#00C853]", spotlight: "rgba(0, 200, 83, 0.15)" }; // Neon Green
      case 'Styling & UI': return { dotColor: "bg-[#A855F7]", spotlight: "rgba(168, 85, 247, 0.15)" }; // Purple
      case 'Tools & DevOps': return { dotColor: "bg-[#F97316]", spotlight: "rgba(249, 115, 22, 0.15)" }; // Orange
      case 'Infra & OS': return { dotColor: "bg-[#FFD700]", spotlight: "rgba(255, 215, 0, 0.15)" }; // Gold
      default: return { dotColor: "bg-[#3F3F46]", spotlight: "rgba(255, 255, 255, 0.1)" };
    }
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {mainCategories.map((category, index) => {
            const styles = getCategoryStyles(category.name);
            return (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <SpotlightCard spotlightColor={styles.spotlight} className="h-full bg-[#0A0A0C] border border-[#1C1C20] rounded-xl p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${styles.dotColor} shadow-[0_0_10px_currentColor]`} />
                    <h3 className="font-mono text-xs font-bold text-[#E0E0E0] uppercase tracking-wider">
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {category.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-md text-[0.875rem] font-body text-[#A1A1AA] hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </FadeInWhenVisible>
            );
          })}
        </div>

        {/* Infra & OS Secondary Grid */}
        {infraCategory && (
          <FadeInWhenVisible delay={0.4}>
            <SpotlightCard spotlightColor={getCategoryStyles('Infra & OS').spotlight} className="w-full bg-[#0A0A0C] border border-[#1C1C20] p-6 sm:p-8 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <span className={`w-2 h-2 rounded-full ${getCategoryStyles('Infra & OS').dotColor} shadow-[0_0_10px_currentColor] animate-pulse`} />
                  <h3 className="font-mono text-xs font-bold text-[#E0E0E0] uppercase tracking-wider">
                    {infraCategory.name}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {infraCategory.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[0.875rem] font-body text-[#A1A1AA] hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </FadeInWhenVisible>
        )}

      </div>
    </section>
  );
};

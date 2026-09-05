import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { SITE_DATA } from '../data';

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariant = shouldReduceMotion 
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };

  return (
    <section id="contato" className="bg-[#050505] py-32 border-t border-[#1C1C20]/50 relative overflow-hidden">
      
      {/* Background sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUpVariant}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Próximos Passos
            </span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-8 tracking-tight">
            Vamos transformar uma ideia em projeto?
          </h2>
          
          <p className="font-body text-[1.0625rem] sm:text-lg text-[#9A9A9A] leading-relaxed mb-12 max-w-lg mx-auto">
            Estou sempre aberto a novas oportunidades e conversas interessantes. Sinta-se à vontade para entrar em contato.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`mailto:${SITE_DATA.profile.email}`}
              className="group relative overflow-hidden flex items-center justify-center gap-2 bg-[#F5F5F5] hover:bg-white text-[#050505] font-body text-[0.9375rem] font-semibold px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar e-mail</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-6">
            <a 
              href={SITE_DATA.profile.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-[#71717A] hover:text-[#F5F5F5] transition-colors p-2 hover:bg-[#1C1C20] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D4D55]"
            >
              <Github className="w-6 h-6" />
            </a>
            
            <a 
              href={SITE_DATA.profile.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-[#71717A] hover:text-[#F5F5F5] transition-colors p-2 hover:bg-[#1C1C20] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D4D55]"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

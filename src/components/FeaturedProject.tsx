import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function FeaturedProject() {
  return (
    <section id="destaque" className="bg-[#050505] py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Em destaque
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-[55fr_45fr] gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group rounded-2xl border border-[#1C1C20] overflow-hidden aspect-video bg-[#09090D] shadow-2xl relative flex flex-col justify-between select-none"
          >
            {/* Application Window Header */}
            <div className="relative z-10 flex items-center justify-between w-full border-b border-[#1C1C24] px-4 py-2.5 bg-[#0D0D11]/90 backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              </div>
              <div className="bg-[#050505] border border-[#1C1C24] px-4 py-0.5 rounded-md text-[11px] font-mono text-[#A1A1AA]">
                decode-ochre.vercel.app
              </div>
              <span className="font-mono text-[10px] text-[#4D94FF] bg-[#0066FF15] border border-[#0066FF30] px-2 py-0.5 rounded">
                PROJETO
              </span>
            </div>

            {/* Image Preview Container */}
            <div className="relative w-full flex-1 overflow-hidden">
              <img 
                src="/assets/decode_dashboard.png" 
                alt="DECODE — Descriptografando a Violência" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Subtle top/bottom gradient overlay for seamless dark integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090D]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-display text-4xl font-bold text-[#F5F5F5]">
              DECODE
            </h2>
            
            <p className="font-display text-lg text-[#4D94FF] italic mt-2">
              "Descriptografando a Violência."
            </p>

            <p className="font-mono text-xs text-[#71717A] mt-1">
              "O bug está no sistema. Ajude a reescrever o código."
            </p>
            
            <p className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7] mt-5">
              DECODE é um projeto interativo que usa tecnologia e narrativa para conscientizar jovens sobre a violência contra a mulher, mostrando situações do dia a dia e como agir para ajudar e prevenir.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind'].map(tech => (
                <span 
                  key={tech} 
                  className="font-mono text-[0.8125rem] text-[#71717A] bg-[#1C1C2040] px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <motion.a 
              href="https://decode-ochre.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#1A75FF] hover:shadow-[0_0_20px_rgba(0,102,255,0.15)] hover:-translate-y-[1px] text-white font-body text-[0.9375rem] font-semibold px-6 py-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] transition-all duration-300 group"
            >
              Ver projeto
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

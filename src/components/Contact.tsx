import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contato" className="bg-[#050505] py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-[640px] mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Contato
            </span>
          </div>
          
          <h2 className="font-display text-4xl font-bold text-[#F5F5F5] mt-3">
            Vamos construir algo juntos?
          </h2>
          
          <p className="font-body text-[1.0625rem] text-[#9A9A9A] leading-[1.7] mt-6 max-w-[480px] mx-auto">
            Tem um projeto em mente, uma ideia ou só quer trocar uma ideia sobre tecnologia? Me manda uma mensagem — estou sempre aberto a novas conversas e oportunidades.
          </p>
          
          <motion.a 
            href="mailto:aleffelix81@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#1A75FF] hover:shadow-[0_0_20px_rgba(0,102,255,0.15)] hover:-translate-y-[1px] text-white font-body text-[0.9375rem] font-semibold px-6 py-3.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] transition-all duration-300 group"
          >
            Enviar e-mail
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <div className="mt-10 flex flex-row items-center">
            <div className="flex-1 h-px bg-[#2A2A30]" />
            <span className="font-body text-xs uppercase tracking-wider text-[#71717A] px-4 font-medium">
              ou encontre-me
            </span>
            <div className="flex-1 h-px bg-[#2A2A30]" />
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <a 
              href="https://github.com/aleffelix15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-[#0D0D0F] border border-[#1C1C20] hover:border-[#2E2E38] hover:bg-[#111114] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] rounded-xl px-5 py-2.5 transition-all duration-200"
            >
              <Github className="w-4 h-4 text-[#71717A] group-hover:text-[#F5F5F5] transition-colors duration-200" />
              <span className="font-body text-[0.875rem] font-medium text-[#9A9A9A] group-hover:text-[#F5F5F5] transition-colors duration-200">
                GitHub
              </span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/alef-felix-teixeira-a5030b236" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 bg-[#0D0D0F] border border-[#1C1C20] hover:border-[#2E2E38] hover:bg-[#111114] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] rounded-xl px-5 py-2.5 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4 text-[#71717A] group-hover:text-[#F5F5F5] transition-colors duration-200" />
              <span className="font-body text-[0.875rem] font-medium text-[#9A9A9A] group-hover:text-[#F5F5F5] transition-colors duration-200">
                LinkedIn
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

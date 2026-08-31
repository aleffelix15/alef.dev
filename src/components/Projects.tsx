import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { ProjectCard, Project } from './ProjectCard'

const PROJECTS: Project[] = [
  {
    name: 'DECODE',
    description: 'Projeto interativo que usa tecnologia e narrativa para conscientizar jovens sobre a violência contra a mulher, mostrando situações do dia a dia e como agir para ajudar e prevenir.',
    techs: ['React', 'TypeScript', 'Tailwind'],
    status: 'concluido',
    statusLabel: 'Online',
    projectUrl: 'https://decode-ochre.vercel.app',
    githubUrl: 'https://github.com/aleffelix15/decode',
    imageUrl: '/assets/decode_dashboard.png',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
}

export function Projects() {
  return (
    <section id="projetos" className="bg-[#0A0A0C] py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[#0066FF]">·</span>
            <span className="font-body text-xs font-semibold tracking-[0.08em] uppercase text-[#71717A]">
              Projetos
            </span>
          </div>
          <h2 className="font-display text-4xl font-bold text-[#F5F5F5] mt-3">
            O que eu tenho construído
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.name} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}

          <motion.div variants={itemVariants} className="h-full">
            <div className="relative border border-dashed border-[#2A2A30] hover:border-[#383842] rounded-2xl bg-[#09090D]/50 hover:bg-[#0D0D11]/60 min-h-[340px] h-full flex flex-col items-center justify-center gap-4 p-8 text-center overflow-hidden transition-all duration-300 group select-none">
              {/* Subtle background grid pattern */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity"
                style={{
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              <div className="relative z-10 w-12 h-12 rounded-2xl bg-[#121217] border border-[#1C1C24] flex items-center justify-center text-[#71717A] group-hover:text-[#4D94FF] group-hover:border-[#0066FF40] group-hover:shadow-[0_0_20px_rgba(0,102,255,0.15)] transition-all duration-300">
                <Plus className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
              </div>
              
              <div className="relative z-10 max-w-[260px]">
                <h4 className="font-display font-semibold text-base text-[#F5F5F5] tracking-tight">
                  Próximo Projeto
                </h4>
                <p className="font-body text-xs text-[#71717A] mt-1.5 leading-relaxed">
                  Novos produtos e experimentos em desenvolvimento no laboratório.
                </p>
              </div>

              <div className="relative z-10 mt-1">
                <span className="font-mono text-[11px] text-[#71717A] bg-[#121217] border border-[#1C1C24] px-3 py-1 rounded-full">
                  ⚡ em construção
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

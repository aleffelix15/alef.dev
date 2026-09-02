import { Github, ArrowRight } from 'lucide-react'

export interface Project {
  name: string
  description: string
  techs: string[]
  status: 'em-desenvolvimento' | 'concluido' | 'em-breve'
  statusLabel: string
  projectUrl?: string
  githubUrl?: string
  imageUrl?: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    'em-desenvolvimento': 'bg-[#FFAA00]',
    'concluido': 'bg-[#00C853]',
    'em-breve': 'bg-[#71717A]'
  }

  return (
    <div className="group bg-[#0D0D0F] border border-[#1C1C20] rounded-2xl overflow-hidden hover:border-[#2E2E38] hover:shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col h-full">
      {/* Preview area */}
      <div className="relative aspect-video overflow-hidden bg-[#09090D] border-b border-[#1C1C20] rounded-t-2xl flex items-center justify-center">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full relative flex flex-col justify-between p-4 overflow-hidden select-none transition-transform duration-500 group-hover:scale-[1.02]">
            {/* Subtle background grid pattern */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Subtle atmospheric ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#0066FF05] to-transparent pointer-events-none" />

            {/* Mockup Header Bar */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1C1C24] border border-[#2E2E38]" />
                <span className="w-2 h-2 rounded-full bg-[#1C1C24] border border-[#2E2E38]" />
                <span className="w-2 h-2 rounded-full bg-[#1C1C24] border border-[#2E2E38]" />
              </div>
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#71717A]/80 bg-[#121217] border border-[#1C1C24] px-2 py-0.5 rounded">
                app.preview
              </span>
            </div>

            {/* Centered Minimal Identity Badge */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto">
              <div className="w-10 h-10 rounded-xl bg-[#121217] border border-[#1C1C24] flex items-center justify-center shadow-lg group-hover:border-[#2E2E38] transition-colors">
                <span className="font-display font-bold text-sm text-[#F5F5F5] tracking-tight">
                  {project.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#71717A] mt-2 tracking-wide">
                {project.name}
              </span>
            </div>

            {/* Bottom minimal wireframe lines */}
            <div className="relative z-10 flex items-center justify-between w-full pt-2 border-t border-[#1C1C24]/60">
              <div className="flex gap-1.5">
                <div className="w-10 h-1.5 rounded-full bg-[#1C1C24]" />
                <div className="w-6 h-1.5 rounded-full bg-[#1C1C24]" />
              </div>
              <div className="w-12 h-1.5 rounded-full bg-[#0066FF]/20" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold text-[#F5F5F5]">
          {project.name}
        </h3>
        
        <p className="font-body text-[0.9375rem] text-[#9A9A9A] mt-2 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techs.map(tech => (
            <span 
              key={tech} 
              className="font-mono text-[0.8125rem] text-[#71717A] bg-[#1C1C2040] px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${statusColors[project.status]}`} />
          <span className="font-body text-[0.8125rem] font-medium text-[#71717A]">
            {project.statusLabel}
          </span>
        </div>

        <div className="mt-auto pt-6 flex justify-between items-center">
          {project.projectUrl ? (
            <a 
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-[0.9375rem] font-medium text-[#4D94FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] rounded-md px-1.5 py-0.5 group/link"
              onClick={(e) => e.stopPropagation()}
            >
              Ver projeto
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          ) : (
            <div />
          )}

          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-body text-[0.9375rem] text-[#71717A] hover:text-[#9A9A9A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] rounded-md px-1.5 py-0.5 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

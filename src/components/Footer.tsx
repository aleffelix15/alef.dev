import { Github, Linkedin, MessageCircle } from 'lucide-react'
import { SITE_DATA } from '../data'

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1C1C20] py-8">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div className="flex flex-col gap-1">
          <p className="font-body text-[0.8125rem] font-medium text-[#71717A]">
            Feito com dedicação por {SITE_DATA.profile.name}
          </p>
          <p className="font-body text-[0.8125rem] font-medium text-[#71717A]">
            &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={SITE_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-[#71717A] hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={SITE_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-[#71717A] hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/5562985163672?text=Ol%C3%A1%20Alef!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-[#71717A] hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

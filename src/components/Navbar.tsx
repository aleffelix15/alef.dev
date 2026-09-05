import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { SITE_DATA } from '../data';

const navLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Trajetória', href: '#trajetoria' },
  { name: 'Projetos', href: '#projeto' },
  { name: 'Ecossistema', href: '#stack' },
  { name: 'Contato', href: '#contato' }
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else if (diff > 8) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else if (diff < -8) {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl h-16 border-b border-[#1C1C20] transition-transform duration-300 flex items-center justify-center ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Left side */}
          <a
            href="#hero"
            className="font-display font-semibold text-sm text-[#F5F5F5] tracking-[0.04em] uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] rounded-md px-1"
          >
            {SITE_DATA.profile.name}
          </a>

          {/* Right side (Desktop) */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              const isContact = link.name === 'Contato';

              if (isContact) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative overflow-hidden group font-body font-medium text-xs uppercase tracking-wider text-[#F5F5F5] bg-[#0D0D0F] border border-[#1C1C20] hover:border-[#2A2A30] hover:bg-[#111114] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] px-3.5 py-1.5 rounded-lg transition-all"
                  >
                    <div className="absolute inset-0 bg-[#0066FF]/10 translate-y-full group-hover:translate-y-[-100%] group-hover:scale-150 transition-transform duration-700 ease-out rotate-12 blur-sm pointer-events-none" />
                    <span className="relative z-10">Contato</span>
                  </a>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative font-body font-medium text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] rounded-md px-1 py-0.5 ${
                    isActive ? 'text-[#F5F5F5]' : 'text-[#9A9A9A] hover:text-[#F5F5F5]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#0066FF] transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] rounded-lg p-1.5 border border-[#1C1C20] bg-[#0D0D0F]"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#050505]/[0.98] backdrop-blur-2xl flex flex-col justify-between p-8"
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-display font-semibold text-sm text-[#F5F5F5] tracking-[0.04em] uppercase">
                {SITE_DATA.profile.name}
              </span>
              <button
                className="text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] rounded-lg p-1.5 border border-[#1C1C20] bg-[#0D0D0F]"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col w-full max-w-xs mx-auto space-y-4 my-auto">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                    className={`flex items-center justify-between py-3 border-b border-[#1C1C20] font-display text-xl uppercase tracking-wider transition-colors ${
                      isActive ? 'text-[#0066FF] font-bold' : 'text-[#F5F5F5]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#0066FF]" />}
                  </motion.a>
                );
              })}
            </div>

            <div className="text-center text-xs text-[#71717A] font-mono">
              Â© {new Date().getFullYear()} ALEF FELIX
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};




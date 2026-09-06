import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================================================
// 1. HeroSectionWrapper (Animação de entrada principal)
// ============================================================================
interface HeroSectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export const HeroSectionWrapper: React.FC<HeroSectionWrapperProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] // cubic-bezier(0.16, 1, 0.3, 1)
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 2. FadeInWhenVisible (Wrapper para scroll reveal)
// ============================================================================
interface FadeInWhenVisibleProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.55, 
        ease: [0.25, 1, 0.5, 1], 
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 3. InteractiveCard (Para itens de portfólio ou skills)
// ============================================================================
interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({ children, className = '', onClick }) => {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        duration: 0.2, 
        ease: 'easeInOut' 
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 4. DrawerModal (Menu lateral flutuante ou expansão de projeto)
// ============================================================================
interface DrawerModalProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

export const DrawerModal: React.FC<DrawerModalProps> = ({ children, isOpen, className = '' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={className}
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Projetos', href: '#works' },
    { name: 'Sobre mim', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className="main-header">
      <div className="logo">LUIZGSCH</div>
      
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Button */}
      <button 
        className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        <div className="bar bar1" />
        <div className="bar bar2" />
        <div className="bar bar3" />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <nav className="mobile-nav">
              <ul className="mobile-links">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <a href={link.href} onClick={closeMenu}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

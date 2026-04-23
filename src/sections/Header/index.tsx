import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

/**
 * Componente de Cabeçalho (Header)
 * Responsável pela navegação principal, logo e menu mobile responsivo.
 */
export const Header = () => {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado do menu mobile (abrir/fechar)
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Função para fechar o menu mobile explicitamente (ex: ao clicar em um link)
  const closeMenu = () => setIsOpen(false);

  // Lista de links de navegação para facilitar a manutenção e evitar repetição
  const navLinks = [
    { name: 'Sobre mim', href: '#about' },
    { name: 'Projetos', href: '#works' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  // Configurações de animação para o menu mobile (Framer Motion)
  const menuVariants = {
    closed: { opacity: 0, x: '100%' }, // Estado escondido (fora da tela à direita)
    open: { opacity: 1, x: 0 },         // Estado visível (posição original)
  };

  return (
    <header className="main-header">
      {/* Logo do site no canto esquerdo */}
      <div className="logo">LUIZGSCH</div>
      
      {/* Navegação Desktop: Visível apenas em telas maiores (configurado via CSS) */}
      <nav className="desktop-nav">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão Hambúrguer: Controla a abertura do menu em dispositivos móveis */}
      <button 
        className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        {/* Barras que formam o ícone do hambúrguer e se transformam em 'X' via CSS */}
        <div className="bar bar1" />
        <div className="bar bar2" />
        <div className="bar bar3" />
      </button>

      {/* Menu Mobile Overlay: Renderizado apenas quando isOpen for true */}
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
                    // Delay escalonado para criar um efeito de cascata nos links
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {/* Fecha o menu automaticamente após clicar em um link de navegação */}
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

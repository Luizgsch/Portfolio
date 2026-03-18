import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoColorPaletteOutline } from 'react-icons/io5';
import './styles.css';
import { palettes } from '../../../sections/colors';
import type { Palette } from '../../../sections/colors';

export const PaletteSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePaletteName, setActivePaletteName] = useState(palettes[0].name);

  useEffect(() => {
    const savedPaletteName = localStorage.getItem('selected-palette-name');
    if (savedPaletteName) {
      const found = palettes.find((p: Palette) => p.name === savedPaletteName);
      if (found) {
        applyPalette(found);
      }
    }
  }, []);

  const applyPalette = (palette: Palette) => {
    Object.entries(palette.colors).forEach(([variable, value]) => {
      document.documentElement.style.setProperty(variable, value);
    });
    setActivePaletteName(palette.name);
    localStorage.setItem('selected-palette-name', palette.name);
  };

  return (
    <div className="palette-switcher-container">
      <button 
        className="palette-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        title="Trocar Cores"
      >
        <IoColorPaletteOutline size={28} color="white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="palette-popover"
            initial={{ opacity: 0, scale: 0.9, y: 10, x: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10, x: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {palettes.map((p) => (
              <div 
                key={p.name} 
                className={`palette-item ${activePaletteName === p.name ? 'active' : ''}`}
                onClick={() => {
                  applyPalette(p);
                  setIsOpen(false);
                }}
              >
                <div className="palette-preview">
                  <div className="color-dot" style={{ backgroundColor: p.colors['--bg-primary'] }} />
                  <div className="color-dot" style={{ backgroundColor: p.colors['--color-primary'] }} />
                  <div className="color-dot" style={{ backgroundColor: p.colors['--color-secondary'] }} />
                </div>
                <span className="palette-name">{p.name}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

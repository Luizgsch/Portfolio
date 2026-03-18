import { useRef, useEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import { Button } from '../../components/common/Button';
import { ParticleGrid } from './components/ParticleGrid';
import './styles.css';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  // Valores do mouse relativos ao centro do grid (para alinhamento preciso)
  const mouseX = useMotionValue(-5000);
  const mouseY = useMotionValue(-5000);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!visualRef.current) return;

      const rect = visualRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleGlobalMouseLeave = () => {
      mouseX.set(-5000);
      mouseY.set(-5000);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseleave', handleGlobalMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseleave', handleGlobalMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      className="hero-section"
      id="home"
    >
      <div className="hero-container-split">
        {/* Lado Esquerdo: Conteúdo de Texto */}
        <div className="hero-text">
          <p className="hero-detail">DESENVOLVEDOR FULLSTACK — JAVA</p>
          <h1 className="hero-title">
            Construindo aplicações <br /> <span className="highlight">escaláveis</span> e <br /> bem estruturadas.
          </h1>
          <div className="hero-actions">
            <Button
              label="Ver Projetos"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <Button
              label="Contato"
              variant="secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>

        {/* Lado Direito: Grid de Partículas Interativo (Framer Motion) */}
        <div className="hero-visual" ref={visualRef}>
          <ParticleGrid sectionMouseX={mouseX} sectionMouseY={mouseY} />
        </div>
      </div>
    </section>
  );
};






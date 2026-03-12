import { useMemo } from 'react';
import { motion, useSpring, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';
import '../styles.css';

// Configurações do grid para um visual mais "espalhado" e orgânico
const GRID_SIZE_X = 22; 
const GRID_SIZE_Y = 12;
const DOT_SPACING = 35; // Aumentado para espalhar mais as bolinhas

interface ParticleGridProps {
  sectionMouseX: any;
  sectionMouseY: any;
}

export const ParticleGrid = ({ sectionMouseX, sectionMouseY }: ParticleGridProps) => {
  const time = useMotionValue(0);

  // Animação contínua para o efeito de "respiração"
  useAnimationFrame((t) => {
    time.set(t / 1000);
  });

  // Configuração de mola mais reativa e precisa (menos delay)
  const springConfig = { damping: 40, stiffness: 400 };
  const smoothMouseX = useSpring(sectionMouseX, springConfig);
  const smoothMouseY = useSpring(sectionMouseY, springConfig);

  // Gerar partículas com "jitter" (desvio aleatório) para não parecer um grid quadrado
  const particles = useMemo(() => {
    const list = [];
    const totalWidth = (GRID_SIZE_X - 1) * DOT_SPACING;
    const totalHeight = (GRID_SIZE_Y - 1) * DOT_SPACING;
    
    for (let i = 0; i < GRID_SIZE_X; i++) {
      for (let j = 0; j < GRID_SIZE_Y; j++) {
        // Adiciona um pequeno desvio aleatório para quebrar a rigidez do grid
        const jitterX = (Math.random() - 0.5) * 15;
        const jitterY = (Math.random() - 0.5) * 15;
        
        list.push({ 
          id: `${i}-${j}`, 
          x: i * DOT_SPACING - totalWidth / 2 + jitterX, 
          y: j * DOT_SPACING - totalHeight / 2 + jitterY,
          baseScale: 0.6 + Math.random() * 0.4, // Escala inicial variada
          baseOpacity: 0.1 + Math.random() * 0.2 // Opacidade inicial variada
        });
      }
    }
    return list;
  }, []);

  return (
    <div className="particle-grid-container">
      <div className="particle-grid-wrapper">
        {particles.map((p) => (
          <Particle 
            key={p.id} 
            x={p.x} 
            y={p.y} 
            baseScale={p.baseScale}
            baseOpacity={p.baseOpacity}
            mouseX={smoothMouseX} 
            mouseY={smoothMouseY}
            time={time}
          />
        ))}
      </div>
    </div>
  );
};

interface ParticleProps {
  x: number;
  y: number;
  baseScale: number;
  baseOpacity: number;
  mouseX: any;
  mouseY: any;
  time: any;
}

const Particle = ({ x, y, baseScale, baseOpacity, mouseX, mouseY, time }: ParticleProps) => {
  const distance = useTransform([mouseX, mouseY], ([latestX, latestY]: any[]) => {
    const dx = latestX - x;
    const dy = latestY - y;
    return Math.sqrt(dx * dx + dy * dy);
  });

  // Onda interativa mais profunda e suave
  const mouseWaveY = useTransform(distance, [0, 300, 600], [-50, -10, 0], { clamp: true });
  
  // Onda orgânica (respiração)
  const organicWaveY = useTransform(time, (t: number) => {
    return Math.sin(t + (x + y) * 0.015) * 10;
  });

  const translateY = useTransform([mouseWaveY, organicWaveY], ([mw, ow]: any[]) => mw + ow);
  
  // Escala e opacidade reagem à distância de forma mais orgânica
  const scale = useTransform(distance, [0, 300, 600], [baseScale * 2.5, baseScale, baseScale * 0.8], { clamp: true });
  const opacity = useTransform(distance, [0, 300, 600], [0.8, baseOpacity * 1.5, baseOpacity], { clamp: true });

  return (
    <motion.div
      className="grid-dot"
      style={{
        x,
        y,
        translateY,
        scale,
        opacity,
      }}
    />
  );
};




import { motion } from 'framer-motion';
import './styles.css';

export const About = () => {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Docker', level: 70 },
    { name: 'SQL', level: 85 },
  ];

  const highlights = [
    "5º Lugar na Olimpíada Brasileira de Robótica",
    "Tech Lead em Projetos Universitários",
    "Foco em Arquitetura Limpa e Performance",
    "Desenvolvimento Fullstack com Ênfase em Backend"
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-label">SOBRE MIM</span>
          <h2 className="about-title">
            Transformando complexidade em <br /> <span>soluções elegantes.</span>
          </h2>

          <div className="about-grid">
            <div className="about-text-column">
              <p className="about-description">
                Sou um desenvolvedor apaixonado por construir sistemas robustos e escaláveis.
                Minha jornada começou na robótica competitiva, onde aprendi a importância da
                precisão e do trabalho em equipe sob pressão.
              </p>
              <p className="about-description">
                Hoje, foco no ecossistema Java e em arquiteturas modernas de frontend,
                buscando sempre o equilíbrio entre tecnologia de ponta e valor de negócio.
              </p>

              <div className="about-highlights">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="highlight-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="highlight-dot" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="about-skills-column">
              <h3 className="skills-subtitle">Hard Skills</h3>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="about-cta-box">
                <p>Interessado em colaborar em algo incrível?</p>
                <a href="#contact" className="about-cta-link">Vamos conversar →</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elemento Decorativo */}
      <div className="about-decoration" />
    </section>
  );
};

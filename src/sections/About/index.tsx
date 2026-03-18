import { motion } from 'framer-motion';
import './styles.css';
import react from '/home/luiz/Documentos/Portifolio/meu-portfolio/src/assets/react.png';
import typescript from '/home/luiz/Documentos/Portifolio/meu-portfolio/src/assets/typescript.png';
import java from '/home/luiz/Documentos/Portifolio/meu-portfolio/src/assets/java.png';
import sql from '/home/luiz/Documentos/Portifolio/meu-portfolio/src/assets/sql.png';
import springboot from '/home/luiz/Documentos/Portifolio/meu-portfolio/src/assets/springboot.png';
import docker from '/home/luiz/Documentos/Portifolio/meu-portfolio/src/assets/docker.png';
import git from '/home/luiz/Documentos/Portifolio/meu-portfolio/src/assets/git.png';
import kanbam from '/home/luiz/Documentos/Portifolio/meu-portfolio/src/assets/kanbam.png';

export const About = () => {
  const bentoSkills = [
    { name: 'React', desc: 'Criação de interfaces dinâmicas, componentes altamente reutilizáveis e gerenciamento de estados.', img: react, type: 'large' },
    { name: 'TypeScript', img: typescript, type: 'medium' },
    { name: 'SQL', img: sql, type: 'small' },
    { name: 'Spring Boot', desc: 'Construção de APIs seguras e escaláveis utilizando arquitetura limpa.', img: springboot, type: 'large' },
    { name: 'Docker', img: docker, type: 'small' },
    { name: 'Git', img: git, type: 'small' },
    { name: 'Kanbam', img: kanbam, type: 'small' },
    { name: 'Java', img: java, type: 'medium' }
  ];

  const highlights = [
    "5º Lugar na Olimpíada Brasileira de Robótica",
    "Tech Lead em Projetos Universitários",
    "Foco em Arquitetura Limpa e Performance",
    "Desenvolvimento Fullstack com Ênfase em Backend"
  ];

  return (
    <section className="about-section bg-secondary" id="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-grid">
            <div className="about-text-column">
              <span className="about-label">SOBRE MIM</span>
              <h2 className="about-title">
                Transformando complexidade em <br /> <span>soluções elegantes.</span>
              </h2>

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

              <div className="bento-grid">
                {bentoSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`bento-card card ${skill.type}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bento-icon-wrapper">
                      <img src={skill.img} alt={skill.name} className="bento-icon" />
                    </div>

                    <div className="bento-content">
                      <span className="bento-name">{skill.name}</span>
                      {skill.desc && <p className="bento-desc">{skill.desc}</p>}
                    </div>
                  </motion.div>
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

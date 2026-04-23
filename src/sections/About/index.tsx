import { useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';
import { SkillDetailModal } from './SkillDetailModal';
import react from '../../assets/react.png';
import typescript from '../../assets/typescript.png';
import java from '../../assets/java.png';
import sql from '../../assets/sql.png';
import springboot from '../../assets/springboot.png';
import docker from '../../assets/docker.png';
import git from '../../assets/git.png';
import kanbam from '../../assets/kanbam.png';

type BentoSkill = {
  name: string;
  img: string;
  type: 'large' | 'medium' | 'small';
  desc?: string;
  what: string;
  daily: string;
};

export const About = () => {
  const bentoSkills: BentoSkill[] = [
    {
      name: 'React',
      desc: 'Criação de interfaces dinâmicas, componentes altamente reutilizáveis e gerenciamento de estados.',
      img: react,
      type: 'large',
      what:
        'React é uma biblioteca JavaScript para construir interfaces a partir de componentes reutilizáveis, com estado reativo e um ecossistema maduro para SPA e integração com APIs.',
      daily:
        'No dia a dia uso para montar telas do portfólio e de projetos como Command Center e ONG: formulários, listagens, modais e consumo de endpoints REST, organizando código em componentes e hooks para manter tudo legível.',
    },
    {
      name: 'TypeScript',
      img: typescript,
      type: 'medium',
      what:
        'TypeScript é JavaScript com tipagem estática opcional: ajuda a documentar contratos de dados e a pegar erros ainda no editor, antes de rodar o app.',
      daily:
        'Tipagem de props, respostas de API e modelos compartilhados entre front e contratos OpenAPI; isso reduz retrabalho em refatorações e facilita revisão de código em equipe.',
    },
    {
      name: 'SQL',
      img: sql,
      type: 'small',
      what:
        'SQL é a linguagem padrão para consultar e manipular dados em bancos relacionais (PostgreSQL, MySQL, etc.), com foco em integridade e consultas declarativas.',
      daily:
        'Modelagem de tabelas, chaves e índices; escrita de queries em serviços backend e validação de regras junto ao ORM ou JDBC; migrations quando o esquema evolui com o produto.',
    },
    {
      name: 'Spring Boot',
      desc: 'Construção de APIs seguras e escaláveis utilizando arquitetura limpa.',
      img: springboot,
      type: 'large',
      what:
        'Spring Boot é um framework Java que acelera APIs REST, segurança, persistência e configuração por convenção, muito usado em backends corporativos.',
      daily:
        'Controllers REST, serviços de domínio, integração com banco via JPA ou JDBC, validação de payloads e documentação Swagger — padrão que usei no módulo de usuários e agendamento de tarefas.',
    },
    {
      name: 'Docker',
      img: docker,
      type: 'small',
      what:
        'Docker empacota aplicações em containers com dependências isoladas, aproximando o ambiente de desenvolvimento do de produção.',
      daily:
        'Dockerfile para subir API e front localmente, alinhar versões de Node/Java com o time e preparar builds reproduzíveis em pipelines ou deploy em nuvem.',
    },
    {
      name: 'Git',
      img: git,
      type: 'small',
      what:
        'Git é o sistema de controle de versão distribuído mais usado no mercado: branches, merges e histórico confiável do código.',
      daily:
        'Commits atômicos com mensagens claras, branches por feature, pull requests no GitHub e resolução de conflitos — fluxo diário em todo projeto versionado.',
    },
    {
      name: 'Kanban',
      img: kanbam,
      type: 'small',
      what:
        'Kanban é um método visual de fluxo de trabalho (a fazer, em progresso, concluído) que limita trabalho em andamento e deixa gargalos explícitos.',
      daily:
        'Organizo backlog e entregas em quadros digitais durante Tech Lead e projetos acadêmicos: priorização, WIP e transparência com stakeholders.',
    },
    {
      name: 'Java',
      img: java,
      type: 'medium',
      what:
        'Java é uma linguagem orientada a objetos, madura e performática, base de ecossistemas como Spring em serviços backend de grande escala.',
      daily:
        'Implementação de regras de negócio, DTOs, camadas de serviço e integração com banco e filas; linguagem principal nos backends que construo com Spring Boot.',
    },
  ];

  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const activeSkill =
    expandedSkill !== null
      ? bentoSkills.find((s) => s.name === expandedSkill) ?? null
      : null;

  const toggleSkill = (name: string) => {
    setExpandedSkill((prev) => (prev === name ? null : name));
  };

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
              <p className="skills-hint">Clique em uma tecnologia para ver detalhes.</p>

              <div className="bento-grid">
                {bentoSkills.map((skill, index) => (
                  <motion.button
                    type="button"
                    key={skill.name}
                    className={`bento-card card ${skill.type} ${expandedSkill === skill.name ? 'is-active' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => toggleSkill(skill.name)}
                    aria-expanded={expandedSkill === skill.name}
                    aria-controls={
                      expandedSkill === skill.name
                        ? 'skill-detail-dialog'
                        : undefined
                    }
                  >
                    <div className="bento-icon-wrapper">
                      <img src={skill.img} alt="" className="bento-icon" />
                    </div>

                    <div className="bento-content">
                      <span className="bento-name">{skill.name}</span>
                      {skill.desc && <p className="bento-desc">{skill.desc}</p>}
                    </div>
                  </motion.button>
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

      <SkillDetailModal
        skill={activeSkill}
        onClose={() => setExpandedSkill(null)}
      />
    </section>
  );
};

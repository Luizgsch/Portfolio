import { useState } from 'react';
import './styles.css';
import ong from '../../assets/ong.png';
import ong1 from '../../assets/ong1.png';
import jornada from '../../assets/jornada.png';
import obr from '../../assets/obr.png';
import swagger1 from '../../assets/swagger1.png';
import swagger2 from '../../assets/swagger2.png';
import jornadaPdf from '../../assets/jornada1.pdf';
import manuais from '../../assets/Manuais.png';
import projeto from '../../assets/Projeto_tecnico.png';
import manuais1 from '../../assets/Manuais1.png';
import {
  ProjectDetailModal,
  type ProjectDetail,
} from './ProjectDetailModal';

const projetosData: ProjectDetail[] = [
  {
    id: 0,
    category: 'Impacto social',
    title: 'ONG Rango de Rua',
    description:
      'Plataforma fullstack para voluntários: React e TypeScript no front, API em Node.js e PostgreSQL. Inscrições vão ao banco, o administrador recebe e-mail ao concluir o questionário e pode atualizar imagens da vitrine estilo Instagram. A ONG leva marmitas, roupas e cobertores a quem vive nas ruas há mais de 13 anos.',
    image: ong,
    tabs: [
      {
        id: 'missao',
        label: 'Missão',
        image: ong,
        body:
          'A Rango de Rua atua há mais de 13 anos preparando e distribuindo marmitas para moradores de rua, com compromisso diário com alimentação digna e acolhimento. Além das refeições, a organização distribui roupas, cobertores e outros itens que fazem diferença no frio e na rotina de quem está em situação de vulnerabilidade.\n\nA aplicação web foi pensada para apoiar esse trabalho: aproximar novos voluntários da causa e dar ferramentas simples para a equipe divulgar e manter o site alinhado à realidade da ONG.',
      },
      {
        id: 'plataforma',
        label: 'Plataforma',
        image: ong1,
        body:
          'O frontend foi construído em React com TypeScript; o backend em Node.js expõe uma API REST na qual as funcionalidades foram implementadas com métodos HTTP GET (buscar dados, listagens e conteúdo público) e POST (envio de formulários, cadastro de voluntários e operações de criação ou atualização no servidor). O banco PostgreSQL armazena as inscrições e demais registros.\n\nQuando um voluntário finaliza o questionário, o administrador recebe um e-mail automático. No painel, é possível incluir e substituir imagens exibidas na aba voltada ao Instagram, atualizando a vitrine sem retrabalho técnico.',
      },
    ],
    actions: [
      {
        label: 'Acessar site',
        type: 'link',
        href: 'https://ong-rango-de-rua-9o7b.vercel.app/',
      },
      {
        label: 'Ver no GitHub',
        type: 'link',
        href: 'https://github.com/Luizgsch/ONG_RangoDeRua',
      },
    ],
  },
  {
    id: 1,
    category: 'Arquitetura de Software',
    title: 'Agendador de Tarefas',
    description:
      'API REST com Java/Spring Boot. Módulo completo de usuários, autenticação JWT, integração SQL e documentação Swagger. Foco em arquitetura limpa e escalabilidade.',
    image: swagger1,
    tabs: [
      {
        id: 'visao',
        label: 'Visão geral',
        image: swagger1,
        body:
          'API REST desenvolvida em Java com Spring Boot para cadastro e agendamento de tarefas vinculadas a usuários. O módulo cobre persistência em SQL, regras de negócio claras e endpoints pensados para evoluir com novos recursos sem acoplamento excessivo.\n\nAutenticação JWT, validação de entrada e separação em camadas facilitam manutenção e testes. O objetivo foi demonstrar backend profissional, legível e preparado para integração com outros sistemas.',
      },
      {
        id: 'docs',
        label: 'Documentação',
        image: swagger2,
        body:
          'A API é documentada com Swagger/OpenAPI, permitindo explorar rotas, payloads e respostas diretamente no navegador. Isso reduz atrito para quem consome o serviço e serve como contrato vivo entre backend e clientes.\n\nA documentação acompanha o código e ajuda a manter consistência de DTOs, códigos HTTP e exemplos de uso ao longo do tempo.',
      },
    ],
    actions: [
      {
        label: 'Ver no GitHub',
        type: 'link',
        href: 'https://github.com/Luizgsch/usuario',
      },
    ],
  },
  {
    id: 2,
    category: 'Engenharia e Liderança',
    title: 'Robótica Competitiva',
    description:
      'Conquista do 5º lugar na Olimpíada Brasileira de Robótica. Liderança técnica em hardware e estratégia competitiva para robôs autônomos de alto desempenho.',
    image: obr,
    tabs: [
      {
        id: 'resultado',
        label: 'Resultado',
        image: obr,
        body:
          'Participação na Olimpíada Brasileira de Robótica com desempenho consistente até a classificação entre os melhores colocados (5º lugar). O trabalho envolveu ciclos de teste em pista, ajuste de estratégia e entrega sob pressão de tempo, próximo de cenários reais de competição.\n\nO foco esteve em confiabilidade do robô autônomo, repetibilidade de manobras e decisões técnicas alinhadas ao regulamento.',
      },
      {
        id: 'lideranca',
        label: 'Liderança',
        image: obr,
        body:
          'Atuação com liderança técnica na integração entre mecânica, eletrônica e software embarcado. Organização de prioridades, prototipagem rápida e comunicação clara com a equipe foram centrais para manter o projeto dentro do cronograma.\n\nA experiência reforçou gestão de riscos, negociação de escopo dentro das regras e tomada de decisão baseada em dados coletados em testes.',
      },
    ],
    actions: [
      {
        label: 'Falar sobre o projeto',
        type: 'scroll',
        href: 'contact',
      },
    ],
  },
  {
    id: 3,
    category: 'Gestão de Projetos',
    title: 'Manual de Materiais',
    description:
      'Liderança técnica (Tech Lead) e gestão de requisitos usando Scrum. Modelagem de dados e documentação para software de engenharia de materiais.',
    image: jornada,
    tabs: [
      {
        id: 'produto',
        label: 'Produto',
        image: jornada,
        body:
          'Software voltado à documentação e consulta de materiais para engenharia, com foco em organização de informações, rastreabilidade e apoio a decisões técnicas. O produto nasceu de requisitos levantados junto ao time e usuários-chave.\n\nComo Tech Lead, conduzi alinhamento de escopo, priorização de backlog e garantia de que entregas mantivessem qualidade de modelo de dados e usabilidade.',
      },
      {
        id: 'processo',
        label: 'Processo',
        image: projeto,
        body:
          'Gestão de trabalho com Scrum: sprints, refinamento de backlog e revisões para reduzir incerteza. O fluxo no quadro Kanban ajudou a visualizar gargalos e manter transparência entre desenvolvimento e stakeholders.\n\nDocumentação técnica e decisões de arquitetura foram registradas para onboarding e continuidade do projeto após entregas incrementais.',
      },
    ],
    actions: [
      {
        label: 'Baixar PDF técnico',
        type: 'download',
        href: jornadaPdf,
      },
    ],
  },
  {
    id: 4,
    category: 'Solução Corporativa',
    title: 'Sistema Command Center',
    description:
      'Software para Command Center que digitaliza processos de RH. Rastreamento de vagas e candidatos, gestão de manuais e uniformes, com gráficos e dashboards visando a organização empresarial.',
    image: manuais,
    tabs: [
      {
        id: 'solucao',
        label: 'Solução',
        image: manuais,
        body:
          'Sistema web para Command Center que centraliza processos de RH: vagas, candidatos, manuais e uniformes, com visão por painéis e indicadores. A proposta é reduzir planilhas paralelas e dar uma fonte única de informação para o time operacional.\n\nFluxos foram pensados para uso recorrente, com ênfase em clareza de telas e consistência de dados entre módulos.',
      },
      {
        id: 'stack',
        label: 'Stack',
        image: manuais1,
        body:
          'Interface construída em React, com organização de componentes e estado adequados para formulários, listagens e gráficos. O deploy em GitHub Pages viabiliza demonstração pública do protótipo e evolução contínua via repositório aberto.\n\nO repositório documenta como executar o projeto localmente e a estrutura principal de pastas para novas contribuições.',
      },
    ],
    actions: [
      {
        label: 'Acessar sistema',
        type: 'link',
        href: 'https://luizgsch.github.io/Sistema_Jornada/',
      },
      {
        label: 'Ver no GitHub',
        type: 'link',
        href: 'https://github.com/Luizgsch/Sistema_Jornada',
      },
    ],
  },
];

export const Projetos = () => {
  const [detailedProject, setDetailedProject] = useState<ProjectDetail | null>(
    null,
  );

  const handleAction = (type: string, link: string) => {
    if (type === 'link') {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else if (type === 'download') {
      const aElem = document.createElement('a');
      aElem.href = link;
      aElem.download = 'projeto_tecnico.pdf';
      aElem.click();
    } else if (type === 'scroll') {
      setDetailedProject(null);
      document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="projetos-section bg-primary" id="works">
      <div className="projetos-container">
        <div className="projetos-header">
          <span className="section-label">PROJETOS</span>
          <h2 className="section-title">
            Trabalhos em <span>Destaque</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projetosData.map((projeto) => (
            <div key={projeto.id} className="project-card card">
              <div className="project-image-wrapper">
                <img
                  src={projeto.image}
                  alt={projeto.title}
                  className="project-image"
                />
                <div className="project-tag">{projeto.category}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{projeto.title}</h3>
                <p className="project-description">{projeto.description}</p>

                <div className="project-actions">
                  <button
                    type="button"
                    className="button-primary"
                    onClick={() => setDetailedProject(projeto)}
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={detailedProject}
        onClose={() => setDetailedProject(null)}
        onAction={handleAction}
      />
    </section>
  );
};

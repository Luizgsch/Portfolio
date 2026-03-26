import './styles.css';
import jornada from '../../assets/jornada.png';
import obr from '../../assets/obr.png';
import swagger1 from '../../assets/swagger1.png';
import jornadaPdf from '../../assets/jornada1.pdf';
import manuais from '../../assets/Manuais.png';

const projetosData = [
  {
    id: 0,
    category: "Arquitetura de Software",
    title: "Agendador de Tarefas",
    description: "API REST com Java/Spring Boot. Módulo completo de usuários, autenticação JWT, integração SQL e documentação Swagger. Foco em arquitetura limpa e escalabilidade.",
    buttonText: "Ver no GitHub",
    image: swagger1,
    actionType: 'link',
    link: 'https://github.com/Luizgsch/usuario'
  },
  {
    id: 1,
    category: "Engenharia e Liderança",
    title: "Robótica Competitiva",
    description: "Conquista do 5º lugar na Olimpíada Brasileira de Robótica. Liderança técnica em hardware e estratégia competitiva para robôs autônomos de alto desempenho.",
    buttonText: "Saiba mais",
    image: obr,
    actionType: 'scroll',
    link: 'contact'
  },
  {
    id: 2,
    category: "Gestão de Projetos",
    title: "Manual de Materiais",
    description: "Liderança técnica (Tech Lead) e gestão de requisitos usando Scrum. Modelagem de dados e documentação para software de engenharia de materiais.",
    buttonText: "Baixar PDF técnico",
    image: jornada,
    actionType: 'download',
    link: jornadaPdf
  },
  {
    id: 3,
    category: "Solução Corporativa",
    title: "Sistema Command Center",
    description: "Software para Command Center que digitaliza processos de RH. Rastreamento de vagas e candidatos, gestão de manuais e uniformes, com gráficos e dashboards visando a organização empresarial.",
    buttonText: "Acessar Sistema",
    image: manuais,
    actionType: 'link',
    link: 'https://luizgsch.github.io/Sistema_Jornada/',
    buttonText2: "Ver no GitHub",
    actionType2: 'link',
    link2: 'https://github.com/Luizgsch/Sistema_Jornada'
  }
];

export const Projetos = () => {
  const handleAction = (type: string, link: string) => {
    if (type === 'link') {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else if (type === 'download') {
      const aElem = document.createElement('a');
      aElem.href = link;
      aElem.download = 'projeto_tecnico.pdf';
      aElem.click();
    } else if (type === 'scroll') {
      document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="projetos-section bg-primary" id="works">
      <div className="projetos-container">
        <div className="projetos-header">
          <span className="section-label">PROJETOS</span>
          <h2 className="section-title">Trabalhos em <span>Destaque</span></h2>
        </div>

        <div className="projects-grid">
          {projetosData.map((projeto) => (
            <div key={projeto.id} className="project-card card">
              <div className="project-image-wrapper">
                <img src={projeto.image} alt={projeto.title} className="project-image" />
                <div className="project-tag">{projeto.category}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{projeto.title}</h3>
                <p className="project-description">{projeto.description}</p>
                
                <div className="project-actions">
                  <button 
                    className="button-primary"
                    onClick={() => handleAction(projeto.actionType, projeto.link)}
                  >
                    {projeto.buttonText}
                  </button>
                  {projeto.buttonText2 && (
                    <button 
                      className="button-secondary"
                      onClick={() => handleAction(projeto.actionType2, projeto.link2)}
                    >
                      {projeto.buttonText2}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import './styles.css';
import jornada from '../../assets/jornada.png';
import obr from '../../assets/obr.png';
import swagger1 from '../../assets/swagger1.png';
import jornadaPdf from '../../assets/jornada1.pdf';

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
  }
];

export const Projetos = () => {
  const handleAction = (projeto: typeof projetosData[0]) => {
    if (projeto.actionType === 'link') {
      window.open(projeto.link, '_blank', 'noopener,noreferrer');
    } else if (projeto.actionType === 'download') {
      const link = document.createElement('a');
      link.href = projeto.link;
      link.download = 'projeto_tecnico.pdf';
      link.click();
    } else if (projeto.actionType === 'scroll') {
      document.getElementById(projeto.link)?.scrollIntoView({ behavior: 'smooth' });
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
                
                <button 
                  className="button-primary"
                  onClick={() => handleAction(projeto)}
                >
                  {projeto.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

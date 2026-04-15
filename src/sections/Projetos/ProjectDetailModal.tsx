import { useEffect, useId, useState } from 'react';

export type ProjectDetailAction = {
  label: string;
  type: 'link' | 'download' | 'scroll';
  href: string;
};

export type ProjectDetailTab = {
  id: string;
  label: string;
  image: string;
  body: string;
};

export type ProjectDetail = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  tabs: ProjectDetailTab[];
  actions: ProjectDetailAction[];
};

type ProjectDetailModalProps = {
  project: ProjectDetail | null;
  onClose: () => void;
  onAction: (type: string, link: string) => void;
};

export const ProjectDetailModal = ({
  project,
  onClose,
  onAction,
}: ProjectDetailModalProps) => {
  const titleId = useId();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    if (!project) return;
    setActiveTab(project.tabs[0]?.id ?? '');
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const tabContent =
    project.tabs.find((t) => t.id === activeTab) ?? project.tabs[0];

  return (
    <div
      className="project-modal-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Fechar detalhes do projeto"
        >
          ×
        </button>

        <div className="project-modal-header">
          <span className="project-modal-tag">{project.category}</span>
          <h2 id={titleId} className="project-modal-title">
            {project.title}
          </h2>
        </div>

        <div
          className="project-modal-tabs"
          role="tablist"
          aria-label="Seções do projeto"
        >
          {project.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`project-modal-tab ${activeTab === tab.id ? 'is-active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="project-modal-body" role="tabpanel">
          <div className="project-modal-image-wrap">
            <img
              src={tabContent.image}
              alt=""
              className="project-modal-image"
            />
          </div>
          <div className="project-modal-text">
            {tabContent.body.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="project-modal-footer">
          <div className="project-modal-actions">
            {project.actions.map((action, index) => (
              <button
                key={`${action.label}-${action.href}`}
                type="button"
                className={
                  index === 0 ? 'button-primary' : 'button-secondary'
                }
                onClick={() => onAction(action.type, action.href)}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

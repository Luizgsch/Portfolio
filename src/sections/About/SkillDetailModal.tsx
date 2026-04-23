import { useEffect, useId } from 'react';

export type SkillDetail = {
  name: string;
  img: string;
  what: string;
  daily: string;
};

type SkillDetailModalProps = {
  skill: SkillDetail | null;
  onClose: () => void;
};

export const SkillDetailModal = ({ skill, onClose }: SkillDetailModalProps) => {
  const titleId = useId();

  useEffect(() => {
    if (!skill) return;

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
  }, [skill, onClose]);

  if (!skill) return null;

  return (
    <div
      className="skill-modal-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="skill-detail-dialog"
        className="skill-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="skill-modal-close"
          onClick={onClose}
          aria-label="Fechar detalhes da tecnologia"
        >
          ×
        </button>

        <div className="skill-modal-header">
          <span className="skill-modal-tag">Hard skill</span>
          <div className="skill-modal-title-row">
            <img src={skill.img} alt="" className="skill-modal-thumb" />
            <h2 id={titleId} className="skill-modal-title">
              {skill.name}
            </h2>
          </div>
        </div>

        <div className="skill-modal-body">
          <div className="skill-modal-block">
            <h3 className="skill-modal-label">O que é</h3>
            <p className="skill-modal-text">{skill.what}</p>
          </div>
          <div className="skill-modal-block">
            <h3 className="skill-modal-label">Como uso no dia a dia</h3>
            <p className="skill-modal-text">{skill.daily}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

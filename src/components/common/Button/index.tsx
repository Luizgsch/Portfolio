import './styles.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  const className = variant === 'primary' ? 'button-primary' : 'button-secondary';
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};


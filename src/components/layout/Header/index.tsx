import './styles.css';

export const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">LUIZGSCH</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#works">Projetos</a></li>
          <li><a href="#about">Sobre mim</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

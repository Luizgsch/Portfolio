import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projetos } from './sections/Projetos';
import { Contact } from './sections/Contact';
import { PaletteSwitcher } from './components/common/PaletteSwitcher';
import './styles/global.css';

function App() {
  return (
    <div className="app-root">
      <Header />
      <Hero />
      <About />
      <Projetos />
      <Contact />
      <PaletteSwitcher />
    </div>
  );
}

export default App;

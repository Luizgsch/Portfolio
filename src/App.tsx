import { Header } from './components/layout/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projetos } from './sections/Projetos';
import { Contact } from './sections/Contact';
import './styles/global.css';

function App() {
  return (
    <div className="app-root">
      <Header />
      <Hero />
      <About />
      <Projetos />
      <Contact />
    </div>
  );
}

export default App;

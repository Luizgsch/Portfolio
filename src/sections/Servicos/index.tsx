import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { motion } from 'framer-motion';
import './styles.css';

type ServiceItem = {
  title: string;
  description: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  tagline?: string;
  items: ServiceItem[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: 'digital',
    title: 'Presença Digital e Vendas',
    tagline: 'Perfeito para seu negócio',
    items: [
      {
        title: 'Landing Pages de Alta Conversão',
        description:
          'Páginas focadas em um único produto ou serviço, otimizadas para transformar visitantes de anúncios em clientes.',
      },
      {
        title: 'E-commerce Completo (SaaS)',
        description:
          'Lojas virtuais rápidas, seguras e fáceis de gerenciar, com catálogo de produtos e checkout integrado.',
      },
      {
        title: 'Sites Institucionais Modernos',
        description:
          'Sua empresa no Google com um visual profissional que transmite confiança e autoridade.',
      },
    ],
  },
  {
    id: 'automacao',
    title: 'Automação e Gestão',
    tagline: 'Onde a IA trabalha para você',
    items: [
      {
        title: 'Bots de Atendimento (WhatsApp/Web)',
        description:
          'Atendimento automático 24h para tirar dúvidas, enviar orçamentos e agendar horários.',
      },
      {
        title: 'Gestão Financeira Simplificada',
        description:
          'Softwares customizados para controle de entrada e saída de caixa (fluxo de caixa) sem a complexidade de sistemas robustos.',
      },
      {
        title: 'Controle de Estoque Inteligente',
        description:
          'Painel para gerir produtos, com avisos automáticos de reposição e relatórios de vendas.',
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing e Visibilidade',
    items: [
      {
        title: 'Gestão de Tráfego Pago',
        description:
          'Criação e otimização de anúncios no Google e Instagram para trazer clientes qualificados diariamente.',
      },
      {
        title: 'Google Maps Profissional (Local SEO)',
        description:
          'Indexação e otimização para que sua loja apareça no topo quando alguém buscar pelo seu serviço na região.',
      },
      {
        title: 'Sistemas de Fidelidade / Cashback',
        description:
          'Ferramentas web para manter seus clientes comprando sempre, através de pontos ou recompensas.',
      },
    ],
  },
];

const slideCount = serviceCategories.length;

/** Mais área útil do card em telas estreitas; prévia lateral em telas largas. */
function slideRatioForViewportWidth(vw: number): number {
  if (vw < 360) return 0.94;
  if (vw < 480) return 0.9;
  if (vw < 640) return 0.86;
  if (vw < 900) return 0.84;
  return 0.82;
}

export const Servicos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [slideW, setSlideW] = useState(0);
  const [sidePad, setSidePad] = useState(0);

  const measure = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const vw = el.clientWidth;
    if (vw < 1) return;
    const ratio = slideRatioForViewportWidth(vw);
    const w = Math.round(vw * ratio * 100) / 100;
    const pad = Math.round(((vw - w) / 2) * 100) / 100;
    setSlideW(w);
    setSidePad(Math.max(0, pad));
  }, []);

  useLayoutEffect(() => {
    measure();
    const el = viewportRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  /* Deve coincidir com o espaçamento real entre slides (ex.: gap no flex). Sem gap → só slideW. */
  const translateX =
    slideW > 0 ? Math.round(activeIndex * slideW * 100) / 100 : 0;

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + slideCount) % slideCount);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % slideCount);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.closest('input, textarea, select, [contenteditable="true"]')) {
        return;
      }
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goPrev, goNext]);

  return (
    <section className="servicos-section bg-primary" id="services">
      <div className="servicos-container">
        <motion.header
          className="servicos-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="servicos-label">Serviços</span>
          <h2 className="servicos-title">
            O que faço como <span>freelancer</span>
          </h2>
          <p className="servicos-lead">
            Use os botões abaixo ou as setas do teclado para navegar.
          </p>
        </motion.header>

        <div
          className="servicos-carousel"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Categorias de serviços"
        >
          <div className="servicos-carousel-stage">
            <div
              className="servicos-side-fade servicos-side-fade--left"
              aria-hidden="true"
            />
            <div className="servicos-slider-viewport" ref={viewportRef}>
              <div
                className="servicos-slider-track"
                style={{
                  paddingLeft: sidePad,
                  paddingRight: sidePad,
                  transform: `translateX(-${translateX}px)`,
                }}
              >
                {serviceCategories.map((category, slideIndex) => (
                  <div
                    key={category.id}
                    className={`servicos-slide ${slideIndex === activeIndex ? 'is-active' : ''}`}
                    style={
                      slideW > 0
                        ? { width: slideW, flex: '0 0 auto' }
                        : { flex: '1 1 100%' }
                    }
                    aria-hidden={slideIndex !== activeIndex}
                  >
                    <article className="service-category card">
                      <div className="service-category-header">
                        <h3 className="service-category-title">{category.title}</h3>
                        {category.tagline ? (
                          <p className="service-category-tagline">{category.tagline}</p>
                        ) : null}
                      </div>
                      <ul className="service-list">
                        {category.items.map((item) => (
                          <li key={item.title} className="service-item">
                            <span className="service-item-title">{item.title}</span>
                            <p className="service-item-desc">{item.description}</p>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="servicos-side-fade servicos-side-fade--right"
              aria-hidden="true"
            />
          </div>

          <div className="servicos-controls">
            <button
              type="button"
              className="servicos-nav-btn"
              onClick={goPrev}
              aria-label="Categoria anterior"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <div className="servicos-dots" aria-label="Ir para categoria">
              {serviceCategories.map((category, i) => (
                <button
                  key={category.id}
                  type="button"
                  aria-label={`${category.title}${i === activeIndex ? ' (atual)' : ''}`}
                  aria-current={i === activeIndex ? 'true' : undefined}
                  className={`servicos-dot ${i === activeIndex ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>

            <button
              type="button"
              className="servicos-nav-btn"
              onClick={goNext}
              aria-label="Próxima categoria"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>

          <p className="servicos-hint" aria-hidden="true">
            Dica: setas ← → do teclado também mudam o slide.
          </p>
        </div>

        <motion.div
          className="servicos-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>Precisa de algo sob medida ou misturando mais de uma frente?</p>
          <a href="#contact">Fale comigo no contato →</a>
        </motion.div>
      </div>
    </section>
  );
};

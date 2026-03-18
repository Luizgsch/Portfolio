import { motion } from 'framer-motion';
import './styles.css';
import curriculo from '../../assets/Curriculo.pdf';

export const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/luizschreiner/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Luizgsch',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@relvo_in',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
      )
    }
  ];

  return (
    <section className="contact-section bg-secondary" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="contact-label">CONTATO</span>
          <h2 className="contact-title">Vamos criar algo <br /> <span>extraordinário.</span></h2>
        </motion.div>

        <div className="contact-main">
          <motion.div
            className="contact-email-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="contact-hint">E-mail</p>
            <a href="mailto:luizgsch1@gmail.com" className="contact-email-link">
              luizgsch1@gmail.com
              <span className="link-underline" />
            </a>
          </motion.div>

          <div className="contact-details-grid">
            <motion.div
              className="contact-detail-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="contact-hint">Currículo</p>
              <a href={curriculo} download="Luiz_Schreiner_Curriculo.pdf" className="contact-detail-value contact-download-link">
                Baixar PDF
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="download-icon">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </motion.div>

            <motion.div
              className="contact-detail-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="contact-hint">Telefone</p>
              <span className="contact-detail-value">+55 41 99580-1701</span>
            </motion.div>

            <motion.div
              className="social-links-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="contact-hint">Social</p>
              <div className="social-links-grid">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-item"
                    aria-label={link.name}
                  >
                    <span className="social-icon">{link.icon}</span>
                    <span className="social-name">{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.footer
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="footer-line" />
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Luiz Schreiner. Todos os direitos reservados.</p>
            <p>Desenvolvido com performance e qualidade.</p>
          </div>
        </motion.footer>
      </div>

      {/* Background Decoration */}
      <div className="contact-bg-glow" />
    </section>
  );
};

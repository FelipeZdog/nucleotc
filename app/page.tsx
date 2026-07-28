"use client";

/* eslint-disable @next/next/no-img-element -- local pre-optimized brand assets avoid vinext image proxy failures */

import { useEffect, useState } from "react";

const WHATSAPP_URL = "https://wa.me/558596840106?text=Ol%C3%A1%2C%20Dr.%20Tales%21%20Gostaria%20de%20agendar%20uma%20consulta%20no%20N%C3%BAcleo%20TC.";

const WhatsAppIcon = ({ tone = "light" }: { tone?: "light" | "dark" }) => (
  <img className="whatsapp-icon" src={`/icons/whatsapp-${tone}.png`} alt="" width={20} height={20} />
);

const InstagramIcon = ({ tone = "light" }: { tone?: "light" | "dark" }) => (
  <img className="instagram-icon" src={`/icons/instagram-${tone}.png`} alt="" width={18} height={18} />
);

function Brand({ light = false }: { light?: boolean }) {
  return (
    <img
      className="brand-logo"
      src={light ? "/brand/logo-light.png" : "/brand/logo-dark.png"}
      alt="NÃºcleo TC"
      width={360}
      height={116}
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand-link" href="#inicio" aria-label="NÃºcleo TC â€” inÃ­cio" onClick={closeMenu}>
          <Brand light />
        </a>
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="NavegaÃ§Ã£o principal">
          <a href="#abordagem" onClick={closeMenu}>Abordagem</a>
          <a href="#jornada" onClick={closeMenu}>Sua jornada</a>
          <a href="#equipe" onClick={closeMenu}>Equipe</a>
          <a href="#duvidas" onClick={closeMenu}>DÃºvidas</a>
          <a className="button button-small button-light mobile-cta whatsapp-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
            <WhatsAppIcon tone="dark" /> Agendar consulta
          </a>
        </nav>
        <a className="button button-small button-light header-cta whatsapp-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <WhatsAppIcon tone="dark" /> Agendar consulta
        </a>
        <button
          className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow eyebrow-light"><span /> Medicina integrada Â· NutriÃ§Ã£o</p>
            <h1>TransformaÃ§Ã£o<br />comeÃ§a no <em>nÃºcleo.</em></h1>
            <p className="hero-lead">
              Um olhar mÃ©dico completo para compreender o seu corpo e construir uma estratÃ©gia individual, consciente e sustentÃ¡vel.
            </p>
            <div className="hero-actions">
              <a className="button button-primary whatsapp-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Agende sua avaliaÃ§Ã£o
              </a>
              <a className="text-link" href="#abordagem">ConheÃ§a nossa abordagem <span aria-hidden="true">â†“</span></a>
            </div>
          </div>

          <div className="hero-art reveal reveal-delay">
            <div className="hero-orbit" aria-hidden="true" />
            <img className="hero-mark" src="/brand/icon-light.png" alt="" width={620} height={580} />
            <p className="hero-note">CiÃªncia para entender.<br />EstratÃ©gia para transformar.</p>
            <span className="hero-index">01 / 05</span>
          </div>
        </div>
        <div className="hero-footer" aria-hidden="true">
          <span>NÃšCLEO TCÂ®</span><span>MEDICINA Â· NUTRIÃ‡ÃƒO Â· CUIDADO</span><span>BRASIL</span>
        </div>
      </section>

      <section className="manifesto section" id="abordagem">
        <div className="section-number">01</div>
        <div className="manifesto-heading reveal">
          <p className="eyebrow"><span /> Nossa abordagem</p>
          <h2>Seu corpo nÃ£o Ã© uma fÃ³rmula.<br /><em>Seu cuidado tambÃ©m nÃ£o deveria ser.</em></h2>
        </div>
        <div className="manifesto-body reveal">
          <p className="large-copy">
            No NÃºcleo TC, medicina e nutriÃ§Ã£o trabalham juntas para enxergar vocÃª por inteiro â€” sua histÃ³ria, rotina, objetivos e individualidade.
          </p>
          <p>
            Antes de qualquer estratÃ©gia, existe escuta. A partir de uma avaliaÃ§Ã£o responsÃ¡vel, desenhamos um acompanhamento coerente com o seu momento e orientado por evidÃªncias.
          </p>
        </div>
      </section>

      <section className="pillars section section-dark">
        <div className="pillars-intro">
          <p className="eyebrow eyebrow-light"><span /> O que sustenta o cuidado</p>
          <h2>PrecisÃ£o em cada<br /><em>etapa da jornada.</em></h2>
        </div>
        <div className="pillar-list">
          <article className="pillar reveal">
            <span className="pillar-number">01</span>
            <div><h3>AvaliaÃ§Ã£o integral</h3><p>Uma leitura atenta do seu histÃ³rico, exames, composiÃ§Ã£o corporal, hÃ¡bitos e objetivos.</p></div>
            <span className="pillar-icon" aria-hidden="true">ï¼‹</span>
          </article>
          <article className="pillar reveal">
            <span className="pillar-number">02</span>
            <div><h3>EstratÃ©gia individual</h3><p>Condutas mÃ©dicas e nutricionais construÃ­das para vocÃª â€” sem fÃ³rmulas prontas ou soluÃ§Ãµes genÃ©ricas.</p></div>
            <span className="pillar-icon" aria-hidden="true">âŒ</span>
          </article>
          <article className="pillar reveal">
            <span className="pillar-number">03</span>
            <div><h3>Acompanhamento prÃ³ximo</h3><p>EvoluÃ§Ã£o observada com cuidado, diÃ¡logo e ajustes responsÃ¡veis ao longo do processo.</p></div>
            <span className="pillar-icon" aria-hidden="true">â—‹</span>
          </article>
        </div>
      </section>

      <section className="experience section">
        <div className="experience-image reveal">
          <img src="/images/recepcao.webp" alt="Projeto de ambiente acolhedor da recepÃ§Ã£o do NÃºcleo TC" width={1920} height={1080} loading="lazy" />
          <div className="image-label"><span>Um espaÃ§o pensado</span><span>para receber vocÃª.</span></div>
        </div>
        <div className="experience-copy reveal">
          <p className="eyebrow"><span /> PresenÃ§a e acolhimento</p>
          <h2>ExcelÃªncia clÃ­nica<br />no centro de <em>tudo.</em></h2>
          <p>Da primeira conversa a cada etapa do acompanhamento, o cuidado estÃ¡ nos detalhes. Um ambiente reservado e uma equipe preparada para tornar sua experiÃªncia mais clara, confortÃ¡vel e segura.</p>
          <ul className="check-list">
            <li>Atendimento individualizado</li>
            <li>IntegraÃ§Ã£o entre especialidades</li>
            <li>DecisÃµes compartilhadas</li>
            <li>Ambiente discreto e acolhedor</li>
          </ul>
        </div>
      </section>

      <section className="journey section" id="jornada">
        <div className="journey-title">
          <div>
            <p className="eyebrow"><span /> Como funciona</p>
            <h2>Uma jornada com<br /><em>comeÃ§o, direÃ§Ã£o e presenÃ§a.</em></h2>
          </div>
          <p>O caminho Ã© individual. O cuidado, contÃ­nuo.</p>
        </div>
        <div className="steps">
          <article className="step reveal"><span>01</span><h3>Primeiro contato</h3><p>Nossa equipe acolhe sua necessidade e orienta sobre o agendamento.</p></article>
          <article className="step reveal"><span>02</span><h3>AvaliaÃ§Ã£o completa</h3><p>Uma consulta detalhada para compreender seu contexto, saÃºde e objetivos.</p></article>
          <article className="step reveal"><span>03</span><h3>Plano integrado</h3><p>DefiniÃ§Ã£o de uma estratÃ©gia mÃ©dica e nutricional alinhada Ã  sua realidade.</p></article>
          <article className="step reveal"><span>04</span><h3>EvoluÃ§Ã£o acompanhada</h3><p>ReavaliaÃ§Ãµes e ajustes com atenÃ§Ã£o ao que o seu corpo comunica.</p></article>
        </div>
      </section>

      <section className="team section section-terracotta" id="equipe">
        <div className="team-intro reveal">
          <p className="eyebrow eyebrow-light"><span /> Ã€ frente do cuidado</p>
          <h2>Conhecimento que acolhe.<br />Cuidado que <em>transforma.</em></h2>
          <p className="team-description">Uma atuaÃ§Ã£o guiada pela escuta, pelo estudo contÃ­nuo e pelo compromisso com decisÃµes seguras e individualizadas.</p>
        </div>
        <div className="professional-cards reveal">
            <div className="professional-card">
              <p className="placeholder-label">MÃ‰DICO RESPONSÃVEL</p>
              <h3>Dr. Tales Cavalcante</h3>
              <p>Medicina Â· CRM 27491</p>
              <div className="professional-links">
                <a className="professional-instagram" href="https://www.instagram.com/drtalescavalcante/" target="_blank" rel="noreferrer"><InstagramIcon /> @drtalescavalcante</a>
                <a className="professional-site" href="/drtalescavalcante">ConheÃ§a o Dr. Tales <span aria-hidden="true">â†—</span></a>
              </div>
            </div>
            <div className="professional-card">
              <p className="placeholder-label">NUTRICIONISTA</p>
              <h3>Luana Abreu</h3>
              <p>NutriÃ§Ã£o</p>
              <div className="professional-links">
                <a className="professional-instagram" href="https://www.instagram.com/luanaabreunutri/" target="_blank" rel="noreferrer"><InstagramIcon /> @luanaabreunutri</a>
                <a className="professional-site" href="/luanaabreu">Conheça a Luana <span aria-hidden="true">↗</span></a>
              </div>
            </div>
        </div>
      </section>

      <section className="details section">
        <div className="details-head">
          <p className="eyebrow"><span /> Diferenciais</p>
          <h2>O essencial estÃ¡<br /><em>nos detalhes.</em></h2>
        </div>
        <div className="details-grid">
          <article><span>01</span><h3>VisÃ£o integrada</h3><p>Especialidades que conversam para oferecer um cuidado mais coerente.</p></article>
          <article><span>02</span><h3>Base cientÃ­fica</h3><p>Condutas responsÃ¡veis, atualizadas e explicadas com clareza.</p></article>
          <article><span>03</span><h3>Tempo e escuta</h3><p>Uma consulta construÃ­da com atenÃ§Ã£o real Ã  sua histÃ³ria.</p></article>
          <article><span>04</span><h3>DiscriÃ§Ã£o</h3><p>Privacidade e conforto em cada contato com o NÃºcleo TC.</p></article>
        </div>
      </section>

      <section className="faq section" id="duvidas">
        <div className="faq-heading">
          <p className="eyebrow eyebrow-light"><span /> DÃºvidas frequentes</p>
          <h2>Antes de comeÃ§ar.</h2>
          <p>Se sua pergunta nÃ£o estiver aqui, fale com nossa equipe.</p>
          <a className="text-link text-link-light whatsapp-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Conversar pelo WhatsApp</a>
        </div>
        <div className="faq-list">
          <details><summary>Como funciona a primeira consulta?<span>ï¼‹</span></summary><p>Ã‰ um encontro dedicado a compreender sua histÃ³ria, rotina, exames disponÃ­veis e objetivos. A partir dessa avaliaÃ§Ã£o, o profissional orienta os prÃ³ximos passos.</p></details>
          <details><summary>O atendimento integra medicina e nutriÃ§Ã£o?<span>ï¼‹</span></summary><p>Sim. As Ã¡reas atuam de forma coordenada, respeitando as indicaÃ§Ãµes e necessidades identificadas durante o acompanhamento.</p></details>
          <details><summary>Preciso levar exames?<span>ï¼‹</span></summary><p>Se vocÃª tiver exames recentes, pode levÃ¡-los. A equipe informarÃ¡ no agendamento se existe alguma orientaÃ§Ã£o especÃ­fica.</p></details>
          <details><summary>Como faÃ§o para agendar?<span>ï¼‹</span></summary><p>Entre em contato pelo WhatsApp. Nossa equipe apresentarÃ¡ a disponibilidade e as informaÃ§Ãµes necessÃ¡rias.</p></details>
        </div>
      </section>

      <section className="final-cta section" id="contato">
        <div className="final-cta-copy reveal">
          <p className="eyebrow"><span /> Seu prÃ³ximo passo</p>
          <h2>Vamos conversar<br />sobre o seu <em>momento?</em></h2>
          <p>Fale com nossa equipe e conheÃ§a o cuidado NÃºcleo TC.</p>
          <a className="button button-dark whatsapp-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Agendar minha avaliaÃ§Ã£o</a>
        </div>
        <div className="contact-card reveal">
          <p className="placeholder-label">INFORMAÃ‡Ã•ES PARA PREENCHER</p>
          <div><span>WhatsApp</span><a className="contact-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon tone="dark" /> +55 85 9684-0106</a></div>
          <div><span>EndereÃ§o</span><strong>Rua / Avenida, nÃºmero<br />Cidade â€” UF</strong></div>
          <div><span>Instagram</span><a className="contact-instagram" href="https://instagram.com/nucleotc" target="_blank" rel="noreferrer"><InstagramIcon tone="dark" /> @nucleotc</a></div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <Brand light />
          <p>Medicina e nutriÃ§Ã£o integradas para um cuidado verdadeiramente individual.</p>
          <nav className="footer-socials" aria-label="Instagram">
            <a href="https://instagram.com/nucleotc" target="_blank" rel="noreferrer"><InstagramIcon /><span>@nucleotc</span></a>
            <a href="https://www.instagram.com/drtalescavalcante/" target="_blank" rel="noreferrer"><InstagramIcon /><span>@drtalescavalcante</span></a>
            <a href="https://www.instagram.com/luanaabreunutri/" target="_blank" rel="noreferrer"><InstagramIcon /><span>@luanaabreunutri</span></a>
          </nav>
          <a href="#inicio">Voltar ao topo â†‘</a>
        </div>
        <div className="footer-bottom">
          <span>Â© 2026 NÃšCLEO TC. TODOS OS DIREITOS RESERVADOS.</span>
          <span>ConteÃºdo informativo. Consulte sempre um profissional habilitado.</span>
          <a href="https://instagram.com/felipezdog.dsgn" target="_blank" rel="noreferrer"><InstagramIcon /> Criado por @felipezdog.dsgn â†—</a>
        </div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Conversar com Dr. Tales pelo WhatsApp">
        <WhatsAppIcon />
      </a>
    </main>
  );
}

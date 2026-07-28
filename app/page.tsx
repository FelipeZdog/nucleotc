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
      alt="Núcleo TC"
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
        <a className="brand-link" href="#inicio" aria-label="Núcleo TC — início" onClick={closeMenu}>
          <Brand light />
        </a>
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Navegação principal">
          <a href="#abordagem" onClick={closeMenu}>Abordagem</a>
          <a href="#jornada" onClick={closeMenu}>Sua jornada</a>
          <a href="#equipe" onClick={closeMenu}>Equipe</a>
          <a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
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
            <p className="eyebrow eyebrow-light"><span /> Medicina integrada · Nutrição</p>
            <h1>Transformação<br />começa no <em>núcleo.</em></h1>
            <p className="hero-lead">
              Um olhar médico completo para compreender o seu corpo e construir uma estratégia individual, consciente e sustentável.
            </p>
            <div className="hero-actions">
              <a className="button button-primary whatsapp-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Agende sua avaliação
              </a>
              <a className="text-link" href="#abordagem">Conheça nossa abordagem <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero-art reveal reveal-delay">
            <div className="hero-orbit" aria-hidden="true" />
            <img className="hero-mark" src="/brand/icon-light.png" alt="" width={620} height={580} />
            <p className="hero-note">Ciência para entender.<br />Estratégia para transformar.</p>
            <span className="hero-index">01 / 05</span>
          </div>
        </div>
        <div className="hero-footer" aria-hidden="true">
          <span>NÚCLEO TC®</span><span>MEDICINA · NUTRIÇÃO · CUIDADO</span><span>BRASIL</span>
        </div>
      </section>

      <section className="manifesto section" id="abordagem">
        <div className="section-number">01</div>
        <div className="manifesto-heading reveal">
          <p className="eyebrow"><span /> Nossa abordagem</p>
          <h2>Seu corpo não é uma fórmula.<br /><em>Seu cuidado também não deveria ser.</em></h2>
        </div>
        <div className="manifesto-body reveal">
          <p className="large-copy">
            No Núcleo TC, medicina e nutrição trabalham juntas para enxergar você por inteiro — sua história, rotina, objetivos e individualidade.
          </p>
          <p>
            Antes de qualquer estratégia, existe escuta. A partir de uma avaliação responsável, desenhamos um acompanhamento coerente com o seu momento e orientado por evidências.
          </p>
        </div>
      </section>

      <section className="pillars section section-dark">
        <div className="pillars-intro">
          <p className="eyebrow eyebrow-light"><span /> O que sustenta o cuidado</p>
          <h2>Precisão em cada<br /><em>etapa da jornada.</em></h2>
        </div>
        <div className="pillar-list">
          <article className="pillar reveal">
            <span className="pillar-number">01</span>
            <div><h3>Avaliação integral</h3><p>Uma leitura atenta do seu histórico, exames, composição corporal, hábitos e objetivos.</p></div>
            <span className="pillar-icon" aria-hidden="true">＋</span>
          </article>
          <article className="pillar reveal">
            <span className="pillar-number">02</span>
            <div><h3>Estratégia individual</h3><p>Condutas médicas e nutricionais construídas para você — sem fórmulas prontas ou soluções genéricas.</p></div>
            <span className="pillar-icon" aria-hidden="true">⌁</span>
          </article>
          <article className="pillar reveal">
            <span className="pillar-number">03</span>
            <div><h3>Acompanhamento próximo</h3><p>Evolução observada com cuidado, diálogo e ajustes responsáveis ao longo do processo.</p></div>
            <span className="pillar-icon" aria-hidden="true">○</span>
          </article>
        </div>
      </section>

      <section className="experience section">
        <div className="experience-image reveal">
          <img src="/images/recepcao.webp" alt="Projeto de ambiente acolhedor da recepção do Núcleo TC" width={1920} height={1080} loading="lazy" />
          <div className="image-label"><span>Um espaço pensado</span><span>para receber você.</span></div>
        </div>
        <div className="experience-copy reveal">
          <p className="eyebrow"><span /> Presença e acolhimento</p>
          <h2>Excelência clínica<br />no centro de <em>tudo.</em></h2>
          <p>Da primeira conversa a cada etapa do acompanhamento, o cuidado está nos detalhes. Um ambiente reservado e uma equipe preparada para tornar sua experiência mais clara, confortável e segura.</p>
          <ul className="check-list">
            <li>Atendimento individualizado</li>
            <li>Integração entre especialidades</li>
            <li>Decisões compartilhadas</li>
            <li>Ambiente discreto e acolhedor</li>
          </ul>
        </div>
      </section>

      <section className="journey section" id="jornada">
        <div className="journey-title">
          <div>
            <p className="eyebrow"><span /> Como funciona</p>
            <h2>Uma jornada com<br /><em>começo, direção e presença.</em></h2>
          </div>
          <p>O caminho é individual. O cuidado, contínuo.</p>
        </div>
        <div className="steps">
          <article className="step reveal"><span>01</span><h3>Primeiro contato</h3><p>Nossa equipe acolhe sua necessidade e orienta sobre o agendamento.</p></article>
          <article className="step reveal"><span>02</span><h3>Avaliação completa</h3><p>Uma consulta detalhada para compreender seu contexto, saúde e objetivos.</p></article>
          <article className="step reveal"><span>03</span><h3>Plano integrado</h3><p>Definição de uma estratégia médica e nutricional alinhada à sua realidade.</p></article>
          <article className="step reveal"><span>04</span><h3>Evolução acompanhada</h3><p>Reavaliações e ajustes com atenção ao que o seu corpo comunica.</p></article>
        </div>
      </section>

      <section className="team section section-terracotta" id="equipe">
        <div className="team-intro reveal">
          <p className="eyebrow eyebrow-light"><span /> À frente do cuidado</p>
          <h2>Conhecimento que acolhe.<br />Cuidado que <em>transforma.</em></h2>
          <p className="team-description">Uma atuação guiada pela escuta, pelo estudo contínuo e pelo compromisso com decisões seguras e individualizadas.</p>
        </div>
        <div className="professional-cards reveal">
            <div className="professional-card">
              <p className="placeholder-label">MÉDICO RESPONSÁVEL</p>
              <h3>Dr. Tales Cavalcante</h3>
              <p>Medicina · CRM 27491</p>
              <div className="professional-links">
                <a className="professional-instagram" href="https://www.instagram.com/drtalescavalcante/" target="_blank" rel="noreferrer"><InstagramIcon /> @drtalescavalcante</a>
                <a className="professional-site" href="/drtalescavalcante">Conheça o Dr. Tales <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="professional-card">
              <p className="placeholder-label">NUTRICIONISTA</p>
              <h3>Luana Abreu</h3>
              <p>Nutrição</p>
              <div className="professional-links">
                <a className="professional-instagram" href="https://www.instagram.com/luanaabreunutri/" target="_blank" rel="noreferrer"><InstagramIcon /> @luanaabreunutri</a>
              </div>
            </div>
        </div>
      </section>

      <section className="details section">
        <div className="details-head">
          <p className="eyebrow"><span /> Diferenciais</p>
          <h2>O essencial está<br /><em>nos detalhes.</em></h2>
        </div>
        <div className="details-grid">
          <article><span>01</span><h3>Visão integrada</h3><p>Especialidades que conversam para oferecer um cuidado mais coerente.</p></article>
          <article><span>02</span><h3>Base científica</h3><p>Condutas responsáveis, atualizadas e explicadas com clareza.</p></article>
          <article><span>03</span><h3>Tempo e escuta</h3><p>Uma consulta construída com atenção real à sua história.</p></article>
          <article><span>04</span><h3>Discrição</h3><p>Privacidade e conforto em cada contato com o Núcleo TC.</p></article>
        </div>
      </section>

      <section className="faq section" id="duvidas">
        <div className="faq-heading">
          <p className="eyebrow eyebrow-light"><span /> Dúvidas frequentes</p>
          <h2>Antes de começar.</h2>
          <p>Se sua pergunta não estiver aqui, fale com nossa equipe.</p>
          <a className="text-link text-link-light whatsapp-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Conversar pelo WhatsApp</a>
        </div>
        <div className="faq-list">
          <details><summary>Como funciona a primeira consulta?<span>＋</span></summary><p>É um encontro dedicado a compreender sua história, rotina, exames disponíveis e objetivos. A partir dessa avaliação, o profissional orienta os próximos passos.</p></details>
          <details><summary>O atendimento integra medicina e nutrição?<span>＋</span></summary><p>Sim. As áreas atuam de forma coordenada, respeitando as indicações e necessidades identificadas durante o acompanhamento.</p></details>
          <details><summary>Preciso levar exames?<span>＋</span></summary><p>Se você tiver exames recentes, pode levá-los. A equipe informará no agendamento se existe alguma orientação específica.</p></details>
          <details><summary>Como faço para agendar?<span>＋</span></summary><p>Entre em contato pelo WhatsApp. Nossa equipe apresentará a disponibilidade e as informações necessárias.</p></details>
        </div>
      </section>

      <section className="final-cta section" id="contato">
        <div className="final-cta-copy reveal">
          <p className="eyebrow"><span /> Seu próximo passo</p>
          <h2>Vamos conversar<br />sobre o seu <em>momento?</em></h2>
          <p>Fale com nossa equipe e conheça o cuidado Núcleo TC.</p>
          <a className="button button-dark whatsapp-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Agendar minha avaliação</a>
        </div>
        <div className="contact-card reveal">
          <p className="placeholder-label">INFORMAÇÕES PARA PREENCHER</p>
          <div><span>WhatsApp</span><a className="contact-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon tone="dark" /> +55 85 9684-0106</a></div>
          <div><span>Endereço</span><strong>Rua / Avenida, número<br />Cidade — UF</strong></div>
          <div><span>Instagram</span><a className="contact-instagram" href="https://instagram.com/nucleotc" target="_blank" rel="noreferrer"><InstagramIcon tone="dark" /> @nucleotc</a></div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <Brand light />
          <p>Medicina e nutrição integradas para um cuidado verdadeiramente individual.</p>
          <nav className="footer-socials" aria-label="Instagram">
            <a href="https://instagram.com/nucleotc" target="_blank" rel="noreferrer"><InstagramIcon /><span>@nucleotc</span></a>
            <a href="https://www.instagram.com/drtalescavalcante/" target="_blank" rel="noreferrer"><InstagramIcon /><span>@drtalescavalcante</span></a>
          </nav>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NÚCLEO TC. TODOS OS DIREITOS RESERVADOS.</span>
          <span>Conteúdo informativo. Consulte sempre um profissional habilitado.</span>
          <a href="https://instagram.com/felipezdog.dsgn" target="_blank" rel="noreferrer"><InstagramIcon /> Criado por @felipezdog.dsgn ↗</a>
        </div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Conversar com Dr. Tales pelo WhatsApp">
        <WhatsAppIcon />
      </a>
    </main>
  );
}

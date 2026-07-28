import "./tales.css";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element -- local pre-optimized assets avoid vinext image proxy failures */

const WHATSAPP_URL = "https://wa.me/558596840106?text=Ol%C3%A1%2C%20Dr.%20Tales%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento.";

const WhatsAppIcon = () => <img src="/icons/whatsapp-light.png" alt="" width={18} height={18} />;
const InstagramIcon = ({ dark = false }: { dark?: boolean }) => <img src={`/icons/instagram-${dark ? "dark" : "light"}.png`} alt="" width={17} height={17} />;

export default function DrTalesPage() {
  return (
    <main className="tc-page">
      <header className="tc-header">
        <a className="tc-brand" href="#tales-inicio" aria-label="Dr. Tales Cavalcante — início">
          <img src="/tales/brand-horizontal-dark.png" alt="Tales Cavalcante — Emagrecimento e Performance" width={928} height={215} />
        </a>
        <nav className="tc-nav" aria-label="Navegação da página do Dr. Tales">
          <a href="#tales-metodo">Abordagem</a>
          <a href="#tales-atuacao">Atuação</a>
          <a href="#tales-sobre">Dr. Tales</a>
          <a href="#tales-contato">Contato</a>
        </nav>
        <a className="tc-header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Agendar consulta</a>
        <details className="tc-menu">
          <summary aria-label="Abrir menu"><span /><span /></summary>
          <nav><a href="#tales-metodo">Abordagem</a><a href="#tales-atuacao">Atuação</a><a href="#tales-sobre">Dr. Tales</a><a href="#tales-contato">Contato</a></nav>
        </details>
      </header>

      <section className="tc-hero" id="tales-inicio">
        <div className="tc-hero-copy">
          <p className="tc-kicker">Médico · CRM 27491</p>
          <h1>Decida mudar.<br /><span>Eu mostro o caminho.</span></h1>
          <p className="tc-hero-lead">Emagrecimento e performance com estratégia médica individualizada, clareza e acompanhamento.</p>
          <div className="tc-actions">
            <a className="tc-button tc-button-dark" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Começar agora</a>
            <a className="tc-inline-link" href="#tales-metodo">Conhecer a abordagem ↓</a>
          </div>
        </div>
        <div className="tc-hero-visual" aria-label="Retrato do Dr. Tales Cavalcante">
          <span className="tc-hero-letter" aria-hidden="true">T</span>
          <div className="tc-portrait-frame">
            <img src="/tales/dr-tales.webp" alt="Dr. Tales Cavalcante" width={600} height={600} />
          </div>
          <p>Fortaleza — CE<br />Atendimento online</p>
        </div>
        <div className="tc-hero-meta"><span>EMAGRECIMENTO</span><span>PERFORMANCE</span><span>SAÚDE</span></div>
      </section>

      <section className="tc-statement tc-section" id="tales-metodo">
        <p className="tc-section-label">01 — Abordagem</p>
        <div>
          <h2>Mudar o corpo exige<br /><span>entender o contexto.</span></h2>
          <p className="tc-large-copy">Não existe uma estratégia responsável sem conhecer sua história, sua rotina e o ponto de partida do seu corpo.</p>
        </div>
        <p className="tc-support-copy">A consulta organiza as informações que realmente importam para definir prioridades, orientar decisões e acompanhar a evolução com segurança.</p>
      </section>

      <section className="tc-process tc-section-dark">
        <div className="tc-process-title">
          <p className="tc-section-label tc-label-light">02 — Processo</p>
          <h2>Direção antes<br />de velocidade.</h2>
        </div>
        <div className="tc-process-list">
          <article><span>01</span><div><h3>Diagnóstico</h3><p>Escuta, histórico, exames e contexto para compreender onde você está.</p></div></article>
          <article><span>02</span><div><h3>Estratégia</h3><p>Um plano médico coerente com seus objetivos e com a sua realidade.</p></div></article>
          <article><span>03</span><div><h3>Acompanhamento</h3><p>Reavaliações e ajustes orientados pela resposta do seu corpo.</p></div></article>
        </div>
      </section>

      <section className="tc-areas tc-section" id="tales-atuacao">
        <div className="tc-areas-heading">
          <p className="tc-section-label">03 — Atuação</p>
          <h2>Objetivos diferentes.<br /><span>Uma visão integrada.</span></h2>
        </div>
        <div className="tc-area-grid">
          <article><span>01</span><h3>Emagrecimento</h3><p>Acompanhamento médico direcionado à perda de peso saudável e sustentável.</p></article>
          <article><span>02</span><h3>Hipertrofia</h3><p>Estratégia para composição corporal e ganho de massa, respeitando sua individualidade.</p></article>
          <article><span>03</span><h3>Performance</h3><p>Organização da saúde, rotina e objetivos para sustentar sua evolução.</p></article>
        </div>
      </section>

      <section className="tc-space">
        <img src="/tales/consultorio.webp" alt="Aplicação da identidade Tales Cavalcante em ambiente clínico" width={1920} height={1080} loading="lazy" />
        <div><span>Estratégia clínica.</span><span>Presença em cada etapa.</span></div>
      </section>

      <section className="tc-about tc-section" id="tales-sobre">
        <div className="tc-about-image">
          <img src="/tales/dr-tales.webp" alt="Retrato do Dr. Tales Cavalcante" width={600} height={600} loading="lazy" />
          <span>CRM 27491</span>
        </div>
        <div className="tc-about-copy">
          <p className="tc-section-label">04 — Dr. Tales</p>
          <h2>Ciência aplicada à<br /><span>mudança possível.</span></h2>
          <p>Médico com atuação voltada ao emagrecimento e à hipertrofia, Dr. Tales Cavalcante conduz cada acompanhamento a partir de avaliação individual, orientação clara e decisões responsáveis.</p>
          <div className="tc-profile-facts"><span>Fortaleza — CE</span><span>Atendimento online</span><span>CRM 27491</span></div>
          <a className="tc-instagram-link" href="https://www.instagram.com/drtalescavalcante/" target="_blank" rel="noreferrer"><InstagramIcon dark /> @drtalescavalcante</a>
        </div>
      </section>

      <section className="tc-faq tc-section-dark">
        <div><p className="tc-section-label tc-label-light">05 — Antes de começar</p><h2>Perguntas<br />frequentes.</h2></div>
        <div className="tc-faq-list">
          <details><summary>Como funciona a primeira consulta?<span>＋</span></summary><p>É o momento de compreender sua história, rotina, exames e objetivos para orientar os próximos passos.</p></details>
          <details><summary>O atendimento pode ser online?<span>＋</span></summary><p>Sim. O perfil profissional informa atendimento em Fortaleza e também online. A equipe confirma a modalidade adequada no agendamento.</p></details>
          <details><summary>Preciso levar exames?<span>＋</span></summary><p>Se tiver exames recentes, leve-os. Outras orientações serão informadas durante o primeiro contato.</p></details>
        </div>
      </section>

      <section className="tc-contact tc-section" id="tales-contato">
        <div><p className="tc-section-label">06 — Próximo passo</p><h2>Se a mudança é<br />inegociável, <span>comece.</span></h2></div>
        <div className="tc-contact-card">
          <p>Fale diretamente pelo WhatsApp para conhecer a agenda e receber as orientações iniciais.</p>
          <a className="tc-button tc-button-dark" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon /> Agendar com Dr. Tales</a>
          <a className="tc-instagram-link" href="https://www.instagram.com/drtalescavalcante/" target="_blank" rel="noreferrer"><InstagramIcon dark /> @drtalescavalcante</a>
        </div>
      </section>

      <footer className="tc-footer">
        <img src="/tales/brand-horizontal-light.png" alt="Tales Cavalcante" width={928} height={215} />
        <p>Emagrecimento e performance<br />com direção médica.</p>
        <div className="tc-footer-links"><Link href="/">Conhecer o Núcleo TC ↗</Link><a href="https://www.instagram.com/drtalescavalcante/" target="_blank" rel="noreferrer"><InstagramIcon /> @drtalescavalcante</a></div>
        <div className="tc-footer-legal"><span>© 2026 TALES CAVALCANTE.</span><span>Conteúdo informativo. Consulte um profissional habilitado.</span><a href="https://instagram.com/felipezdog.dsgn" target="_blank" rel="noreferrer">Criado por @felipezdog.dsgn</a></div>
      </footer>

      <a className="tc-whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Conversar com Dr. Tales pelo WhatsApp"><WhatsAppIcon /></a>
    </main>
  );
}

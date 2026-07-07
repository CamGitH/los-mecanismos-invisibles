import './style.css'
import editorialHero from './assets/editorial-hero.png'
import { essays } from './generated/essays.js'

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (char) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }

    return entities[char]
  })

const renderEssayCards = () =>
  essays
    .map(
      (essay, index) => `
        <button class="essay-card${index === 0 ? ' is-active' : ''}" type="button" data-essay-id="${escapeHtml(essay.id)}">
          <span class="essay-card-label">Ensayo ${String(index + 1).padStart(2, '0')}</span>
          <strong>${escapeHtml(essay.title)}</strong>
          ${essay.excerpt ? `<span>${escapeHtml(essay.excerpt)}</span>` : ''}
        </button>
      `,
    )
    .join('')

const renderEssayArticle = (essay) => `
  <article class="essay-reader" aria-labelledby="reader-title">
    <p class="essay-reader-label">Ensayo</p>
    <h3 id="reader-title">${escapeHtml(essay.title)}</h3>
    <div class="essay-body">
      ${essay.html}
    </div>
  </article>
`

const renderEssaysSection = () => {
  if (essays.length === 0) {
    return `
      <div class="essay-empty">
        <p class="essay-empty-label">Pendiente</p>
        <h3>No hay ensayos publicados todavia.</h3>
        <p>
          Sube los textos reales a <code>ensayos/</code>. La pagina no debe inventar titulos,
          preguntas ni fragmentos de ensayos.
        </p>
      </div>
    `
  }

  return `
    <div class="essays-layout">
      <div class="essay-list" aria-label="Ensayos disponibles">
        ${renderEssayCards()}
      </div>
      <div data-essay-reader>
        ${renderEssayArticle(essays[0])}
      </div>
    </div>
  `
}

document.querySelector('#app').innerHTML = `
  <header class="site-header" aria-label="Encabezado principal">
    <a class="brand" href="#inicio" aria-label="Los mecanismos invisibles">
      <img class="brand-logo" src="/logo.jpeg" alt="" aria-hidden="true" />
      <span>Los mecanismos invisibles</span>
    </a>
    <nav class="site-nav" aria-label="Navegacion principal">
      <a href="#ensayos">Ensayos</a>
      <a href="#metodo">Metodo</a>
      <a href="#archivo">Archivo</a>
    </nav>
  </header>

  <main>
    <section class="hero-section" id="inicio">
      <div class="hero-copy">
        <p class="eyebrow">Medio de pensamiento</p>
        <h1>No escribimos sobre acontecimientos. Escribimos sobre los mecanismos que los hacen comprensibles.</h1>
        <p class="hero-text">
          Un archivo vivo de ensayos sobre las estructuras invisibles que organizan la identidad,
          las decisiones, las relaciones y la experiencia humana.
        </p>
        <div class="hero-actions" aria-label="Acciones principales">
          <a class="primary-link" href="#ensayos">Leer ensayos</a>
          <a class="secondary-link" href="#metodo">Ver metodo</a>
        </div>
      </div>
      <figure class="hero-figure">
        <img src="${editorialHero}" alt="Escritorio editorial con cuadernos, notas y luz natural" />
      </figure>
    </section>

    <section class="manifesto-section" aria-labelledby="manifesto-title">
      <div class="section-kicker">Tesis editorial</div>
      <h2 id="manifesto-title">La experiencia es el laboratorio. El mecanismo es el verdadero objeto de estudio.</h2>
      <p>
        Cada ensayo parte de una experiencia concreta para revelar un fenomeno mas amplio:
        como las personas construyen sentido, identidad y relaciones con el mundo.
      </p>
    </section>

    <section class="essays-section" id="ensayos" aria-labelledby="essays-title">
      <div class="section-heading">
        <div>
          <p class="section-kicker">Archivo de ensayos</p>
          <h2 id="essays-title">${essays.length > 0 ? 'Ensayos publicados' : 'Los ensayos apareceran aqui cuando esten listos.'}</h2>
        </div>
      </div>

      ${renderEssaysSection()}
    </section>

    <section class="method-section" id="metodo" aria-labelledby="method-title">
      <div class="method-copy">
        <p class="section-kicker">Metodo</p>
        <h2 id="method-title">Cada texto avanza desde un fenomeno visible hacia una estructura oculta.</h2>
      </div>
      <ol class="method-list">
        <li>
          <span>01</span>
          <strong>Un fenomeno</strong>
          <p>Una ruptura, una enfermedad, una decision, una organizacion o una conversacion.</p>
        </li>
        <li>
          <span>02</span>
          <strong>Una pregunta</strong>
          <p>Por que ocurre, por que reaccionamos asi o por que produce ciertas consecuencias.</p>
        </li>
        <li>
          <span>03</span>
          <strong>El mecanismo</strong>
          <p>Una hipotesis capaz de explicar aquello que permanecia oculto en la experiencia.</p>
        </li>
        <li>
          <span>04</span>
          <strong>La generalizacion</strong>
          <p>El caso inicial revela un patron presente en muchos otros aspectos de la vida.</p>
        </li>
      </ol>
    </section>

    <section class="archive-section" id="archivo" aria-labelledby="archive-title">
      <p class="section-kicker">Archivo vivo</p>
      <h2 id="archive-title">Identidad, relaciones, organizaciones, derecho, inteligencia artificial, enfermedad, muerte, poder, educacion, sociedad e instituciones.</h2>
      <p>
        Ninguno de esos temas es el objeto final. Todos funcionan como laboratorios para revelar
        mecanismos humanos.
      </p>
    </section>
  </main>

  <footer class="site-footer">
    <p>Firmado por <strong>Ninan</strong></p>
    <p>&copy; 2026 Los mecanismos invisibles. Todos los derechos reservados.</p>
  </footer>
`

const essayReader = document.querySelector('[data-essay-reader]')
const essayCards = [...document.querySelectorAll('[data-essay-id]')]

essayCards.forEach((card) => {
  card.addEventListener('click', () => {
    const essay = essays.find((item) => item.id === card.dataset.essayId)
    if (!essay || !essayReader) {
      return
    }

    essayReader.innerHTML = renderEssayArticle(essay)
    essayCards.forEach((item) => item.classList.toggle('is-active', item === card))
  })
})

if (window.location.hash) {
  window.requestAnimationFrame(() => {
    document.querySelector(window.location.hash)?.scrollIntoView()
  })
}

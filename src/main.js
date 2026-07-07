import './style.css'
import editorialHero from './assets/editorial-hero.png'

document.querySelector('#app').innerHTML = `
  <header class="site-header" aria-label="Encabezado principal">
    <a class="brand" href="#inicio" aria-label="Los mecanismos invisibles">
      <span class="brand-mark"></span>
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
          <h2 id="essays-title">Los ensayos apareceran aqui cuando esten listos.</h2>
        </div>
        <p>Este espacio queda reservado para textos reales subidos en la carpeta <code>ensayos/</code>.</p>
      </div>

      <div class="essay-empty">
        <p class="essay-empty-label">Pendiente</p>
        <h3>No hay ensayos publicados todavia.</h3>
        <p>
          Sube los textos reales a <code>ensayos/</code>. La pagina no debe inventar titulos,
          preguntas ni fragmentos de ensayos.
        </p>
      </div>
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


# Los mecanismos invisibles

> No escribimos sobre acontecimientos. Escribimos sobre los mecanismos que los hacen comprensibles.

Medio de pensamiento dedicado a explorar las estructuras invisibles que organizan la experiencia humana.

No pretende narrar acontecimientos ni comentar la actualidad. Su propósito es comprender los mecanismos que permanecen ocultos detrás de aquello que vivimos todos los días.

Cada ensayo parte de una experiencia concreta para revelar un fenómeno más amplio sobre la forma en que las personas construyen identidad, sentido, decisiones y relaciones con el mundo.

**La experiencia es el laboratorio. El mecanismo es el verdadero objeto de estudio.**

## La pregunta permanente

Todo el proyecto gira alrededor de una única pregunta:

> ¿Qué mecanismos invisibles organizan la experiencia humana?

Cada publicación intenta responder una parte distinta de esa pregunta.

## Tesis editorial

Las personas suelen hablar de acontecimientos. Los mecanismos invisibles habla de aquello que los hace posibles.

No intenta explicar únicamente una ruptura, una enfermedad o una muerte. Utiliza esas experiencias como laboratorios desde los cuales comprender fenómenos humanos mucho más amplios.

## Método

Cada ensayo sigue una estructura común:

1. **Un fenómeno.** Una ruptura, una enfermedad, la muerte, una organización, una decisión o una conversación.
2. **Una pregunta.** Por qué ocurre, por qué reaccionamos así o por qué produce determinadas consecuencias.
3. **El mecanismo.** Una hipótesis capaz de explicar ese fenómeno.
4. **La generalización.** El lector descubre que el ensayo nunca trató solo del caso inicial, sino de un mecanismo presente en muchos otros aspectos de la vida.

## Principios editoriales

- Cada ensayo defiende una sola idea y responde una única pregunta.
- Cada ensayo debe poder resumirse en una frase que cambie la manera en que el lector interpreta un fenómeno.
- Si el ensayo no modifica una interpretación, todavía no está terminado.
- Comprender antes que opinar. Explicar antes que juzgar.
- Construir pensamiento acumulativo y modelos de interpretación.
- Formular mejores preguntas.

## Lo que no es

No es autoayuda, psicología clínica, filosofía académica, periodismo, un blog personal ni contenido motivacional.

El lector no encontrará aquí noticias, opiniones coyunturales, frases motivacionales, contenido diseñado para el algoritmo, polémicas artificiales, consejos rápidos ni respuestas simplistas. El proyecto no busca viralizar publicaciones.

## El lector

Los mecanismos invisibles está dirigido a personas que sienten una curiosidad permanente por comprender aquello que viven. No buscan únicamente respuestas prácticas: les interesa descubrir las estructuras que organizan el comportamiento humano.

Pueden provenir del derecho, la medicina, la ingeniería, la psicología, la filosofía, la administración, la economía, las ciencias sociales o las artes. Lo que los une no es su formación, sino la forma en que piensan.

El lector ideal:

- Disfruta hacer preguntas difíciles.
- Se interesa más por entender que por tener razón.
- Lee para transformar la forma en que interpreta el mundo.
- Encuentra valor en los textos que requieren tiempo y reflexión.
- Se siente atraído por las conexiones entre fenómenos aparentemente distintos.

No es un consumidor de contenido. Es un lector.

## Temas

Identidad. Relaciones humanas. Organizaciones. Derecho. Inteligencia artificial. Enfermedad. Muerte. Poder. Educación. Sociedad. Instituciones.

Ninguno de esos temas constituye el verdadero objeto del proyecto. Todos funcionan como laboratorios para revelar mecanismos humanos.

## Estilo y voz

La escritura debe ser sobria, clara, elegante, reflexiva y precisa. Sin dramatismo innecesario, sin exageraciones, sin frases hechas, sin sentimentalismo artificial.

Las emociones aparecen porque el fenómeno las contiene, no porque el texto las provoque.

El tono no busca convencer, ni enseñar, ni tener la razón. Busca pensar junto al lector. Cada publicación debe abrir una conversación, nunca cerrarla.

Todo texto se escribe en español correcto: con tildes, con signos de apertura (¿ ¡) y con puntuación cuidada. La forma es parte de la identidad.

## Identidad visual

La estética debe transmitir claridad. El proyecto pretende mostrar aquello que normalmente permanece oculto; por esa razón, la imagen debe sentirse limpia, silenciosa y atemporal. Nunca estridente, nunca saturada, nunca excesivamente decorada.

### Paleta de colores

- **Principales:** marfil, blanco roto, crema, arena, lino, beige claro, gris piedra y verde oliva muy desaturado.
- **De apoyo:** dorado envejecido, bronce claro y gris grafito.
- **Prohibidos:** negro absoluto como identidad principal, rojo intenso, azul eléctrico, verdes saturados, neones y gradientes llamativos.

### Tipografía

Elegante y editorial: serif clásica para títulos, sans serif limpia para textos secundarios. Mucho espacio en blanco, pocos elementos gráficos y jerarquía tipográfica muy marcada.

### Fotografía

Luz natural, interiores, escritorios, libros, cuadernos, notas, café, madera clara, ventanas, sombras suaves, objetos cotidianos.

Cuando aparezcan personas: nunca mirando directamente a cámara; preferiblemente de espaldas, de perfil o desenfocadas.

La imagen nunca debe competir con la idea.

## Instagram

El feed debe sentirse como una revista, no como una cuenta de frases. Alternar portadas de ensayos, preguntas, fragmentos, carruseles, fotografías editoriales, manuscritos, escritorios y citas breves. Siempre con mucho espacio en blanco.

## Firma

Todos los ensayos están firmados por **Ninan**. No como un personaje, sino como la voz editorial de Los mecanismos invisibles.

## Misión y visión

**Misión:** ayudar a las personas a comprender mejor el mundo mediante ensayos que revelen los mecanismos invisibles que organizan la experiencia humana.

**Visión:** convertirse en un medio de pensamiento reconocido por desarrollar una obra intelectual coherente, acumulativa y atemporal. Con el tiempo, Los mecanismos invisibles no será únicamente una cuenta de Instagram ni una colección de ensayos: será un archivo vivo de pensamiento que pueda crecer hacia libros, investigaciones, conversaciones, conferencias y podcasts, siempre guiado por la misma pregunta.

---

## El sitio web

Sitio estático construido con Vite y JavaScript vanilla, sin framework.

### Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
```

### Estructura

```text
index.html                    # entrada HTML de Vite
src/main.js                   # marcado principal de la página
src/style.css                 # estilos globales; la paleta vive en las variables de :root
src/assets/editorial-hero.png # imagen principal del sitio
public/logo.jpeg              # logo y favicon del proyecto
ensayos/                      # textos reales de los ensayos (DOCX)
scripts/build-essays.js       # convierte DOCX a HTML para la página
```

### Ensayos

Los ensayos reales se guardan en la carpeta [`ensayos/`](ensayos/README.md), un archivo DOCX por ensayo.

Durante `npm run dev` y `npm run build`, los DOCX se convierten a HTML y se publican en la página.

**Regla central:** no se deben inventar títulos, preguntas, fragmentos ni contenidos de ensayos para llenar la página. Si todavía no existe un ensayo real, la interfaz debe mostrar un estado pendiente o reservado.

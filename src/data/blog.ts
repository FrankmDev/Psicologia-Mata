import type { ImageMetadata } from 'astro';

// Import images
import autoestima from '../assets/autoestima.avif';
import terapiaPareja2 from '../assets/terapia-pareja-2.avif';
import terapiaPareja from '../assets/terapia-pareja.avif';
import terapiaIndividual from '../assets/terapia-individual.avif';
import estres from '../assets/estres.avif';
import apunte from '../assets/apunte.avif';
import terapiaFamilia from '../assets/terapia-familia.avif';
import psicologia from '../assets/psicologia.avif';
import estimulacionCognitiva from '../assets/estimulacion-cognitiva.avif';
import evaluacion from '../assets/evaluacion.avif';
import primeraSesionPsicologia from '../assets/primera-sesion-psicologia.avif';
import terapia from '../assets/terapia.avif';

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string;
  excerpt: string;
  date: string;
  dateShort: string;
  readTime: string;
  category: string;
  image: ImageMetadata;
  faq?: {
    question: string;
    answer: string;
  }[];
  content: string;
}

export const blogPosts: Record<string, BlogPost> = {
  "cuando-ir-al-psicologo": {
    slug: "cuando-ir-al-psicologo",
    title: "Cuándo ir al psicólogo: señales, mitos y qué esperar en la primera sesión",
    seoTitle: "Cuándo ir al psicólogo: señales, mitos y qué esperar",
    seoDescription: "¿Cuándo ir al psicólogo? Señales claras, mitos frecuentes y qué ocurre en la primera sesión. Guía profesional para pedir ayuda psicológica con confianza. Consulta presencial en Córdoba y online.",
    keywords: "cuando ir al psicologo, señales ir al psicologo, necesito un psicologo, primera sesion psicologo, primera consulta psicologica, cuando pedir ayuda psicologica, mitos psicologia, valoracion psicologica, psicologo cordoba, psicologa cordoba, psicologo cerca de mi, terapia psicologica cordoba",
    excerpt: "Si llevas tiempo preguntándote si necesitas un psicólogo, este artículo te ayuda a leer las señales con calma, desmontar mitos habituales y saber qué esperar antes de dar el paso.",
    date: "3 Agosto 2026",
    dateShort: "3 Ago",
    readTime: "14 min",
    category: "Salud Mental",
    image: primeraSesionPsicologia,
    faq: [
      {
        question: "¿Cómo sé si necesito un psicólogo?",
        answer: "Suele ser el momento cuando el malestar dura semanas o meses, interfiere en sueño, trabajo, relaciones o autocuidado, o cuando evitas situaciones importantes por miedo, tristeza o agotamiento. No hace falta estar en crisis para consultar."
      },
      {
        question: "¿Tengo que estar mal para ir al psicólogo?",
        answer: "No. Muchas personas acuden para entender un malestar difuso, tomar decisiones, mejorar relaciones o prevenir un empeoramiento. La terapia no es solo para crisis graves."
      },
      {
        question: "¿Cuánto dura una primera sesión de psicología?",
        answer: "Suele durar entre 50 y 60 minutos. Es un espacio para conocernos, entender qué te trae y valorar si el enfoque y el formato encajan contigo."
      },
      {
        question: "¿Puedo ir al psicólogo sin saber exactamente qué me pasa?",
        answer: "Sí. Es muy habitual. Parte del trabajo inicial consiste precisamente en poner palabras a lo que sientes y ordenar síntomas, causas y objetivos."
      },
      {
        question: "¿La terapia online funciona igual que la presencial?",
        answer: "Puede ser útil y, en determinados casos, comparable a la modalidad presencial, siempre que el formato sea adecuado, haya privacidad, conexión estable y seguimiento profesional. La elección depende de tu situación, preferencias y tipo de dificultad."
      },
      {
        question: "¿Cómo pedir cita con un psicólogo en Córdoba?",
        answer: "Puedes contactar por teléfono, email o formulario web para solicitar una primera valoración. En consulta presencial se valora tu caso con calma; si prefieres empezar desde casa, también es posible en formato online."
      }
    ],
    content: `
      <p>Si estás leyendo esto, probablemente ya llevas un tiempo preguntándote si necesitas un psicólogo. No porque no lo intuyas, sino porque dudas de si es “suficientemente grave”, si es el momento adecuado o si pedir ayuda significa admitir una debilidad. Muchas personas llegan a consulta después de meses —a veces años— posponiendo esa conversación. La realidad es otra: una valoración psicológica es un acto de cuidado, no de fracaso. Y cuanto antes se entiende qué está pasando, más opciones suele haber para recuperar bienestar, claridad y calidad de vida.</p>

      <figure class="article-figure--bleed">
        <img src="${terapia.src}" alt="Espacio de consulta psicológica tranquilo para una primera sesión de terapia" loading="lazy" />
        <figcaption>La primera sesión no es un examen: es un espacio para entender qué te trae y qué tipo de ayuda puede encajar contigo.</figcaption>
      </figure>

      <div class="article-callout">
      <p><strong>Idea clave:</strong> no necesitas una etiqueta diagnóstica para empezar. Basta con que algo te preocupe de forma sostenida, limite tu vida o te cueste más de lo que te gustaría. La terapia puede ser útil para atravesar una crisis, entender patrones o tomar decisiones. Si quieres conocer el proceso completo, puedes leer sobre los <a href="/blog/beneficios-terapia-individual/">beneficios de la terapia individual</a>.</p>
      </div>

      <h2>¿Cómo saber si necesitas un psicólogo?</h2>

      <p>No existe una única señal universal. Lo que importa es la combinación entre <strong>duración</strong>, <strong>intensidad</strong> e <strong>impacto en tu vida</strong>. La Organización Mundial de la Salud recuerda que la salud mental no es solo la ausencia de trastorno, sino un estado de bienestar en el que la persona puede afrontar el estrés habitual, trabajar de forma productiva y contribuir a su comunidad.<sup><a href="#ref-ci1">1</a></sup> Cuando eso se resiente de forma persistente, merece atención profesional.</p>

      <div class="article-grid article-grid--2">
        <div class="article-card">
          <h3>1. El malestar no remite</h3>
          <p>Llevas semanas o meses con tristeza, ansiedad, irritabilidad o vacío sin encontrar alivio duradero, aunque hayas intentado descansar, hablar con alguien o “superarlo” por tu cuenta.</p>
        </div>
        <div class="article-card">
          <h3>2. Tu vida diaria se resiente</h3>
          <p>Cuesta concentrarte, rendir en el trabajo o los estudios, cuidar de ti, cumplir responsabilidades o mantener rutinas básicas como dormir o alimentarte con regularidad.</p>
        </div>
        <div class="article-card">
          <h3>3. Evitas cada vez más</h3>
          <p>Dejas de salir, pospones llamadas, cancelas planes o evitas situaciones por miedo, vergüenza o agotamiento. La evitación alivia al momento, pero suele estrechar la vida con el tiempo.</p>
        </div>
        <div class="article-card">
          <h3>4. Tus relaciones se deterioran</h3>
          <p>Discutes más, te aislas, sientes que nadie te entiende o repites los mismos conflictos sin saber cómo salir del bucle. Si el problema es de pareja, puede ayudarte leer sobre <a href="/blog/terapia-de-pareja-cuando-empezar/">cuándo empezar terapia de pareja</a>.</p>
        </div>
        <div class="article-card">
          <h3>5. El cuerpo habla antes que tú</h3>
          <p>Tensión, insomnio, palpitaciones, molestias digestivas, dolores de cabeza o cansancio constante pueden tener causas médicas, pero también emocionales. Conviene mirar ambos planos.</p>
        </div>
        <div class="article-card">
          <h3>6. Te cuesta tomar decisiones</h3>
          <p>Dudas de todo, te paralizas ante cambios laborales, familiares o personales, o sientes que vives en piloto automático sin saber qué quieres.</p>
        </div>
        <div class="article-card md:col-span-2">
          <h3>7. Sientes que ya no eres tú</h3>
          <p>Te reconoces menos, has perdido ilusión por cosas que antes importaban o notas que tu forma de reaccionar no encaja con la persona que quieres ser. Esa sensación de desconexión también es motivo suficiente para consultar.</p>
        </div>
      </div>

      <blockquote>
        <p>Ir al psicólogo no significa que no puedas solo. Significa que has decidido no quedarte atrapado en un malestar que ya lleva demasiado tiempo ocupando espacio.</p>
      </blockquote>

      <h2>Malestar normal o momento de pedir ayuda</h2>

      <p>Una de las dudas más frecuentes es saber si lo que sientes “merece” terapia. La pregunta útil no es si otros lo tienen peor, sino si <strong>tu malestar te está costando más de lo razonable</strong> y si sigue igual pese a tus intentos por manejarlo.</p>

      <div class="article-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Situación</th>
              <th>Puede ser una reacción esperable</th>
              <th>Conviene valoración psicológica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ansiedad</td>
              <td>Nervios antes de un examen, entrevista o cambio importante.</td>
              <td>Preocupación constante, ataques de pánico, evitación o insomnio persistente. Puedes ampliar en <a href="/blog/ansiedad-persistente-tratamiento-psicologico/">ansiedad persistente</a>.</td>
            </tr>
            <tr>
              <td>Tristeza</td>
              <td>Tristeza tras una pérdida, decepción o etapa difícil.</td>
              <td>Desánimo sostenido, falta de energía, desesperanza o abandono del autocuidado.</td>
            </tr>
            <tr>
              <td>Estrés</td>
              <td>Semanas intensas en el trabajo o en casa.</td>
              <td>Agotamiento crónico, irritabilidad constante, cinismo o sensación de no poder recuperarte.</td>
            </tr>
            <tr>
              <td>Relaciones</td>
              <td>Discusión puntual por un desacuerdo concreto.</td>
              <td>Conflictos repetidos, distancia emocional o sensación de convivir sin conexión.</td>
            </tr>
            <tr>
              <td>Autoestima</td>
              <td>Dudar ante una crítica o un error.</td>
              <td>Autocrítica constante, miedo al fracaso o necesidad excesiva de aprobación. Ver <a href="/blog/autoestima-saludable/">baja autoestima</a>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Mitos que frenan a muchas personas</h2>

      <p>Los mitos sobre la psicología siguen siendo una barrera importante. Entenderlos con claridad ayuda a decidir con más libertad.</p>

      <div class="article-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Mito frecuente</th>
              <th>Lo que suele ocurrir en realidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>“Solo voy si estoy muy mal”.</td>
              <td>Muchas personas acuden antes de la crisis para prevenir, entender patrones o mejorar su calidad de vida.</td>
            </tr>
            <tr>
              <td>“Me van a juzgar o a decir que exagero”.</td>
              <td>La consulta es un espacio de confidencialidad profesional. El objetivo no es evaluarte como persona, sino comprender qué te ocurre.</td>
            </tr>
            <tr>
              <td>“Si fuera fuerte, lo resolvería solo”.</td>
              <td>Pedir ayuda requiere lucidez. La terapia no sustituye tu capacidad: la refuerza con herramientas y perspectiva.</td>
            </tr>
            <tr>
              <td>“Me van a medicar”.</td>
              <td>El psicólogo no prescribe fármacos. Si hiciera falta valoración psiquiátrica, se orienta de forma coordinada y transparente.</td>
            </tr>
            <tr>
              <td>“Una sesión debería bastar”.</td>
              <td>La primera sesión orienta; el cambio sostenido suele requerir tiempo, práctica y seguimiento.</td>
            </tr>
            <tr>
              <td>“La terapia es solo hablar”.</td>
              <td>En un buen proceso hay evaluación, objetivos, técnicas, tareas y revisión de avances. Hablar importa, pero no es lo único.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure class="article-figure--bleed">
        <img src="${evaluacion.src}" alt="Valoración psicológica profesional para elegir el tipo de ayuda adecuado" loading="lazy" />
        <figcaption>Elegir bien al profesional y entender el proceso desde el principio facilita sentirte en buenas manos.</figcaption>
      </figure>

      <h2>Qué esperar en la primera sesión de psicología</h2>

      <p>La primera sesión suele generar expectativas mezcladas: alivio por haber dado el paso, vergüenza, miedo a no saber qué decir o temor a “abrir la caja de Pandora”. Es normal. En la práctica, la primera cita es sobre todo un espacio de <strong>conocimiento mutuo</strong>, no un interrogatorio ni una prueba de si “lo estás haciendo bien”.</p>

      <div class="article-grid">
        <div class="article-card">
          <h3>1. Motivo de consulta</h3>
          <p>Te preguntaré qué te trae, desde cuándo lo notas y qué has intentado hasta ahora. No hace falta tener un discurso perfecto: basta con empezar por lo que más te pesa.</p>
        </div>
        <div class="article-card">
          <h3>2. Contexto vital</h3>
          <p>Trabajo, familia, pareja, salud, duelos, cambios recientes, descanso, consumo de alcohol o sustancias y red de apoyo. Todo eso ayuda a entender el cuadro completo.</p>
        </div>
        <div class="article-card">
          <h3>3. Objetivos y expectativas</h3>
          <p>Qué te gustaría conseguir: dormir mejor, tener menos ansiedad, mejorar una relación, tomar una decisión, recuperar energía o simplemente entenderte mejor.</p>
        </div>
        <div class="article-card">
          <h3>4. Forma de trabajo y encaje</h3>
          <p>Explicaré cómo trabajo, qué implica el proceso y si el enfoque parece adecuado para tu situación. También podrás preguntar duración, frecuencia, confidencialidad y modalidad.</p>
        </div>
      </div>

      <p>No tienes que contarlo todo en la primera sesión. La confianza se construye poco a poco. Lo importante es que salgas con una idea más clara de si quieres continuar y de qué camino tiene sentido para ti. En mi experiencia, muchas personas se sorprenden de lo reconfortante que resulta, por fin, poner en palabras algo que llevaban tiempo cargando solas.</p>

      <h2>Cómo elegir psicólogo: qué mirar antes de pedir cita</h2>

      <p>Elegir profesional no es solo cuestión de cercanía o precio. Conviene revisar formación, colegiación, experiencia en tu tipo de dificultad y sensación de encaje personal. En España, quien ejerce psicología sanitaria debe contar con la titulación y habilitación correspondientes. Puedes conocer la trayectoria y el enfoque de cada profesional en su página de <a href="/sobre-mi/">sobre mí</a> antes de contactar.</p>

      <p>Si buscas atención presencial, factores prácticos como la ubicación, el horario y la facilidad de acceso también importan: una consulta accesible facilita la constancia. Atiendo en Córdoba capital, en un espacio tranquilo y discreto en el centro de la ciudad, y también ofrezco <a href="/servicios/">terapia online</a> para quienes prefieren esa modalidad, viven en otras localidades de la provincia o combinan ambas según la etapa del proceso.</p>

      <ul class="article-checklist">
        <li><strong>Formación y colegiación:</strong> verifica que la persona esté colegiada y tenga formación en psicología general sanitaria si buscas atención clínica.</li>
        <li><strong>Experiencia en tu motivo de consulta:</strong> ansiedad, pareja, familia, duelo, autoestima o evaluación requieren enfoques distintos.</li>
        <li><strong>Claridad en el proceso:</strong> un buen profesional explica objetivos, límites, confidencialidad y duración orientativa sin prometer resultados milagrosos.</li>
        <li><strong>Sensación de seguridad:</strong> no necesitas sentirte “cómodo al 100 %” desde el minuto uno, pero sí respetado y escuchado.</li>
        <li><strong>Modalidad:</strong> presencial, online o mixta. Lo importante es que puedas sostener el proceso con regularidad.</li>
      </ul>

      <h2>Presencial u online: qué conviene en cada caso</h2>

      <p>La evidencia sugiere que, en algunos trastornos de ansiedad y otros problemas emocionales, la terapia online bien estructurada puede ofrecer resultados comparables a la presencial en determinados casos, siempre que haya buena conexión, privacidad y seguimiento profesional.<sup><a href="#ref-ci2">2</a></sup></p>

      <div class="article-grid article-grid--2">
        <div class="article-card">
          <h3>Presencial</h3>
          <p>Puede facilitar la contención, especialmente si valoras el contacto directo, vives en Córdoba o alrededores, o prefieres separar físicamente el espacio terapéutico del hogar.</p>
        </div>
        <div class="article-card">
          <h3>Online</h3>
          <p>Aporta flexibilidad si tienes horarios complicados, desplazamientos difíciles o prefieres empezar desde un entorno conocido. También es una opción habitual para personas de la provincia o de otras ciudades.</p>
        </div>
      </div>

      <h2>Cuánto dura un proceso psicológico</h2>

      <p>No hay una respuesta única. Depende de la complejidad, los objetivos, la constancia y el apoyo disponible fuera de sesión. Hay procesos breves y muy focalizados, y otros que requieren más tiempo para consolidar cambios profundos. Lo razonable es revisar avances cada cierto número de sesiones y ajustar el ritmo sin convertir la terapia en algo indefinido sin sentido.</p>

      <p>Las guías clínicas recomiendan adaptar la intensidad del tratamiento a la gravedad y al deterioro funcional de la persona, empezando por intervenciones psicológicas cuando son suficientes y escalando solo si hace falta.<sup><a href="#ref-ci3">3</a></sup></p>

      <h2>Qué puedes hacer antes de pedir cita</h2>

      <p>Si todavía dudas, estos pasos pueden ayudarte a ganar claridad sin presionarte. No sustituyen una valoración profesional, pero suelen aclarar si el siguiente paso tiene sentido para ti:</p>

      <div class="article-grid">
        <div class="article-card">
          <h3>Escribe lo que te preocupa</h3>
          <p>Durante tres días, anota momentos de malestar, qué los desencadena y qué haces para aliviarlo. Verlo en papel suele ordenar la confusión.</p>
        </div>
        <div class="article-card">
          <h3>Pregúntate por el impacto</h3>
          <p>¿Te afecta en sueño, trabajo, relaciones, ánimo o salud? Si la respuesta es sí en más de un área, la valoración profesional cobra más sentido.</p>
        </div>
        <div class="article-card">
          <h3>Habla con alguien de confianza</h3>
          <p>No para que te digan si “mereces” terapia, sino para dejar de cargar solo con la decisión. A veces nombrar la duda ya alivia.</p>
        </div>
      </div>

      <div class="article-warning">
        <p><strong>Atención:</strong> si hay ideas de hacerse daño, desesperanza intensa, alucinaciones, consumo peligroso de alcohol o medicación, o una crisis que te desborda, no esperes a “ver si pasa”. Busca ayuda urgente a través de servicios de emergencia, atención primaria o recursos de crisis en tu zona.</p>
      </div>

      <h2>Cuándo pedir ayuda profesional</h2>

      <p>Conviene consultar cuando el malestar es persistente, limita tu vida o aparece junto a síntomas que ya no puedes ignorar: insomnio crónico, llanto frecuente, irritabilidad constante, aislamiento, miedo que te paraliza o una sensación sostenida de no poder más. También cuando llevas tiempo diciéndote “ya iré” y la situación no mejora.</p>

      <p>En <a href="/servicios/">terapia individual</a>, el primer paso es entender qué te ocurre y qué necesitas. No hace falta llegar con las respuestas: basta con la disposición a explorarlas. Si tu malestar tiene un componente de ansiedad, puede complementar este artículo la guía sobre <a href="/blog/gestion-ansiedad/">cómo gestionar la ansiedad cuando el cuerpo se activa</a> o el artículo sobre <a href="/blog/ansiedad-persistente-tratamiento-psicologico/">ansiedad persistente y tratamiento psicológico</a>.</p>

      <h2>Dar el paso: más sencillo de lo que parece</h2>

      <p>Muchas personas posponen la consulta porque imaginan un proceso complicado. En la práctica, pedir una primera valoración suele ser tan simple como enviar un mensaje o hacer una llamada breve para comentar qué te trae y resolver dudas prácticas: modalidad, horarios, duración de las sesiones o tipo de dificultad que quieres trabajar.</p>

      <p>No tienes que saber si necesitas terapia a largo plazo. La primera sesión sirve precisamente para orientarte. Si después de leer estas señales sientes que algo de esto te representa, puede ser el momento de dejar de aplazarlo. A veces el alivio empieza simplemente por dejar de cargar solo con la decisión.</p>

      <div class="article-callout">
        <p><strong>Lo que suele ocurrir al contactar:</strong></p>
        <ul>
          <li>Respondes a unas preguntas sencillas sobre qué te trae y qué formato prefieres.</li>
          <li>Se acuerda una primera sesión de unos 50 minutos, presencial u online.</li>
          <li>En esa cita se valora tu situación y se decide con calma si continuar tiene sentido.</li>
        </ul>
      </div>

      <div class="article-cta">
        <p>¿Te reconoces en alguna de estas señales?</p>
        <p>Si llevas tiempo dándole vueltas, podemos hablar con tranquilidad sobre qué te ocurre y si una primera sesión —presencial en Córdoba u online— encaja contigo. Sin presión: solo una conversación honesta para ver si puedo ayudarte.</p>
        <a href="/contacto/">Pedir información sobre una primera sesión</a>
      </div>

      <h2>Preguntas frecuentes</h2>

      <div class="article-grid">
        <div class="article-card">
          <h3>¿Cómo sé si necesito un psicólogo?</h3>
          <p>Suele ser el momento cuando el malestar dura semanas o meses, interfiere en sueño, trabajo, relaciones o autocuidado, o cuando evitas situaciones importantes por miedo, tristeza o agotamiento. No hace falta estar en crisis para consultar.</p>
        </div>
        <div class="article-card">
          <h3>¿Tengo que estar mal para ir al psicólogo?</h3>
          <p>No. Muchas personas acuden para entender un malestar difuso, tomar decisiones, mejorar relaciones o prevenir un empeoramiento. La terapia no es solo para crisis graves.</p>
        </div>
        <div class="article-card">
          <h3>¿Cuánto dura una primera sesión de psicología?</h3>
          <p>Suele durar entre 50 y 60 minutos. Es un espacio para conocernos, entender qué te trae y valorar si el enfoque y el formato encajan contigo.</p>
        </div>
        <div class="article-card">
          <h3>¿Puedo ir al psicólogo sin saber exactamente qué me pasa?</h3>
          <p>Sí. Es muy habitual. Parte del trabajo inicial consiste precisamente en poner palabras a lo que sientes y ordenar síntomas, causas y objetivos.</p>
        </div>
        <div class="article-card">
          <h3>¿La terapia online funciona igual que la presencial?</h3>
          <p>Puede ser útil y, en determinados casos, comparable a la modalidad presencial, siempre que el formato sea adecuado, haya privacidad, conexión estable y seguimiento profesional.</p>
        </div>
        <div class="article-card">
          <h3>¿Cómo pedir cita con un psicólogo en Córdoba?</h3>
          <p>Puedes contactar por teléfono, email o formulario web para solicitar una primera valoración. En consulta presencial se valora tu caso con calma; si prefieres empezar desde casa, también es posible en formato online.</p>
        </div>
      </div>

      <h2>También puede interesarte</h2>

      <ul class="article-related">
        <li><a href="/blog/beneficios-terapia-individual/">¿Por qué la terapia individual funciona?</a></li>
        <li><a href="/blog/ansiedad-persistente-tratamiento-psicologico/">Ansiedad persistente: cómo reconocerla y qué tratamiento psicológico funciona</a></li>
        <li><a href="/blog/gestion-ansiedad/">Cómo gestionar la ansiedad cuando el cuerpo se activa</a></li>
        <li><a href="/blog/autoestima-saludable/">Baja autoestima: señales y cómo empezar a trabajarla</a></li>
        <li><a href="/blog/terapia-de-pareja-cuando-empezar/">Terapia de pareja: cuándo empezar y qué esperar</a></li>
        <li><a href="/sobre-mi/">Conoce mi forma de trabajar</a></li>
        <li><a href="/servicios/">Servicios de psicología presencial y online</a></li>
        <li><a href="/contacto/">Contactar para solicitar información</a></li>
      </ul>

      <h2>Referencias y fuentes</h2>

      <ol class="article-references">
        <li id="ref-ci1">World Health Organization. <a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response" target="_blank" rel="noopener noreferrer">Mental health: strengthening our response</a>.</li>
        <li id="ref-ci2">National Center for Biotechnology Information. <a href="https://pubmed.ncbi.nlm.nih.gov/34860613/" target="_blank" rel="noopener noreferrer">The effectiveness of telehealth versus face-to-face interventions for anxiety disorders: A systematic review and meta-analysis</a>.</li>
        <li id="ref-ci3">National Institute for Health and Care Excellence. <a href="https://www.nice.org.uk/guidance/cg123" target="_blank" rel="noopener noreferrer">Common mental health problems: identification and pathways to care</a>. Clinical guideline CG123.</li>
        <li id="ref-ci4">National Institute of Mental Health. <a href="https://www.nimh.nih.gov/health/topics/psychotherapies" target="_blank" rel="noopener noreferrer">Psychotherapies</a>. Última revisión: junio de 2024.</li>
      </ol>
    `
  },
  "ansiedad-personas-mayores": {
    slug: "ansiedad-personas-mayores",
    title: "Ansiedad en personas mayores: señales, causas y cómo ayudar",
    seoTitle: "Ansiedad en personas mayores: síntomas y tratamiento psicológico",
    seoDescription: "Ansiedad en personas mayores: síntomas, causas, señales de alarma y tratamiento psicológico. Guía profesional para mayores y familias.",
    keywords: "ansiedad en personas mayores, ansiedad mayores, sintomas ansiedad ancianos, ansiedad tercera edad, psicologia mayores cordoba, terapia ansiedad mayores",
    excerpt: "La ansiedad en la vejez no siempre aparece como nerviosismo evidente. A veces se expresa como insomnio, quejas físicas, irritabilidad, miedo a salir o preocupación constante por la salud.",
    date: "11 Junio 2026",
    dateShort: "11 Jun",
    readTime: "14 min",
    category: "Ansiedad",
    image: estimulacionCognitiva,
    faq: [
      {
        question: "¿La ansiedad es normal en la tercera edad?",
        answer: "Puede ser normal preocuparse ante pérdidas, enfermedad o cambios vitales. No es normal que el miedo limite de forma sostenida la vida, el descanso, la autonomía o las relaciones."
      },
      {
        question: "¿Puede confundirse con problemas físicos?",
        answer: "Sí. Palpitaciones, opresión, mareo, molestias digestivas o falta de aire pueden aparecer en ansiedad, pero también en problemas médicos. Por eso es importante valorar ambos planos."
      },
      {
        question: "¿La terapia funciona en personas mayores?",
        answer: "Puede ser útil cuando se adapta a la persona: ritmo, salud, historia, apoyos, objetivos y posibles limitaciones sensoriales o cognitivas. La edad, por sí sola, no impide aprender estrategias nuevas."
      },
      {
        question: "¿Debe participar la familia?",
        answer: "A veces ayuda mucho, especialmente si hay evitación, dependencia o sobrecarga. La participación debe respetar la autonomía y confidencialidad de la persona mayor."
      }
    ],
    content: `
      <p>La ansiedad en personas mayores merece una mirada cuidadosa. No basta con decir “es normal por la edad” ni conviene interpretar cualquier preocupación como un trastorno. En la vejez pueden convivir cambios de salud, duelos, jubilación, soledad, responsabilidades de cuidado y miedo a perder autonomía. Todo eso puede activar ansiedad, pero también puede ocultarla detrás de síntomas físicos, alteraciones del sueño o cambios de conducta que la familia no siempre reconoce como malestar emocional.</p>

      <figure class="article-figure--bleed">
        <img src="${estimulacionCognitiva.src}" alt="Persona mayor realizando una actividad cognitiva acompañada en consulta" loading="lazy" />
        <figcaption>En personas mayores, la ansiedad se entiende mejor desde una perspectiva psicológica, médica, familiar y social.</figcaption>
      </figure>

      <div class="article-callout">
        <p><strong>Idea clave:</strong> la ansiedad no forma parte inevitable del envejecimiento. Si interfiere en el sueño, las salidas, las relaciones, el apetito, la salud o la autonomía, conviene pedir una valoración profesional. Un abordaje psicológico puede ayudar a recuperar seguridad, rutinas y calidad de vida, especialmente cuando se coordina con la atención médica si hay enfermedades o medicación de por medio.</p>
      </div>

      <h2>Por qué la ansiedad en mayores suele pasar desapercibida</h2>

      <p>Muchas personas mayores no dicen “tengo ansiedad”. Es más frecuente escuchar frases como “no duermo”, “me noto acelerado”, “no quiero molestar”, “me da miedo caerme”, “me preocupa cualquier dolor” o “ya no salgo porque no me siento seguro”. La ansiedad puede expresarse a través del cuerpo, de la evitación o de una preocupación constante por la salud, la familia, el dinero o la propia independencia.</p>

      <p>El National Institute of Mental Health recuerda que la ansiedad ocasional forma parte de la vida, pero los trastornos de ansiedad implican más que preocupación puntual: la ansiedad no desaparece, aparece en muchas situaciones y puede empeorar con el tiempo.<sup><a href="#ref-am1">1</a></sup> En mayores, esa diferencia es especialmente importante porque los síntomas pueden atribuirse por error a “cosas de la edad”, a una personalidad preocupada o a problemas físicos sin explorar el componente emocional.</p>

      <blockquote>
        <p>Envejecer no significa vivir con miedo. La prudencia protege; la ansiedad, cuando manda, estrecha la vida.</p>
      </blockquote>

      <h2>Síntomas frecuentes de ansiedad en personas mayores</h2>

      <p>La ansiedad puede aparecer de forma mental, corporal y conductual. Mirar las tres dimensiones ayuda a no quedarse solo con el síntoma más visible.</p>

      <div class="article-grid article-grid--3">
        <div class="article-card">
          <h3>Pensamientos</h3>
          <p>Preocupación difícil de cortar, anticipación de desgracias, miedo a enfermar, temor a caerse, inseguridad para decidir o necesidad constante de que alguien confirme que todo está bien.</p>
        </div>
        <div class="article-card">
          <h3>Cuerpo</h3>
          <p>Palpitaciones, opresión en el pecho, tensión muscular, temblor, molestias digestivas, sensación de falta de aire, cansancio, sueño ligero o despertares con inquietud.</p>
        </div>
        <div class="article-card">
          <h3>Conducta</h3>
          <p>Evitar salir, abandonar actividades, llamar repetidamente a familiares, revisar síntomas, pedir acompañamiento para todo o reducir cada vez más la vida cotidiana.</p>
        </div>
      </div>

      <h2>Ansiedad normal, ansiedad clínica y señales de alarma</h2>

      <p>Sentir inquietud ante una operación, una caída reciente, una pérdida o un cambio de vivienda puede ser comprensible. La pregunta clínica no es si la persona se preocupa, sino cuánto dura esa preocupación, cuánto sufrimiento genera y cuánto limita su vida.</p>

      <div class="article-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Situación</th>
              <th>Puede ser una reacción esperable</th>
              <th>Conviene pedir valoración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sueño</td>
              <td>Duerme peor unos días por un problema concreto.</td>
              <td>Insomnio persistente, despertares con angustia o miedo a acostarse.</td>
            </tr>
            <tr>
              <td>Salidas</td>
              <td>Sale con más cautela tras una caída o enfermedad.</td>
              <td>Deja de salir, evita transporte, citas, compras o reuniones por miedo.</td>
            </tr>
            <tr>
              <td>Salud</td>
              <td>Consulta por síntomas nuevos o relevantes.</td>
              <td>Revisa el cuerpo de forma constante o busca tranquilidad médica repetida sin alivio duradero.</td>
            </tr>
            <tr>
              <td>Familia</td>
              <td>Pide apoyo en un momento difícil.</td>
              <td>Necesita confirmación continua, teme quedarse solo o se angustia si no responden al momento.</td>
            </tr>
            <tr>
              <td>Ánimo</td>
              <td>Está triste o preocupado tras una pérdida.</td>
              <td>Aparecen desesperanza, aislamiento intenso, abandono del autocuidado o ideas de no querer vivir.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="article-warning">
        <p><strong>Atención:</strong> si hay dolor torácico, dificultad respiratoria intensa, desorientación, cambios bruscos de conducta, caídas, consumo problemático de alcohol o fármacos, o ideas de hacerse daño, hay que buscar atención sanitaria urgente. La psicoterapia no sustituye una valoración médica cuando los síntomas pueden tener una causa orgánica o existe riesgo.</p>
      </div>

      <h2>Factores que pueden aumentar la ansiedad en la vejez</h2>

      <p>La Organización Mundial de la Salud señala que la salud mental en edades avanzadas depende tanto del entorno físico y social como de experiencias previas y estresores propios del envejecimiento. Entre esos factores aparecen el duelo, la pérdida de capacidad funcional, la jubilación, la reducción de ingresos, el edadismo, la soledad, el aislamiento social, las enfermedades crónicas, la demencia, el ictus, el cáncer, las condiciones neurológicas y la sobrecarga de cuidado.<sup><a href="#ref-am2">2</a></sup></p>

      <p>Algunos factores habituales en consulta son:</p>

      <ul class="article-checklist">
        <li><strong>Cambios de salud:</strong> diagnósticos recientes, dolor, miedo a recaídas, pérdida de movilidad o dependencia de medicación.</li>
        <li><strong>Duelos y pérdidas:</strong> fallecimiento de pareja, amistades, hermanos o pérdida de roles que daban identidad.</li>
        <li><strong>Soledad no elegida:</strong> vivir solo, tener menos red social o sentir que no se quiere “dar trabajo” a la familia.</li>
        <li><strong>Jubilación y sentido vital:</strong> pasar de una rutina clara a días poco estructurados, con menos reconocimiento externo.</li>
        <li><strong>Sobrecarga del cuidador:</strong> cuidar a una pareja con enfermedad crónica o deterioro cognitivo puede generar alerta constante.</li>
        <li><strong>Experiencias previas:</strong> una historia de ansiedad, trauma, inseguridad o pérdidas acumuladas puede reactivarse en etapas de vulnerabilidad.</li>
      </ul>

      <figure class="article-figure--bleed">
        <img src="${evaluacion.src}" alt="Evaluación psicológica para comprender síntomas de ansiedad y salud emocional" loading="lazy" />
        <figcaption>Una buena evaluación distingue ansiedad, depresión, duelo, deterioro cognitivo, efectos de medicación y problemas médicos.</figcaption>
      </figure>

      <h2>Soledad, aislamiento y ansiedad: una relación importante</h2>

      <p>La soledad no es solo estar sin compañía. Una persona puede vivir acompañada y sentirse sola, o vivir sola y tener una red significativa. En mayores, la OMS considera la soledad y el aislamiento social factores de riesgo clave para problemas de salud mental; además, estima que afectan aproximadamente a una cuarta parte de las personas mayores.<sup><a href="#ref-am2">2</a></sup></p>

      <p>Cuando la ansiedad se une a la soledad, aparece un círculo difícil: cuanto más miedo siento, menos salgo; cuanto menos salgo, menos confianza tengo; cuanto menos contacto tengo, más amenazante parece el mundo. Por eso el tratamiento no debería centrarse únicamente en “pensar en positivo”. También debe reconstruir rutinas, exposición gradual, vínculos, actividad y sensación de competencia.</p>

      <h2>Cómo diferenciar ansiedad, depresión y deterioro cognitivo</h2>

      <p>En personas mayores es frecuente que ansiedad, depresión, duelo y problemas cognitivos se solapen. Una persona ansiosa puede estar más distraída, olvidar citas o bloquearse ante tareas sencillas. Una persona deprimida puede parecer apagada, lenta o desmotivada. Y una persona con deterioro cognitivo puede mostrarse inquieta porque no entiende bien lo que ocurre o porque se siente insegura.</p>

      <p>Por eso conviene evaluar, no etiquetar. La valoración psicológica explora síntomas, historia personal, rutinas, red de apoyo, sueño, alimentación, consumo de alcohol, medicación, enfermedades, pérdidas recientes y cambios cognitivos. Si aparecen señales neurológicas o médicas, lo adecuado es coordinar con atención primaria, geriatría, neurología o psiquiatría.</p>

      <h2>Tratamiento psicológico de la ansiedad en personas mayores</h2>

      <p>Las guías clínicas recomiendan adaptar el tratamiento a la gravedad, al funcionamiento de la persona, a sus preferencias y a sus circunstancias. NICE, por ejemplo, plantea un modelo de atención escalonada para el trastorno de ansiedad generalizada y el trastorno de pánico en adultos, con intervenciones de menor a mayor intensidad según necesidad clínica.<sup><a href="#ref-am3">3</a></sup></p>

      <p>En terapia, el trabajo puede incluir:</p>

      <div class="article-grid">
        <div class="article-card">
          <h3>1. Psicoeducación clara y sin infantilizar</h3>
          <p>Entender qué es la ansiedad, por qué aparece en el cuerpo y cómo se mantiene reduce miedo y vergüenza. La explicación debe respetar la experiencia de vida de la persona mayor.</p>
        </div>
        <div class="article-card">
          <h3>2. Regulación fisiológica</h3>
          <p>Respiración, relajación muscular, atención plena adaptada, higiene del sueño y rutinas de descanso. Si quieres ampliar esta parte, puedes leer la guía sobre <a href="/blog/atencion-plena-mindfulness-psicologia/">atención plena en psicología</a>.</p>
        </div>
        <div class="article-card">
          <h3>3. Trabajo con preocupaciones</h3>
          <p>Diferenciar problemas reales de anticipaciones, ordenar decisiones, reducir comprobaciones y aprender a responder a la incertidumbre sin quedar atrapado en ella.</p>
        </div>
        <div class="article-card">
          <h3>4. Exposición gradual y recuperación de actividades</h3>
          <p>Volver poco a poco a salir, caminar, llamar, acudir a citas, retomar aficiones o participar en actividades sociales, con objetivos realistas y medibles.</p>
        </div>
        <div class="article-card">
          <h3>5. Apoyo familiar bien ajustado</h3>
          <p>La familia puede ayudar mucho, pero también puede reforzar la evitación sin querer. La clave es acompañar sin sustituir toda autonomía posible.</p>
        </div>
      </div>

      <h2>Qué puede hacer la familia sin aumentar la ansiedad</h2>

      <p>La familia suele moverse entre dos extremos: quitar importancia al malestar o sobreproteger. Ninguno ayuda demasiado. Minimizar hace que la persona se sienta incomprendida; resolverlo todo por ella puede confirmar la idea de que no es capaz.</p>

      <div class="article-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Mejor evitar</th>
              <th>Más útil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>“No pienses en eso”.</td>
              <td>“Entiendo que te asuste. Vamos a ver qué parte podemos resolver hoy”.</td>
            </tr>
            <tr>
              <td>Hacer todas las gestiones por la persona.</td>
              <td>Acompañar, dividir pasos y dejar que conserve la parte que sí puede hacer.</td>
            </tr>
            <tr>
              <td>Responder a cada llamada de comprobación con más comprobación.</td>
              <td>Acordar horarios, planes y mensajes claros que den seguridad sin alimentar el ciclo.</td>
            </tr>
            <tr>
              <td>Forzar exposición brusca.</td>
              <td>Planificar salidas graduales, previsibles y repetidas, celebrando avances pequeños.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Ejercicios prácticos para empezar con seguridad</h2>

      <p>Estos ejercicios no sustituyen la terapia, pero pueden servir como primer paso si la ansiedad es leve o como apoyo entre sesiones.</p>

      <div class="article-grid">
        <div class="article-card">
          <h3>Mapa de preocupaciones</h3>
          <p>Escribe dos columnas: “problemas que puedo abordar” y “miedos que estoy anticipando”. En la primera, define un paso concreto. En la segunda, practica posponer la preocupación y volver a una actividad.</p>
        </div>
        <div class="article-card">
          <h3>Escalera de confianza</h3>
          <p>Elige una actividad evitada y ordénala en pasos: bajar al portal, caminar cinco minutos, comprar algo pequeño, visitar a alguien. Repite cada paso hasta que resulte manejable antes de subir al siguiente.</p>
        </div>
        <div class="article-card">
          <h3>Rutina de cierre del día</h3>
          <p>Antes de dormir, anota tres cosas: qué me preocupó, qué hice para cuidarme y qué queda para mañana. La mente descansa mejor cuando no intenta resolverlo todo en la cama.</p>
        </div>
      </div>

      <h2>Cuándo pedir ayuda profesional</h2>

      <p>Conviene consultar cuando la ansiedad dura varias semanas, limita la vida diaria, altera el sueño, provoca evitación, genera dependencia constante de la familia o aparece junto a tristeza intensa, irritabilidad, pérdida de apetito, consumo de alcohol o medicación sin supervisión. También cuando la familia nota un cambio claro y la persona insiste en que “no pasa nada”, pero ha dejado de hacer cosas que antes sostenían su bienestar.</p>

      <p>En <a href="/servicios/">terapia individual</a>, el objetivo no es convertir a la persona mayor en alguien “sin preocupaciones”, sino ayudarla a recuperar margen de decisión, seguridad y vida cotidiana. Si la ansiedad es persistente, también puede ayudarte el artículo sobre <a href="/blog/ansiedad-persistente-tratamiento-psicologico/">ansiedad persistente y tratamiento psicológico</a> y la guía sobre <a href="/blog/gestion-ansiedad/">cómo gestionar la ansiedad cuando el cuerpo se activa</a>.</p>

      <div class="article-cta">
        <p>¿La ansiedad está reduciendo tu vida o la de una persona cercana?</p>
        <p>Podemos valorar qué está ocurriendo y qué tipo de ayuda encaja mejor. Atiendo en consulta presencial en Córdoba y también online cuando el formato es adecuado para la persona.</p>
        <a href="/contacto/">Solicitar información</a>
      </div>

      <h2>Preguntas frecuentes</h2>

      <div class="article-grid">
        <div class="article-card">
          <h3>¿La ansiedad es normal en la tercera edad?</h3>
          <p>Puede ser normal preocuparse ante pérdidas, enfermedad o cambios vitales. No es normal que el miedo limite de forma sostenida la vida, el descanso, la autonomía o las relaciones.</p>
        </div>
        <div class="article-card">
          <h3>¿Puede confundirse con problemas físicos?</h3>
          <p>Sí. Palpitaciones, opresión, mareo, molestias digestivas o falta de aire pueden aparecer en ansiedad, pero también en problemas médicos. Por eso es importante valorar ambos planos.</p>
        </div>
        <div class="article-card">
          <h3>¿La terapia funciona en personas mayores?</h3>
          <p>Puede ser útil cuando se adapta a la persona: ritmo, salud, historia, apoyos, objetivos y posibles limitaciones sensoriales o cognitivas. La edad, por sí sola, no impide aprender estrategias nuevas.</p>
        </div>
        <div class="article-card">
          <h3>¿Debe participar la familia?</h3>
          <p>A veces ayuda mucho, especialmente si hay evitación, dependencia o sobrecarga. La participación debe respetar la autonomía y confidencialidad de la persona mayor.</p>
        </div>
      </div>

      <h2>También puede interesarte</h2>

      <ul class="article-related">
        <li><a href="/blog/ansiedad-persistente-tratamiento-psicologico/">Ansiedad persistente: cómo reconocerla y qué tratamiento psicológico funciona</a></li>
        <li><a href="/blog/gestion-ansiedad/">Cómo gestionar la ansiedad cuando el cuerpo se activa</a></li>
        <li><a href="/blog/atencion-plena-mindfulness-psicologia/">Atención plena: qué es y cómo integrarla en terapia</a></li>
        <li><a href="/blog/beneficios-terapia-individual/">Beneficios de la terapia individual</a></li>
        <li><a href="/servicios/">Servicios de psicología presencial y online</a></li>
        <li><a href="/contacto/">Contactar para solicitar información</a></li>
      </ul>

      <h2>Referencias y fuentes</h2>

      <ol class="article-references">
        <li id="ref-am1">National Institute of Mental Health. <a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders" target="_blank" rel="noopener noreferrer">Anxiety Disorders</a>. Última revisión: diciembre de 2024.</li>
        <li id="ref-am2">World Health Organization. <a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-of-older-adults" target="_blank" rel="noopener noreferrer">Mental health of older adults</a>.</li>
        <li id="ref-am3">National Institute for Health and Care Excellence. <a href="https://www.nice.org.uk/guidance/cg113" target="_blank" rel="noopener noreferrer">Generalised anxiety disorder and panic disorder in adults: management</a>. Clinical guideline CG113.</li>
        <li id="ref-am4">Gould RL, Coulson MC, Howard RJ. <a href="https://pubmed.ncbi.nlm.nih.gov/21709684/" target="_blank" rel="noopener noreferrer">Cognitive behavioral therapy for anxiety disorders in older people: a meta-analysis and meta-regression of randomized controlled trials</a>. <em>Journal of the American Geriatrics Society</em>. 2012.</li>
      </ol>
    `
  },
  "atencion-plena-mindfulness-psicologia": {
    slug: "atencion-plena-mindfulness-psicologia",
    title: "Atención plena: qué es, para qué sirve y cómo integrarla en terapia",
    seoTitle: "Atención plena y mindfulness: guía psicológica profesional",
    seoDescription: "Guía psicológica sobre atención plena y mindfulness: beneficios, límites, ejercicios prácticos y cuándo trabajarlo en terapia presencial u online.",
    keywords: "atencion plena, mindfulness psicologia, mindfulness terapia, meditacion psicologia, tecnicas mindfulness, psicologo cordoba",
    excerpt: "La atención plena no consiste en dejar la mente en blanco. Es aprender a relacionarte de otra manera con tus pensamientos, emociones y sensaciones para responder con más claridad.",
    date: "11 Junio 2026",
    dateShort: "11 Jun",
    readTime: "12 min",
    category: "Atención plena",
    image: apunte,
    content: `
      <p>La atención plena, también conocida como <em>mindfulness</em>, se ha popularizado mucho en los últimos años. A veces se presenta como una técnica rápida para relajarse, pero en psicología conviene entenderla con más precisión: es una forma de entrenar la atención para observar lo que ocurre en el presente, con menos juicio automático y más capacidad de respuesta. No busca eliminar pensamientos ni emociones, sino cambiar la manera en que nos relacionamos con ellos.</p>

      <figure class="article-figure--bleed">
        <img src="${apunte.src}" alt="Cuaderno de trabajo para practicar atención plena en terapia" loading="lazy" />
        <figcaption>La atención plena se entrena mejor cuando pasa de ser una idea bonita a una práctica concreta y revisable.</figcaption>
      </figure>

      <div class="article-callout">
        <p><strong>Idea clave:</strong> practicar atención plena no significa resignarse, desconectar ni aguantarlo todo. Significa notar antes lo que está pasando por dentro para elegir una respuesta más útil. Por eso puede integrarse dentro de la <a href="/servicios/">terapia individual</a>, el trabajo con ansiedad, la autoestima y los procesos de cambio personal.</p>
      </div>

      <h2>Qué es realmente la atención plena</h2>

      <p>La atención plena combina tres elementos: <strong>presencia</strong>, <strong>observación</strong> y <strong>actitud de apertura</strong>. En lugar de funcionar en piloto automático, la persona aprende a reconocer pensamientos, emociones, sensaciones corporales e impulsos antes de dejarse arrastrar por ellos. El National Center for Complementary and Integrative Health la describe como una práctica de conciencia del momento presente sin juicio, que puede formar parte de programas estructurados como la reducción del estrés basada en mindfulness o la terapia cognitiva basada en mindfulness.<sup><a href="#ref-m1">1</a></sup></p>

      <p>En consulta, esto suele traducirse en preguntas muy concretas: ¿qué noto en el cuerpo cuando aparece la ansiedad?, ¿qué pensamiento se repite?, ¿qué hago para escapar de esa sensación?, ¿esa respuesta me ayuda a largo plazo o solo me alivia durante unos minutos? Desde ahí se puede trabajar con más claridad.</p>

      <blockquote>
        <p>La atención plena no apaga la vida interior. Ayuda a verla con suficiente distancia como para no obedecer cada pensamiento como si fuera una orden.</p>
      </blockquote>

      <h2>Mindfulness no es dejar la mente en blanco</h2>

      <p>Una de las ideas que más frustración genera es pensar que practicar mindfulness exige no pensar. La mente produce pensamientos igual que el cuerpo produce sensaciones. El objetivo no es vaciarla, sino notar cuándo se ha ido al futuro, al pasado o a la autocrítica, y volver de forma amable al punto de anclaje: la respiración, el cuerpo, un sonido o una tarea sencilla.</p>

      <div class="article-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Creencia común</th>
              <th>Enfoque psicológico más útil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>"Tengo que relajarme siempre".</td>
              <td>La calma puede aparecer, pero el objetivo es observar y responder mejor, no forzar una emoción concreta.</td>
            </tr>
            <tr>
              <td>"Si pienso, lo estoy haciendo mal".</td>
              <td>Notar que estás pensando ya forma parte de la práctica. Ese momento de darse cuenta es el entrenamiento.</td>
            </tr>
            <tr>
              <td>"Mindfulness sirve para evitar el malestar".</td>
              <td>Sirve para acercarte al malestar con más recursos, sin convertir cada emoción incómoda en una urgencia.</td>
            </tr>
            <tr>
              <td>"Con meditar unos días debería bastar".</td>
              <td>Como cualquier habilidad psicológica, necesita repetición, ajuste y aplicación a situaciones reales.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Para qué puede ayudar en la vida diaria</h2>

      <p>La investigación sobre mindfulness es amplia y también heterogénea. No todo sirve para todo, ni todos los estudios tienen la misma calidad. Aun así, las revisiones clínicas señalan beneficios especialmente relevantes en estrés, ansiedad, síntomas depresivos, dolor y sueño, con matices importantes según el tipo de intervención y la persona.<sup><a href="#ref-m1">1</a></sup><sup><a href="#ref-m2">2</a></sup></p>

      <div class="article-grid article-grid--3">
        <div class="article-card">
          <h3>Ansiedad</h3>
          <p>Ayuda a detectar la activación corporal, la anticipación y las conductas de evitación antes de que el miedo dirija todo el día. Si este es tu caso, puede interesarte leer sobre <a href="/blog/ansiedad-persistente-tratamiento-psicologico/">ansiedad persistente</a> y <a href="/blog/gestion-ansiedad/">gestión de la ansiedad</a>.</p>
        </div>
        <div class="article-card">
          <h3>Estrés</h3>
          <p>Entrena pequeñas pausas entre estímulo y respuesta. Esa pausa puede cambiar cómo contestas, cómo descansas y cómo organizas tus límites.</p>
        </div>
        <div class="article-card">
          <h3>Autoestima</h3>
          <p>Permite observar la autocrítica sin fusionarte con ella. No elimina la voz crítica de golpe, pero ayuda a responderle de una forma más justa. Puedes ampliar este tema en el artículo sobre <a href="/blog/autoestima-saludable/">autoestima saludable</a>.</p>
        </div>
      </div>

      <figure class="article-figure--bleed">
        <img src="${psicologia.src}" alt="Sesión de psicología donde se integra mindfulness y regulación emocional" loading="lazy" />
        <figcaption>En terapia, mindfulness se adapta a la historia y a los objetivos de cada persona.</figcaption>
      </figure>

      <h2>Qué dice la evidencia y qué límites conviene tener presentes</h2>

      <p>Una revisión publicada en <em>JAMA Internal Medicine</em> encontró evidencia moderada de mejora en ansiedad, depresión y dolor en programas de meditación, aunque con efectos variables y sin convertir la práctica en una solución universal.<sup><a href="#ref-m2">2</a></sup> Otros análisis recogidos por NCCIH indican que las intervenciones basadas en mindfulness pueden ser mejores que no recibir tratamiento y, en algunos casos, comparables a tratamientos establecidos, pero también advierten de sesgos, resultados mixtos y falta de seguimiento a largo plazo en parte de la literatura.<sup><a href="#ref-m1">1</a></sup></p>

      <p>Esto es importante porque la atención plena no debería venderse como una receta milagrosa. Puede ser una herramienta valiosa dentro de un plan terapéutico, especialmente cuando se combina con evaluación clínica, objetivos claros y trabajo sobre pensamientos, emociones, conducta y contexto. Si hay ansiedad intensa, trauma, depresión, ataques de pánico o riesgo para la seguridad, lo adecuado es pedir una valoración profesional y no sustituir la atención psicológica o médica por una práctica aislada.</p>

      <h2>Tres ejercicios sencillos para empezar</h2>

      <p>Si nunca has practicado, conviene empezar con ejercicios breves. Lo importante no es hacerlo perfecto, sino repetirlo lo suficiente como para conocer tu patrón interno.</p>

      <div class="article-grid">
        <div class="article-card">
          <h3>1. Respiración como ancla durante tres minutos</h3>
          <p>Siéntate con los pies apoyados. Lleva la atención a la entrada y salida del aire. Cuando aparezcan pensamientos, nómbralos de forma simple: "preocupación", "recuerdo", "planificación". Después vuelve a la respiración sin discutir con la mente.</p>
        </div>
        <div class="article-card">
          <h3>2. Escaneo corporal breve</h3>
          <p>Recorre mentalmente rostro, cuello, hombros, pecho, abdomen, manos y piernas. No intentes cambiar nada al principio. Observa tensión, temperatura, presión o movimiento. Este ejercicio ayuda a detectar señales tempranas de estrés.</p>
        </div>
        <div class="article-card">
          <h3>3. Una actividad cotidiana con atención plena</h3>
          <p>Elige una acción diaria, como ducharte, caminar o tomar café. Durante dos minutos, vuelve a los sentidos: textura, olor, sonido, temperatura y movimiento. Cuando la mente se vaya, vuelve a lo que estás haciendo.</p>
        </div>
      </div>

      <h2>Cómo se trabaja la atención plena en terapia</h2>

      <p>En un proceso psicológico, mindfulness no se plantea como una tarea genérica para todo el mundo. Se ajusta a la dificultad principal y a la historia de la persona. En <a href="/servicios/">terapia individual</a>, puede servir para reconocer el ciclo de ansiedad, reducir la rumiación, trabajar la autocrítica o aprender a sostener emociones sin reaccionar de forma impulsiva. En algunos procesos de <a href="/blog/comunicacion-pareja/">comunicación en pareja</a>, también ayuda a detectar defensividad, tono, retirada o necesidad de tener razón antes de que la conversación se convierta en una escalada.</p>

      <p>El criterio profesional es fundamental: no todas las personas se benefician de los mismos ejercicios, y algunas necesitan primero estabilización, psicoeducación o intervención más estructurada. La práctica debe estar al servicio del objetivo terapéutico, no convertirse en una obligación más que cumplir.</p>

      <div class="article-cta">
        <p>¿Quieres aprender a regularte sin pelearte contigo?</p>
        <p>Si la ansiedad, el estrés o la autocrítica están ocupando demasiado espacio, podemos valorar qué herramientas tienen sentido para tu caso. Atiendo en consulta presencial en Córdoba y también en formato online.</p>
        <a href="/contacto/">Solicitar información</a>
      </div>

      <h2>También puede interesarte</h2>

      <ul class="article-related">
        <li><a href="/blog/ansiedad-persistente-tratamiento-psicologico/">Ansiedad persistente: cómo reconocerla y qué tratamiento psicológico funciona</a></li>
        <li><a href="/blog/gestion-ansiedad/">Cómo gestionar la ansiedad cuando el cuerpo se activa</a></li>
        <li><a href="/blog/autoestima-saludable/">Baja autoestima: señales y cómo empezar a trabajarla</a></li>
        <li><a href="/blog/beneficios-terapia-individual/">Beneficios de la terapia individual</a></li>
        <li><a href="/blog/comunicacion-pareja/">Comunicación en pareja: qué hacer cuando hablar no sirve</a></li>
        <li><a href="/blog/terapia-de-pareja-cuando-empezar/">Terapia de pareja: cuándo empezar y qué esperar</a></li>
        <li><a href="/servicios/">Ver servicios de psicología presencial y online</a></li>
        <li><a href="/contacto/">Contactar para pedir información</a></li>
      </ul>

      <h2>Referencias y fuentes</h2>

      <ol class="article-references">
        <li id="ref-m1">National Center for Complementary and Integrative Health. <a href="https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety" target="_blank" rel="noopener noreferrer">Meditation and Mindfulness: Effectiveness and Safety</a>.</li>
        <li id="ref-m2">Goyal M, Singh S, Sibinga EMS, et al. <a href="https://pubmed.ncbi.nlm.nih.gov/24395196/" target="_blank" rel="noopener noreferrer">Meditation Programs for Psychological Stress and Well-being: A Systematic Review and Meta-analysis</a>. <em>JAMA Internal Medicine</em>. 2014.</li>
        <li id="ref-m3">Hoge EA, Bui E, Mete M, et al. <a href="https://pubmed.ncbi.nlm.nih.gov/36102337/" target="_blank" rel="noopener noreferrer">Mindfulness-Based Stress Reduction vs Escitalopram for the Treatment of Adults With Anxiety Disorders</a>. <em>JAMA Psychiatry</em>. 2022.</li>
      </ol>
    `
  },
  "ansiedad-persistente-tratamiento-psicologico": {
    slug: "ansiedad-persistente-tratamiento-psicologico",
    title: "Ansiedad persistente: cómo reconocerla y qué tratamiento psicológico funciona",
    seoTitle: "Ansiedad persistente y tratamiento psicológico en Córdoba",
    seoDescription: "Síntomas, evaluación y tratamiento psicológico de la ansiedad. Consulta presencial en Córdoba y terapia online con enfoque basado en evidencia.",
    keywords: "ansiedad persistente, tratamiento ansiedad, terapia ansiedad cordoba, trastorno ansiedad, psicologo ansiedad, terapia cognitivo conductual ansiedad",
    excerpt: "No toda ansiedad necesita terapia, pero cuando empieza a ocupar demasiado espacio en tu vida conviene entender qué está pasando y qué abordajes tienen más respaldo científico.",
    date: "26 Mayo 2026",
    dateShort: "26 May",
    readTime: "11 min",
    category: "Ansiedad",
    image: terapiaIndividual,
    content: `
      <p>Sentir ansiedad no significa estar haciendo algo mal. La ansiedad es una respuesta humana normal ante la incertidumbre, la presión o el peligro. El problema aparece cuando deja de ser una señal puntual y se convierte en un estado casi permanente: cuesta descansar, el cuerpo vive en alerta y la mente no desconecta. En ese punto, una evaluación psicológica ayuda a diferenciar entre estrés esperable, ansiedad clínica y otros problemas que pueden parecerse mucho entre sí.<sup><a href="#ref-1">1</a></sup><sup><a href="#ref-2">2</a></sup></p>

      <figure class="article-figure--bleed">
        <img src="${psicologia.src}" alt="Consulta de psicología para trabajar la ansiedad" loading="lazy" />
        <figcaption>La ansiedad se entiende mejor cuando observamos a la vez pensamientos, cuerpo y conductas.</figcaption>
      </figure>

      <div class="article-callout">
        <p><strong>Idea clave:</strong> la evidencia actual sitúa a la terapia cognitivo-conductual entre los tratamientos con mejor respaldo para muchos trastornos de ansiedad, y las guías clínicas recomiendan ajustar la intensidad del tratamiento a la gravedad, el deterioro funcional y la preferencia de la persona.<sup><a href="#ref-1">1</a></sup><sup><a href="#ref-3">3</a></sup><sup><a href="#ref-4">4</a></sup></p>
      </div>

      <h2>¿Cuándo deja de ser una preocupación normal?</h2>

      <p>Hay días en los que todos dormimos peor, le damos demasiadas vueltas a un problema o sentimos el cuerpo acelerado. Eso, por sí solo, no indica un trastorno. Lo que suele marcar la diferencia es la <strong>frecuencia</strong>, la <strong>intensidad</strong>, el <strong>grado de interferencia</strong> y la cantidad de energía que requiere intentar controlar los síntomas.</p>

      <div class="article-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Señal</th>
              <th>Ansiedad esperable</th>
              <th>Conviene pedir valoración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Duración</td>
              <td>Aparece en momentos concretos y remite.</td>
              <td>Se mantiene semanas o meses, incluso sin un desencadenante claro.</td>
            </tr>
            <tr>
              <td>Impacto</td>
              <td>Molesta, pero permite seguir con la rutina.</td>
              <td>Interfiere en el sueño, trabajo, estudios o relaciones.</td>
            </tr>
            <tr>
              <td>Cuerpo</td>
              <td>Activación pasajera.</td>
              <td>Taquicardia, tensión, molestias digestivas o sensación de ahogo frecuentes.</td>
            </tr>
            <tr>
              <td>Conducta</td>
              <td>No cambia mucho el día a día.</td>
              <td>Empiezas a evitar lugares, conversaciones, llamadas o decisiones.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>La guía clínica de NICE para trastorno de ansiedad generalizada y pánico en adultos insiste en valorar no solo los síntomas, sino también el <strong>deterioro funcional</strong>, la presencia de comorbilidades y la historia previa de recaídas.<sup><a href="#ref-1">1</a></sup> Dicho de forma sencilla: no importa únicamente cuánto nerviosismo sientes, sino cuánto espacio ocupa en tu vida.</p>

      <h2>Síntomas frecuentes que conviene mirar en conjunto</h2>

      <p>La ansiedad sostenida rara vez se presenta de una sola forma. A veces la persona llega diciendo “tengo la mente saturada”; otras, “me duele el pecho”, “me cuesta respirar” o “no dejo de anticipar problemas”. El Instituto Nacional de Salud Mental de EE. UU. describe precisamente esa combinación de <strong>preocupación difícil de controlar</strong>, síntomas físicos y conductas de evitación.<sup><a href="#ref-2">2</a></sup></p>

      <div class="article-grid article-grid--3">
        <div class="article-card">
          <h3>Síntomas cognitivos</h3>
          <p>Rumiación, sensación de amenaza, dificultad para concentrarte y necesidad de revisar todo una y otra vez.</p>
        </div>
        <div class="article-card">
          <h3>Síntomas físicos</h3>
          <p>Tensión muscular, taquicardia, inquietud, mareo, molestias digestivas, sueño ligero o despertar con el cuerpo ya activado.</p>
        </div>
        <div class="article-card">
          <h3>Síntomas conductuales</h3>
          <p>Aplazamiento, evitación de situaciones, dependencia de la tranquilidad externa y búsqueda constante de seguridad.</p>
        </div>
      </div>

      <blockquote>
        <p>La ansiedad no siempre se “ve” desde fuera, pero desde dentro puede sentirse como vivir con el sistema de alarma encendido todo el día.</p>
      </blockquote>

      <h2>Qué tratamientos psicológicos tienen más respaldo</h2>

      <p>Si buscas una respuesta corta, sería esta: <strong>la terapia cognitivo-conductual es uno de los abordajes más estudiados y recomendados</strong> para ansiedad generalizada, pánico, fobias y otros cuadros relacionados.<sup><a href="#ref-1">1</a></sup><sup><a href="#ref-3">3</a></sup> Además, la investigación muestra que los formatos online bien estructurados también pueden ser útiles en muchos casos, algo relevante para quienes necesitan flexibilidad horaria o prefieren empezar desde casa.<sup><a href="#ref-5">5</a></sup></p>

      <div class="article-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Intervención</th>
              <th>Qué trabaja</th>
              <th>Cuándo suele ser útil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Terapia cognitivo-conductual</td>
              <td>Relación entre pensamientos, activación física y evitación.</td>
              <td>Ansiedad persistente, pánico, preocupaciones excesivas, bloqueos por miedo.</td>
            </tr>
            <tr>
              <td>Exposición graduada</td>
              <td>Reduce el miedo aprendido y la evitación.</td>
              <td>Fobias, pánico con evitación, ansiedad social y algunas conductas de seguridad.</td>
            </tr>
            <tr>
              <td>Psicoeducación y autorregulación</td>
              <td>Entender el ciclo de ansiedad y bajar reactividad.</td>
              <td>Inicio del proceso, recaídas leves, complemento entre sesiones.</td>
            </tr>
            <tr>
              <td>Formato online estructurado</td>
              <td>Acceso más flexible con objetivos y seguimiento.</td>
              <td>Personas con horarios complicados, desplazamientos difíciles o preferencia por terapia online.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure class="article-figure--bleed">
        <img src="${apunte.src}" alt="Herramientas de autorregulación para la ansiedad" loading="lazy" />
        <figcaption>Las herramientas ayudan más cuando se integran en un plan terapéutico claro y se practican con constancia.</figcaption>
      </figure>

      <h2>Lo que sí puedes empezar a hacer esta semana</h2>

      <p>No hace falta esperar a “estar peor” para empezar a cuidarte. Estas acciones no sustituyen una terapia cuando hay deterioro clínico, pero sí pueden darte información muy valiosa:</p>

      <ol>
        <li><strong>Registra el patrón.</strong> Anota cuándo aparece la ansiedad, qué la dispara, qué haces para aliviarla y si ese alivio dura o solo te saca del paso.</li>
        <li><strong>Diferencia peligro de probabilidad.</strong> La mente ansiosa trata escenarios posibles como si fueran inminentes. Ponerles porcentaje ayuda a bajar la urgencia.</li>
        <li><strong>Observa la evitación.</strong> Muchas veces el sufrimiento se mantiene menos por el síntoma inicial que por lo que dejamos de hacer para no sentirlo.</li>
        <li><strong>Revisa el descanso, cafeína y sobrecarga.</strong> No explican toda la ansiedad, pero pueden amplificarla de forma clara.</li>
      </ol>

      <h2>También puede interesarte</h2>

      <ul class="article-related">
        <li><a href="/blog/gestion-ansiedad/">Cómo gestionar la ansiedad en el día a día</a></li>
        <li><a href="/blog/ansiedad-personas-mayores/">Ansiedad en personas mayores: señales y apoyo</a></li>
        <li><a href="/blog/cuando-ir-al-psicologo/">Cuándo ir al psicólogo: señales y primera sesión</a></li>
      </ul>

      <div class="article-cta">
        <p>¿Cuándo pedir ayuda profesional?</p>
        <p>Si la ansiedad te está quitando sueño, energía, concentración o libertad para hacer vida normal, merece una valoración seria. Si buscas una psicóloga para ansiedad en Córdoba o prefieres trabajar online, el objetivo no es solo “aguantar mejor”, sino entender el patrón y reducirlo de forma estable.</p>
        <a href="/contacto/">Solicitar información</a>
      </div>

      <h2>Referencias y fuentes</h2>

      <ol class="article-references">
        <li id="ref-1">National Institute for Health and Care Excellence. <a href="https://www.nice.org.uk/guidance/cg113" target="_blank" rel="noopener noreferrer">Generalised anxiety disorder and panic disorder in adults: management (CG113)</a>.</li>
        <li id="ref-2">National Institute of Mental Health. <a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders" target="_blank" rel="noopener noreferrer">Anxiety Disorders</a>.</li>
        <li id="ref-3">National Center for Biotechnology Information. <a href="https://pubmed.ncbi.nlm.nih.gov/29451967/" target="_blank" rel="noopener noreferrer">Cognitive behavioral therapy for anxiety and related disorders: A meta-analysis of randomized placebo-controlled trials</a>.</li>
        <li id="ref-4">National Center for Biotechnology Information. <a href="https://pubmed.ncbi.nlm.nih.gov/31758858/" target="_blank" rel="noopener noreferrer">Long-term Outcomes of Cognitive Behavioral Therapy for Anxiety-Related Disorders: A Systematic Review and Meta-analysis</a>.</li>
        <li id="ref-5">National Center for Biotechnology Information. <a href="https://pubmed.ncbi.nlm.nih.gov/34860613/" target="_blank" rel="noopener noreferrer">The effectiveness of telehealth versus face-to-face interventions for anxiety disorders: A systematic review and meta-analysis</a>.</li>
      </ol>
    `
  },
  "terapia-de-pareja-cuando-empezar": {
    slug: "terapia-de-pareja-cuando-empezar",
    title: "Terapia de pareja: cuándo empezar, qué esperar y qué dice la evidencia",
    seoTitle: "Terapia de pareja en Córdoba: cuándo empezar y cómo puede ayudar",
    seoDescription: "Artículo profesional sobre terapia de pareja: señales de alarma, objetivos, límites y evidencia científica. Atención presencial en Córdoba y sesiones online.",
    keywords: "terapia de pareja, terapia pareja cordoba, cuando empezar terapia pareja, psicologo parejas cordoba, problemas de pareja, terapia pareja online",
    excerpt: "La terapia de pareja no sirve para decidir quién tiene razón. Sirve para entender el patrón que os atrapa, bajar la escalada y recuperar una forma de hablar que no os desgaste más.",
    date: "19 Mayo 2026",
    dateShort: "19 May",
    readTime: "12 min",
    category: "Relaciones",
    image: terapiaPareja,
    content: `
      <p>Muchas parejas esperan demasiado antes de pedir ayuda. No llegan cuando “hay un problema”, sino cuando ya acumulan meses o años de discusiones repetidas, distancia emocional, desgaste sexual, resentimiento o sensación de convivencia en piloto automático. La terapia de pareja no es un juicio ni una negociación improvisada: es un espacio clínico para observar el patrón relacional, entender qué lo mantiene y ensayar maneras más seguras y efectivas de vincularse.<sup><a href="#ref-a">1</a></sup><sup><a href="#ref-b">2</a></sup></p>

      <figure class="article-figure--bleed">
        <img src="${terapiaPareja2.src}" alt="Pareja en un proceso de terapia" loading="lazy" />
        <figcaption>En terapia de pareja se trabaja la interacción entre ambos, no solo la versión individual de cada uno.</figcaption>
      </figure>

      <h2>Señales de que conviene intervenir antes</h2>

      <p>La mayoría de parejas no necesitan llegar a una crisis extrema para beneficiarse de la terapia. De hecho, cuanto más cronificado está el patrón, más tiempo suele hacer falta para modificarlo. La investigación sobre terapia de pareja muestra que la mejora es más probable cuando todavía existe un mínimo de motivación compartida para entenderse y cooperar.<sup><a href="#ref-a">1</a></sup><sup><a href="#ref-c">3</a></sup></p>

      <div class="article-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Situación</th>
              <th>Lo que suele pasar</th>
              <th>Qué puede aportar la terapia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Discusiones circulares</td>
              <td>Siempre acabáis en el mismo punto, con más defensividad que comprensión.</td>
              <td>Identificar la secuencia, cortar escaladas y cambiar el modo de conversar.</td>
            </tr>
            <tr>
              <td>Distancia emocional</td>
              <td>Convivís, pero os sentís poco vistos o poco escuchados.</td>
              <td>Recuperar seguridad emocional y claridad sobre necesidades y límites.</td>
            </tr>
            <tr>
              <td>Bloqueo tras una crisis</td>
              <td>Infidelidad, mentira importante o ruptura de confianza.</td>
              <td>Evaluar si es posible reparar, bajo qué condiciones y con qué ritmo.</td>
            </tr>
            <tr>
              <td>Desacuerdos crónicos</td>
              <td>Familia, crianza, dinero o intimidad se convierten en batallas recurrentes.</td>
              <td>Pasar de la pelea por posiciones a una negociación más útil y concreta.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <blockquote>
        <p>La pregunta no es solo “¿seguimos juntos?”, sino “¿qué patrón estamos repitiendo y qué coste tiene seguir así?”.</p>
      </blockquote>

      <h2>Qué dice la evidencia científica</h2>

      <p>La buena noticia es que la terapia de pareja cuenta con un respaldo empírico cada vez más robusto. Las revisiones sistemáticas y metaanálisis publicados en revistas científicas muestran mejoras relevantes en satisfacción relacional, comunicación y reducción del malestar de pareja.<sup><a href="#ref-a">1</a></sup><sup><a href="#ref-b">2</a></sup><sup><a href="#ref-c">3</a></sup></p>

      <div class="article-grid article-grid--3">
        <div class="article-card">
          <h3>Más que “hablar”</h3>
          <p>La mejoría suele ser más probable cuando el proceso no se limita a ventilar emociones, sino que organiza objetivos, tareas y nuevas secuencias de interacción.</p>
        </div>
        <div class="article-card">
          <h3>Modelos con respaldo</h3>
          <p>La terapia conductual de pareja y la terapia focalizada en las emociones figuran entre los modelos más estudiados.</p>
        </div>
        <div class="article-card">
          <h3>Efectos amplios</h3>
          <p>Cuando mejora la relación, también pueden reducirse síntomas individuales asociados al estrés relacional, como ansiedad o bajo estado de ánimo.</p>
        </div>
      </div>

      <p>En términos prácticos, esto significa que la terapia de pareja, cuando tras una valoración resulta adecuada, no es “solo para salvar relaciones”. También puede ayudar a <strong>tomar decisiones con más claridad</strong>, revisar patrones dañinos y practicar habilidades relacionales fuera de la consulta.<sup><a href="#ref-d">4</a></sup></p>

      <figure class="article-figure--bleed">
        <img src="${autoestima.src}" alt="Conversación consciente en pareja" loading="lazy" />
        <figcaption>La mejora suele empezar cuando cada persona entiende su parte del patrón sin convertir la sesión en un reparto de culpas.</figcaption>
      </figure>

      <h2>Qué suele pasar en las primeras sesiones</h2>

      <p>Una terapia seria no se lanza a dar consejos rápidos. Primero necesita comprender el motivo de consulta, la historia de la relación, cómo discuten, qué temas activan más a cada uno y si existe seguridad suficiente para trabajar en formato conjunto. También se valora si hay síntomas individuales importantes, consumo problemático o situaciones de control y miedo que requieran otro tipo de abordaje.<sup><a href="#ref-d">4</a></sup><sup><a href="#ref-e">5</a></sup></p>

      <div class="article-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Mito frecuente</th>
              <th>Lo que suele ocurrir en realidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>“La terapeuta dirá quién tiene razón”.</td>
              <td>Se analiza el patrón completo y la contribución de ambos a la secuencia problema.</td>
            </tr>
            <tr>
              <td>“Si vamos, es porque ya estamos fatal”.</td>
              <td>Intervenir antes suele facilitar más opciones de cambio y menos cronificación.</td>
            </tr>
            <tr>
              <td>“Solo sirve si seguimos juntos sí o sí”.</td>
              <td>También puede ayudar a tomar decisiones difíciles con más respeto, claridad y menos daño añadido.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Cuándo la terapia de pareja no es la primera opción</h2>

      <p>Aquí conviene ser muy claros. No todas las situaciones deben abordarse de entrada con sesiones conjuntas. Cuando hay <strong>miedo, coerción, violencia activa, intimidación, consumo severo sin abordar o imposibilidad real de hablar con seguridad</strong>, primero hay que valorar protección, estabilización o trabajo individual específico.<sup><a href="#ref-e">5</a></sup> La seriedad del proceso también pasa por saber cuándo una terapia de pareja está indicada y cuándo no.</p>

      <h2>También puede interesarte</h2>

      <ul class="article-related">
        <li><a href="/blog/comunicacion-pareja/">Comunicación en pareja: cómo hablar sin herirse</a></li>
        <li><a href="/blog/cuando-ir-al-psicologo/">Cuándo ir al psicólogo: señales y primera sesión</a></li>
        <li><a href="/servicios/">Servicios de psicología presencial y online</a></li>
      </ul>

      <div class="article-cta">
        <p>¿Cuándo tiene sentido consultar?</p>
        <p>Si notáis que os queréis pero no conseguís entenderos, o si una crisis os ha dejado sin forma útil de hablar, una valoración profesional puede orientaros. Si estáis buscando terapia de pareja en Córdoba, presencial u online, el primer objetivo no es forzar acuerdos rápidos, sino entender si todavía hay base para trabajar y cómo hacerlo bien.</p>
        <a href="/contacto/">Solicitar primera valoración</a>
      </div>

      <h2>Referencias y fuentes</h2>

      <ol class="article-references">
        <li id="ref-a">National Center for Biotechnology Information. <a href="https://pubmed.ncbi.nlm.nih.gov/32031866/" target="_blank" rel="noopener noreferrer">Interventions for Couples</a>.</li>
        <li id="ref-b">National Center for Biotechnology Information. <a href="https://pubmed.ncbi.nlm.nih.gov/20350033/" target="_blank" rel="noopener noreferrer">Marital status and satisfaction five years following a randomized clinical trial comparing traditional versus integrative behavioral couple therapy</a>.</li>
        <li id="ref-c">Journal of Marital and Family Therapy. <a href="https://doi.org/10.1111/jmft.12336" target="_blank" rel="noopener noreferrer">The efficacy of emotionally focused couples therapy and behavioral couples therapy: A meta-analysis</a>.</li>
        <li id="ref-d">National Center for Biotechnology Information. <a href="https://pubmed.ncbi.nlm.nih.gov/27226235/" target="_blank" rel="noopener noreferrer">Integrative Behavioral Couple Therapy: Theoretical Background, Empirical Research, and Dissemination</a>.</li>
        <li id="ref-e">National Center for Biotechnology Information. <a href="https://pubmed.ncbi.nlm.nih.gov/27377617/" target="_blank" rel="noopener noreferrer">Couples Therapy for Intimate Partner Violence: A Systematic Review and Meta-Analysis</a>.</li>
      </ol>
    `
  },
  "beneficios-terapia-individual": {
    slug: "beneficios-terapia-individual",
    title: "Beneficios de la terapia individual: cómo puede ayudar y qué esperar",
    seoTitle: "Terapia individual en Córdoba: beneficios y qué esperar",
    seoDescription: "Beneficios de la terapia individual explicados con claridad: qué ocurre en sesión, para quién sirve y qué puedes esperar. Psicóloga en Córdoba y online.",
    keywords: "terapia individual, beneficios terapia psicologica, psicologo individual cordoba, terapia psicologica cordoba, primera sesion psicologo, psicologa cordoba online",
    excerpt: "La terapia individual no consiste en recibir consejos sobre tu vida. Es un espacio para entender qué te ocurre, por qué te ocurre y qué puedes hacer al respecto.",
    date: "15 Enero 2025",
    dateShort: "15 Ene",
    readTime: "5 min",
    category: "Bienestar",
    image: terapiaFamilia,
    content: `
      <p>Mucha gente llega a la terapia individual con una idea equivocada: que alguien les dirá qué hacer con su vida. En realidad, el trabajo consiste en algo más útil: entender qué te ocurre, por qué se repite y qué opciones tienes para sentirte mejor. No hace falta estar en crisis para empezar. Basta con querer un espacio donde no tengas que cuidar cada palabra ni resolverlo todo solo.</p>

      <div class="article-callout">
        <p><strong>Idea clave:</strong> la terapia individual no consiste en recibir consejos sobre tu vida, sino en entender qué te ocurre y aprender a relacionarte mejor contigo y con los demás. Si quieres saber cuándo dar el paso, puedes leer <a href="/blog/cuando-ir-al-psicologo/">cuándo ir al psicólogo</a>.</p>
      </div>
      
      <figure class="article-figure--bleed">
        <img src="${psicologia.src}" alt="Espacio tranquilo de consulta psicológica para terapia individual" loading="lazy" />
        <figcaption>Un buen proceso terapéutico empieza por un espacio donde puedas hablar con honestidad y sin prisas.</figcaption>
      </figure>
      
      <h2>Qué ocurre realmente en terapia individual</h2>
      
      <p>No es magia ni un interrogatorio. Es un espacio estructurado donde se explora lo que sientes, lo que haces y lo que mantienes sin querer. A veces se trabaja con técnicas concretas; otras, con reflexión, psicoeducación o ejercicios entre sesiones. El objetivo no es que dependas de la terapia, sino que recuperes claridad y herramientas que puedas usar fuera de consulta.</p>
      
      <p>Puedes traer lo que te dé vergüenza, lo que no entiendes o lo que te duele. La confidencialidad profesional y el ritmo acordado hacen posible un trabajo honesto, sin juicio.</p>
      
      <div class="article-grid article-grid--2">
        <div class="article-card">
          <h3>Entenderte mejor</h3>
          <p>Muchas conductas se repiten sin que sepamos por qué. La terapia ayuda a conectar emociones, pensamientos y patrones que antes parecían inconexos.</p>
        </div>
        <div class="article-card">
          <h3>Regular la ansiedad</h3>
          <p>La ansiedad no desaparece por desearlo, pero sí se puede aprender a gestionarla. Técnicas de regulación, exposición gradual y cambio de hábitos suelen formar parte del proceso.</p>
        </div>
        <div class="article-card">
          <h3>Mejorar relaciones</h3>
          <p>Cuando entiendes cómo funcionas tú, entiendes mejor a los demás. Eso cambia la comunicación en pareja, familia, amistad y trabajo.</p>
        </div>
        <div class="article-card">
          <h3>Decidir con más claridad</h3>
          <p>Cuando sabes qué necesitas y qué te frena, las decisiones dejan de depender solo del miedo, la culpa o el “deberías”.</p>
        </div>
      </div>

      <h2>Para quién tiene sentido la terapia individual</h2>

      <p>La terapia individual puede ayudarte si vives ansiedad persistente, baja autoestima, dificultades para poner límites, duelos, cambios vitales, conflictos relacionales o simplemente la sensación de no estar viviendo como querrías. También si quieres prevenir un empeoramiento antes de que el malestar limite más tu vida.</p>

      <blockquote>
        <p>Pedir ayuda no es debilidad. Es una forma de cuidarte con la misma seriedad con la que cuidarías a alguien a quien quieres.</p>
      </blockquote>

      <h2>Qué puedes esperar de un buen proceso</h2>

      <ul class="article-checklist">
        <li>Una primera sesión orientativa, no un compromiso indefinido.</li>
        <li>Objetivos revisables y un plan de trabajo comprensible.</li>
        <li>Herramientas prácticas, no solo conversación.</li>
        <li>Confidencialidad y respeto por tu ritmo.</li>
        <li>Posibilidad de trabajar presencial en Córdoba u online.</li>
      </ul>

      <h2>También puede interesarte</h2>

      <ul class="article-related">
        <li><a href="/blog/cuando-ir-al-psicologo/">Cuándo ir al psicólogo: señales, mitos y primera sesión</a></li>
        <li><a href="/blog/gestion-ansiedad/">Cómo gestionar la ansiedad cuando el cuerpo se activa</a></li>
        <li><a href="/blog/autoestima-saludable/">Baja autoestima: señales y cómo trabajarla</a></li>
        <li><a href="/servicios/">Servicios de psicología presencial y online</a></li>
      </ul>
      
      <div class="article-cta">
        <p>¿Tienes dudas sobre la terapia individual?</p>
        <p>Podemos hablar con tranquilidad sobre qué te trae, qué formato encaja mejor contigo y qué puedes esperar de una primera sesión. Sin presión: solo una conversación honesta.</p>
        <a href="/contacto/">Pedir información sobre terapia individual</a>
      </div>
    `
  },
  "comunicacion-pareja": {
    slug: "comunicacion-pareja",
    title: "Comunicación en pareja: cuando hablar no basta",
    seoTitle: "Comunicación en pareja: cómo mejorarla con ayuda psicológica",
    seoDescription: "Comunicación en pareja: por qué hablar no siempre basta, señales de alarma y cómo la terapia puede ayudar. Psicóloga en Córdoba y sesiones online.",
    keywords: "comunicacion en pareja, problemas de comunicacion pareja, terapia de pareja cordoba, mejorar comunicacion pareja, psicologa parejas cordoba",
    excerpt: "Hablan, hablan, pero no se entienden. Si esto te suena, no estás solo: la comunicación en pareja puede mejorar, pero no siempre de la forma que imaginamos.",
    date: "8 Enero 2025",
    dateShort: "8 Ene",
    readTime: "7 min",
    category: "Relaciones",
    image: terapiaPareja2,
    content: `
      <p>"Hablamos, pero no nos entendemos". Es una de las frases que más escucho en consulta. Y tiene sentido: hablar no siempre es comunicar. A veces lo que hacemos es defender nuestra versión, esperar nuestro turno para rebatir o repetir el mismo conflicto con distintas palabras. El resultado suele ser el mismo: más distancia, más cansancio y la sensación de estar solos incluso estando juntos.</p>

      <div class="article-callout">
        <p><strong>Idea clave:</strong> comunicar no es hablar más, sino escuchar mejor. Cuando la conversación se convierte en defensa, la distancia emocional crece aunque sigáis teniendo diálogo. Si el patrón ya está muy instalado, puede ayudarte leer sobre <a href="/blog/terapia-de-pareja-cuando-empezar/">cuándo empezar terapia de pareja</a>.</p>
      </div>
      
      <figure class="article-figure--bleed">
        <img src="${autoestima.src}" alt="Pareja conversando con dificultad para entenderse" loading="lazy" />
        <figcaption>La comunicación real implica escuchar, no solo exponer tu versión de los hechos.</figcaption>
      </figure>
      
      <h2>Por qué no nos entendemos aunque hablemos</h2>
      
      <p>Muchas discusiones de pareja no son sobre el tema superficial —la ropa, el dinero, la familia— sino sobre necesidades más profundas: sentirse escuchado, valorado, respetado o seguro. Cuando esas necesidades no se nombran, el conflicto se repite en bucle.</p>

      <p>También influyen patrones aprendidos: cómo se hablaba en casa, miedo al conflicto, necesidad de tener razón o dificultad para poner límites sin atacar. Reconocer el patrón ya es un primer paso para cambiarlo.</p>
      
      <div class="article-steps">
        <div class="article-step">
          <div class="article-step-num">1</div>
          <div>
            <h3>Escuchar de verdad</h3>
            <p>No es solo oír palabras. Es intentar entender qué siente la otra persona, aunque no estés de acuerdo. Ponerse en su lugar antes de responder cambia el tono de la conversación.</p>
          </div>
        </div>
        
        <div class="article-step">
          <div class="article-step-num">2</div>
          <div>
            <h3>Hablar de ti, no del otro</h3>
            <p>"Tú siempre..." o "Tú nunca..." activan la defensa. Prueba con "Yo me siento... cuando...". La diferencia suele notarse enseguida.</p>
          </div>
        </div>
        
        <div class="article-step">
          <div class="article-step-num">3</div>
          <div>
            <h3>Elegir el momento</h3>
            <p>No todas las conversaciones son para cualquier instante. A veces conviene decir "¿Podemos hablar de esto más tarde?" antes que soltarlo en plena discusión.</p>
          </div>
        </div>
        
        <div class="article-step">
          <div class="article-step-num">4</div>
          <div>
            <h3>Validar antes de opinar</h3>
            <p>No hace falta estar de acuerdo para entender. Un "entiendo que te sientas así" abre más puertas que un discurso sobre por qué no debería sentirse así.</p>
          </div>
        </div>
      </div>

      <h2>Señales de que la comunicación necesita ayuda</h2>

      <ul class="article-checklist">
        <li>Repetís las mismas discusiones sin resolver nada.</li>
        <li>Uno de los dos se calla para evitar el conflicto y acumula resentimiento.</li>
        <li>Las conversaciones importantes acaban siempre en reproches o silencio.</li>
        <li>Evitáis temas sensibles porque sabéis que escalarán.</li>
        <li>Os sentís más compañeros de convivencia que pareja emocionalmente conectada.</li>
      </ul>

      <h2>Cuándo tiene sentido la terapia de pareja</h2>

      <p>La terapia de pareja no requiere esperar a una crisis extrema. Puede ser una opción cuando todavía hay voluntad de entenderse, pero el patrón os supera. En sesión se observa la interacción, no solo la versión individual de cada uno, y se ensayan formas más seguras de hablar y pedir lo que necesitáis.</p>

      <h2>También puede interesarte</h2>

      <ul class="article-related">
        <li><a href="/blog/terapia-de-pareja-cuando-empezar/">Terapia de pareja: cuándo empezar y qué esperar</a></li>
        <li><a href="/blog/cuando-ir-al-psicologo/">Cuándo ir al psicólogo: señales y primera sesión</a></li>
        <li><a href="/servicios/">Servicios de psicología presencial y online</a></li>
      </ul>
      
      <div class="article-cta">
        <p>¿Sientes que vuestra comunicación se ha roto?</p>
        <p>La terapia de pareja puede ayudaros a salir del bucle antes de que el resentimiento se instale. Si buscáis apoyo en Córdoba o en formato online, el primer paso es una valoración para ver si tiene sentido continuar juntos.</p>
        <a href="/contacto/">Solicitar información sobre terapia de pareja</a>
      </div>
    `
  },
  "gestion-ansiedad": {
    slug: "gestion-ansiedad",
    title: "Cómo gestionar la ansiedad cuando el cuerpo se activa",
    seoTitle: "Gestionar la ansiedad: técnicas psicológicas que pueden ayudar",
    seoDescription: "Técnicas psicológicas para gestionar la ansiedad en el día a día: respiración, grounding y cuándo pedir ayuda. Psicóloga en Córdoba y terapia online.",
    keywords: "gestionar ansiedad, tecnicas ansiedad, ansiedad dia a dia, como calmar ansiedad, psicologo ansiedad cordoba, terapia ansiedad online",
    excerpt: "La ansiedad no es debilidad: es tu cuerpo intentando protegerte. Aquí tienes técnicas concretas para regularla y señales de cuándo conviene pedir ayuda profesional.",
    date: "2 Enero 2025",
    dateShort: "2 Ene",
    readTime: "6 min",
    category: "Salud Mental",
    image: estres,
    content: `
      <p>La ansiedad no es un defecto de carácter. Es una respuesta de alerta que, en algunas personas, puede volverse más sensible: el cuerpo reacciona como si hubiera peligro incluso cuando el riesgo real parece bajo. Entender esto puede cambiar la relación con el síntoma: no se trata de "controlarte más", sino de explorar formas de regular la activación y el ciclo que mantiene la ansiedad.</p>

      <div class="article-callout">
        <p><strong>Idea clave:</strong> las técnicas de regulación ayudan más cuando se practican con regularidad y antes de que la ansiedad llegue al máximo. Si el malestar es persistente, conviene leer sobre <a href="/blog/ansiedad-persistente-tratamiento-psicologico/">ansiedad persistente y tratamiento psicológico</a>.</p>
      </div>
      
      <figure class="article-figure--bleed">
        <img src="${apunte.src}" alt="Persona practicando técnicas de regulación para la ansiedad" loading="lazy" />
        <figcaption>La respiración y la atención al presente son herramientas accesibles, pero requieren práctica para ser útiles en momentos de activación.</figcaption>
      </figure>
      
      <h2>Técnicas que puedes empezar a usar hoy</h2>
      
      <p>No son soluciones milagrosas, pero pueden ser recursos útiles si los practicas cuando la ansiedad está aún moderada, no solo en plena crisis.</p>
      
      <div class="article-grid article-grid--3">
        <div class="article-card text-center">
          <h3>Respiración diafragmática</h3>
          <p>Inhala 4 segundos, mantén 4, exhala 6. Repite varias veces. La exhalación más larga activa el sistema parasimpático y ayuda al cuerpo a bajar la activación.</p>
        </div>
        
        <div class="article-card text-center">
          <h3>Técnica 5-4-3-2-1</h3>
          <p>Nombra 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles y 1 que saboreas. Te devuelve al presente cuando la mente se acelera o se desconecta.</p>
        </div>
        
        <div class="article-card text-center">
          <h3>Cuestionar los "y si..."</h3>
          <p>La mente ansiosa anticipa lo peor. Pregúntate: ¿qué evidencia tengo?, ¿qué es lo más probable?, ¿qué le diría a alguien a quien quiero en mi situación?</p>
        </div>
      </div>

      <h2>Qué evitar cuando estás ansioso</h2>

      <ul class="article-checklist">
        <li>Evitar por completo lo que te da miedo: alivia al momento, pero suele estrechar la vida con el tiempo.</li>
        <li>Buscar tranquilidad constante en Google o en la opinión de otros.</li>
        <li>Automedicarte o aumentar alcohol o cafeína para "aguantar".</li>
        <li>Reprocharte sentir ansiedad, como si fuera una falla personal.</li>
      </ul>

      <h2>Cuándo pedir ayuda profesional</h2>

      <p>Conviene consultar cuando la ansiedad dura semanas, interfiere en sueño, trabajo o relaciones, o cuando evitas situaciones importantes por miedo. También si los síntomas físicos —palpitaciones, opresión, mareo, insomnio— aparecen con frecuencia y no encuentras alivio duradero.</p>

      <p>En <a href="/servicios/">terapia individual</a> se trabaja el patrón completo: pensamientos, cuerpo, conductas de evitación y factores que mantienen la ansiedad. Si quieres profundizar, puedes leer <a href="/blog/atencion-plena-mindfulness-psicologia/">cómo integrar la atención plena en terapia</a>.</p>

      <h2>También puede interesarte</h2>

      <ul class="article-related">
        <li><a href="/blog/atencion-plena-mindfulness-psicologia/">Atención plena: qué es y cómo integrarla en terapia</a></li>
        <li><a href="/blog/cuando-ir-al-psicologo/">Cuándo ir al psicólogo: señales y primera sesión</a></li>
        <li><a href="/blog/ansiedad-persistente-tratamiento-psicologico/">Ansiedad persistente y tratamiento psicológico</a></li>
      </ul>
      
      <div class="article-cta">
        <p>¿La ansiedad está limitando tu vida?</p>
        <p>No tienes que atravesarlo solo. En consulta —presencial en Córdoba u online— podemos entender tu patrón y trabajar herramientas concretas para recuperar margen y tranquilidad.</p>
        <a href="/contacto/">Pedir información sobre terapia para la ansiedad</a>
      </div>
    `
  },
  "autoestima-saludable": {
    slug: "autoestima-saludable",
    title: "Baja autoestima: señales, causas y cómo trabajarla",
    seoTitle: "Baja autoestima: señales y cómo trabajarla en terapia",
    seoDescription: "Señales de baja autoestima, causas habituales y cómo trabajarla con ayuda psicológica. Psicóloga en Córdoba y terapia online.",
    keywords: "baja autoestima, autoestima saludable, trabajar autoestima, psicologo autoestima cordoba, terapia autoestima, autocompasion",
    excerpt: "La autoestima no es sentirse el mejor del mundo. Es aprender a relacionarte contigo con más justicia, límites y autocompasión.",
    date: "28 Diciembre 2024",
    dateShort: "28 Dic",
    readTime: "6 min",
    category: "Crecimiento Personal",
    image: autoestima,
    content: `
      <p>La autoestima no consiste en sentirse el mejor del mundo ni en repetirse frases positivas frente al espejo. Es, sobre todo, la forma en que te hablas, te tratas y te permites existir con tus aciertos y tus fallos. Cuando esa relación es crítica, exigente o injusta, el impacto se nota en decisiones, relaciones, trabajo y bienestar emocional.</p>

      <div class="article-callout">
        <p><strong>Idea clave:</strong> la autoestima no se construye repitiéndote frases positivas, sino aprendiendo a relacionarte contigo con más justicia, límites y autocompasión. Si dudas de si necesitas ayuda, puedes leer <a href="/blog/cuando-ir-al-psicologo/">cuándo ir al psicólogo</a>.</p>
      </div>
      
      <figure class="article-figure--bleed">
        <img src="${estres.src}" alt="Persona reflexionando sobre su relación consigo misma" loading="lazy" />
        <figcaption>Quererse no es egoísmo: es la base desde la que puedes cuidar mejor de ti y de los demás.</figcaption>
      </figure>
      
      <h2>Cómo nos hablamos a nosotros mismos</h2>
      
      <p>Fíjate en tu diálogo interno. ¿Serías tan duro con un amigo como lo eres contigo? Probablemente no. Esa voz crítica no es la verdad: es un hábito aprendido, muchas veces en contextos donde solo recibías atención al equivocarte o al cumplir expectativas ajenas.</p>

      <p>Trabajar la autoestima implica reconocer ese patrón, cuestionarlo y practicar una forma de hablarte más justa, sin caer en lo contrario —la autoengaño o la grandiosidad—.</p>
      
      <h2>Señales de que tu autoestima necesita atención</h2>

      <ul class="article-checklist">
        <li>Te criticas constantemente, incluso por errores pequeños o circunstanciales.</li>
        <li>No puedes aceptar un cumplido sin rebajarlo o desconfiar de él.</li>
        <li>Evitas intentar cosas nuevas por miedo a fracasar o quedar mal.</li>
        <li>Necesitas la aprobación de otros para sentirte válido o valiosa.</li>
        <li>Pones límites débiles y luego te resentís por haber dicho que sí.</li>
        <li>Comparas tu vida interior con la imagen exterior de los demás.</li>
      </ul>
      
      <h2>Pequeños pasos para empezar a trabajarla</h2>
      
      <div class="article-grid">
        <div class="article-card">
          <h3>1. Observa tu diálogo interno</h3>
          <p>Cuando te catches siendo duro contigo, pregúntate: "¿Le diría esto a alguien a quien quiero?" Si la respuesta es no, reformula el mensaje con más justicia.</p>
        </div>
        
        <div class="article-card">
          <h3>2. Reconoce lo pequeño</h3>
          <p>No esperes a lograr algo grande para validarte. Levantarte un día difícil, pedir ayuda o poner un límite ya cuenta.</p>
        </div>
        
        <div class="article-card">
          <h3>3. Practica decir no</h3>
          <p>Poner límites no es egoísmo: es respeto hacia ti. Cuando te respetas, suele mejorar también cómo te tratan los demás.</p>
        </div>
        
        <div class="article-card">
          <h3>4. Elige tu entorno</h3>
          <p>Hay personas que te hacen sentir más en paz contigo y otras que refuerzan tu autocrítica. Presta atención a con quién pasas tu tiempo.</p>
        </div>
      </div>

      <h2>Cuándo conviene la terapia</h2>

      <p>Si la baja autoestima te frena en relaciones, trabajo, decisiones o autocuidado, una terapia individual puede ayudarte a entender de dónde viene ese patrón y a construir una relación más sana contigo. También puede complementarse con trabajo sobre <a href="/blog/beneficios-terapia-individual/">terapia individual</a> y <a href="/blog/atencion-plena-mindfulness-psicologia/">atención plena</a> para regular la autocrítica.</p>

      <h2>También puede interesarte</h2>

      <ul class="article-related">
        <li><a href="/blog/cuando-ir-al-psicologo/">Cuándo ir al psicólogo: señales y primera sesión</a></li>
        <li><a href="/blog/beneficios-terapia-individual/">Beneficios de la terapia individual</a></li>
        <li><a href="/blog/atencion-plena-mindfulness-psicologia/">Atención plena en psicología</a></li>
      </ul>
      
      <div class="article-cta">
        <p>¿Quieres trabajar tu relación contigo mismo?</p>
        <p>La terapia es un espacio seguro para entender de dónde viene tu autocrítica y aprender a tratarte con más justicia. Presencial en Córdoba u online, según lo que mejor encaje contigo.</p>
        <a href="/contacto/">Pedir información sobre terapia individual</a>
      </div>
    `
  }
};

const BLOG_MONTHS: Record<string, number> = {
  Enero: 1,
  Febrero: 2,
  Marzo: 3,
  Abril: 4,
  Mayo: 5,
  Junio: 6,
  Julio: 7,
  Agosto: 8,
  Septiembre: 9,
  Octubre: 10,
  Noviembre: 11,
  Diciembre: 12,
};

/** Parsea fechas del blog en formato «3 Agosto 2026». */
export function parseBlogDate(dateStr: string): Date {
  const parts = dateStr.split(' ');
  if (parts.length !== 3) return new Date(0);

  const day = Number.parseInt(parts[0], 10);
  const month = BLOG_MONTHS[parts[1]] ?? 1;
  const year = Number.parseInt(parts[2], 10);

  return new Date(year, month - 1, day);
}

/** ISO 8601 (YYYY-MM-DD) para sitemap y metadatos. */
export function formatBlogDateISO(dateStr: string): string {
  const date = parseBlogDate(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/** ISO 8601 completo para schema.org y Open Graph. */
export function formatBlogDateISO8601(dateStr: string): string {
  return `${formatBlogDateISO(dateStr)}T09:00:00+02:00`;
}

/** URL absoluta de la imagen de un artículo para schema y Open Graph. */
export function resolvePostImageUrl(image: ImageMetadata, siteUrl: string): string {
  const src = image.src;
  if (src.startsWith('http')) return src;
  return `${siteUrl}${src.startsWith('/') ? src : `/${src}`}`;
}

export const blogPostsList = Object.values(blogPosts).sort(
  (a, b) => parseBlogDate(b.date).getTime() - parseBlogDate(a.date).getTime(),
);

/** Artículo más reciente (destacado en inicio y blog). */
export function getFeaturedPost(): BlogPost {
  return blogPostsList[0];
}

/** Metadatos de fechas para el sitemap, ordenados por publicación. */
export function getBlogSitemapEntries(): { path: string; lastmod: string }[] {
  return blogPostsList.map((post) => ({
    path: `/blog/${post.slug}/`,
    lastmod: formatBlogDateISO(post.date),
  }));
}

/** lastmod de páginas de categoría según el artículo más reciente. */
export function getCategorySitemapEntries(): { path: string; lastmod: string }[] {
  return getBlogCategories().map((category) => {
    const posts = getPostsByCategory(category);
    const latestDate = posts[0]?.date ?? getFeaturedPost().date;
    return {
      path: `/blog/categoria/${categoryToSlug(category)}/`,
      lastmod: formatBlogDateISO(latestDate),
    };
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllPosts(): BlogPost[] {
  return blogPostsList;
}

export function categoryToSlug(category: string): string {
  return category
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-');
}

export function getBlogCategories(): string[] {
  return [...new Set(blogPostsList.map((post) => post.category))];
}

export function getCategoryBySlug(slug: string): string | undefined {
  return getBlogCategories().find((category) => categoryToSlug(category) === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPostsList.filter((post) => post.category === category);
}

export function getCategoryUrl(category: string): string {
  return `/blog/categoria/${categoryToSlug(category)}/`;
}

export interface CategorySeo {
  title: string;
  description: string;
  intro: string;
}

export const CATEGORY_SEO: Record<string, CategorySeo> = {
  'Salud Mental': {
    title: 'Salud mental | Blog de psicología en Córdoba',
    description:
      'Artículos sobre salud mental, bienestar emocional y cuándo pedir ayuda psicológica. Por María Ángeles Mata, psicóloga en Córdoba y online.',
    intro:
      'Reflexiones y guías prácticas sobre salud mental: señales de alarma, primeros pasos y cuándo tiene sentido pedir ayuda profesional.',
  },
  Ansiedad: {
    title: 'Ansiedad | Blog de psicología en Córdoba',
    description:
      'Artículos sobre ansiedad, síntomas, tratamiento psicológico y técnicas de regulación. Psicóloga en Córdoba y terapia online.',
    intro:
      'Todo lo que necesitas entender sobre la ansiedad: desde síntomas y causas hasta tratamiento psicológico y herramientas para el día a día.',
  },
  'Atención plena': {
    title: 'Atención plena y mindfulness | Blog de psicología',
    description:
      'Guías sobre atención plena y mindfulness en psicología: beneficios, ejercicios prácticos y cómo integrarlo en terapia.',
    intro:
      'Mindfulness con rigor clínico: qué es, para qué sirve, sus límites y cómo practicarlo dentro de un proceso terapéutico.',
  },
  Relaciones: {
    title: 'Relaciones y pareja | Blog de psicología en Córdoba',
    description:
      'Artículos sobre comunicación en pareja, terapia de pareja y relaciones. Psicóloga en Córdoba y sesiones online.',
    intro:
      'Comunicación, conflictos y terapia de pareja explicados con claridad, sin juicios y con orientación práctica.',
  },
  Bienestar: {
    title: 'Bienestar emocional | Blog de psicología en Córdoba',
    description:
      'Artículos sobre bienestar emocional, terapia individual y cuidado personal. Por María Ángeles Mata, psicóloga en Córdoba.',
    intro:
      'Ideas y recursos para cuidar tu bienestar emocional, entender la terapia y dar pasos concretos hacia sentirte mejor.',
  },
  'Crecimiento Personal': {
    title: 'Crecimiento personal | Blog de psicología en Córdoba',
    description:
      'Artículos sobre autoestima, autocompasión y crecimiento personal. Psicóloga en Córdoba y terapia online.',
    intro:
      'Autoestima, autocompasión y cambio personal desde una mirada psicológica rigurosa y cercana.',
  },
};

export function getCategorySeo(category: string): CategorySeo {
  return (
    CATEGORY_SEO[category] ?? {
      title: `${category} | Blog de psicología en Córdoba`,
      description: `Artículos de psicología sobre ${category.toLowerCase()} por María Ángeles Mata, psicóloga en Córdoba y online.`,
      intro: `Artículos sobre ${category.toLowerCase()} escritos desde la consulta de psicología en Córdoba y pensados también para quien busca apoyo online.`,
    }
  );
}

export function slugifyHeading(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const TOC_EXCLUDE = new Set(['Referencias y fuentes', 'También puede interesarte']);

export function processArticleContent(content: string): {
  html: string;
  toc: { id: string; text: string }[];
} {
  const toc: { id: string; text: string }[] = [];
  const usedIds = new Set<string>();

  const html = content.replace(/<h2>(.*?)<\/h2>/g, (_, inner) => {
    const text = inner.replace(/<[^>]+>/g, '').trim();
    let id = slugifyHeading(text) || `seccion-${toc.length + 1}`;

    if (usedIds.has(id)) {
      let suffix = 2;
      while (usedIds.has(`${id}-${suffix}`)) suffix += 1;
      id = `${id}-${suffix}`;
    }

    usedIds.add(id);
    if (!TOC_EXCLUDE.has(text)) {
      toc.push({ id, text });
    }

    return `<h2 id="${id}">${inner}</h2>`;
  });

  return { html, toc };
}

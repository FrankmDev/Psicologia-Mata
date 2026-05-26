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

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  excerpt: string;
  date: string;
  dateShort: string;
  readTime: string;
  category: string;
  image: ImageMetadata;
  content: string;
}

export const blogPosts: Record<string, BlogPost> = {
  "ansiedad-persistente-tratamiento-psicologico": {
    slug: "ansiedad-persistente-tratamiento-psicologico",
    title: "Ansiedad persistente: cómo reconocerla y qué tratamiento psicológico funciona",
    seoTitle: "Ansiedad persistente y tratamiento psicológico en Córdoba",
    seoDescription: "Guía profesional sobre síntomas, evaluación y tratamiento psicológico de la ansiedad. Consulta presencial en Córdoba y terapia online con enfoque basado en evidencia.",
    excerpt: "No toda ansiedad necesita terapia, pero cuando empieza a ocupar demasiado espacio en tu vida conviene entender qué está pasando y qué abordajes tienen más respaldo científico.",
    date: "26 Mayo 2026",
    dateShort: "26 May",
    readTime: "11 min",
    category: "Ansiedad",
    image: terapiaIndividual,
    content: `
      <p class="text-xl leading-relaxed text-charcoal mb-8">Sentir ansiedad no significa estar haciendo algo mal. La ansiedad es una respuesta humana normal ante la incertidumbre, la presión o el peligro. El problema aparece cuando deja de ser una señal puntual y se convierte en un estado casi permanente: cuesta descansar, el cuerpo vive en alerta y la mente no desconecta. En ese punto, una evaluación psicológica ayuda a diferenciar entre estrés esperable, ansiedad clínica y otros problemas que pueden parecerse mucho entre sí.<sup><a href="#ref-1">1</a></sup><sup><a href="#ref-2">2</a></sup></p>

      <figure class="my-12">
        <img src="${psicologia.src}" alt="Consulta de psicología para trabajar la ansiedad" class="w-full rounded-2xl shadow-lg" loading="lazy" />
        <figcaption class="text-sm text-ink mt-3 text-center">La ansiedad se entiende mejor cuando observamos a la vez pensamientos, cuerpo y conductas.</figcaption>
      </figure>

      <div class="bg-cream border border-border-delicate rounded-2xl p-6 my-10">
        <p class="text-base text-charcoal mb-0"><strong>Idea clave:</strong> la evidencia actual sitúa a la terapia cognitivo-conductual entre los tratamientos con mejor respaldo para muchos trastornos de ansiedad, y las guías clínicas recomiendan ajustar la intensidad del tratamiento a la gravedad, el deterioro funcional y la preferencia de la persona.<sup><a href="#ref-1">1</a></sup><sup><a href="#ref-3">3</a></sup><sup><a href="#ref-4">4</a></sup></p>
      </div>

      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">¿Cuándo deja de ser una preocupación normal?</h2>

      <p>Hay días en los que todos dormimos peor, le damos demasiadas vueltas a un problema o sentimos el cuerpo acelerado. Eso, por sí solo, no indica un trastorno. Lo que suele marcar la diferencia es la <strong>frecuencia</strong>, la <strong>intensidad</strong>, el <strong>grado de interferencia</strong> y la cantidad de energía que requiere intentar controlar los síntomas.</p>

      <div class="overflow-x-auto my-10">
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

      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Síntomas frecuentes que conviene mirar en conjunto</h2>

      <p>La ansiedad sostenida rara vez se presenta de una sola forma. A veces la persona llega diciendo “tengo la mente saturada”; otras, “me duele el pecho”, “me cuesta respirar” o “no dejo de anticipar problemas”. El Instituto Nacional de Salud Mental de EE. UU. describe precisamente esa combinación de <strong>preocupación difícil de controlar</strong>, síntomas físicos y conductas de evitación.<sup><a href="#ref-2">2</a></sup></p>

      <div class="grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-cream p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Síntomas cognitivos</h3>
          <p class="text-sm text-charcoal">Rumiación, sensación de amenaza, dificultad para concentrarte y necesidad de revisar todo una y otra vez.</p>
        </div>
        <div class="bg-cream p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Síntomas físicos</h3>
          <p class="text-sm text-charcoal">Tensión muscular, taquicardia, inquietud, mareo, molestias digestivas, sueño ligero o despertar con el cuerpo ya activado.</p>
        </div>
        <div class="bg-cream p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Síntomas conductuales</h3>
          <p class="text-sm text-charcoal">Aplazamiento, evitación de situaciones, dependencia de la tranquilidad externa y búsqueda constante de seguridad.</p>
        </div>
      </div>

      <blockquote>
        <p>La ansiedad no siempre se “ve” desde fuera, pero desde dentro puede sentirse como vivir con el sistema de alarma encendido todo el día.</p>
      </blockquote>

      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Qué tratamientos psicológicos tienen más respaldo</h2>

      <p>Si buscas una respuesta corta, sería esta: <strong>la terapia cognitivo-conductual es uno de los abordajes más estudiados y recomendados</strong> para ansiedad generalizada, pánico, fobias y otros cuadros relacionados.<sup><a href="#ref-1">1</a></sup><sup><a href="#ref-3">3</a></sup> Además, la investigación muestra que los formatos online bien estructurados también pueden ser útiles en muchos casos, algo relevante para quienes necesitan flexibilidad horaria o prefieren empezar desde casa.<sup><a href="#ref-5">5</a></sup></p>

      <div class="overflow-x-auto my-10">
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

      <figure class="my-12">
        <img src="${apunte.src}" alt="Herramientas de autorregulación para la ansiedad" class="w-full rounded-2xl shadow-lg" loading="lazy" />
        <figcaption class="text-sm text-ink mt-3 text-center">Las herramientas ayudan más cuando se integran en un plan terapéutico claro y se practican con constancia.</figcaption>
      </figure>

      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Lo que sí puedes empezar a hacer esta semana</h2>

      <p>No hace falta esperar a “estar peor” para empezar a cuidarte. Estas acciones no sustituyen una terapia cuando hay deterioro clínico, pero sí pueden darte información muy valiosa:</p>

      <ol class="space-y-3 my-8">
        <li><strong>Registra el patrón.</strong> Anota cuándo aparece la ansiedad, qué la dispara, qué haces para aliviarla y si ese alivio dura o solo te saca del paso.</li>
        <li><strong>Diferencia peligro de probabilidad.</strong> La mente ansiosa trata escenarios posibles como si fueran inminentes. Ponerles porcentaje ayuda a bajar la urgencia.</li>
        <li><strong>Observa la evitación.</strong> Muchas veces el sufrimiento se mantiene menos por el síntoma inicial que por lo que dejamos de hacer para no sentirlo.</li>
        <li><strong>Revisa el descanso, cafeína y sobrecarga.</strong> No explican toda la ansiedad, pero pueden amplificarla de forma clara.</li>
      </ol>

      <div class="bg-olive/10 border border-olive/20 rounded-2xl p-8 my-10">
        <p class="text-lg font-medium text-charcoal mb-2">¿Cuándo pedir ayuda profesional?</p>
        <p class="text-charcoal mb-4">Si la ansiedad te está quitando sueño, energía, concentración o libertad para hacer vida normal, merece una valoración seria. Si buscas una psicóloga para ansiedad en Córdoba o prefieres trabajar online, el objetivo no es solo “aguantar mejor”, sino entender el patrón y reducirlo de forma estable.</p>
        <a href="/contacto" class="inline-flex items-center gap-2 text-olive font-medium hover:underline">Solicitar información <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>

      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Referencias y fuentes</h2>

      <ol class="space-y-3 my-8 text-base">
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
    seoTitle: "Terapia de pareja en Córdoba: cuándo empezar y cómo funciona",
    seoDescription: "Artículo profesional sobre terapia de pareja: señales de alarma, objetivos, límites y evidencia científica. Atención presencial en Córdoba y sesiones online.",
    excerpt: "La terapia de pareja no sirve para decidir quién tiene razón. Sirve para entender el patrón que os atrapa, bajar la escalada y recuperar una forma de hablar que no os desgaste más.",
    date: "19 Mayo 2026",
    dateShort: "19 May",
    readTime: "12 min",
    category: "Relaciones",
    image: terapiaPareja,
    content: `
      <p class="text-xl leading-relaxed text-charcoal mb-8">Muchas parejas esperan demasiado antes de pedir ayuda. No llegan cuando “hay un problema”, sino cuando ya acumulan meses o años de discusiones repetidas, distancia emocional, desgaste sexual, resentimiento o sensación de convivencia en piloto automático. La terapia de pareja no es un juicio ni una negociación improvisada: es un espacio clínico para observar el patrón relacional, entender qué lo mantiene y ensayar maneras más seguras y efectivas de vincularse.<sup><a href="#ref-a">1</a></sup><sup><a href="#ref-b">2</a></sup></p>

      <figure class="my-12">
        <img src="${terapiaPareja2.src}" alt="Pareja en un proceso de terapia" class="w-full rounded-2xl shadow-lg" loading="lazy" />
        <figcaption class="text-sm text-ink mt-3 text-center">En terapia de pareja se trabaja la interacción entre ambos, no solo la versión individual de cada uno.</figcaption>
      </figure>

      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Señales de que conviene intervenir antes</h2>

      <p>La mayoría de parejas no necesitan llegar a una crisis extrema para beneficiarse de la terapia. De hecho, cuanto más cronificado está el patrón, más tiempo suele hacer falta para modificarlo. La investigación sobre terapia de pareja muestra que la mejora es más probable cuando todavía existe un mínimo de motivación compartida para entenderse y cooperar.<sup><a href="#ref-a">1</a></sup><sup><a href="#ref-c">3</a></sup></p>

      <div class="overflow-x-auto my-10">
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

      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Qué dice la evidencia científica</h2>

      <p>La buena noticia es que la terapia de pareja cuenta con un respaldo empírico cada vez más robusto. Las revisiones sistemáticas y metaanálisis publicados en revistas científicas muestran mejoras relevantes en satisfacción relacional, comunicación y reducción del malestar de pareja.<sup><a href="#ref-a">1</a></sup><sup><a href="#ref-b">2</a></sup><sup><a href="#ref-c">3</a></sup></p>

      <div class="grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-cream p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Más que “hablar”</h3>
          <p class="text-sm text-charcoal">Los mejores resultados aparecen cuando el proceso no se limita a ventilar emociones, sino que organiza objetivos, tareas y nuevas secuencias de interacción.</p>
        </div>
        <div class="bg-cream p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Modelos con respaldo</h3>
          <p class="text-sm text-charcoal">La terapia conductual de pareja y la terapia focalizada en las emociones figuran entre los modelos más estudiados.</p>
        </div>
        <div class="bg-cream p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Efectos amplios</h3>
          <p class="text-sm text-charcoal">Cuando mejora la relación, también pueden reducirse síntomas individuales asociados al estrés relacional, como ansiedad o bajo estado de ánimo.</p>
        </div>
      </div>

      <p>En términos prácticos, esto significa que la terapia de pareja bien indicada no es “solo para salvar relaciones”. También sirve para <strong>tomar decisiones con más claridad</strong>, reparar patrones dañinos y aprender habilidades relacionales que después sostienen el cambio fuera de la consulta.<sup><a href="#ref-d">4</a></sup></p>

      <figure class="my-12">
        <img src="${autoestima.src}" alt="Conversación consciente en pareja" class="w-full rounded-2xl shadow-lg" loading="lazy" />
        <figcaption class="text-sm text-ink mt-3 text-center">La mejora suele empezar cuando cada persona entiende su parte del patrón sin convertir la sesión en un reparto de culpas.</figcaption>
      </figure>

      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Qué suele pasar en las primeras sesiones</h2>

      <p>Una terapia seria no se lanza a dar consejos rápidos. Primero necesita comprender el motivo de consulta, la historia de la relación, cómo discuten, qué temas activan más a cada uno y si existe seguridad suficiente para trabajar en formato conjunto. También se valora si hay síntomas individuales importantes, consumo problemático o situaciones de control y miedo que requieran otro tipo de abordaje.<sup><a href="#ref-d">4</a></sup><sup><a href="#ref-e">5</a></sup></p>

      <div class="overflow-x-auto my-10">
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

      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Cuándo la terapia de pareja no es la primera opción</h2>

      <p>Aquí conviene ser muy claros. No todas las situaciones deben abordarse de entrada con sesiones conjuntas. Cuando hay <strong>miedo, coerción, violencia activa, intimidación, consumo severo sin abordar o imposibilidad real de hablar con seguridad</strong>, primero hay que valorar protección, estabilización o trabajo individual específico.<sup><a href="#ref-e">5</a></sup> La seriedad del proceso también pasa por saber cuándo una terapia de pareja está indicada y cuándo no.</p>

      <div class="bg-olive/10 border border-olive/20 rounded-2xl p-8 my-10">
        <p class="text-lg font-medium text-charcoal mb-2">¿Cuándo tiene sentido consultar?</p>
        <p class="text-charcoal mb-4">Si notáis que os queréis pero no conseguís entenderos, o si una crisis os ha dejado sin forma útil de hablar, una valoración profesional puede orientaros. Si estáis buscando terapia de pareja en Córdoba, presencial u online, el primer objetivo no es forzar acuerdos rápidos, sino entender si todavía hay base para trabajar y cómo hacerlo bien.</p>
        <a href="/contacto" class="inline-flex items-center gap-2 text-olive font-medium hover:underline">Solicitar primera valoración <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>

      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Referencias y fuentes</h2>

      <ol class="space-y-3 my-8 text-base">
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
    title: "¿Por qué la terapia individual funciona?",
    seoTitle: "Terapia individual en Córdoba: beneficios y cuándo puede ayudarte",
    seoDescription: "Descubre cómo la terapia individual puede ayudarte con ansiedad, autoestima y bienestar emocional en una consulta de psicología en Córdoba u online.",
    excerpt: "No se trata de tener a alguien que te diga qué hacer. Se trata de tener un espacio donde puedas ser tú mismo, sin filtros, sin prisas.",
    date: "15 Enero 2025",
    dateShort: "15 Ene",
    readTime: "5 min",
    category: "Bienestar",
    image: terapiaFamilia,
    content: `
      <p class="text-xl leading-relaxed text-charcoal mb-8">La gente suele pensar que ir a terapia es para cuando "estás mal". Pero la verdad es que la terapia es para cualquiera que quiera entenderse mejor, sentirse mejor, o simplemente tener un espacio donde no tener que cuidar lo que dice.</p>
      
      <figure class="my-12">
        <img src="${psicologia.src}" alt="Espacio tranquilo para reflexión" class="w-full rounded-2xl shadow-lg" loading="lazy" />
        <figcaption class="text-sm text-ink mt-3 text-center">A veces necesitamos simplemente un lugar donde poder ser nosotros mismos</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Lo que realmente pasa en terapia</h2>
      
      <p>No es magia. No te voy a decir qué tienes que hacer con tu vida. Lo que hacemos es sentarnos a hablar, a entender por qué sientes lo que sientes, y a encontrar formas de que te sientas mejor.</p>
      
      <p class="mt-4">Es un espacio donde puedes traer todo: lo que te da vergüenza, lo que no entiendes, lo que te duele. Sin juzgarte, sin prisas.</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-cream p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Entenderte mejor</h3>
          <p class="text-sm text-charcoal">A veces hacemos cosas y no sabemos por qué. La terapia ayuda a conectar esos puntos, a entender los patrones que repetimos sin darnos cuenta.</p>
        </div>
        <div class="bg-cream p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Manejar la ansiedad</h3>
          <p class="text-sm text-charcoal">La ansiedad no desaparece mágicamente, pero aprendes a llevarla mejor. Técnicas concretas que puedes usar cuando todo se vuelve demasiado.</p>
        </div>
        <div class="bg-cream p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Mejores relaciones</h3>
          <p class="text-sm text-charcoal">Cuando entiendes cómo funcionas tú, entiendes mejor a los demás. Y eso cambia todo: pareja, familia, amigos, trabajo.</p>
        </div>
        <div class="bg-cream p-6 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">Decidir con claridad</h3>
          <p class="text-sm text-charcoal">Cuando sabes quién eres y qué quieres, las decisiones dejan de ser tan difíciles. Dejas de hacer caso al "deberías" y escuchas lo que tú necesitas.</p>
        </div>
      </div>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">El primer paso es el más difícil</h2>
      
      <p class="text-lg">Reconocer que necesitas ayuda no es debilidad. Es inteligencia. Es cuidarte. Si estás pensando en dar este paso, ya has dado el más importante: el de admitir que mereces sentirte mejor.</p>
      
      <div class="bg-olive/10 border border-olive/20 rounded-2xl p-8 my-10">
        <p class="text-lg font-medium text-charcoal mb-2">¿Tienes dudas sobre la terapia?</p>
        <p class="text-charcoal mb-4">Pregunta lo que necesites. La primera consulta es simplemente una conversación para ver si encajamos.</p>
        <a href="/contacto" class="inline-flex items-center gap-2 text-olive font-medium hover:underline">Hablamos <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
    `
  },
  "comunicacion-pareja": {
    slug: "comunicacion-pareja",
    title: "Cuando hablar no sirve de nada",
    seoTitle: "Problemas de comunicación en pareja: cómo mejorarlos en terapia",
    seoDescription: "Claves para mejorar la comunicación en pareja con ayuda psicológica. Terapia de pareja en Córdoba y sesiones online.",
    excerpt: "Hablan, hablan, pero no se entienden. Si esto te suena familiar, no estás solo. La comunicación en pareja puede mejorar, pero no de la forma que piensas.",
    date: "8 Enero 2025",
    dateShort: "8 Ene",
    readTime: "7 min",
    category: "Relaciones",
    image: terapiaPareja2,
    content: `
      <p class="text-xl leading-relaxed text-charcoal mb-8">"Hablamos pero no nos entendemos". Lo escucho constantemente en consulta. Y la verdad es que hablar no siempre es comunicar. A veces hablamos más para defendernos que para entendernos.</p>
      
      <figure class="my-12">
        <img src="${autoestima.src}" alt="Pareja conversando" class="w-full rounded-2xl shadow-lg" loading="lazy" />
        <figcaption class="text-sm text-ink mt-3 text-center">La comunicación real implica escuchar, no solo hablar</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Por qué no nos entendemos</h2>
      
      <p>A menudo lo que hacemos es monólogo disfrazado de diálogo. Uno habla, el otro espera su turno para rebatir. Ninguno escucha de verdad. Y al final, ambos se sienten más solos que al principio.</p>
      
      <div class="space-y-8 my-8">
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center shrink-0 text-olive font-serif text-lg">1</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Escuchar de verdad</h3>
            <p class="text-charcoal">No es solo oír palabras. Es intentar entender qué siente la otra persona, aunque no estés de acuerdo. Es ponerse en su lugar antes de responder.</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center shrink-0 text-olive font-serif text-lg">2</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Hablar de ti, no del otro</h3>
            <p class="text-charcoal">"Tú siempre..." "Tú nunca..." eso solo hace que el otro se defienda. Prueba con "Yo me siento... cuando...". Verás la diferencia.</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center shrink-0 text-olive font-serif text-lg">3</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Elegir el momento</h3>
            <p class="text-charcoal">No todas las conversaciones son para cualquier momento. A veces es mejor decir "¿Podemos hablar de esto más tarde?" que soltarlo todo en medio de una discusión.</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center shrink-0 text-olive font-serif text-lg">4</div>
          <div>
            <h3 class="font-serif text-lg text-charcoal mb-2">Validar antes de opinar</h3>
            <p class="text-charcoal">No tienes que estar de acuerdo para entender. Un "entiendo que te sientas así" abre más puertas que todo un discurso sobre por qué no debería sentirse así.</p>
          </div>
        </div>
      </div>
      
      <div class="bg-olive/10 border border-olive/20 rounded-2xl p-8 my-10">
        <p class="text-charcoal font-medium mb-2">¿Sientes que vuestra comunicación se ha roto?</p>
        <p class="text-charcoal mb-4">La terapia de pareja no es para cuando todo está perdido. Es para cuando queréis intentarlo de verdad.</p>
        <a href="/contacto" class="inline-flex items-center gap-2 text-olive font-medium hover:underline">Saber más <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
    `
  },
  "gestion-ansiedad": {
    slug: "gestion-ansiedad",
    title: "Cuando el pecho aprieta",
    seoTitle: "Cómo gestionar la ansiedad: técnicas psicológicas que sí ayudan",
    seoDescription: "Técnicas psicológicas para gestionar la ansiedad en el día a día. Atención profesional en Córdoba y terapia online.",
    excerpt: "La ansiedad no es debilidad. Es tu cuerpo intentando protegerte de algo que percibe como peligroso. Aquí te cuento cómo puedes ayudarte a ti mismo.",
    date: "2 Enero 2025",
    dateShort: "2 Ene",
    readTime: "6 min",
    category: "Salud Mental",
    image: estres,
    content: `
      <p class="text-xl leading-relaxed text-charcoal mb-8">La ansiedad no es un defecto. Es una respuesta natural que se ha vuelto demasiado sensible. Tu cerebro está intentando protegerte, pero está detectando peligros donde no los hay. Entender esto ya es el primer paso.</p>
      
      <figure class="my-12">
        <img src="${apunte.src}" alt="Persona practicando mindfulness" class="w-full rounded-2xl shadow-lg" loading="lazy" />
        <figcaption class="text-sm text-ink mt-3 text-center">La respiración es tu aliada más poderosa contra la ansiedad</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Técnicas que funcionan de verdad</h2>
      
      <p>No son milagros, pero funcionan si las practicas. La clave está en usarlas cuando la ansiedad está aún baja, no esperar a que sea una tormenta.</p>
      
      <div class="grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-cream rounded-2xl p-6 text-center">
          <h3 class="font-serif text-lg text-charcoal mb-2">Respirar bien</h3>
          <p class="text-sm text-charcoal">Inhala 4 segundos, mantén 4, exhala 4. Repite varias veces. Activa tu sistema nervioso parasimpático y el cuerpo empieza a calmarse.</p>
        </div>
        
        <div class="bg-cream rounded-2xl p-6 text-center">
          <h3 class="font-serif text-lg text-charcoal mb-2">5-4-3-2-1</h3>
          <p class="text-sm text-charcoal">Cuando sientes que te desconectas: 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, 1 que saboreas. Te devuelve al presente.</p>
        </div>
        
        <div class="bg-cream rounded-2xl p-6 text-center">
          <h3 class="font-serif text-lg text-charcoal mb-2">Cuestionar los "y si..."</h3>
          <p class="text-sm text-charcoal">Tu mente te dice lo peor que puede pasar. Pregúntale: ¿Cuál es la evidencia? ¿Qué le diría a un amigo en mi situación?</p>
        </div>
      </div>
      
      <p class="text-lg mt-4">Pedir ayuda no es rendirse. Es inteligente. Es cuidarte. Si la ansiedad está limitando tu vida, mereces apoyo profesional.</p>
      
      <div class="bg-olive/10 border border-olive/20 rounded-2xl p-8 my-10">
        <p class="text-charcoal font-medium mb-2">¿La ansiedad te está controlando?</p>
        <p class="text-charcoal mb-4">No tienes que pasar por esto solo. La terapia puede darte herramientas específicas para recuperar tu vida.</p>
        <a href="/contacto" class="inline-flex items-center gap-2 text-olive font-medium hover:underline">Hablamos <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
    `
  },
  "autoestima-saludable": {
    slug: "autoestima-saludable",
    title: "¿Por qué es tan difícil querernos?",
    seoTitle: "Baja autoestima: señales y cómo trabajarla en terapia",
    seoDescription: "Señales de baja autoestima y cómo trabajarla con ayuda psicológica. Psicóloga en Córdoba y terapia online.",
    excerpt: "No nacemos odiándonos. Aprendemos a hacerlo. Y lo bueno es que lo que se aprende, se puede desaprender. Aquí te cuento cómo empezar.",
    date: "28 Diciembre 2024",
    dateShort: "28 Dic",
    readTime: "6 min",
    category: "Crecimiento Personal",
    image: autoestima,
    content: `
      <p class="text-xl leading-relaxed text-charcoal mb-8">La autoestima no es sentirse el mejor del mundo. Es simplemente aceptarte como eres: con tus fallos, con tus aciertos, con tu historia. Es dejar de ser tu peor crítico.</p>
      
      <figure class="my-12">
        <img src="${estres.src}" alt="Persona reflexionando" class="w-full rounded-2xl shadow-lg" loading="lazy" />
        <figcaption class="text-sm text-ink mt-3 text-center">Quererse no es egoísmo, es necesario</figcaption>
      </figure>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Cómo nos hablamos a nosotros mismos</h2>
      
      <p>Fíjate en tu diálogo interno. ¿Serías tan duro con un amigo como lo eres contigo? Probablemente no. Esa voz crítica que llevas dentro no es la verdad, es solo un hábito que puedes cambiar.</p>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Señales de que tu autoestima necesita cuidado</h2>
      
      <div class="bg-cream border border-border-delicate rounded-2xl p-6 my-8">
        <ul class="space-y-3">
          <li class="flex items-start gap-3 text-charcoal">
            <span class="w-1.5 h-1.5 rounded-full bg-olive mt-2 shrink-0"></span>
            <span>Te criticas constantemente, incluso por cosas pequeñas</span>
          </li>
          <li class="flex items-start gap-3 text-charcoal">
            <span class="w-1.5 h-1.5 rounded-full bg-olive mt-2 shrink-0"></span>
            <span>No puedes aceptar un cumplido sin rebajarlo</span>
          </li>
          <li class="flex items-start gap-3 text-charcoal">
            <span class="w-1.5 h-1.5 rounded-full bg-olive mt-2 shrink-0"></span>
            <span>Tienes miedo de intentar cosas nuevas por si fracasas</span>
          </li>
          <li class="flex items-start gap-3 text-charcoal">
            <span class="w-1.5 h-1.5 rounded-full bg-olive mt-2 shrink-0"></span>
            <span>Necesitas la aprobación de otros para sentirte bien</span>
          </li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-serif text-charcoal mb-4 mt-12">Pequeños pasos para sentirte mejor contigo</h2>
      
      <div class="space-y-6 my-8">
        <div class="bg-cream p-5 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">1. Presta atención a tu diálogo interno</h3>
          <p class="text-charcoal text-sm">Cuando te catches siendo duro contigo, pregúntate: "¿Le diría esto a alguien a quien quiero?" Si la respuesta es no, cambia el mensaje.</p>
        </div>
        
        <div class="bg-cream p-5 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">2. Celebra lo pequeño</h3>
          <p class="text-charcoal text-sm">No esperes a lograr algo grande para sentirte bien. Levantarte un día difícil ya es mérito. Dímelo a ti mismo.</p>
        </div>
        
        <div class="bg-cream p-5 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">3. Aprende a decir no</h3>
          <p class="text-charcoal text-sm">Poner límites no es ser egoísta. Es respetarte. Y cuando te respetas tú, otros te respetan más.</p>
        </div>
        
        <div class="bg-cream p-5 rounded-xl">
          <h3 class="font-serif text-lg text-charcoal mb-2">4. Rodéate de gente que te sube</h3>
          <p class="text-charcoal text-sm">Hay personas que te hacen sentir bien contigo y otras que no. Elige con quién pasas tu tiempo.</p>
        </div>
      </div>
      
      <div class="bg-olive/10 border border-olive/20 rounded-2xl p-8 my-10">
        <p class="text-lg font-medium text-charcoal mb-2">¿Quieres trabajar en tu relación contigo mismo?</p>
        <p class="text-charcoal mb-4">La terapia es un espacio seguro para aprender a quererte de verdad, no solo a soportarte.</p>
        <a href="/contacto" class="inline-flex items-center gap-2 text-olive font-medium hover:underline">Hablamos <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"/></svg></a>
      </div>
    `
  }
};

export const blogPostsList = Object.values(blogPosts);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllPosts(): BlogPost[] {
  return blogPostsList;
}

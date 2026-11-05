import type { BlogPost } from './blog';
import estimulacion from '../assets/estimulacion-cognitiva.avif';
import evaluacion from '../assets/evaluacion.avif';
import primeraSesion from '../assets/primera-sesion-psicologia.avif';
import psicologia from '../assets/psicologia.avif';

/**
 * Complete editorial drafts prepared for clinical review. They are deliberately
 * excluded from public listings and the sitemap until María Ángeles approves them.
 */
export const editorialPosts: Record<string, BlogPost> = {
  'evaluacion-neuropsicologica-cuando-consultar': {
    slug: 'evaluacion-neuropsicologica-cuando-consultar',
    title: 'Evaluación neuropsicológica: cuándo consultar y cómo funciona',
    seoTitle: 'Evaluación neuropsicológica: cuándo consultar y cómo funciona',
    seoDescription: 'Qué puede aportar una evaluación neuropsicológica, cuándo plantearla y qué suele ocurrir en el proceso. Información clara, sin autodiagnósticos.',
    keywords: 'evaluación neuropsicológica, cuándo hacer evaluación neuropsicológica, pruebas de memoria, evaluación cognitiva Córdoba, neuropsicóloga Córdoba',
    excerpt: 'Una evaluación neuropsicológica puede ayudar a describir cambios en memoria, atención u otras funciones. No diagnostica por sí sola todas sus causas ni sustituye la valoración médica.',
    date: '5 Noviembre 2026',
    dateShort: 'Revisión',
    readTime: '7 min',
    category: 'Salud Cognitiva',
    image: evaluacion,
    imageAlt: 'Material de valoración psicológica, imagen ilustrativa',
    reviewStatus: 'pending',
    faq: [
      { question: '¿Necesito un diagnóstico médico antes de solicitar una evaluación?', answer: 'No siempre. La primera conversación permite conocer el motivo y valorar si una evaluación neuropsicológica encaja o si conviene consultar otro servicio sanitario.' },
      { question: '¿Una evaluación confirma que tengo Alzheimer?', answer: 'No por sí sola. El diagnóstico requiere integrar la historia, la exploración clínica y, cuando procede, pruebas médicas y la valoración de otros profesionales.' },
      { question: '¿Cuánto dura una evaluación neuropsicológica?', answer: 'Depende de la pregunta, las pruebas seleccionadas y el número de encuentros. La ficha actual del servicio indica una referencia de 90–120 minutos; el alcance se debe confirmar antes de empezar.' },
      { question: '¿Qué ocurre si las pruebas no muestran dificultades?', answer: 'Los resultados se interpretan junto con la entrevista y el contexto. Una puntuación aislada no confirma ni descarta por sí sola todas las posibles dificultades.' }
    ],
    content: `
      <p>Una evaluación neuropsicológica estudia cómo están funcionando capacidades como la memoria, la atención, el lenguaje, la orientación o la planificación. Puede ser útil cuando una persona o su entorno observan cambios que se repiten, generan preocupación o interfieren con tareas habituales. Su propósito es describir el perfil cognitivo y orientar los siguientes pasos; no ofrece por sí sola una explicación médica definitiva.</p>

      <div class="article-callout"><p><strong>En pocas palabras:</strong> se puede consultar si hay cambios que preocupan, aunque todavía no exista un diagnóstico. La evaluación comienza con una entrevista, continúa con pruebas elegidas según el motivo y termina con una devolución que explica qué se observó y cuáles son los límites de los resultados.</p></div>

      <h2>Cuándo puede tener sentido consultar</h2>
      <p>No hace falta esperar a que una dificultad sea grave. Puede ser razonable preguntar por una valoración cuando se observan cambios sostenidos en memoria reciente, atención, lenguaje, orientación, organización o resolución de tareas. También cuando la persona siente que algo ha cambiado y quiere comprenderlo mejor, o cuando otro profesional sanitario ha recomendado explorar una función concreta.</p>
      <p>La cuestión importante no es cuántas veces se olvida una palabra, sino el patrón: qué ha cambiado respecto a la forma habitual de desenvolverse, desde cuándo ocurre y qué impacto tiene. Por ejemplo, no es lo mismo olvidar una cita aislada que empezar a tener dificultades frecuentes para organizar gestiones que antes se resolvían sin ayuda. Estos ejemplos sirven para describir una preocupación, no para concluir un diagnóstico.</p>

      <h2>Qué información puede aportar</h2>
      <p>Según el motivo de consulta, una evaluación puede explorar distintas áreas y fortalezas. Entre ellas pueden estar la memoria, la atención, el lenguaje, la orientación y algunas funciones ejecutivas, como planificar o cambiar de tarea. No todas las personas necesitan las mismas pruebas: la selección depende de la pregunta que se intenta responder y de las características de quien consulta.</p>
      <p>Las pruebas aportan datos, pero no se interpretan en el vacío. También importan la historia de la persona, su formación, el idioma, la visión y la audición, el estado emocional, el descanso, la salud general y la medicación. Una evaluación cuidadosa pone los resultados en contexto y explica qué se puede y qué no se puede inferir.</p>

      <h2>Cómo suele desarrollarse el proceso</h2>
      <h3>1. Entrevista y motivo de consulta</h3>
      <p>Se conversa sobre los cambios observados, cuándo empezaron, cómo afectan al día a día y qué espera aclarar la persona. Con su consentimiento, puede resultar útil que alguien cercano aporte ejemplos concretos, sin sustituir la voz de quien consulta.</p>
      <h3>2. Selección y realización de pruebas</h3>
      <p>La profesional elige tareas estandarizadas apropiadas para el objetivo. Algunas pruebas pueden requerir más de una sesión o descansos; el tiempo total depende del alcance acordado. Si se propone una modalidad online, conviene aclarar antes qué pruebas pueden administrarse válidamente a distancia y qué condiciones técnicas hacen falta.</p>
      <h3>3. Devolución e informe</h3>
      <p>Al finalizar, se explican los resultados de forma comprensible, las áreas que destacan y las limitaciones de la evaluación. En la ficha actual de Mata Cala Psicología se indica informe incluido; antes de comenzar conviene confirmar qué incluye, cuántos encuentros contempla y para qué uso está preparado.</p>

      <h2>Qué no puede concluir una prueba por sí sola</h2>
      <p>Una puntuación baja en una tarea no identifica automáticamente la causa. Fatiga, ansiedad, ánimo bajo, problemas sensoriales, efectos de medicación y otras circunstancias pueden influir en el rendimiento. Del mismo modo, un resultado dentro del rango esperado no descarta siempre todas las dificultades que una persona experimenta en su contexto cotidiano.</p>
      <p>Las recomendaciones clínicas para valorar una posible demencia contemplan la historia de la persona, información de alguien que la conozca cuando sea posible, exploración física y cognitiva y la consideración de causas potencialmente reversibles. NICE recomienda considerar pruebas neuropsicológicas especializadas cuando todavía no está claro si hay deterioro cognitivo, cuál puede ser su origen o qué subtipo se debe valorar.<sup><a href="#ref-1">1</a></sup> Por eso, una evaluación psicológica puede formar parte de un proceso más amplio y no debe presentarse como sustituto de la atención médica.</p>

      <h2>Cómo prepararte sin convertirlo en un examen</h2>
      <ul class="article-checklist">
        <li>Anota dos o tres ejemplos concretos que expliquen qué te preocupa y desde cuándo lo notas.</li>
        <li>Si quieres, lleva una lista de medicación y antecedentes relevantes para comentarlos con los profesionales sanitarios que te atienden.</li>
        <li>Pregunta con antelación cuánto durará el proceso, qué precio tiene y qué incluye el informe.</li>
        <li>No practiques ejercicios de internet para intentar mejorar una puntuación: el objetivo no es aprobar, sino entender la situación con información válida.</li>
        <li>Si otra persona te acompaña, acuerda antes qué información quieres compartir y mantén tu participación en las decisiones.</li>
      </ul>

      <h2>Cuándo buscar primero atención médica</h2>
      <p>Si el cambio cognitivo aparece de forma brusca, empeora rápidamente o viene acompañado de confusión marcada, pérdida del habla, debilidad, alteraciones del equilibrio u otros síntomas físicos nuevos, no lo atribuyas sin más a la edad ni esperes a una cita de psicología: solicita valoración sanitaria urgente. Ante cambios progresivos, la atención primaria puede revisar posibles factores de salud y orientar una derivación si hace falta.</p>

      <h2>Preguntas frecuentes</h2>
      <div class="article-grid">
        <div class="article-card"><h3>¿Necesito un diagnóstico médico?</h3><p>No siempre. Puedes plantear una consulta por cambios que te preocupan; durante la primera conversación se valora cuál es el paso adecuado.</p></div>
        <div class="article-card"><h3>¿La prueba confirma Alzheimer?</h3><p>No. Una evaluación neuropsicológica aporta información cognitiva, pero no establece por sí sola todas las causas médicas ni sustituye un diagnóstico clínico.</p></div>
        <div class="article-card"><h3>¿Cuánto dura?</h3><p>La duración depende de las pruebas y del objetivo. El servicio publica 90–120 minutos como referencia, que debe confirmarse junto al alcance total.</p></div>
        <div class="article-card"><h3>¿Se puede realizar online?</h3><p>La ficha actual indica que puede hacerse online cuando procede. No todas las pruebas o situaciones son apropiadas a distancia; se acuerda caso a caso.</p></div>
      </div>

      <div class="article-cta">
        <p>¿Te preocupa un cambio en memoria o atención?</p>
        <p>Puedes pedir información sobre la <a href="/servicios/evaluacion-neuropsicologica/">evaluación neuropsicológica en Córdoba</a>. Antes de reservar, pregunta por el alcance, la duración y el precio.</p>
        <a href="tel:+34697733060">Llamar al 697 733 060</a>
      </div>

      <h2>Fuentes consultadas</h2>
      <ol class="article-references">
        <li id="ref-1">National Institute for Health and Care Excellence. <a href="https://www.nice.org.uk/guidance/ng97/chapter/recommendations" target="_blank" rel="noopener noreferrer">Dementia: assessment, management and support for people living with dementia and their carers (NG97)</a>.</li>
        <li id="ref-2">National Institute on Aging. <a href="https://www.nia.nih.gov/health/health-care-professionals-information/assessing-cognitive-impairment-older-patients" target="_blank" rel="noopener noreferrer">Assessing Cognitive Impairment in Older Patients</a>.</li>
      </ol>
    `
  },
  'estimulacion-cognitiva-domicilio': {
    slug: 'estimulacion-cognitiva-domicilio',
    title: 'Estimulación cognitiva a domicilio: objetivos, proceso y para quién',
    seoTitle: 'Estimulación cognitiva a domicilio: para quién y cómo',
    seoDescription: 'Qué es la estimulación cognitiva a domicilio, cómo se organiza y qué preguntas conviene hacer antes de empezar. Sin promesas de prevención o curación.',
    keywords: 'estimulación cognitiva a domicilio, estimulación cognitiva personas mayores, ejercicios cognitivos domicilio Córdoba, estimulación cognitiva online',
    excerpt: 'El trabajo a domicilio permite adaptar actividades al entorno de la persona. Antes de empezar, conviene concretar el objetivo y distinguir estimulación de evaluación o tratamiento médico.',
    date: '5 Noviembre 2026',
    dateShort: 'Revisión',
    readTime: '7 min',
    category: 'Salud Cognitiva',
    image: estimulacion,
    imageAlt: 'Material para una actividad cognitiva, imagen ilustrativa',
    reviewStatus: 'pending',
    faq: [
      { question: '¿En qué consiste una sesión a domicilio?', answer: 'En realizar actividades planificadas y adaptadas a la persona en su casa. La sesión publicada dura entre 45 y 60 minutos; confirma el desplazamiento y el coste antes de reservar.' },
      { question: '¿La estimulación cognitiva previene el Alzheimer?', answer: 'No se puede prometer que un programa individual prevenga o detenga una enfermedad. El servicio se presenta como actividad cognitiva adaptada, no como cura ni garantía.' },
      { question: '¿Hace falta una evaluación antes?', answer: 'Depende del objetivo y de la situación. Si hay cambios de memoria que preocupan, conviene valorar si primero se necesita una evaluación o una consulta médica.' },
      { question: '¿También puede hacerse online?', answer: 'La ficha de servicios indica modalidad online y a domicilio en Córdoba. Se confirma cuál es adecuada para la persona y para las actividades previstas.' }
    ],
    content: `
      <p>La estimulación cognitiva a domicilio consiste en proponer actividades para ejercitar distintas capacidades mentales en el entorno cotidiano de una persona. Puede resultar práctica si desplazarse es difícil o si trabajar desde casa facilita la participación. No es un test de memoria ni una promesa de evitar una demencia: el objetivo, la adecuación y el seguimiento deben explicarse antes de empezar.</p>

      <div class="article-callout"><p><strong>Respuesta rápida:</strong> en Mata Cala Psicología se ofrece estimulación cognitiva online o a domicilio en Córdoba, en sesiones publicadas de 45–60 minutos. El precio no aparece en la web y debe consultarse. Si hay cambios cognitivos nuevos o progresivos, pregunta también si conviene una evaluación profesional.</p></div>

      <h2>Qué significa trabajar la cognición</h2>
      <p>Las actividades cognitivas pueden implicar memoria, atención, lenguaje, orientación, razonamiento o planificación. El término es amplio y puede incluir propuestas muy distintas; por eso es importante conocer qué se hará, con qué propósito y cómo se adaptará a los intereses y capacidades de la persona. Resolver pasatiempos genéricos no equivale automáticamente a un programa profesional.</p>
      <p>La persona no debería tener que «demostrar» que recuerda. Las tareas se plantean como actividades, con un nivel manejable y oportunidades para participar, conversar y elegir. Si algo genera frustración o no tiene sentido para quien lo realiza, es razonable hablarlo y ajustar la propuesta.</p>

      <h2>Para quién puede ser una opción</h2>
      <p>Puede consultarse cuando una persona mayor busca incorporar actividades cognitivamente estimulantes a su rutina o cuando la familia quiere explorar un servicio individual y adaptado. También puede interesar cuando las dificultades de movilidad hacen más cómodo recibir atención en casa, si el profesional considera que ese formato es viable.</p>
      <p>No todas las personas necesitan el mismo tipo de apoyo. Si hay olvidos que se repiten, cambios que van a más o dificultades nuevas para desenvolverse, conviene aclarar primero qué está ocurriendo. La estimulación cognitiva no identifica la causa de esos cambios y no reemplaza una evaluación médica o neuropsicológica.</p>

      <h2>Cómo se organiza un proceso a domicilio</h2>
      <h3>1. Contacto y contexto</h3>
      <p>Se pregunta por las preferencias de la persona, sus intereses, el motivo de consulta y las condiciones prácticas del domicilio. Si participa un familiar, su presencia debe acordarse con la persona atendida siempre que pueda decidirlo.</p>
      <h3>2. Objetivos de actividad</h3>
      <p>Se aclara qué se busca ejercitar y qué actividades pueden ser agradables o significativas. Un objetivo concreto podría ser mantener una rutina de tareas variadas o trabajar con materiales relacionados con una afición; no se debería prometer que eso revertirá una enfermedad.</p>
      <h3>3. Sesiones y revisión</h3>
      <p>La duración publicada es de 45–60 minutos. Se puede consultar con qué frecuencia se recomienda empezar, cómo se revisa la participación y qué condiciones llevan a pausar o cambiar el trabajo. El coste y el posible desplazamiento deben confirmarse antes de reservar.</p>

      <h2>Domicilio u online: qué preguntar</h2>
      <ul class="article-checklist">
        <li>¿Qué zonas de Córdoba cubre la atención a domicilio y tiene coste de desplazamiento?</li>
        <li>¿Qué objetivo tendrá cada sesión y cómo se adaptan las actividades a la persona?</li>
        <li>¿Qué precio tiene y cuánto dura cada sesión?</li>
        <li>¿Se necesita valoración previa, especialmente si hay cambios recientes de memoria?</li>
        <li>¿Qué privacidad y apoyo técnico hacen falta para la modalidad online?</li>
        <li>¿Cómo se respetan las preferencias de la persona si un familiar coordina la cita?</li>
      </ul>

      <h2>Lo que sabemos y lo que no debe prometerse</h2>
      <p>Las recomendaciones clínicas distinguen intervenciones específicas de actividades generales. Por ejemplo, NICE recomienda ofrecer terapia de estimulación cognitiva grupal a personas con demencia leve o moderada en determinadas condiciones; eso no demuestra que cualquier actividad individual a domicilio tenga el mismo efecto.<sup><a href="#ref-1">1</a></sup> La guía de la OMS sobre reducción del riesgo cognitivo también analiza hábitos e intervenciones a nivel poblacional, no garantiza el resultado de un servicio concreto para una persona.<sup><a href="#ref-2">2</a></sup></p>
      <p>Por eso no es adecuado afirmar que una sesión «previene el Alzheimer», recupera una función perdida o detiene un deterioro. Un servicio responsable explica su alcance, reconoce incertidumbres y orienta a una valoración sanitaria si aparecen señales que lo requieren.</p>

      <h2>Preguntas frecuentes</h2>
      <div class="article-grid">
        <div class="article-card"><h3>¿Qué ocurre en una sesión?</h3><p>Se realizan actividades adaptadas al objetivo y a la persona en su entorno. La duración publicada es de 45–60 minutos.</p></div>
        <div class="article-card"><h3>¿Para quién puede estar indicada?</h3><p>La adecuación se valora individualmente. No todas las dificultades de memoria se resuelven con el mismo recurso.</p></div>
        <div class="article-card"><h3>¿Previene la demencia?</h3><p>No se puede prometer prevención ni curación. La estimulación es una intervención de actividad cognitiva, no una garantía médica.</p></div>
        <div class="article-card"><h3>¿Cuánto cuesta?</h3><p>La tarifa no está publicada. Pregunta por el precio de la sesión y el desplazamiento a tu zona antes de aceptar una cita.</p></div>
      </div>

      <div class="article-cta">
        <p>¿Quieres consultar la opción a domicilio en Córdoba?</p>
        <p>Pregunta por disponibilidad, tarifa y cómo se valoraría el objetivo en tu situación. Si te preocupan cambios de memoria, también puedes consultar la <a href="/servicios/evaluacion-neuropsicologica/">evaluación neuropsicológica</a>.</p>
        <a href="tel:+34697733060">Llamar al 697 733 060</a>
      </div>

      <h2>Fuentes consultadas</h2>
      <ol class="article-references">
        <li id="ref-1">National Institute for Health and Care Excellence. <a href="https://www.nice.org.uk/guidance/ng97/chapter/recommendations" target="_blank" rel="noopener noreferrer">Dementia: assessment, management and support for people living with dementia and their carers (NG97)</a>.</li>
        <li id="ref-2">World Health Organization. <a href="https://www.who.int/publications-detail-redirect/risk-reduction-of-cognitive-decline-and-dementia" target="_blank" rel="noopener noreferrer">Risk reduction of cognitive decline and dementia: WHO guidelines</a>.</li>
      </ol>
    `
  },
  'mi-madre-padre-olvida-cosas-que-hacer': {
    slug: 'mi-madre-padre-olvida-cosas-que-hacer',
    title: 'Mi madre o mi padre empieza a olvidar cosas: qué observar y cuándo consultar',
    seoTitle: 'Mi madre o mi padre olvida cosas: cuándo consultar',
    seoDescription: 'Cómo hablar sobre cambios de memoria, qué ejemplos observar y cuándo pedir una valoración profesional, sin adelantarse a un diagnóstico.',
    keywords: 'mi madre olvida cosas, mi padre tiene olvidos, problemas de memoria personas mayores, cuándo consultar por olvidos, evaluación neuropsicológica familia',
    excerpt: 'Si has notado cambios de memoria en tu madre o tu padre, empieza por observar situaciones concretas y hablarlo con respeto. Un olvido no permite diagnosticar la causa.',
    date: '5 Noviembre 2026',
    dateShort: 'Revisión',
    readTime: '8 min',
    category: 'Salud Cognitiva',
    image: primeraSesion,
    imageAlt: 'Conversación de acompañamiento, imagen ilustrativa',
    reviewStatus: 'pending',
    faq: [
      { question: '¿Cómo hablo con mi madre o mi padre sobre los olvidos?', answer: 'Elige un momento tranquilo, habla desde ejemplos concretos y explica tu preocupación sin atribuir un diagnóstico. Pregunta cómo lo está viviendo y escucha su perspectiva.' },
      { question: '¿Debo pedir cita sin que lo sepa?', answer: 'Puedes pedir información general, pero es importante respetar la autonomía y privacidad de la persona. Siempre que sea posible, invítala a participar en la decisión.' },
      { question: '¿Un olvido significa demencia?', answer: 'No. La memoria puede cambiar por motivos distintos y un olvido aislado no permite diagnosticar. Si el cambio preocupa o afecta la vida diaria, conviene consultar.' },
      { question: '¿A quién conviene consultar primero?', answer: 'Ante cambios persistentes o nuevos, la atención primaria puede valorar la salud general y orientar el siguiente paso. Una evaluación neuropsicológica puede considerarse según el motivo.' }
    ],
    content: `
      <p>Notar que tu madre o tu padre olvida más cosas puede inquietarte. La reacción más útil no suele ser discutir si «es la edad» ni concluir que existe una enfermedad, sino reunir ejemplos concretos, preguntarle cómo lo vive y valorar con ella si quiere consultar. Un cambio de memoria puede tener causas diferentes y no se puede diagnosticar desde una lista de señales.</p>

      <div class="article-callout"><p><strong>Primer paso práctico:</strong> anota qué ocurrió, cuándo, si se ha repetido y qué impacto tuvo. Si los cambios son nuevos, van a más o afectan tareas cotidianas, anima a pedir una valoración sanitaria. Si el cambio es brusco o viene con síntomas neurológicos, busca atención urgente.</p></div>

      <h2>Qué observar sin convertirte en vigilante</h2>
      <p>Busca cambios respecto a la forma habitual de desenvolverse, no fallos aislados. Puede servir anotar si cuesta más gestionar una tarea conocida, seguir una conversación, organizar una cita o encontrar el camino en un lugar familiar. Es más informativo registrar varios ejemplos con fecha que repetir preguntas de memoria o poner a prueba a la persona.</p>
      <p>También importa qué otras cosas han cambiado: sueño, estado de ánimo, audición o visión, salud física, medicación, rutina y situaciones recientes. Estos datos no explican por sí solos el motivo, pero ayudan a los profesionales a comprender el contexto. Las recomendaciones NICE plantean recoger la historia de la persona y, cuando sea posible y con cuidado, información de alguien que la conozca bien.<sup><a href="#ref-1">1</a></sup></p>

      <h2>Cómo iniciar la conversación</h2>
      <p>Elige un momento tranquilo y habla desde tu preocupación, no desde una conclusión. Por ejemplo: «He notado que últimamente te cuesta encontrar algunas cosas que antes llevabas con facilidad. ¿Tú también lo has notado? ¿Te gustaría que lo comentáramos con tu médica?»</p>
      <ul class="article-checklist">
        <li>Describe una situación concreta y reciente, sin acumular reproches de meses.</li>
        <li>Pregunta cómo lo está viviendo la persona y qué le gustaría hacer.</li>
        <li>Evita discutir, corregir cada palabra o hablar de ella como si no estuviera presente.</li>
        <li>Ofrece acompañamiento, pero respeta que participe en la decisión y en la consulta.</li>
        <li>Si no quiere hablar en ese momento, puedes volver a plantearlo otro día con calma.</li>
      </ul>

      <h2>Cuándo pedir una valoración</h2>
      <p>Es razonable consultar si los olvidos se repiten, si otras personas cercanas también observan un cambio, si hay dificultades nuevas en tareas cotidianas o si la propia persona está preocupada. La atención primaria puede revisar el estado de salud general y considerar causas que requieren atención médica. Según la situación, podría recomendar otras valoraciones.</p>
      <p>Una <a href="/servicios/evaluacion-neuropsicologica/">evaluación neuropsicológica</a> puede ayudar a describir memoria, atención y otras funciones cuando esa pregunta es pertinente. No determina por sí sola todas las causas médicas ni sustituye una exploración sanitaria. NICE recomienda pruebas cognitivas y considerar evaluación neuropsicológica especializada en algunos casos donde persisten dudas sobre el deterioro o su origen.<sup><a href="#ref-1">1</a></sup></p>

      <h2>Cuándo no conviene esperar</h2>
      <p>Si la confusión aparece de manera repentina, la persona deja de poder orientarse, tiene dificultad para hablar, debilidad en un lado, una caída con golpe en la cabeza u otro síntoma físico intenso, busca atención sanitaria urgente. No lo atribuyas simplemente a la edad ni intentes resolverlo con ejercicios de memoria.</p>

      <h2>Cómo acompañar sin quitar autonomía</h2>
      <p>Es comprensible querer resolverlo todo por un padre o una madre cuando aparece preocupación. Sin embargo, hacer las tareas en su lugar sin preguntarle puede reducir su participación y generar tensión. Pregunta qué apoyo desea, ofrece opciones concretas y acuerda con ella qué información compartir con familiares o profesionales. La privacidad y la dignidad siguen importando aunque haya dificultades.</p>
      <p>Si necesita acompañamiento, pueden preparar una lista breve de ejemplos y preguntas para la cita. La finalidad no es demostrar que algo va mal, sino describir lo observado con precisión y saber qué pasos recomienda el equipo sanitario.</p>

      <h2>Preguntas frecuentes</h2>
      <div class="article-grid">
        <div class="article-card"><h3>¿Olvidar cosas significa demencia?</h3><p>No necesariamente. Hay distintas causas posibles y hace falta una valoración adecuada si los cambios preocupan o afectan la vida diaria.</p></div>
        <div class="article-card"><h3>¿Qué anoto antes de consultar?</h3><p>Ejemplos concretos, desde cuándo ocurren, si se repiten y qué tarea cotidiana se ha visto afectada. Evita hacer pruebas caseras.</p></div>
        <div class="article-card"><h3>¿Puedo hablar con la profesional como familiar?</h3><p>Puedes pedir información general. La conversación sobre la atención y el intercambio de información clínica deben respetar el consentimiento y la privacidad de tu familiar.</p></div>
        <div class="article-card"><h3>¿A qué profesional acudo primero?</h3><p>La atención primaria puede valorar la salud general. Según el caso, se puede considerar evaluación neuropsicológica u otra derivación sanitaria.</p></div>
      </div>

      <div class="article-cta">
        <p>¿Quieres orientación sobre una valoración cognitiva?</p>
        <p>Puedes consultar el servicio de <a href="/servicios/evaluacion-neuropsicologica/">evaluación neuropsicológica en Córdoba</a>. La decisión y el consentimiento de la persona mayor siguen siendo centrales.</p>
        <a href="tel:+34697733060">Llamar al 697 733 060</a>
      </div>

      <h2>Fuentes consultadas</h2>
      <ol class="article-references">
        <li id="ref-1">National Institute for Health and Care Excellence. <a href="https://www.nice.org.uk/guidance/ng97/chapter/recommendations" target="_blank" rel="noopener noreferrer">Dementia: assessment, management and support for people living with dementia and their carers (NG97)</a>.</li>
        <li id="ref-2">National Institute on Aging. <a href="https://www.nia.nih.gov/health/memory-loss-and-forgetfulness/memory-problems-forgetfulness-and-aging" target="_blank" rel="noopener noreferrer">Memory Problems, Forgetfulness, and Aging</a>.</li>
      </ol>
    `
  },
  'olvidos-normales-edad-senales': {
    slug: 'olvidos-normales-edad-senales',
    title: 'Olvidos normales con la edad y señales para pedir una valoración',
    seoTitle: 'Olvidos normales con la edad: señales para consultar',
    seoDescription: 'Diferencias orientativas entre despistes ocasionales y cambios de memoria que afectan al día a día. Cuándo pedir una valoración, sin autodiagnóstico.',
    keywords: 'olvidos normales edad, memoria personas mayores señales, cuándo preocuparse por olvidos, pérdida de memoria envejecimiento, cambios cognitivos edad',
    excerpt: 'Olvidar de vez en cuando dónde dejaste algo no significa necesariamente que haya una enfermedad. Importa si el patrón cambia, se repite y afecta a actividades cotidianas.',
    date: '5 Noviembre 2026',
    dateShort: 'Revisión',
    readTime: '7 min',
    category: 'Salud Cognitiva',
    image: estimulacion,
    imageAlt: 'Actividad de atención y memoria, imagen ilustrativa',
    reviewStatus: 'pending',
    faq: [
      { question: '¿Es normal olvidar nombres con la edad?', answer: 'A veces puede costar encontrar una palabra o un nombre y recordarlo después. Un cambio que se repite o interfiere con tareas diarias merece comentarse con un profesional.' },
      { question: '¿Cuándo debo preocuparme por un olvido?', answer: 'Si los cambios son frecuentes, progresivos, afectan actividades conocidas o preocupan a la persona o su entorno, conviene pedir una valoración; no implica un diagnóstico concreto.' },
      { question: '¿Una lista de señales puede diagnosticar demencia?', answer: 'No. Las listas orientan sobre cuándo consultar, pero no sustituyen una historia clínica, una evaluación profesional ni las pruebas médicas que puedan ser necesarias.' },
      { question: '¿Qué hago si el cambio aparece de repente?', answer: 'Una confusión súbita o cambios neurológicos nuevos requieren valoración sanitaria urgente, no una espera para ver si se resuelven con ejercicios.' }
    ],
    content: `
      <p>Con la edad puede ocurrir que una persona tarde más en recordar un nombre, necesite más tiempo para aprender algo nuevo o se dé cuenta de que dejó las llaves en otro sitio. Un despiste ocasional no permite concluir que haya deterioro. Conviene consultar cuando el patrón cambia de forma persistente, se repite o empieza a interferir con actividades habituales.</p>

      <div class="article-callout"><p><strong>La diferencia práctica:</strong> fíjate en si la persona recuerda más tarde, puede reconstruir lo ocurrido y mantiene su autonomía en tareas conocidas; o si el problema se repite, dificulta actividades que antes resolvía y otras personas también observan un cambio. Esta comparación orienta una conversación, no diagnostica.</p></div>

      <h2>Despistes que pueden ocurrir de vez en cuando</h2>
      <p>Puede pasar que alguien olvide una cita y luego la recuerde, tarde un poco en encontrar una palabra o no recuerde dónde dejó un objeto, pero pueda reconstruir sus pasos. La National Institute on Aging describe algunos cambios ocasionales de este tipo como compatibles con olvidos leves asociados a la edad.<sup><a href="#ref-1">1</a></sup></p>
      <p>Eso no significa que cualquier cambio deba normalizarse. La propia persona puede notar que algo no le resulta igual, y es válido consultarlo aunque los ejemplos parezcan pequeños. Si hay preocupación, el objetivo de una consulta es comprender el contexto y decidir si hace falta explorar más.</p>

      <h2>Señales que conviene comentar con un profesional</h2>
      <p>Presta atención al impacto y a la repetición, no solo al tipo de error. Por ejemplo, preguntar varias veces lo mismo sin recordar la respuesta, perderse en un recorrido familiar, tener dificultad nueva para manejar una tarea conocida o dejar de participar en una actividad por no poder seguirla son cambios que merecen comentarse.</p>
      <p>La Alzheimer's Association distingue entre cambios ocasionales —como olvidar a veces una cita y recordarla después— y dificultades que alteran la vida diaria, como problemas frecuentes para organizar tareas conocidas o seguir una conversación.<sup><a href="#ref-2">2</a></sup> La comparación es orientativa; no sirve para que familiares o lectores diagnostiquen Alzheimer.</p>

      <div class="article-table-wrap">
        <table>
          <thead><tr><th>Ejemplo ocasional</th><th>Conviene pedir orientación si…</th></tr></thead>
          <tbody>
            <tr><td>Olvidar a veces dónde se dejó algo y poder buscarlo siguiendo los pasos habituales.</td><td>Perder objetos con frecuencia y no poder reconstruir qué ocurrió o dónde buscarlos.</td></tr>
            <tr><td>Tardar en recordar una palabra y encontrarla más tarde.</td><td>Los cambios de lenguaje dificultan conversaciones o tareas que antes eran familiares.</td></tr>
            <tr><td>Confundirse con el día de la semana y corregirlo después.</td><td>Perder la orientación temporal o espacial de forma repetida, sobre todo en situaciones conocidas.</td></tr>
            <tr><td>Necesitar más tiempo para organizar una gestión nueva.</td><td>Empezar a tener dificultades frecuentes con tareas conocidas que afectan a la vida cotidiana.</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Hay más de una posible explicación</h2>
      <p>La memoria y la concentración pueden verse influidas por la salud física, el sueño, el estado de ánimo, la audición, la visión, el estrés y algunos medicamentos, entre otros factores. Por eso no es seguro atribuir automáticamente un olvido a una demencia o a la edad. Una consulta sanitaria ayuda a revisar qué información falta y qué evaluación puede ser pertinente.</p>

      <h2>Qué hacer si te preocupa tu memoria o la de alguien cercano</h2>
      <ol>
        <li>Describe ejemplos concretos y cuándo ocurrieron, sin etiquetar a la persona.</li>
        <li>Pregunta si ella también ha notado cambios y si desea comentarlo con atención primaria.</li>
        <li>Reúne información práctica sobre salud, descanso, medicación y tareas afectadas para la consulta.</li>
        <li>Si hay dudas sobre memoria, atención u otras funciones, pregunta si procede una <a href="/servicios/evaluacion-neuropsicologica/">evaluación neuropsicológica</a>.</li>
      </ol>
      <p>La guía NICE recomienda explorar la historia de la persona, el impacto en su vida diaria y posibles factores que puedan afectar a la cognición antes de concluir una causa.<sup><a href="#ref-3">3</a></sup> Una evaluación profesional integra más información que una lista de síntomas.</p>

      <h2>Cuándo es urgente</h2>
      <p>Un cambio de memoria que aparece de golpe junto con confusión intensa, dificultad para hablar, debilidad, alteración del equilibrio, fiebre o un golpe reciente necesita atención sanitaria urgente. No esperes a una sesión de estimulación cognitiva ni intentes valorar el problema con pruebas caseras.</p>

      <h2>Preguntas frecuentes</h2>
      <div class="article-grid">
        <div class="article-card"><h3>¿Olvidar nombres es siempre una señal de alarma?</h3><p>No. Puede ocurrir que una palabra tarde en aparecer. La frecuencia, el cambio respecto a lo habitual y el impacto ayudan a decidir si conviene consultar.</p></div>
        <div class="article-card"><h3>¿Los olvidos normales se pueden distinguir en casa?</h3><p>Solo de forma orientativa. Un cuadro comparativo no diagnostica ni descarta un problema; consulta si existe una preocupación sostenida.</p></div>
        <div class="article-card"><h3>¿Se puede hacer una evaluación sin diagnóstico previo?</h3><p>Se puede preguntar por una primera valoración. La profesional orienta si una evaluación neuropsicológica tiene sentido o si conviene otro recurso.</p></div>
        <div class="article-card"><h3>¿Un cambio súbito puede esperar?</h3><p>No si aparece confusión intensa u otros síntomas físicos nuevos. Busca atención sanitaria urgente.</p></div>
      </div>

      <div class="article-cta">
        <p>Si los cambios de memoria se repiten, puedes pedir orientación</p>
        <p>Consulta el servicio de <a href="/servicios/evaluacion-neuropsicologica/">evaluación neuropsicológica</a> y confirma qué tipo de valoración encaja con la situación.</p>
        <a href="tel:+34697733060">Llamar al 697 733 060</a>
      </div>

      <h2>Fuentes consultadas</h2>
      <ol class="article-references">
        <li id="ref-1">National Institute on Aging. <a href="https://www.nia.nih.gov/health/memory-loss-and-forgetfulness/memory-problems-forgetfulness-and-aging" target="_blank" rel="noopener noreferrer">Memory Problems, Forgetfulness, and Aging</a>.</li>
        <li id="ref-2">Alzheimer's Association. <a href="https://www.alz.org/alzheimers-dementia/10_signs" target="_blank" rel="noopener noreferrer">10 Early Signs and Symptoms of Alzheimer's and Dementia</a>.</li>
        <li id="ref-3">National Institute for Health and Care Excellence. <a href="https://www.nice.org.uk/guidance/ng97/chapter/recommendations" target="_blank" rel="noopener noreferrer">Dementia: assessment, management and support (NG97)</a>.</li>
      </ol>
    `
  },
  'precio-psicologo-cordoba-cuanto-cuesta': {
    slug: 'precio-psicologo-cordoba-cuanto-cuesta',
    title: 'Cuánto cuesta ir al psicólogo en Córdoba y qué incluye una sesión',
    seoTitle: 'Cuánto cuesta ir al psicólogo en Córdoba | Precios publicados',
    seoDescription: 'Consulta las tarifas publicadas por Mata Cala Psicología en Córdoba y qué conviene preguntar sobre duración, modalidad y alcance de una sesión.',
    keywords: 'precio psicólogo Córdoba, cuánto cuesta psicólogo Córdoba, precio psicóloga sesión, tarifa terapia pareja Córdoba, precio terapia individual',
    excerpt: 'El coste depende del tipo de servicio y su duración. Estas son las tarifas publicadas actualmente por Mata Cala Psicología; no se presentan como promedio de mercado.',
    date: '5 Noviembre 2026',
    dateShort: 'Revisión',
    readTime: '6 min',
    category: 'Psicología en Córdoba',
    image: psicologia,
    imageAlt: 'Espacio de consulta psicológica, imagen ilustrativa',
    reviewStatus: 'pending',
    faq: [
      { question: '¿Cuánto cuesta una sesión individual en Mata Cala Psicología?', answer: 'La tarifa publicada actualmente es de 60 euros por 50 minutos. Confirma el importe antes de reservar.' },
      { question: '¿Cuánto cuesta la terapia de pareja?', answer: 'La tarifa publicada actualmente es de 70 euros por 60 minutos.' },
      { question: '¿La primera consulta es gratuita?', answer: 'La web no indica una tarifa distinta para la primera sesión. La tarifa individual publicada es de 60 € por 50 minutos; confirma el importe antes de reservar.' },
      { question: '¿Cuánto cuesta una evaluación neuropsicológica?', answer: 'El precio no aparece publicado y se consulta antes de empezar, junto con el alcance y los encuentros incluidos.' }
    ],
    content: `
      <p>El precio de ir al psicólogo en Córdoba cambia según el tipo de servicio, la duración de la sesión y qué incluye el proceso. En la web de María Ángeles Mata Cala aparecen actualmente tarifas de 60 € por terapia individual de 50 minutos, 70 € por terapia de pareja de 60 minutos y 80 € por terapia familiar de 75 minutos. No son un promedio de mercado: son los precios publicados por esta consulta y conviene confirmarlos antes de pedir cita.</p>

      <div class="article-callout"><p><strong>Tarifas publicadas actualmente:</strong> terapia individual, 60 € / 50 minutos; terapia de pareja, 70 € / 60 minutos; terapia familiar, 80 € / 75 minutos. Evaluación neuropsicológica y estimulación cognitiva: precio a consultar. <a href="/servicios/#tarifas">Ver el listado de tarifas y servicios</a>.</p></div>

      <h2>Qué precio tiene cada servicio en esta consulta</h2>
      <div class="article-table-wrap">
        <table>
          <thead><tr><th>Servicio</th><th>Tarifa publicada</th><th>Duración indicada</th></tr></thead>
          <tbody>
            <tr><td>Terapia individual</td><td>60 €</td><td>50 minutos</td></tr>
            <tr><td>Terapia de pareja</td><td>70 €</td><td>60 minutos</td></tr>
            <tr><td>Terapia familiar</td><td>80 €</td><td>75 minutos</td></tr>
            <tr><td>Evaluación neuropsicológica</td><td>Consultar</td><td>La ficha indica 90–120 minutos como referencia; confirma si se refiere a cada sesión o al proceso</td></tr>
            <tr><td>Estimulación cognitiva</td><td>Consultar</td><td>45–60 minutos</td></tr>
          </tbody>
        </table>
      </div>
      <p>La primera sesión permite explicar el motivo de consulta y conocer el encuadre. La web no indica una tarifa distinta para esta cita: la tarifa individual publicada es de 60 € por 50 minutos. Confirma el importe antes de reservar.</p>

      <h2>Qué puede incluir una sesión de psicología</h2>
      <p>En una sesión individual suele haber tiempo para revisar qué te trae, explorar el contexto, acordar un foco de trabajo y conversar sobre los siguientes pasos. El contenido concreto depende de la fase del proceso y de los objetivos; una primera cita no necesariamente incluye una evaluación completa ni una devolución diagnóstica.</p>
      <p>En terapia de pareja participan las dos personas y se explora el patrón relacional que quieren trabajar. En terapia familiar se valora quién necesita participar y con qué objetivo. En una evaluación neuropsicológica, el presupuesto puede depender del número y tipo de pruebas, del tiempo de devolución y del alcance del informe: pide que estos puntos queden claros antes de iniciar.</p>

      <h2>Qué preguntar antes de reservar</h2>
      <ul class="article-checklist">
        <li>Cuál es el precio de la primera sesión y de las siguientes.</li>
        <li>Cuánto dura el encuentro y qué incluye exactamente.</li>
        <li>Si la modalidad online tiene el mismo precio que la presencial.</li>
        <li>En evaluaciones, cuántos encuentros y qué tipo de informe contempla el presupuesto.</li>
        <li>Qué política existe para cambios o cancelaciones.</li>
        <li>Si el servicio se adapta a tu motivo o si conviene otro profesional o recurso.</li>
      </ul>
      <p>Preguntar por estos detalles no es desconfianza: forma parte de tomar una decisión informada. Una profesional debe poder explicarte con claridad el encuadre y los límites de lo que ofrece.</p>

      <h2>Presencial en Córdoba u online</h2>
      <p>La consulta de María Ángeles Mata Cala está en C/ Rodríguez Sánchez, 9, 14003 Córdoba, y ofrece terapia online para los servicios indicados en su web. Pregunta si el precio y la duración son iguales en ambos formatos. En la estimulación cognitiva a domicilio, confirma si se aplica un coste de desplazamiento según tu zona.</p>

      <h2>Preguntas frecuentes</h2>
      <div class="article-grid">
        <div class="article-card"><h3>¿Cuánto cuesta una psicóloga en Córdoba?</h3><p>No existe una tarifa única para toda la ciudad. En esta consulta las tarifas publicadas son 60 € individual, 70 € pareja y 80 € familiar, con duraciones distintas.</p></div>
        <div class="article-card"><h3>¿La primera sesión es gratuita?</h3><p>La web no indica una tarifa distinta para esta cita. La tarifa individual publicada es de 60 € por 50 minutos; confirma el importe antes de reservar.</p></div>
        <div class="article-card"><h3>¿Se paga por sesión o por mes?</h3><p>Las tarifas públicas están expresadas por sesión. Consulta antes si existen condiciones distintas para bonos o evaluaciones extensas.</p></div>
        <div class="article-card"><h3>¿La evaluación neuropsicológica cuesta lo mismo?</h3><p>No se publica una tarifa cerrada. Solicita un presupuesto que explique encuentros, duración e informe antes de empezar.</p></div>
      </div>

      <div class="article-cta">
        <p>¿Quieres confirmar una tarifa o resolver una duda práctica?</p>
        <p>Consulta la página de <a href="/servicios/">servicios de psicología en Córdoba</a> o pregunta por teléfono qué incluye el servicio que estás valorando.</p>
        <a href="tel:+34697733060">Llamar al 697 733 060</a>
      </div>

      <h2>Información de tarifas</h2>
      <p>Los importes de este artículo se transcriben de la página de servicios de Mata Cala Psicología consultada el 5 de noviembre de 2026. Pueden actualizarse. No se han estimado precios medios de Córdoba ni añadido importes que el centro no publica.</p>
    `
  }
};

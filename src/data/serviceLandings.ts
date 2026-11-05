import type { ImageMetadata } from 'astro';
import ansiedadImage from '../assets/terapia-individual.avif';
import parejaImage from '../assets/terapia-pareja.avif';
import mayoresImage from '../assets/estimulacion-cognitiva.avif';
import estimulacionImage from '../assets/estimulacion-cognitiva.avif';
import evaluacionImage from '../assets/evaluacion.avif';
import individualImage from '../assets/terapia-individual.avif';

export interface ServiceLandingPage {
  slug: string;
  serviceId: string;
  label: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  image: ImageMetadata;
  imageAlt: string;
  intro: string;
  situations: string[];
  serviceExplanation: string;
  process: { title: string; description: string }[];
  modality: string;
  duration: string;
  price: string;
  limits: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; href: string; description: string }[];
  relatedArticles: { title: string; href: string }[];
}

export const serviceLandingPages: ServiceLandingPage[] = [
  {
    slug: 'ansiedad-cordoba',
    serviceId: 'individual',
    label: 'Ansiedad · terapia individual',
    title: 'Terapia para la ansiedad en Córdoba',
    seoTitle: 'Psicóloga para la ansiedad en Córdoba | María Ángeles Mata',
    description: 'Atención psicológica para la ansiedad en Córdoba y online. Primera valoración, objetivos acordados y un proceso adaptado a cada persona.',
    excerpt: 'Cuando la preocupación, la tensión o el miedo empiezan a ocupar demasiado espacio, una valoración profesional puede ayudarte a entender qué está pasando y qué opciones tienes.',
    image: ansiedadImage,
    imageAlt: 'Espacio de terapia individual, imagen ilustrativa',
    intro: 'La ansiedad puede aparecer ante una etapa exigente y, en ocasiones, mantenerse incluso cuando intentas descansar o dejar de pensar en ello. Si está afectando a tu sueño, tus relaciones, el trabajo o las actividades que antes hacías, puedes consultar sin necesidad de llegar a una crisis ni de saber qué diagnóstico tienes.',
    situations: [
      'Preocupaciones difíciles de interrumpir o sensación de estar siempre en alerta.',
      'Evitar lugares, conversaciones o tareas por miedo a cómo te sentirás.',
      'Tensión, inquietud o cambios en el sueño que persisten y te preocupan.',
      'Dificultad para concentrarte o para retomar tu rutina con tranquilidad.',
      'Un cambio vital, una pérdida o una situación concreta que te está desbordando.'
    ],
    serviceExplanation: 'La terapia individual ofrece un espacio para comprender el contexto del malestar, qué lo mantiene y qué cambios podrían ser útiles para ti. María Ángeles Mata Cala trabaja desde la psicología general sanitaria y selecciona el enfoque y las herramientas tras conocer cada situación. La terapia no sustituye una evaluación médica cuando hay síntomas físicos nuevos o intensos.',
    process: [
      { title: 'Primera conversación', description: 'Hablamos de lo que te preocupa, desde cuándo ocurre y cómo influye en tu vida. No necesitas preparar una explicación perfecta.' },
      { title: 'Valoración y objetivos', description: 'Se exploran tus necesidades y preferencias y se acuerdan objetivos realistas. Si la consulta requiere otro recurso, se conversa contigo.' },
      { title: 'Trabajo y revisión', description: 'El proceso se adapta a lo que se va observando. Revisamos cómo te está resultando y ajustamos el ritmo o las herramientas cuando hace falta.' }
    ],
    modality: 'Atención presencial en consulta, online o a domicilio en Córdoba. La modalidad se acuerda según tus preferencias y si resulta adecuada para tu situación; consulta disponibilidad y zona para la atención domiciliaria.',
    duration: '50 minutos por sesión individual.',
    price: '60 € por sesión individual de 50 minutos, según la tarifa publicada actualmente en Servicios. Confirma el importe antes de reservar si tienes dudas sobre la primera sesión.',
    limits: [
      'Una lista de síntomas no permite saber por sí sola si existe un trastorno de ansiedad.',
      'La psicóloga no prescribe medicación. Si aparecen síntomas físicos nuevos o intensos, consulta también con atención sanitaria.',
      'La terapia no ofrece resultados garantizados ni un número de sesiones predeterminado.'
    ],
    faqs: [
      { question: '¿Tengo que saber qué me pasa antes de pedir cita?', answer: 'No. La primera sesión sirve precisamente para escuchar qué notas y valorar contigo si la terapia individual puede ser un recurso adecuado.' },
      { question: '¿La ansiedad siempre necesita tratamiento psicológico?', answer: 'No necesariamente. Sentir ansiedad en ciertos momentos puede ser una respuesta humana. Conviene consultar si el malestar persiste, limita tu vida o te preocupa.' },
      { question: '¿Puedo hacer terapia online o a domicilio?', answer: 'La terapia individual está disponible online y también a domicilio en Córdoba. La modalidad se acuerda según la situación, tus preferencias y la disponibilidad.' },
      { question: '¿Cuánto cuesta una sesión para la ansiedad?', answer: 'La tarifa publicada para terapia individual es de 60 € por 50 minutos. No hay un precio distinto por consultar ansiedad; puedes confirmar la tarifa al contactar.' }
    ],
    relatedServices: [
      { title: 'Terapia individual', href: '/servicios/terapia-individual/', description: 'Conoce cómo se plantea el espacio individual.' },
      { title: 'Psicología para personas mayores', href: '/servicios/psicologia-personas-mayores/', description: 'Opciones de apoyo psicológico en etapas avanzadas de la vida.' }
    ],
    relatedArticles: [
      { title: 'Ansiedad persistente: cómo reconocerla y cuándo consultar', href: '/blog/ansiedad-persistente-tratamiento-psicologico/' },
      { title: 'Cómo gestionar la ansiedad cuando el cuerpo se activa', href: '/blog/gestion-ansiedad/' },
      { title: 'Cuándo ir al psicólogo y qué esperar de la primera sesión', href: '/blog/cuando-ir-al-psicologo/' }
    ]
  },
  {
    slug: 'terapia-pareja-cordoba',
    serviceId: 'pareja',
    label: 'Relaciones · terapia de pareja',
    title: 'Terapia de pareja en Córdoba',
    seoTitle: 'Terapia de pareja en Córdoba | María Ángeles Mata',
    description: 'Terapia de pareja presencial en Córdoba y online. Un espacio para comprender los conflictos, mejorar la comunicación y valorar juntos los siguientes pasos.',
    excerpt: 'Si las mismas conversaciones terminan en distancia o discusión, la terapia puede ayudaros a mirar el patrón que se repite, sin convertir la sesión en un juicio.',
    image: parejaImage,
    imageAlt: 'Espacio preparado para una conversación de pareja, imagen ilustrativa',
    intro: 'No hace falta estar a punto de separarse para pedir ayuda. Algunas parejas consultan porque discuten por los mismos temas; otras, porque casi han dejado de hablar de ellos. La terapia ofrece un espacio guiado para entender cómo se ha llegado a ese punto y qué necesita cada persona para poder conversar con más claridad.',
    situations: [
      'Conversaciones que escalan, terminan en reproches o se quedan sin resolver.',
      'Distancia emocional, dificultad para expresar necesidades o sensación de ir cada uno por su lado.',
      'Desacuerdos que vuelven una y otra vez sobre convivencia, familia, dinero o intimidad.',
      'Una crisis que ha afectado a la confianza y sobre la que queréis hablar con apoyo.',
      'Dudas sobre continuar, cambiar la relación o cerrar una etapa con respeto.'
    ],
    serviceExplanation: 'La terapia de pareja trabaja con la relación y la forma en que ambas personas interactúan. La psicóloga no decide quién tiene razón ni promete que la pareja vaya a continuar junta. La primera valoración permite conocer el motivo de consulta y comprobar si el formato conjunto es seguro y adecuado.',
    process: [
      { title: 'Motivo compartido', description: 'Se escucha qué os trae a consulta y qué espera cada persona, además de los temas que os cuesta abordar.' },
      { title: 'Comprender el patrón', description: 'Se explora cómo empieza un conflicto, qué hace cada persona y cómo termina. Se acuerdan focos de trabajo que tengan sentido para ambos.' },
      { title: 'Revisar el proceso', description: 'A lo largo de las sesiones se revisa si la conversación y los acuerdos os resultan útiles, y se ajusta el trabajo a vuestra situación.' }
    ],
    modality: 'Sesiones presenciales en Córdoba y modalidad online, si resulta adecuada. La modalidad y la participación de cada persona se acuerdan al iniciar.',
    duration: '60 minutos por sesión de pareja.',
    price: '70 € por sesión de 60 minutos, según la tarifa publicada actualmente en Servicios. Confirma el importe antes de reservar.',
    limits: [
      'La terapia no sirve para asignar culpables ni garantiza reconciliación o continuidad de la relación.',
      'Si existe violencia, coerción, miedo o riesgo, una sesión conjunta puede no ser segura. Es importante comunicarlo para valorar otros recursos.',
      'La psicóloga acompaña el proceso; las decisiones sobre la relación corresponden a las personas implicadas.'
    ],
    faqs: [
      { question: '¿Tenemos que acudir las dos personas desde el principio?', answer: 'La terapia de pareja está pensada para trabajar la relación con ambas personas. La primera toma de contacto sirve para acordar cómo organizar la valoración y resolver dudas.' },
      { question: '¿La terapeuta nos dirá si debemos seguir juntos?', answer: 'No. El espacio ayuda a comprender la situación y valorar opciones; no decide por vosotros ni impone una decisión.' },
      { question: '¿Qué ocurre si una persona no quiere acudir?', answer: 'Puedes pedir información individual sobre cómo abordar la situación. La terapia de pareja requiere valorar la disposición y seguridad de ambas personas.' },
      { question: '¿Cuánto cuesta la terapia de pareja?', answer: 'La tarifa publicada actualmente es de 70 € por una sesión de 60 minutos. Conviene confirmarla antes de reservar.' }
    ],
    relatedServices: [
      { title: 'Terapia individual', href: '/servicios/terapia-individual/', description: 'Un espacio individual para abordar decisiones o malestar personal.' },
      { title: 'Servicios de psicología en Córdoba', href: '/servicios/', description: 'Consulta el índice de servicios y tarifas.' }
    ],
    relatedArticles: [
      { title: 'Terapia de pareja: cuándo empezar y qué esperar', href: '/blog/terapia-de-pareja-cuando-empezar/' },
      { title: 'Comunicación en pareja: cuando hablar no basta', href: '/blog/comunicacion-pareja/' }
    ]
  },
  {
    slug: 'psicologia-personas-mayores',
    serviceId: 'mayores',
    label: 'Bienestar psicológico · personas mayores',
    title: 'Psicología para personas mayores y cuidadores en Córdoba',
    seoTitle: 'Psicología para mayores y cuidadores en Córdoba | Mata Cala',
    description: 'Atención psicológica a personas mayores y apoyo a quienes las cuidan en Córdoba. Terapia individual y estimulación cognitiva también a domicilio.',
    excerpt: 'Atención a personas mayores y orientación para sus cuidadores. Terapia individual y estimulación cognitiva pueden realizarse también a domicilio en Córdoba.',
    image: mayoresImage,
    imageAlt: 'Material de actividad cognitiva, imagen ilustrativa y no identificativa de una consulta real',
    intro: 'Las personas mayores pueden atravesar duelos, cambios de salud, soledad, ansiedad o dificultades de memoria y necesitar apoyo en una etapa distinta. Quienes cuidan también pueden necesitar un espacio para abordar preocupación, cansancio o cambios en la relación. Consultar no presupone un diagnóstico ni que la familia tenga que decidir por la persona: su voz, sus preferencias y su autonomía deben ocupar el centro.',
    situations: [
      'Malestar emocional sostenido tras una pérdida, un cambio importante o una enfermedad.',
      'Preocupación, tristeza o aislamiento que dificultan actividades cotidianas.',
      'Cambios en memoria o atención que la persona o su entorno desean comprender mejor.',
      'Necesidad de orientación sobre estimulación cognitiva adaptada a intereses y ritmo.',
      'Familiares que quieren saber cómo apoyar sin invadir la autonomía de su ser querido.',
      'Personas cuidadoras que quieren atender su bienestar emocional y las dificultades asociadas al cuidado.'
    ],
    serviceExplanation: 'La consulta ofrece terapia individual, evaluación neuropsicológica y estimulación cognitiva para personas mayores, además de orientación y apoyo psicológico a quienes las cuidan. La primera conversación sirve para aclarar las necesidades, la modalidad y cuál de estos servicios puede ser apropiado. La participación de familiares se acuerda respetando la privacidad y autonomía de la persona atendida. Una valoración psicológica no sustituye atención médica ni permite concluir por sí sola que exista demencia.',
    process: [
      { title: 'Escuchar a la persona', description: 'Se aclara qué desea consultar, qué nota y qué apoyos quiere tener presentes. La familia puede aportar observaciones con el consentimiento de la persona.' },
      { title: 'Valorar el encaje', description: 'Se revisan las necesidades prácticas y se orienta sobre terapia individual, evaluación neuropsicológica, estimulación cognitiva u otro recurso.' },
      { title: 'Acordar siguientes pasos', description: 'Se explican modalidad, alcance, precio y límites del servicio antes de decidir si comenzar.' }
    ],
    modality: 'La terapia individual y la estimulación cognitiva están disponibles online o a domicilio en Córdoba; la terapia individual también se realiza en consulta. La disponibilidad y la zona de atención domiciliaria deben confirmarse al contactar.',
    duration: 'Depende del servicio: terapia individual 50 minutos; estimulación cognitiva 45–60 minutos. La evaluación neuropsicológica requiere acordar duración y alcance.',
    price: 'La tarifa publicada para terapia individual es 60 € por 50 minutos. Evaluación neuropsicológica y estimulación cognitiva: precio a consultar. Confirma modalidad, desplazamiento y tarifa antes de reservar.',
    limits: [
      'La edad por sí sola no indica un problema psicológico ni cognitivo.',
      'Los cambios de memoria tienen posibles causas distintas y deben valorarse clínicamente; esta página no diagnostica.',
      'La participación familiar requiere cuidar la voluntad, privacidad y autonomía de la persona mayor.'
    ],
    faqs: [
      { question: '¿Puede una persona mayor acudir a terapia individual?', answer: 'Sí. La consulta ofrece terapia individual; la primera valoración permite conocer la situación y comprobar si ese servicio encaja con las necesidades de la persona.' },
      { question: '¿La familia o las personas cuidadoras pueden pedir orientación?', answer: 'Sí. Pueden consultar opciones de apoyo y orientación psicológica ante las dificultades del cuidado. Para compartir información clínica o implicar a la familia en el proceso de la persona mayor, se respeta su consentimiento y privacidad.' },
      { question: '¿La terapia individual y la estimulación cognitiva pueden ser a domicilio?', answer: 'Sí. Ambos servicios pueden realizarse a domicilio en Córdoba. Confirma la disponibilidad para tu zona y cualquier posible coste de desplazamiento antes de reservar.' },
      { question: '¿Cómo sé si conviene una evaluación de memoria?', answer: 'Si hay cambios observables que preocupan o afectan a la vida diaria, se puede consultar para valorar el siguiente paso. La evaluación psicológica no reemplaza la valoración médica.' }
    ],
    relatedServices: [
      { title: 'Evaluación neuropsicológica', href: '/servicios/evaluacion-neuropsicologica/', description: 'Conoce el proceso para explorar cambios en memoria y otras funciones.' },
      { title: 'Estimulación cognitiva', href: '/servicios/estimulacion-cognitiva/', description: 'Actividades online o a domicilio, adaptadas a cada persona.' },
      { title: 'Terapia para la ansiedad', href: '/servicios/ansiedad-cordoba/', description: 'Atención individual cuando el malestar emocional está ocupando demasiado espacio.' }
    ],
    relatedArticles: [
      { title: 'Mi madre o mi padre empieza a olvidar cosas: qué observar', href: '/blog/mi-madre-padre-olvida-cosas-que-hacer/' },
      { title: 'Olvidos normales con la edad y señales para consultar', href: '/blog/olvidos-normales-edad-senales/' },
      { title: 'Ansiedad en personas mayores: señales y cómo ayudar', href: '/blog/ansiedad-personas-mayores/' }
    ]
  },
  {
    slug: 'estimulacion-cognitiva',
    serviceId: 'cognitiva',
    label: 'Memoria · estimulación cognitiva',
    title: 'Estimulación cognitiva en Córdoba, también a domicilio',
    seoTitle: 'Estimulación cognitiva a domicilio en Córdoba | Mata Cala',
    description: 'Estimulación cognitiva individualizada, online o a domicilio en Córdoba. Sesiones de 45–60 minutos; objetivos y adecuación se valoran previamente.',
    excerpt: 'Actividades adaptadas a la persona para trabajar funciones como memoria, atención u orientación en sesiones online o en el domicilio en Córdoba.',
    image: estimulacionImage,
    imageAlt: 'Material de trabajo para actividades cognitivas, imagen ilustrativa',
    intro: 'La estimulación cognitiva puede consistir en actividades estructuradas que ejercitan distintas funciones mentales y se ajustan a los intereses, el ritmo y la situación de la persona. No equivale a un diagnóstico ni a una promesa de prevenir o detener una enfermedad. Antes de empezar conviene saber qué objetivo se busca y si este servicio es el recurso adecuado.',
    situations: [
      'Una persona mayor quiere mantener una rutina de actividades cognitivamente estimulantes.',
      'Hay dificultades de movilidad y resulta más cómodo realizar el trabajo en casa.',
      'La persona necesita actividades graduadas a su ritmo, preferencias y capacidades.',
      'La familia quiere consultar opciones de acompañamiento no diagnóstico.',
      'Se desea conocer si encaja mejor una atención a domicilio o una sesión online.'
    ],
    serviceExplanation: 'El servicio publicado por Mata Cala Psicología incluye estimulación cognitiva online o a domicilio en Córdoba, con actividades y materiales adaptados. La estimulación no permite establecer por sí sola la causa de un olvido y no sustituye una evaluación médica o neuropsicológica cuando hay cambios que afectan a la vida cotidiana.',
    process: [
      { title: 'Conversación inicial', description: 'Se pregunta por la situación, los intereses de la persona, sus preferencias y las condiciones para trabajar en casa o por videollamada.' },
      { title: 'Acordar objetivos de actividad', description: 'Se concreta qué funciones o rutinas se quieren ejercitar y se adaptan las tareas. Si hace falta aclarar primero un cambio cognitivo, se valora una evaluación.' },
      { title: 'Sesiones y revisión', description: 'Las actividades se ajustan según la experiencia de la persona. El seguimiento permite revisar si el formato continúa siendo útil y adecuado.' }
    ],
    modality: 'Online o a domicilio en Córdoba, de acuerdo con la información actual del servicio. El desplazamiento y la disponibilidad del domicilio deben confirmarse al solicitar información.',
    duration: '45–60 minutos por sesión, según la información publicada actualmente.',
    price: 'La tarifa de estimulación cognitiva no aparece publicada; se consulta antes de reservar. Pregunta si existe coste de desplazamiento para la zona del domicilio.',
    limits: [
      'No es una prueba diagnóstica ni determina si una persona tiene deterioro cognitivo o demencia.',
      'No se debe anunciar como un método que previene el Alzheimer, revierte un deterioro o garantiza mejoras.',
      'Si los cambios de memoria son recientes, progresivos o interfieren con la vida diaria, consulta con un profesional sanitario para valorar su causa.'
    ],
    faqs: [
      { question: '¿En qué consiste la estimulación cognitiva a domicilio?', answer: 'En realizar en casa actividades adaptadas a la persona, sus preferencias y el objetivo acordado. El servicio publicado tiene una duración orientativa de 45–60 minutos por sesión.' },
      { question: '¿Para quién puede ser adecuada?', answer: 'La adecuación depende de las necesidades y del objetivo. Se conversa antes de comenzar; no todas las dificultades de memoria se abordan con estimulación cognitiva.' },
      { question: '¿La estimulación cognitiva previene la demencia?', answer: 'No se puede garantizar que una actividad individual prevenga una demencia. Este servicio se presenta como trabajo de actividad cognitiva, no como prevención ni tratamiento de una enfermedad.' },
      { question: '¿Cuánto cuesta y qué zonas cubre el domicilio?', answer: 'El precio no está publicado en la ficha actual y se confirma al consultar. El servicio indica domicilio en Córdoba; pregunta por disponibilidad y posible desplazamiento según la zona.' }
    ],
    relatedServices: [
      { title: 'Evaluación neuropsicológica', href: '/servicios/evaluacion-neuropsicologica/', description: 'Una valoración para explorar cambios en memoria, atención u otras funciones.' },
      { title: 'Psicología para personas mayores', href: '/servicios/psicologia-personas-mayores/', description: 'Consulta las opciones de atención para personas mayores y familias.' }
    ],
    relatedArticles: [
      { title: 'Estimulación cognitiva a domicilio: objetivos, proceso y para quién', href: '/blog/estimulacion-cognitiva-domicilio/' },
      { title: 'Olvidos normales con la edad y señales para consultar', href: '/blog/olvidos-normales-edad-senales/' },
      { title: 'Evaluación neuropsicológica: cuándo consultar y cómo funciona', href: '/blog/evaluacion-neuropsicologica-cuando-consultar/' }
    ]
  },
  {
    slug: 'evaluacion-neuropsicologica',
    serviceId: 'evaluacion',
    label: 'Memoria · evaluación neuropsicológica',
    title: 'Evaluación neuropsicológica en Córdoba',
    seoTitle: 'Evaluación neuropsicológica en Córdoba | María Ángeles Mata',
    description: 'Valoración neuropsicológica en Córdoba para explorar memoria, atención y otras funciones. Entrevista, pruebas seleccionadas e informe según el alcance acordado.',
    excerpt: 'Si notas cambios en memoria, atención u otras capacidades, una evaluación puede ayudar a describir el funcionamiento cognitivo y orientar los siguientes pasos.',
    image: evaluacionImage,
    imageAlt: 'Material de evaluación psicológica, imagen ilustrativa',
    intro: 'Un olvido aislado no permite concluir qué está ocurriendo. Cuando los cambios se repiten, preocupan o interfieren en las tareas de cada día, una evaluación neuropsicológica puede aportar información organizada sobre distintas funciones cognitivas y ayudar a decidir qué conviene hacer después.',
    situations: [
      'Cambios observables en memoria reciente, atención, lenguaje u organización.',
      'Dificultad nueva para realizar tareas que antes resultaban familiares.',
      'Preocupación de la propia persona o de su entorno sobre un cambio cognitivo.',
      'Necesidad de describir fortalezas y dificultades para orientar una consulta posterior.',
      'Derivación o recomendación de otro profesional sanitario para explorar el funcionamiento cognitivo.'
    ],
    serviceExplanation: 'La evaluación publicada por el centro contempla entrevista psicológica y pruebas estandarizadas seleccionadas según el objetivo, con informe incluido según la información actual del servicio. Una evaluación describe resultados en un contexto y momento determinados; no sustituye por sí sola una valoración médica, neurológica ni el diagnóstico diferencial de todas las posibles causas.',
    process: [
      { title: 'Entrevista inicial', description: 'Se concreta el motivo, la historia relevante, las dificultades observadas y cómo afectan a la vida cotidiana. La persona atendida participa en las decisiones.' },
      { title: 'Selección de pruebas', description: 'Las pruebas se eligen según la pregunta de evaluación y las características de la persona. No se aplica necesariamente la misma batería a todo el mundo.' },
      { title: 'Devolución e informe', description: 'Se explican los resultados y los límites de la valoración. El alcance del informe y las recomendaciones se acuerdan antes de iniciar el proceso.' }
    ],
    modality: 'La ficha actual del servicio indica modalidad presencial y online cuando procede. La adecuación de las pruebas a distancia depende del objetivo, las condiciones técnicas y las características de cada persona; se acuerda previamente.',
    duration: 'La ficha de Servicios publica una referencia de 90–120 minutos. El tiempo total puede variar según el número de encuentros y el alcance acordado.',
    price: 'Precio a consultar. La información actual del centro indica informe incluido; confirma antes de reservar qué incluye el presupuesto, cuántos encuentros contempla y el alcance del documento.',
    limits: [
      'Una evaluación neuropsicológica no identifica por sí sola todas las causas médicas de un cambio cognitivo.',
      'El resultado de una prueba aislada no equivale a un diagnóstico y debe interpretarse junto con la entrevista y el contexto.',
      'Si el cambio aparece de forma brusca o viene acompañado de confusión intensa, dificultad para hablar, debilidad o pérdida de equilibrio, busca atención sanitaria urgente.'
    ],
    faqs: [
      { question: '¿Necesito un diagnóstico médico para solicitar una evaluación?', answer: 'No necesariamente. Puedes preguntar por una valoración si hay cambios que te preocupan; en la primera conversación se aclara si la evaluación es el paso adecuado o si conviene consultar primero otro servicio sanitario.' },
      { question: '¿Qué funciones se pueden valorar?', answer: 'Según la pregunta de evaluación, pueden explorarse memoria, atención, lenguaje, orientación, planificación y otras funciones. La selección de pruebas se decide para cada caso.' },
      { question: '¿La evaluación confirma si existe Alzheimer?', answer: 'No por sí sola. El diagnóstico requiere una valoración clínica más amplia y, cuando procede, pruebas médicas y coordinación con los profesionales correspondientes.' },
      { question: '¿Cuánto dura y cuál es el precio?', answer: 'La ficha actual indica 90–120 minutos como referencia y precio a consultar. El tiempo total y el presupuesto dependen del alcance; pide que te lo aclaren antes de empezar.' }
    ],
    relatedServices: [
      { title: 'Estimulación cognitiva', href: '/servicios/estimulacion-cognitiva/', description: 'Conoce el servicio de actividades cognitivas online o a domicilio.' },
      { title: 'Psicología para personas mayores', href: '/servicios/psicologia-personas-mayores/', description: 'Opciones de atención para personas mayores y sus familias.' }
    ],
    relatedArticles: [
      { title: 'Evaluación neuropsicológica: cuándo consultar y cómo funciona', href: '/blog/evaluacion-neuropsicologica-cuando-consultar/' },
      { title: 'Mi madre o mi padre empieza a olvidar cosas: qué observar', href: '/blog/mi-madre-padre-olvida-cosas-que-hacer/' },
      { title: 'Olvidos normales con la edad y señales para consultar', href: '/blog/olvidos-normales-edad-senales/' }
    ]
  },
  {
    slug: 'terapia-individual',
    serviceId: 'individual',
    label: 'Bienestar emocional · terapia individual',
    title: 'Terapia individual en Córdoba y online',
    seoTitle: 'Terapia individual en Córdoba | María Ángeles Mata',
    description: 'Psicoterapia individual presencial en Córdoba y online. Sesiones de 50 minutos para valorar el motivo de consulta y acordar objetivos contigo.',
    excerpt: 'Un espacio confidencial para entender qué te ocurre, explorar opciones y trabajar objetivos que tengan sentido en tu vida cotidiana.',
    image: individualImage,
    imageAlt: 'Espacio de terapia individual, imagen ilustrativa',
    intro: 'Pedir una primera sesión no exige tener un diagnóstico ni saber exactamente qué quieres cambiar. Puede bastar con notar que el malestar dura, que algo importante se ha vuelto difícil o que necesitas ordenar una decisión con acompañamiento profesional.',
    situations: [
      'Ansiedad, estrés o preocupación que afectan al descanso o la concentración.',
      'Desánimo, autocrítica o pérdida de interés que te gustaría comprender.',
      'Dificultades en una relación, una etapa de cambio o un proceso de duelo.',
      'Sensación de estar repitiendo respuestas que ya no te ayudan.',
      'Deseo de contar con un espacio profesional para revisar objetivos personales.'
    ],
    serviceExplanation: 'La terapia individual es un proceso de colaboración: se escucha tu experiencia, se concreta qué te gustaría trabajar y se revisa periódicamente si el enfoque te resulta adecuado. La profesional trabaja desde la psicología general sanitaria, con procedimientos elegidos tras la valoración. No ofrece consejos automáticos ni promete un resultado igual para todas las personas.',
    process: [
      { title: 'Primera sesión', description: 'Puedes explicar con tus palabras qué te trae. También puedes preguntar por confidencialidad, duración, frecuencia y modalidad.' },
      { title: 'Comprender y acordar', description: 'Se exploran contexto, necesidades y objetivos posibles. No es necesario decidir al inicio cuánto durará el proceso.' },
      { title: 'Trabajo y seguimiento', description: 'Se revisa cómo te está resultando la terapia y se ajusta el trabajo a la evolución, los objetivos y tus preferencias.' }
    ],
    modality: 'Presencial en la consulta, online o a domicilio en Córdoba. La modalidad se acuerda en función de tus preferencias y de si es adecuada para tu situación; consulta disponibilidad y zona para las sesiones en casa.',
    duration: '50 minutos por sesión.',
    price: '60 € por sesión de 50 minutos, según la tarifa publicada actualmente. La web no indica una tarifa distinta para la primera sesión; confirma el importe antes de reservar.',
    limits: [
      'La terapia no reemplaza atención médica o psiquiátrica cuando esta sea necesaria.',
      'El psicólogo general sanitario no prescribe medicación.',
      'El ritmo y la duración dependen de los objetivos y la situación; no se puede garantizar un plazo concreto.'
    ],
    faqs: [
      { question: '¿Qué pasa en la primera sesión?', answer: 'Se conversa sobre lo que te trae, el contexto y tus expectativas. También puedes conocer la forma de trabajo y decidir con calma si quieres continuar.' },
      { question: '¿Cuánto cuesta la terapia individual?', answer: 'La tarifa publicada actualmente es de 60 € por sesión de 50 minutos. Confirma el importe al solicitar cita.' },
      { question: '¿La primera sesión es gratuita?', answer: 'La web no indica una tarifa distinta para la primera sesión. La tarifa individual publicada es de 60 € por 50 minutos; confirma el importe al contactar.' },
      { question: '¿Puedo elegir sesiones online o a domicilio?', answer: 'Sí. Se ofrece terapia online y terapia individual a domicilio en Córdoba. La conveniencia y disponibilidad de cada modalidad se hablan contigo antes de empezar.' }
    ],
    relatedServices: [
      { title: 'Terapia para la ansiedad', href: '/servicios/ansiedad-cordoba/', description: 'Información específica si el malestar principal es la ansiedad.' },
      { title: 'Terapia de pareja', href: '/servicios/terapia-pareja-cordoba/', description: 'Un espacio conjunto para trabajar dificultades relacionales.' }
    ],
    relatedArticles: [
      { title: 'Cuándo ir al psicólogo y qué esperar de la primera sesión', href: '/blog/cuando-ir-al-psicologo/' },
      { title: 'Beneficios de la terapia individual: qué esperar', href: '/blog/beneficios-terapia-individual/' },
      { title: 'Cuánto cuesta ir al psicólogo en Córdoba', href: '/blog/precio-psicologo-cordoba-cuanto-cuesta/' }
    ]
  }
];

export const PENDING_SERVICE_PATHS = serviceLandingPages.map((page) => `/servicios/${page.slug}/`);

export function getServiceLanding(slug: string): ServiceLandingPage | undefined {
  return serviceLandingPages.find((page) => page.slug === slug);
}

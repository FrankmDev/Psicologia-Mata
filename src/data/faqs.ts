export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "¿Cuánto cuesta una sesión de psicología en Córdoba?",
    answer: "El precio de una sesión individual es de 60€ (50 minutos). La terapia de pareja tiene un coste de 70€ (60 minutos) y la terapia familiar 80€ (75 minutos). La evaluación neuropsicológica tiene un coste diferente según su extensión. La primera consulta es sin compromiso para que puedas valorar si es el enfoque que necesitas."
  },
  {
    question: "¿Los seguros médicos o mutuas cubren la psicología?",
    answer: "La consulta privada de psicología no está cubierta por la Seguridad Social para adultos sin derivación dentro del sistema público. Algunas mutuas privadas, como Adeslas, Asisa o Sanitas, incluyen psicología según las condiciones de cada póliza. Si tienes dudas, consulta con tu aseguradora. La consulta privada puede ofrecer más opciones de horario y modalidad, según la disponibilidad."
  },
  {
    question: "¿Puedo hacer terapia psicológica online desde Córdoba?",
    answer: "Sí. Ofrezco terapia individual y de pareja online mediante videollamada. La evidencia disponible indica que puede ser útil y, en determinados casos, comparable a la modalidad presencial, siempre que el formato sea adecuado, haya privacidad y exista una conexión estable. Puede resultar cómoda si tienes horarios complicados, vives fuera de la ciudad o prefieres empezar desde tu propio espacio."
  },
  {
    question: "¿Necesito derivación médica para ir al psicólogo?",
    answer: "No. Puedes contactar directamente sin necesidad de derivación médica ni informe previo. Como psicóloga en consulta privada en Córdoba, cualquier persona puede solicitar cita directamente. Solo en el caso de la sanidad pública andaluza sería necesaria derivación desde el médico de cabecera."
  },
  {
    question: "¿Cuánto dura una sesión de terapia?",
    answer: "Las sesiones individuales duran 50 minutos, las de pareja 60 minutos y las familiares 75 minutos. La primera consulta suele ser algo más larga porque necesitamos conocernos, explorar lo que te trae y definir juntos los objetivos del proceso."
  },
  {
    question: "¿Con qué frecuencia debo acudir a terapia?",
    answer: "Al inicio del proceso recomiendo sesiones semanales para mantener el ritmo y la continuidad. A medida que avanzamos y según tu evolución, podemos espaciarlas a cada dos semanas o mensualmente. El ritmo siempre se adapta a tus necesidades y circunstancias."
  },
  {
    question: "¿Cuánto tiempo se tarda en ver resultados en terapia?",
    answer: "Depende de lo que quieras trabajar, de la situación de partida y de la evolución. Algunos objetivos concretos pueden abordarse en procesos breves, mientras que otros requieren más tiempo para consolidar cambios. En la primera consulta podemos concretar objetivos y revisar periódicamente si el ritmo y el enfoque siguen teniendo sentido."
  },
  {
    question: "¿Es confidencial todo lo que digo en consulta?",
    answer: "La consulta se rige por el deber de confidencialidad y el secreto profesional, dentro de los límites previstos por la normativa aplicable. En la primera sesión puedo explicarte cómo se protege la información y cuáles son esas excepciones legales, por ejemplo ante un riesgo grave para la vida o la integridad de alguien."
  },
  {
    question: "¿Qué diferencia hay entre psicólogo y psiquiatra en Córdoba?",
    answer: "El psiquiatra es un médico especialista y puede prescribir medicación; el psicólogo interviene mediante procedimientos psicológicos y no prescribe fármacos. En algunos casos ambos profesionales pueden coordinarse. La conveniencia de una intervención psicológica, médica o combinada depende de la valoración y de las necesidades de cada persona."
  },
  {
    question: "¿Qué técnicas utiliza la psicóloga?",
    answer: "Trabajo principalmente con Terapia Cognitivo-Conductual (TCC), un enfoque ampliamente estudiado para distintos problemas de ansiedad, estado de ánimo y fobias. También puedo integrar terapias de tercera generación, como ACT (Terapia de Aceptación y Compromiso), y técnicas de mindfulness cuando encajan con la valoración. Para la evaluación neuropsicológica utilizo pruebas estandarizadas seleccionadas según el objetivo. El enfoque se adapta a la persona y al motivo de consulta."
  },
  {
    question: "¿Dónde está la consulta de psicología en Córdoba?",
    answer: "La consulta presencial está en C/ Rodríguez Sánchez, 9, (CP 14003), con acceso en transporte público. También ofrezco sesiones online cuando el formato es adecuado. El horario de atención es de lunes a viernes de 9:00 a 20:00, sujeto a disponibilidad."
  },
  {
    question: "¿Cómo puedo pedir cita con la psicóloga en Córdoba?",
    answer: "Puedes contactarme por teléfono (697 733 060), por email (mangelesmatacala@hotmail.com) o mediante el formulario de esta web. Habitualmente respondo en menos de 24 horas. La primera consulta permite hablar de lo que te trae, conocer cómo trabajo y valorar conjuntamente si tiene sentido comenzar."
  }
];

export function getAllFAQs(): FAQ[] {
  return faqs;
}

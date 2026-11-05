export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "¿Cuánto cuesta una sesión de psicología en Córdoba?",
    answer: "La sesión individual cuesta 60 € (50 minutos); la de pareja, 70 € (60 minutos); y la familiar, 80 € (75 minutos). La evaluación neuropsicológica se presupuesta según su alcance. Consulta el coste de la primera sesión y las condiciones antes de reservar."
  },
  {
    question: "¿Los seguros médicos o mutuas cubren la psicología?",
    answer: "Esta consulta es privada y no tiene convenio con la Seguridad Social. Si tienes un seguro o una mutua privada, consulta con la compañía si tu póliza cubre o reembolsa sesiones de psicología y qué documentación requiere."
  },
  {
    question: "¿Puedo hacer terapia psicológica online desde Córdoba?",
    answer: "Sí. Ofrezco terapia individual, de pareja y familiar online mediante videollamada cuando el formato es adecuado. La evidencia disponible indica que puede ser útil y, en determinados casos, comparable a la modalidad presencial, siempre que haya privacidad y una conexión estable. Puede resultar cómoda si tienes horarios complicados, vives fuera de la ciudad o prefieres empezar desde tu propio espacio."
  },
  {
    question: "¿Necesito derivación médica para ir al psicólogo?",
    answer: "No. Puedes contactar directamente sin necesidad de derivación médica ni informe previo. En la consulta privada cualquier persona puede solicitar cita. En la sanidad pública, el acceso suele requerir derivación desde atención primaria según el circuito asistencial."
  },
  {
    question: "¿Cuánto dura una sesión de terapia?",
    answer: "Las sesiones individuales duran 50 minutos, las de pareja 60 minutos y las familiares 75 minutos. En la primera sesión definimos el motivo de consulta, los objetivos y la frecuencia; no necesitas llevar un discurso preparado."
  },
  {
    question: "¿Con qué frecuencia debo acudir a terapia?",
    answer: "Al inicio suele ayudar una frecuencia semanal para mantener el ritmo y la continuidad. A medida que avanzamos y según tu evolución, podemos espaciarlas a cada dos semanas o mensualmente. El ritmo se adapta a tus necesidades y circunstancias."
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
    question: "¿Qué diferencia hay entre psicólogo y psiquiatra?",
    answer: "El psiquiatra es un médico especialista y puede prescribir medicación; el psicólogo interviene mediante procedimientos psicológicos y no prescribe fármacos. En algunos casos ambos profesionales pueden coordinarse. La conveniencia de una intervención psicológica, médica o combinada depende de la valoración y de las necesidades de cada persona."
  },
  {
    question: "¿Qué técnicas utiliza la psicóloga?",
    answer: "Trabajo principalmente con Terapia Cognitivo-Conductual (TCC), un enfoque ampliamente estudiado para distintos problemas de ansiedad, estado de ánimo y fobias. También puedo integrar terapias de tercera generación, como ACT (Terapia de Aceptación y Compromiso), y técnicas de mindfulness cuando encajan con la valoración. Para la evaluación neuropsicológica utilizo pruebas estandarizadas seleccionadas según el objetivo. El enfoque se adapta a la persona y al motivo de consulta."
  },
  {
    question: "¿Dónde está la consulta de psicología en Córdoba?",
    answer: "La consulta está en C/ Rodríguez Sánchez, 9 (14003 Córdoba), en el centro de la ciudad. También ofrezco sesiones online cuando el formato es adecuado. Contacta para consultar disponibilidad."
  },
  {
    question: "¿Qué servicios se realizan a domicilio en Córdoba?",
    answer: "La terapia individual y la estimulación cognitiva pueden realizarse a domicilio en Córdoba. La zona, la disponibilidad y cualquier posible coste de desplazamiento se confirman al contactar."
  },
  {
    question: "¿Ofreces apoyo psicológico a quienes cuidan de una persona mayor?",
    answer: "Sí. También puedes consultar por orientación y apoyo psicológico ante las dificultades asociadas al cuidado. El formato se valora según cada situación y, si participa la persona mayor, se respetan su privacidad y sus preferencias."
  },
  {
    question: "¿Cómo puedo pedir cita con la psicóloga en Córdoba?",
    answer: "Puedes contactarme por teléfono (697 733 060) o por email (mangelesmatacala@hotmail.com). Te indicaré disponibilidad y los pasos para una primera sesión, donde valoramos juntos si la terapia puede ayudarte."
  }
];

export function getAllFAQs(): FAQ[] {
  return faqs;
}

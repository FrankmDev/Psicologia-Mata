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
    answer: "La consulta privada de psicología no está cubierta por la Seguridad Social en Córdoba para adultos sin derivación psiquiátrica. Algunas mutuas privadas como Adeslas, Asisa o Sanitas incluyen psicología en su cobertura, pero depende de cada póliza. Si tienes dudas, puedes consultar con tu aseguradora. Si no tienes seguro privado, la consulta privada ofrece mayor disponibilidad, flexibilidad de horarios y continuidad garantizada."
  },
  {
    question: "¿Puedo hacer terapia psicológica online desde Córdoba?",
    answer: "Sí. Ofrezco terapia individual y de pareja completamente online mediante videollamada, con la misma eficacia que la modalidad presencial según la evidencia científica. Es especialmente cómoda si tienes horarios complicados, vives fuera de Córdoba capital o prefieres la privacidad de tu propio espacio. La primera consulta también puede realizarse online."
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
    answer: "Depende de lo que quieras trabajar. Para objetivos concretos como manejo de la ansiedad o preparación ante un cambio vital, pueden verse mejoras en pocas sesiones (6-10). Los procesos más profundos de autoconocimiento o trabajo con patrones de largo recorrido requieren más tiempo. En la primera consulta te daré una estimación realista según tu situación concreta."
  },
  {
    question: "¿Es confidencial todo lo que digo en consulta?",
    answer: "Absolutamente. La confidencialidad es un principio ético y legal de la profesión. Todo lo que compartes está protegido por el secreto profesional. Las únicas excepciones legales, que debo informarte, son situaciones de riesgo grave e inminente para tu vida o la de terceros, y siempre te lo comunicaría antes de actuar."
  },
  {
    question: "¿Qué diferencia hay entre psicólogo y psiquiatra en Córdoba?",
    answer: "La principal diferencia es que el psiquiatra es médico especialista y puede recetar medicación. El psicólogo trabaja exclusivamente mediante la terapia psicológica, sin medicación. En muchos casos ambos roles son complementarios: el psiquiatra gestiona el tratamiento farmacológico y el psicólogo trabaja los patrones de pensamiento y conducta. Para la mayoría de problemas cotidianos (ansiedad, estrés, problemas de pareja, autoestima), la psicoterapia sin medicación es el abordaje indicado."
  },
  {
    question: "¿Qué técnicas utiliza la psicóloga?",
    answer: "Trabajo principalmente con Terapia Cognitivo-Conductual (TCC), que es el enfoque con mayor respaldo científico para ansiedad, depresión y fobias. También utilizo terapias de tercera generación como ACT (Terapia de Aceptación y Compromiso) y técnicas de mindfulness. Para la evaluación neuropsicológica uso pruebas estandarizadas reconocidas internacionalmente. El enfoque siempre se adapta a la persona y al motivo de consulta."
  },
  {
    question: "¿Dónde está la consulta de psicología en Córdoba?",
    answer: "La consulta presencial está en C/ Rodríguez Sánchez, 9, en el centro de Córdoba (CP 14003), con fácil acceso en transporte público. También ofrezco sesiones online para quienes prefieran la comodidad del hogar o vivan fuera de Córdoba capital. El horario de atención es de lunes a viernes de 9:00 a 20:00."
  },
  {
    question: "¿Cómo puedo pedir cita con la psicóloga en Córdoba?",
    answer: "Puedes contactarme por teléfono (697 733 060), por email (mangelesmatacala@hotmail.com) o a través del formulario de contacto de esta web. Respondo en menos de 24 horas. La primera consulta es sin compromiso: hablamos de lo que te trae, te explico cómo trabajo y decidimos juntos si tiene sentido comenzar."
  }
];

export function getAllFAQs(): FAQ[] {
  return faqs;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  approaches: string[];
  duration: string;
  iconName: 'user' | 'users' | 'brain' | 'sparkles' | 'home';
  shortDescription?: string;
}

export const services: Service[] = [
  {
    id: "individual",
    number: "01",
    title: "Terapia Individual",
    shortDescription: "¿Te despiertas con ansiedad? ¿Sientes que no eres suficiente? Aquí no juzgamos lo que sientes — lo entendemos y trabajamos juntos para que deje de pesar.",
    description: "Espacio confidencial para trabajar dificultades emocionales como ansiedad, estrés, problemas de autoestima y procesos de cambio personal. Un lugar donde puedes ser completamente tú sin miedo al juicio.",
    approaches: ["Cognitivo-Conductual", "Tercera Generación", "Mindfulness"],
    duration: "50 minutos",
    iconName: "user"
  },
  {
    id: "pareja",
    number: "02",
    title: "Terapia de Pareja",
    shortDescription: "¿Hablan pero no se entienden? La terapia de pareja no es señalar culpables: es aprender a estar del mismo lado otra vez.",
    description: "Cuando la comunicación se rompe, la distancia crece. Trabajamos juntos para reconstruir el vínculo, aprender a escucharse de verdad y recuperar la conexión que os unió.",
    approaches: ["Comunicación efectiva", "Resolución de conflictos", "Reconstrucción"],
    duration: "60 minutos",
    iconName: "users"
  },
  {
    id: "familiar",
    number: "03",
    title: "Terapia Familiar",
    shortDescription: "Cuando un miembro de la familia sufre, todos sufren. Y cuando uno mejora, todos respiran mejor. Trabajamos juntos para encontrar ese equilibrio.",
    description: "La familia es un sistema donde todo está conectado. Abordamos las dinámicas familiares desde una perspectiva sistémica, ayudando a cada miembro a comprender su rol y contribuir a un ambiente más saludable.",
    approaches: ["Sistémica", "Comunicación", "Límites"],
    duration: "75 minutos",
    iconName: "home"
  },
  {
    id: "evaluacion",
    number: "04",
    title: "Evaluación Neuropsicológica",
    shortDescription: "¿Notas que algo no funciona como antes? Una evaluación exhaustiva nos ayuda a entender qué pasa y qué podemos hacer al respecto.",
    description: "Diagnóstico completo mediante entrevistas y pruebas psicométricas estandarizadas. Fundamental para entender dificultades cognitivas, atencionales o de memoria, y diseñar un plan de intervención adecuado.",
    approaches: ["Entrevista clínica", "Pruebas estandarizadas", "Informe completo"],
    duration: "90-120 minutos",
    iconName: "brain"
  },
  {
    id: "cognitiva",
    number: "05",
    title: "Estimulación Cognitiva",
    shortDescription: "Para personas mayores que quieren mantener su mente activa. Programas personalizados que se adaptan a tus necesidades y ritmo.",
    description: "Intervención personalizada a domicilio para personas mayores. Programas diseñados para mantener y mejorar funciones cognitivas como memoria, atención y orientación, adaptados a cada persona y sus intereses.",
    approaches: ["A domicilio", "Materiales personalizados", "Seguimiento"],
    duration: "45-60 minutos",
    iconName: "sparkles"
  }
];

export const mainServices = services.slice(0, 3);
export const allServices = services;

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}

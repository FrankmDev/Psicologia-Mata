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
    shortDescription: "Ansiedad, estrés, autoestima o cambios vitales. Terapia presencial, online o a domicilio en Córdoba, con objetivos ajustados a tu situación.",
    description: "Espacio confidencial para trabajar ansiedad, estrés, estado de ánimo, autoestima y procesos de cambio. Definimos objetivos, usamos técnicas basadas en la evidencia y revisamos avances. En consulta, online o a domicilio en Córdoba.",
    approaches: ["TCC", "ACT y mindfulness", "Consulta, online o a domicilio"],
    duration: "50 minutos",
    iconName: "user"
  },
  {
    id: "pareja",
    number: "02",
    title: "Terapia de Pareja",
    shortDescription: "¿Habláis pero no os entendéis? Trabajamos la comunicación, los conflictos repetidos y la distancia emocional sin buscar culpables.",
    description: "Cuando la comunicación se rompe, la distancia crece. Trabajamos el patrón que os atrapa, la escucha y los acuerdos posibles, sin decidir por vosotros si la relación debe continuar. Sesiones presenciales en Córdoba u online.",
    approaches: ["Pautas de comunicación", "Gestión de conflictos", "Acuerdos concretos"],
    duration: "60 minutos",
    iconName: "users"
  },
  {
    id: "familiar",
    number: "03",
    title: "Terapia Familiar",
    shortDescription: "Cuando el conflicto familiar se repite, todos lo notan. Trabajamos roles, límites y comunicación para recuperar un funcionamiento más sano.",
    description: "La familia es un sistema donde todo está conectado. Abordamos las dinámicas familiares desde una perspectiva sistémica, ayudando a cada miembro a comprender su papel y a construir un ambiente más saludable. Presencial y online.",
    approaches: ["Perspectiva sistémica", "Límites y acuerdos", "Pautas para casa"],
    duration: "75 minutos",
    iconName: "home"
  },
  {
    id: "evaluacion",
    number: "04",
    title: "Evaluación Neuropsicológica",
    shortDescription: "¿Notas cambios en memoria, atención o concentración? Valoramos qué ocurre y qué pasos pueden ayudar, con informe cuando se acuerda.",
    description: "Valoración con entrevista y pruebas seleccionadas según el motivo: memoria, atención, concentración u otras funciones cognitivas. Permite orientar los siguientes pasos e incluye informe según el alcance acordado. Presencial y, cuando procede, online.",
    approaches: ["Entrevista y pruebas", "Informe acordado", "Orientación"],
    duration: "90-120 minutos",
    iconName: "brain"
  },
  {
    id: "cognitiva",
    number: "05",
    title: "Estimulación Cognitiva",
    shortDescription: "Actividades cognitivas para personas mayores, online o a domicilio en Córdoba, adaptadas a sus intereses y ritmo.",
    description: "Actividades cognitivas adaptadas a cada persona, online o a domicilio en Córdoba. Se trabajan memoria, atención y orientación con materiales ajustados a sus intereses y un seguimiento acordado.",
    approaches: ["Online o domicilio", "Materiales adaptados", "Seguimiento"],
    duration: "45-60 minutos",
    iconName: "sparkles"
  }
];

export const mainServices = services.slice(0, 3);
export const allServices = services;

/** Tarifas publicadas: fuente única para /servicios/ y datos estructurados. */
export interface ServicePrice {
  id: string;
  number: string;
  title: string;
  description: string;
  price?: number;
  priceLabel: string;
  duration: string;
  billingDuration: string;
  tags: string[];
  url: string;
}

export const servicePricing: ServicePrice[] = [
  {
    id: 'individual',
    number: '01',
    title: 'Terapia Individual',
    description: 'Ansiedad, autoestima y cambios personales. En consulta, online o a domicilio en Córdoba.',
    price: 60,
    priceLabel: '60',
    duration: '50 minutos',
    billingDuration: '50 min',
    tags: ['Presencial', 'Online', 'A domicilio'],
    url: '/servicios/#individual',
  },
  {
    id: 'pareja',
    number: '02',
    title: 'Terapia de Pareja',
    description: 'Comunicación, conflictos repetidos y distancia emocional.',
    price: 70,
    priceLabel: '70',
    duration: '60 minutos',
    billingDuration: '60 min',
    tags: ['Presencial', 'Online'],
    url: '/servicios/#pareja',
  },
  {
    id: 'familiar',
    number: '03',
    title: 'Terapia Familiar',
    description: 'Roles, límites y convivencia cuando el conflicto se repite.',
    price: 80,
    priceLabel: '80',
    duration: '75 minutos',
    billingDuration: '75 min',
    tags: ['Presencial', 'Online'],
    url: '/servicios/#familiar',
  },
  {
    id: 'evaluacion',
    number: '04',
    title: 'Evaluación Neuropsicológica',
    description: 'Entrevista y pruebas; informe según el alcance acordado.',
    priceLabel: '—',
    duration: '90–120 minutos',
    billingDuration: '90–120 min',
    tags: ['Consultar precio', 'Informe según alcance'],
    url: '/servicios/#evaluacion',
  },
  {
    id: 'cognitiva',
    number: '05',
    title: 'Estimulación Cognitiva',
    description: 'Estimulación cognitiva para personas mayores, online o a domicilio en Córdoba. Orientación también para cuidadores.',
    priceLabel: '—',
    duration: '45–60 minutos',
    billingDuration: '45–60 min',
    tags: ['A domicilio', 'Online'],
    url: '/servicios/#cognitiva',
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}

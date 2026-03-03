/**
 * Datos del proceso terapéutico compartidos
 */

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ProcessHighlight {
  value: string;
  label: string;
}

export const therapyProcessSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Primera Sesión',
    subtitle: 'Conocernos',
    description: 'Cuéntame qué te trae aquí. No necesitas tener las palabras perfectas — solo la honestidad de empezar.'
  },
  {
    number: '02',
    title: 'Evaluación',
    subtitle: 'Entender',
    description: 'Juntos entendemos de dónde viene lo que sientes. No para señalar el pasado, sino para dibujar un camino diferente.'
  },
  {
    number: '03',
    title: 'Intervención',
    subtitle: 'Acompañar',
    description: 'Te doy herramientas que funcionan, para que puedas manejar lo que antes te desbordaba. Y practicamos hasta que te sientas seguro.'
  },
  {
    number: '04',
    title: 'Seguimiento',
    subtitle: 'Consolidar',
    description: 'Cuando estés listo, espaciamos las sesiones. Mi objetivo es que un día no me necesites — y que sepas que aquí estaré si me necesitas de nuevo.'
  }
];

export const therapyHighlights: ProcessHighlight[] = [
  { value: '50 min', label: 'Duración por sesión' },
  { value: 'Presencial', label: 'Consulta en Córdoba' },
  { value: 'Personalizado', label: 'Adaptado a ti' }
];

/**
 * Información de contacto compartida
 */
export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
  subvalue?: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: "phone",
    label: "Teléfono",
    value: "661 471 971",
    href: "tel:+34661471971"
  },
  {
    icon: "mail",
    label: "Email",
    value: "mangelesmatacala@hotmail.com",
    href: "mailto:mangelesmatacala@hotmail.com"
  },
  {
    icon: "location",
    label: "Consulta",
    value: "C/ Rodríguez Sánchez, 22",
    subvalue: "14003 Córdoba"
  }
];

export const availabilityInfo = [
  { label: "Respuesta", value: "24 horas" },
  { label: "Confidencialidad", value: "Total" },
  { label: "Modalidad", value: "Presencial" }
];

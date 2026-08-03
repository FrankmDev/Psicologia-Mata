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
  { value: 'Presencial y Online', label: 'Modalidad' },
  { value: 'Personalizado', label: 'Adaptado a ti' }
];

/**
 * Información de contacto compartida
 */
import { CONTACT_EMAIL, CONTACT_PHONE_E164, CONTACT_PHONE_DISPLAY, CONTACT_ADDRESS } from '../config/site';

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
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE_E164}`
  },
  {
    icon: "mail",
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`
  },
  {
    icon: "location",
    label: "Consulta",
    value: CONTACT_ADDRESS.streetAddress,
    subvalue: `${CONTACT_ADDRESS.postalCode} ${CONTACT_ADDRESS.addressLocality}`
  }
];

export const availabilityInfo = [
  { label: "Respuesta", value: "24 horas" },
  { label: "Confidencialidad", value: "Total" },
  { label: "Modalidad", value: "Presencial y Online" }
];

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
    description: 'Cuéntame qué te trae y qué esperas de la terapia. Te explico cómo trabajo, la confidencialidad y el coste para que conozcas el encuadre desde el inicio.'
  },
  {
    number: '02',
    title: 'Evaluación',
    subtitle: 'Entender',
    description: 'Revisamos tu situación, los factores que la mantienen y tus objetivos. Si necesitas otra valoración, te lo diré con claridad.'
  },
  {
    number: '03',
    title: 'Intervención',
    subtitle: 'Trabajar',
   description: 'Acordamos un plan con herramientas concretas para ansiedad, estado de ánimo, autoestima o relaciones, y revisamos su efecto.'
  },
  {
    number: '04',
    title: 'Seguimiento',
    subtitle: 'Consolidar',
   description: 'Según tu evolución, espaciamos las sesiones y revisamos lo aprendido para que mantengas los cambios con autonomía.'
  }
];

export const therapyHighlights: ProcessHighlight[] = [
  { value: '45–120 min', label: 'Duración según servicio' },
  { value: 'Presencial y online', label: 'Modalidad' },
  { value: 'AN 12177', label: 'Colegiada en Andalucía' }
];

/**
 * Información de contacto compartida
 */
import { CONTACT_EMAIL, CONTACT_PHONE_E164, CONTACT_PHONE_DISPLAY, CONTACT_ADDRESS, WHATSAPP_URL } from '../config/site';

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
  subvalue?: string;
  external?: boolean;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: "phone",
    label: "Teléfono",
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE_E164}`
  },
  {
    icon: "chatBubble",
    label: "WhatsApp",
    value: "Escribir un mensaje",
    href: WHATSAPP_URL,
    external: true
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
  { label: "Contacto", value: "Personal" },
  { label: "Confidencialidad", value: "Profesional" },
  { label: "Modalidad", value: "Consulta, online y domicilio según servicio" }
];

import {
  SITE_URL,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_SCHEMA,
  SOCIAL_PROFILES,
} from '../config/site';

const SITE = SITE_URL;

export const localBusinessData = {
  name: 'María Ángeles Mata - Psicóloga',
  legalName: 'María Ángeles Mata Cala',
  description:
    'Consulta de María Ángeles Mata Cala, psicóloga en Córdoba. Ofrece terapia individual, de pareja y familiar, con atención presencial y online.',
  url: SITE,
  telephone: CONTACT_PHONE_SCHEMA,
  email: CONTACT_EMAIL,
  address: {
    streetAddress: CONTACT_ADDRESS.streetAddress,
    addressLocality: CONTACT_ADDRESS.addressLocality,
    postalCode: CONTACT_ADDRESS.postalCode,
    addressCountry: CONTACT_ADDRESS.addressCountry,
  },
  image: `${SITE}/profile.jpg`,
  openingHours: ['Mo-Fr 09:00-20:00'],
  serviceArea: 'Córdoba, España',
  founderName: 'María Ángeles Mata Cala',
  services: [
    'Terapia Individual (Presencial y Online)',
    'Terapia de Pareja (Presencial y Online)',
    'Terapia Familiar',
    'Evaluación Neuropsicológica',
    'Estimulación Cognitiva (Online y Domicilio)',
  ],
  socialProfiles: [...SOCIAL_PROFILES],
};

export const personData = {
  name: 'María Ángeles Mata Cala',
  url: `${SITE}/sobre-mi/`,
  jobTitle: 'Psicóloga General Sanitaria',
  description:
    'Psicóloga colegiada (AN 12177) en Córdoba. Trabaja en terapia individual, terapia de pareja, terapia familiar y evaluación neuropsicológica.',
  telephone: CONTACT_PHONE_SCHEMA,
  email: CONTACT_EMAIL,
  image: `${SITE}/profile.jpg`,
  sameAs: [...SOCIAL_PROFILES],
  address: {
    streetAddress: CONTACT_ADDRESS.streetAddress,
    addressLocality: CONTACT_ADDRESS.addressLocality,
    postalCode: CONTACT_ADDRESS.postalCode,
    addressCountry: CONTACT_ADDRESS.addressCountry,
  },
  knowsAbout: [
    'Terapia Cognitivo-Conductual',
    'Terapia de Aceptación y Compromiso (ACT)',
    'Mindfulness',
    'Ansiedad y trastornos de ansiedad',
    'Depresión',
    'Terapia de pareja',
    'Terapia familiar sistémica',
    'Evaluación neuropsicológica',
    'Estimulación cognitiva en personas mayores',
    'Autoestima y desarrollo personal',
    'Gestión del estrés',
    'Habilidades sociales',
  ],
  credentials: [
    {
      name: 'Máster en Psicología General Sanitaria',
      year: '2025',
      institution: 'Universidad Católica de Ávila',
      type: 'Master',
    },
    {
      name: 'Grado en Psicología — Mención en Psicología de la Salud',
      year: '2023',
      institution: 'Universidad Católica de Ávila',
      type: 'Degree',
    },
    {
      name: 'Máster en Neuropsicología',
      year: '2021',
      institution: 'Escuela de Postgrado de Psicología y Psiquiatría',
      type: 'Master',
    },
    {
      name: 'Máster en Deterioros Cognitivos',
      year: '2021',
      institution: 'Escuela de Postgrado de Psicología y Psiquiatría',
      type: 'Master',
    },
    {
      name: 'Máster en Gerontología: Intervención Psicológica y Pedagógica',
      year: '2020',
      institution: 'Universidad San Jorge',
      type: 'Master',
    },
  ],
  licenseNumber: 'AN 12177',
  licenseOrganization: 'Colegio Oficial de Psicólogos de Andalucía',
};

export interface ServiceOffer {
  name: string;
  description: string;
  price?: string;
  priceCurrency?: string;
  duration: string;
  url: string;
}

export const serviceOffers: ServiceOffer[] = [
  {
    name: 'Terapia Individual',
    description: 'Un espacio solo para ti, presencial en Córdoba o en línea.',
    price: '60',
    priceCurrency: 'EUR',
    duration: '50 min',
    url: `${SITE}/servicios/#individual`,
  },
  {
    name: 'Terapia de Pareja',
    description: 'Para volver a entenderos, sin señalar culpables.',
    price: '70',
    priceCurrency: 'EUR',
    duration: '60 min',
    url: `${SITE}/servicios/#pareja`,
  },
  {
    name: 'Terapia Familiar',
    description: 'Cuando la familia necesita encontrar su equilibrio.',
    price: '80',
    priceCurrency: 'EUR',
    duration: '75 min',
    url: `${SITE}/servicios/#familiar`,
  },
  {
    name: 'Evaluación Neuropsicológica',
    description: 'Valoración neuropsicológica mediante entrevistas y pruebas seleccionadas según el objetivo, con informe según el alcance acordado.',
    duration: '90–120 min',
    url: `${SITE}/servicios/#evaluacion`,
  },
  {
    name: 'Estimulación Cognitiva',
    description: 'Para personas mayores. Online o a domicilio en Córdoba.',
    duration: '45–60 min',
    url: `${SITE}/servicios/#cognitiva`,
  },
];

export const aboutCredentials = [
  {
    year: '2025',
    title: 'Máster en Psicología General Sanitaria',
    institution: 'Univ. Católica de Ávila',
  },
  {
    year: '2023',
    title: 'Grado en Psicología – Mención en Psicología de la Salud',
    institution: 'Univ. Católica de Ávila',
  },
  {
    year: '2021',
    title: 'Máster en Neuropsicología',
    institution:
      'Escuela de Postgrado de Psicología y Psiquiatría. Reconocido por Univ. Católica de Cuyo (Argentina) y Univ. CLEA (México)',
  },
  {
    year: '2021',
    title: 'Máster en Deterioros Cognitivos',
    institution: 'Escuela De Postgrado de Psicología y Psiquiatría',
  },
  {
    year: '2020',
    title: 'Máster en Gerontología: Intervención Psicológica y Pedagógica en la Tercera Edad',
    institution: 'Universidad San Jorge',
  },
];

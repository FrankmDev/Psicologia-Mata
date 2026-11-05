import {
  SITE_URL,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_HOURS,
  CONTACT_PHONE_SCHEMA,
  SOCIAL_PROFILES,
} from '../config/site';
import { servicePricing } from './services';

const SITE = SITE_URL;

export const localBusinessData = {
  name: 'María Ángeles Mata - Psicóloga',
  legalName: 'María Ángeles Mata Cala',
  description:
    'Consulta de María Ángeles Mata Cala, psicóloga general sanitaria en Córdoba. Terapia individual, de pareja y familiar; terapia individual y estimulación cognitiva también a domicilio. Atención a personas mayores y cuidadores.',
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
  openingHours: [CONTACT_HOURS.schema],
  priceRange: '60–80 €',
  currenciesAccepted: 'EUR',
  serviceArea: 'Córdoba, España',
  founderName: 'María Ángeles Mata Cala',
  services: [
    'Terapia Individual (Presencial, Online y a Domicilio en Córdoba)',
    'Terapia de Pareja (Presencial y Online)',
    'Terapia Familiar',
    'Evaluación Neuropsicológica',
    'Estimulación Cognitiva (Online y a Domicilio en Córdoba)',
  ],
  socialProfiles: [...SOCIAL_PROFILES],
};

export const personData = {
  name: 'María Ángeles Mata Cala',
  url: `${SITE}/sobre-mi/`,
  jobTitle: 'Psicóloga General Sanitaria',
  description:
    'Psicóloga general sanitaria colegiada (AN 12177) en Córdoba. Atención a personas mayores y apoyo psicológico a cuidadores; terapia individual y estimulación cognitiva también a domicilio.',
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

export const serviceOffers: ServiceOffer[] = servicePricing.map((service) => ({
  name: service.title,
  description: service.description,
  ...(service.price !== undefined
    ? { price: String(service.price), priceCurrency: 'EUR' }
    : {}),
  duration: service.billingDuration,
  url: `${SITE}${service.url}`,
}));

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
    institution: 'Escuela de Postgrado de Psicología y Psiquiatría',
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

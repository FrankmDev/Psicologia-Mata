/**
 * Componentes compartidos del proyecto Psicología Mata
 * 
 * Uso recomendado:
 * import { Button, Icon, PageHeader } from '../components';
 */

// UI Components
export { default as Button } from './Button.astro';
export { default as Icon } from './Icon.astro';
export { default as OptimizedImage } from './OptimizedImage.astro';
export { default as Schema } from './Schema.astro';

// Layout Components
export { default as Header } from './Header.astro';
export { default as Footer } from './Footer.astro';

// Section Components
export { default as PageHeader } from './PageHeader.astro';
export { default as CTASection } from './CTASection.astro';
export { default as TherapyProcess } from './TherapyProcess.astro';
export { default as ContactInfoCard } from './ContactInfoCard.astro';

// Interactive Components
export { default as FAQItem } from './FAQItem.astro';
export { default as RevealAnimation } from './RevealAnimation.astro';

// Feature Components
export { default as ServiceCard } from './ServiceCard.astro';
export { default as SectionContainer } from './SectionContainer.astro';

// Deprecated: ContactCard y PageHeader antiguo fueron consolidados
// Usar ContactInfoCard y el nuevo PageHeader en su lugar

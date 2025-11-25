/**
 * Constants and Configuration for Brilance Landing Page
 */

import type {
  NavItem,
  Testimonial,
  ProcessStep,
  TargetAudience,
  Differential,
  ContactInfo,
  SocialLink,
} from './types';

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  { label: 'Nossa Missão', href: '#mission' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Nossos Alunos', href: '#students' },
  { label: 'Diferenciais', href: '#differentials' },
];

// Hero Section Content
export const HERO_CONTENT = {
  title: 'Sua Força. Sua Essência. Sua Liberdade.',
  subtitle:
    'Uma escola criada para despertar sua força interior e transformar bloqueios em confiança, liberdade e autenticidade',
  ctaText: 'Comece a sua Jornada',
};

// Mission Section Content
export const MISSION_CONTENT = {
  badge: 'NOSSA MISSÃO',
  title: 'Descubra Sua Força Interior',
  description:
    'Na Brilance, acreditamos que cada pessoa carrega uma força única. Nosso propósito é ajudá-lo a despertar essa luz, superar bloqueios e viver com confiança e autenticidade. Criamos um espaço seguro e inspirador onde sua essência pode florescer, e sua liberdade de ser quem é se torna celebração.',
  ctaText: 'Saiba mais',
};

// Process Steps
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Reconheça e compreenda seus bloqueios.',
    description: 'Identifique os padrões que te limitam',
  },
  {
    number: '02',
    title: 'Transforme vulnerabilidades em força.',
    description: 'Converta fraquezas em pontos de poder',
  },
  {
    number: '03',
    title: 'Acesse sua inteligência superior.',
    description: 'Conecte-se com seu verdadeiro potencial',
  },
  {
    number: '04',
    title: 'Viva com confiança e liberdade.',
    description: 'Manifeste sua autenticidade no mundo',
  },
];

// How It Works Content
export const HOW_IT_WORKS_CONTENT = {
  badge: 'COMO FUNCIONA',
  title: 'Liberte-se das Amarras do Medo e dos Traumas',
  description:
    'Nossa metodologia combina práticas introspectivas, técnicas de desenvolvimento pessoal e ferramentas inovadoras para transformar vulnerabilidades em força.',
};

// Target Audiences
export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    icon: 'compass',
    description: 'Pessoas que sentem que a vida perdeu direção.',
  },
  {
    icon: 'lightbulb',
    description: 'Profissionais em busca de propósito.',
  },
  {
    icon: 'account-plus',
    description: 'Jovens e adultos querem superar medo e traumas.',
  },
  {
    icon: 'code-block',
    description: 'Quem deseja unir desenvolvimento humano e inovação tecnológica',
  },
];

// Target Audience Content
export const TARGET_AUDIENCE_CONTENT = {
  badge: 'PARA QUEM É',
  title: 'Escola Brilance: Unidos para Elevar o Mundo',
  subtitle: 'Transforme sua jornada pessoal em uma experiência única',
};

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ana Silva',
    role: 'Empreendedora Digital',
    description:
      'A Escola Brilance me ajudou a superar bloqueios que me impediam de crescer. Hoje, me sinto confiante e livre para ser quem realmente sou. A metodologia é transformadora!',
  },
  {
    name: 'Pedro Santos',
    role: 'Coach de Carreira',
    description:
      'Descobri minha força interior através dos ensinamentos da Brilance. O programa me deu ferramentas práticas para transformar minhas vulnerabilidades em poder. Recomendo a todos!',
  },
  {
    name: 'Maria Costa',
    role: 'Psicóloga Clínica',
    description:
      'Como profissional da área, fiquei impressionada com a abordagem científica e humanizada da Escola Brilance. É uma experiência que todos deveriam ter para desenvolver seu potencial máximo.',
  },
  {
    name: 'João Oliveira',
    role: 'Desenvolvedor de Software',
    description:
      'Consegui unir desenvolvimento pessoal com minha carreira em tecnologia. A Brilance me mostrou que é possível crescer em todas as áreas da vida simultaneamente.',
  },
];

// Differentials
export const DIFFERENTIALS: Differential[] = [
  {
    icon: 'wisdom',
    title: 'Programa pioneiro desenvolvido por especialistas.',
    position: 'top-left',
  },
  {
    icon: 'lightbulb',
    title: 'Ambiente inovador com laboratórios e experimentação.',
    position: 'top-right',
  },
  {
    icon: 'bullseye',
    title: 'Formação personalizada para cada estudante.',
    position: 'bottom-left',
  },
  {
    icon: 'rocket',
    title: 'Conexão com carreiras do futuro',
    position: 'bottom-right',
  },
];

// Differentials Content
export const DIFFERENTIALS_CONTENT = {
  badge: 'DIFERENCIAIS',
  title: 'Escola Brilance: Unidos para Elevar o Mundo',
  description:
    'A Escola Brilance une conhecimento científico, práticas de desenvolvimento humano e inovação tecnológica para criar um programa pioneiro e transformador.',
};

// CTA Section Content
export const CTA_CONTENT = {
  title: 'Transforme sua Vida',
  highlightWord: 'Vida',
  descriptions: [
    'Junte-se a nós nesta aventura transformadora. Liberte seu potencial, afirme sua confiança e abrace a liberdade de sua essência natural. Juntos, faremos brilhar sua força interior, pois o mundo precisa da sua luz.',
    'Dê o primeiro passo rumo à descoberta de seu poder interior. O futuro o aguarda, e está repleto de possibilidades infinitas.',
  ],
  ctaText: 'Descubra o seu Potencial',
};

// Contact Information
export const CONTACT_INFO: ContactInfo = {
  phone: '920 000 000',
  email: 'Brilance@gmail.com',
  address: 'Porto, Boa Vista',
};

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'facebook', url: 'https://facebook.com/brilance' },
  { platform: 'instagram', url: 'https://instagram.com/brilance' },
  { platform: 'linkedin', url: 'https://linkedin.com/company/brilance' },
  { platform: 'youtube', url: 'https://youtube.com/@brilance' },
];

// Footer Content
export const FOOTER_CONTENT = {
  brandName: 'Brilance',
  brandDescription:
    'Na Escola Brilance, o futuro da performance espera por você. Está preparado?',
  newsletterPlaceholder: 'exemplo@.com',
  newsletterButtonText: 'Receber',
  socialTitle: 'SIGA-NOS',
  links: [
    { label: 'Nossa missão', href: '#mission' },
    { label: 'Categoria', href: '#categories' },
    { label: 'Loja', href: '#shop' },
    { label: 'Sobre nós', href: '#about' },
  ],
  copyright: `© ${new Date().getFullYear()} Brilance. Todos os direitos reservados.`,
};

// Animation Configuration
export const ANIMATION_CONFIG = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    linear: 'linear',
  },
  delay: {
    short: 100,
    medium: 200,
    long: 300,
  },
};

// Breakpoints
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wide: 1536,
};

// Theme Colors
export const COLORS = {
  primary: '#5c3e94',
  primaryDark: '#4a3176',
  secondary: '#8561c9',
  accent: '#ffbb00',
  darkBg: '#00041b',
  darkSecondary: '#030729',
  borderGlow: 'rgba(148, 139, 219, 0.63)',
  textMuted: 'rgba(255, 255, 255, 0.8)',
  white: '#ffffff',
  black: '#000000',
};

// API Endpoints (placeholder - update with actual endpoints)
export const API_ENDPOINTS = {
  newsletter: '/api/newsletter/subscribe',
  contact: '/api/contact/send',
  testimonials: '/api/testimonials',
};

// Feature Flags
export const FEATURES = {
  enableNewsletter: true,
  enableTestimonials: true,
  enableAnalytics: true,
  enableChatbot: false,
};

// SEO Configuration
export const SEO_CONFIG = {
  title: 'Brilance - Escola de Desenvolvimento Pessoal',
  description:
    'Descubra sua força interior na Escola Brilance. Transforme bloqueios em confiança, liberdade e autenticidade através de práticas inovadoras.',
  keywords: [
    'desenvolvimento pessoal',
    'coaching',
    'transformação pessoal',
    'superação',
    'confiança',
    'liberdade',
    'autenticidade',
    'escola brilance',
  ],
  ogImage: '/og-image.jpg',
  twitterHandle: '@brilance',
};

// Error Messages
export const ERROR_MESSAGES = {
  invalidEmail: 'Por favor, insira um email válido.',
  requiredField: 'Este campo é obrigatório.',
  networkError: 'Erro de conexão. Por favor, tente novamente.',
  genericError: 'Algo deu errado. Por favor, tente novamente mais tarde.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  newsletterSubscribed: 'Obrigado por se inscrever! Verifique seu email.',
  contactSent: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
};

// Loading States
export const LOADING_MESSAGES = {
  loading: 'Carregando...',
  submitting: 'Enviando...',
  processing: 'Processando...',
};

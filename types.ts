// Type definitions for Brilance Landing Page

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  description: string;
  avatar?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description?: string;
}

export interface TargetAudience {
  icon: string;
  description: string;
}

export interface Differential {
  icon: string;
  title: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left';
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube';
  url: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface NewsletterForm {
  email: string;
}

// Component Props Types
export interface NavigationProps {
  items: NavItem[];
  className?: string;
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage: string;
  onCtaClick?: () => void;
}

export interface MissionSectionProps {
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export interface ProcessStepsProps {
  steps: ProcessStep[];
  title: string;
  description: string;
}

export interface TargetAudienceSectionProps {
  audiences: TargetAudience[];
  title: string;
  subtitle: string;
  image: string;
}

export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title: string;
}

export interface DifferentialsSectionProps {
  differentials: Differential[];
  title: string;
  description: string;
  centerImage: string;
}

export interface CTASectionProps {
  title: string;
  description: string[];
  ctaText: string;
  image: string;
  onCtaClick?: () => void;
}

export interface FooterProps {
  brandName: string;
  brandDescription: string;
  links: NavItem[];
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  onNewsletterSubmit?: (email: string) => void;
}

// Image Asset Types
export interface ImageAssets {
  heroBackground: string;
  image20: string;
  rectangle40289: string;
  rectangle40290: string;
  rectangle40291: string;
  rectangle40292: string;
  union3: string;
  frame21: string;
  noBg1: string;
  image27: string;
  rectangle53: string;
  maskGroup: string;
  frame4167: string;
  school: string;
  maskGroup1: string;
  frame: string;
  cog: string;
  wisdom21: string;
  rocketLunch21: string;
  bullseyeArrow1: string;
  compassOutline: string;
  lightbulbOn10: string;
  accountPlusOutline: string;
  codeBlockTags: string;
  maskGroup2: string;
  frame110: string;
  maskGroup3: string;
}

// Animation Types
export type AnimationType = 
  | 'fade-in'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'bounce';

export interface AnimationConfig {
  type: AnimationType;
  duration?: number;
  delay?: number;
  easing?: string;
}

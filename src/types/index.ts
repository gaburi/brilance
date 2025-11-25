// src/types/index.ts
// Comprehensive TypeScript type definitions for Brilliance Landing Page

import { HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

// ==================== Common Types ====================

export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'secondary' | 'ghost' | 'glass';
export type Theme = 'light' | 'dark';

// ==================== Component Props ====================

/**
 * Button component props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

/**
 * Card component props
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated';
  padding?: Size;
  rounded?: boolean;
  children: React.ReactNode;
}

/**
 * Icon box component props
 */
export interface IconBoxProps {
  icon: React.ComponentType<any>;
  size?: Size;
  variant?: 'default' | 'glass' | 'solid';
  className?: string;
}

/**
 * Glass card component props (with glassmorphism effect)
 */
export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  border?: boolean;
  children: React.ReactNode;
}

/**
 * Section container props
 */
export interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  fullWidth?: boolean;
  background?: 'transparent' | 'gradient' | 'solid';
  children: React.ReactNode;
}

// ==================== Navigation ====================

/**
 * Navigation item
 */
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

/**
 * Navigation props
 */
export interface NavigationProps {
  items: NavItem[];
  isScrolled?: boolean;
  onItemClick?: (href: string) => void;
  className?: string;
}

// ==================== Content Types ====================

/**
 * Feature data
 */
export interface FeatureData {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

/**
 * Step data for "How It Works" section
 */
export interface StepData {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description?: string;
}

/**
 * Testimonial data
 */
export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  avatar?: string;
  rating?: number;
}

export interface Testimonial {
  name: string;
  role: string;
  description: string;
  avatar?: string;
}

/**
 * Target audience item
 */
export interface TargetAudienceItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface TargetAudience {
  icon?: string;
  description: string;
}

/**
 * Differential/benefit item
 */
export interface DifferentialData {
  id: string;
  icon: React.ComponentType<{ className?: string }> | string;
  title: string;
  description: string;
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

export interface Differential {
  icon?: string;
  title: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left';
}

/**
 * Social media link
 */
export interface SocialLink {
  name?: string;
  platform?: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube';
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
}

/**
 * Footer link section
 */
export interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

/**
 * Contact info
 */
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

// ==================== Form Types ====================

/**
 * Newsletter form data
 */
export interface NewsletterFormData {
  email: string;
}

export interface NewsletterForm {
  email: string;
}

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

/**
 * Form validation errors
 */
export type FormErrors<T> = {
  [K in keyof T]?: string;
};

// ==================== Animation Types ====================

/**
 * Animation variants for Framer Motion
 */
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string | number[];
      staggerChildren?: number;
    };
  };
}

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

/**
 * Scroll animation hook options
 */
export interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

// ==================== Image Types ====================

/**
 * Image asset data
 */
export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Image Assets
 */
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

/**
 * Image loader props
 */
export interface ImageLoaderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

// ==================== Carousel Types ====================

/**
 * Carousel options
 */
export interface CarouselOptions {
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  navigation?: boolean;
  pagination?: boolean;
}

/**
 * Carousel slide props
 */
export interface CarouselSlideProps {
  children: React.ReactNode;
  className?: string;
}

// ==================== Layout Types ====================

/**
 * Header props
 */
export interface HeaderProps {
  transparent?: boolean;
  sticky?: boolean;
}

/**
 * Footer props
 */
export interface FooterProps {
  brandName: string;
  brandDescription: string;
  links: NavItem[];
  sections?: FooterSection[];
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  onNewsletterSubmit?: (email: string) => void;
}

// ==================== Section Component Props ====================

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

// ==================== Utility Types ====================

/**
 * Responsive value type
 */
export type ResponsiveValue<T> = T | {
  mobile?: T;
  tablet?: T;
  desktop?: T;
};

/**
 * Color palette
 */
export interface ColorPalette {
  primary: {
    dark: string;
    purple: string;
    violet: string;
    light: string;
  };
  accent: {
    gold: string;
  };
  neutral: {
    white: string;
    gray: string;
    black: string;
  };
}

/**
 * Spacing scale
 */
export type Spacing = 0 | 1 | 2 | 4 | 6 | 8 | 12 | 16 | 24 | 32 | 48 | 64;

// ==================== SEO Types ====================

/**
 * SEO metadata
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
}

// ==================== Context Types ====================

/**
 * Theme context
 */
export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * Scroll context
 */
export interface ScrollContextValue {
  scrollY: number;
  isScrolled: boolean;
  scrollTo: (target: string | number) => void;
}

// ==================== Constants Types ====================

/**
 * Application constants
 */
export interface AppConstants {
  siteName: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  socialMedia: SocialLink[];
  navigation: NavItem[];
}

// ==================== Event Handler Types ====================

export type MouseEventHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type ClickHandler = () => void;
export type SubmitHandler<T> = (data: T) => void | Promise<void>;
export type ChangeHandler = (value: string) => void;

// ==================== API Types (if needed) ====================

/**
 * API response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

/**
 * API error
 */
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

// ==================== Export all types ====================

export type {
  HTMLAttributes,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
};

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
  icon: React.ComponentType<{ className?: string; size?: number }>;
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

/**
 * Target audience item
 */
export interface TargetAudienceItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
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

/**
 * Social media link
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
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

// ==================== Form Types ====================

/**
 * Newsletter form data
 */
export interface NewsletterFormData {
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
export interface FormErrors<T> {
  [K in keyof T]?: string;
}

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
  sections: FooterSection[];
  socialLinks: SocialLink[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
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

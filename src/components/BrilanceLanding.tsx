import { lazy, Suspense } from 'react';

// Layout Components
import { Navigation } from './layout/Navigation';
import { Footer } from './layout/Footer';

// Section Components - Lazy loaded for optimal performance
const HeroSection = lazy(() => import('./sections/HeroSection'));
const MissionSection = lazy(() => import('./sections/MissionSection'));
const HowItWorksNewSection = lazy(() => import('./sections/HowItWorksNewSection'));
const ForWhomSection = lazy(() => import('./sections/ForWhomSection'));
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'));
const DifferentialsSection = lazy(() => import('./sections/DifferentialsSection'));
const CTASection = lazy(() => import('./sections/CTASection'));

// Loading component for sections
const SectionLoader = () => (
  <div className="min-h-[400px] bg-[#00041b] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-violet"></div>
  </div>
);

/**
 * Main Landing Page Component for Brilance
 *
 * A modular, performant landing page featuring:
 * - Lazy-loaded sections for optimal loading performance
 * - Smooth scroll navigation between sections
 * - Responsive design with mobile-first approach
 * - Framer Motion animations throughout
 * - Cosmic/space theme with purple accents
 */
const BrilanceLanding = () => {
  return (
    <div className="bg-[#00041b] min-h-screen relative overflow-hidden">
      {/* Background decorative elements - Cosmic blur effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top decorative blur */}
        <div className="absolute top-[3306px] left-[-172px] w-[633px] h-[633px] rounded-full bg-purple-500/10 blur-3xl" />

        {/* Middle decorative blur */}
        <div className="absolute top-[5199px] left-[-267px] w-[633px] h-[633px] rounded-full bg-purple-500/10 blur-3xl" />

        {/* Right side decorative blur */}
        <div className="absolute top-[7118px] right-[336px] w-[725px] h-[725px] rounded-full bg-blue-500/10 blur-3xl" />

        {/* Bottom decorative blur */}
        <div className="absolute top-[7817px] left-[-545px] w-[760px] h-[760px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Navigation - Always visible, sticky */}
      <Navigation />

      {/* Hero Section - Above the fold */}
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>

      {/* Mission Section */}
      <Suspense fallback={<SectionLoader />}>
        <MissionSection />
      </Suspense>

      {/* How It Works Section */}
      <Suspense fallback={<SectionLoader />}>
        <HowItWorksNewSection />
      </Suspense>

      {/* For Whom Section (Target Audience) */}
      <Suspense fallback={<SectionLoader />}>
        <ForWhomSection />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>

      {/* Differentials Section */}
      <Suspense fallback={<SectionLoader />}>
        <DifferentialsSection />
      </Suspense>

      {/* CTA Section */}
      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>

      {/* Footer - Contact info, links, newsletter */}
      <Footer />
    </div>
  );
};

export default BrilanceLanding;

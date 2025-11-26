import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, memo } from 'react';
import { TESTIMONIALS } from '@/constants';

// Animation constants for testimonials carousel
const CARD_WIDTH = 530;
const CARD_GAP = 24;
const CARD_WITH_GAP = CARD_WIDTH + CARD_GAP;
const ANIMATION_DURATION = 60; // seconds
const HOVER_TRANSITION_CARD = 0.15; // seconds
const HOVER_TRANSITION_ROW = 0.3; // seconds
const DUPLICATION_FACTOR = 4; // Optimal for seamless scroll

/**
 * Memoized testimonial card component to prevent unnecessary re-renders
 */
const TestimonialCard = memo<{ testimonial: typeof TESTIMONIALS[0]; rowKey: string; index: number }>(
  ({ testimonial, rowKey, index }) => (
    <motion.div
      key={`${rowKey}-${index}`}
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: '0 20px 60px rgba(75, 58, 206, 0.25)',
        transition: { duration: HOVER_TRANSITION_CARD },
      }}
      className="bg-white border border-[#d9e1ec] rounded-[18px] p-8 w-[530px] min-w-[530px] max-w-[530px] flex-shrink-0 hover:border-primary-violet transition-colors duration-200"
    >
      <h3 className="text-2xl font-bold text-[#2a3351] mb-2">{testimonial.name}</h3>
      <p className="text-sm font-medium text-[rgba(73,73,73,0.62)] mb-4">
        {testimonial.role}
      </p>
      <p className="text-base text-[#2a3351] leading-relaxed">
        {testimonial.description}
      </p>
    </motion.div>
  )
);
TestimonialCard.displayName = 'TestimonialCard';

/**
 * Testimonials Section - Interactive Carousel
 *
 * Features:
 * - Two rows scrolling in opposite directions (60s loop)
 * - Hover-to-pause: Hovering any card pauses entire row
 * - Card hover: Scale + lift + shadow effect (150ms)
 * - 4x duplication ensures seamless infinite scroll
 * - Mobile: Static grid (no animation)
 */
export const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Hover state for pause-on-hover functionality
  const [isRow1Hovered, setIsRow1Hovered] = useState(false);
  const [isRow2Hovered, setIsRow2Hovered] = useState(false);

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = Array(DUPLICATION_FACTOR)
    .fill(TESTIMONIALS)
    .flat();

  // Split testimonials into two rows
  const firstRowTestimonials = duplicatedTestimonials.filter((_, index) => index % 2 === 0);
  const secondRowTestimonials = duplicatedTestimonials.filter((_, index) => index % 2 === 1);

  // Calculate animation distance based on card dimensions
  const firstRowDistance = firstRowTestimonials.length * CARD_WITH_GAP;
  const secondRowDistance = secondRowTestimonials.length * CARD_WITH_GAP;

  return (
    <section
      id="students"
      ref={ref}
      className="py-20 overflow-hidden bg-gradient-to-b from-[#00041b] to-[#0a0c2e]"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6 mb-12 px-8 md:px-16 lg:px-[336px]"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-white text-center">
          Nossos Alunos
        </h2>
        <p className="text-base font-semibold text-white/80 text-center max-w-[600px]">
          Conheça algumas das pessoas que transformaram suas vidas através da Escola Brilance
        </p>
      </motion.div>

      {/* Two-Row Carousel - Desktop */}
      <div
        className="relative hidden md:block space-y-6 py-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
        }}
      >
        {/* First Row - Scrolling Left to Right */}
        <div
          className="relative"
          onMouseEnter={() => setIsRow1Hovered(true)}
          onMouseLeave={() => setIsRow1Hovered(false)}
        >
          <motion.div
            className="flex gap-6"
            style={{ willChange: 'transform' }}
            initial={{ x: 0 }}
            animate={{
              x: isRow1Hovered ? undefined : [0, -firstRowDistance],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: ANIMATION_DURATION,
                ease: 'linear',
              },
              default: { duration: HOVER_TRANSITION_ROW, ease: 'easeOut' },
            }}
          >
            {/* Duplicate cards twice for seamless left-scrolling loop */}
            {firstRowTestimonials.concat(firstRowTestimonials).map((testimonial, index) => (
              <TestimonialCard
                key={`row1-${index}`}
                testimonial={testimonial}
                rowKey="row1"
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Second Row - Scrolling Right (opposite direction) */}
        <div
          className="relative"
          onMouseEnter={() => setIsRow2Hovered(true)}
          onMouseLeave={() => setIsRow2Hovered(false)}
        >
          <motion.div
            className="flex gap-6"
            style={{ willChange: 'transform' }}
            initial={{ x: -secondRowDistance }}
            animate={{
              x: isRow2Hovered ? undefined : [-secondRowDistance, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: ANIMATION_DURATION,
                ease: 'linear',
              },
              default: { duration: HOVER_TRANSITION_ROW, ease: 'easeOut' },
            }}
          >
            {/* Duplicate cards twice for seamless right-scrolling loop */}
            {secondRowTestimonials.concat(secondRowTestimonials).map((testimonial, index) => (
              <TestimonialCard
                key={`row2-${index}`}
                testimonial={testimonial}
                rowKey="row2"
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Grid - Mobile/Tablet */}
      <div className="md:hidden px-8">
        <div className="grid grid-cols-1 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-[#d9e1ec] rounded-[18px] p-6 hover:shadow-2xl hover:border-primary-violet transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#2a3351] mb-2">{testimonial.name}</h3>
              <p className="text-sm font-medium text-[rgba(73,73,73,0.62)] mb-4">
                {testimonial.role}
              </p>
              <p className="text-base text-[#2a3351] leading-relaxed">
                {testimonial.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

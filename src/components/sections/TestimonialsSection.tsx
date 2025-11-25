import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TESTIMONIALS } from '@/constants';

export const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Duplicate testimonials multiple times for seamless infinite scroll
  const duplicatedTestimonials = [
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS,
  ];

  // Split testimonials into two rows
  const firstRowTestimonials = duplicatedTestimonials.filter((_, index) => index % 2 === 0);
  const secondRowTestimonials = duplicatedTestimonials.filter((_, index) => index % 2 === 1);

  // Calculate animation distance based on card width (530px) + gap (24px)
  const cardWithGap = 530 + 24;
  const firstRowDistance = firstRowTestimonials.length * cardWithGap;
  const secondRowDistance = secondRowTestimonials.length * cardWithGap;

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
      <div className="relative hidden md:block space-y-6">
        {/* First Row - Scrolling Left to Right with Gradient Overlays */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -firstRowDistance],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {firstRowTestimonials.map((testimonial, index) => (
              <motion.div
                key={`row1-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.8) }}
                className="bg-white border border-[#d9e1ec] rounded-[18px] p-8 w-[530px] min-w-[530px] max-w-[530px] flex-shrink-0 hover:shadow-2xl hover:border-primary-violet transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#2a3351] mb-2">{testimonial.name}</h3>
                <p className="text-sm font-medium text-[rgba(73,73,73,0.62)] mb-4">
                  {testimonial.role}
                </p>
                <p className="text-base text-[#2a3351] leading-relaxed">
                  {testimonial.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#00041b] to-transparent pointer-events-none z-10" />
          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0c2e] to-transparent pointer-events-none z-10" />
        </div>

        {/* Second Row - Scrolling Right to Left with Gradient Overlays */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [-secondRowDistance, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {secondRowTestimonials.map((testimonial, index) => (
              <motion.div
                key={`row2-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.8) }}
                className="bg-white border border-[#d9e1ec] rounded-[18px] p-8 w-[530px] min-w-[530px] max-w-[530px] flex-shrink-0 hover:shadow-2xl hover:border-primary-violet transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#2a3351] mb-2">{testimonial.name}</h3>
                <p className="text-sm font-medium text-[rgba(73,73,73,0.62)] mb-4">
                  {testimonial.role}
                </p>
                <p className="text-base text-[#2a3351] leading-relaxed">
                  {testimonial.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#00041b] to-transparent pointer-events-none z-10" />
          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0c2e] to-transparent pointer-events-none z-10" />
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

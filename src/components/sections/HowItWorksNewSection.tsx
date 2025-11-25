import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IMAGES } from '@/assets/images';

interface Step {
  number: string;
  title: string;
  image: string;
  imageAlt: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Reconheça e compreenda seus bloqueios.',
    image: IMAGES.howItWorksStep1.src,
    imageAlt: IMAGES.howItWorksStep1.alt,
  },
  {
    number: '02',
    title: 'Transforme vulnerabilidades em força.',
    image: IMAGES.howItWorksStep2.src,
    imageAlt: IMAGES.howItWorksStep2.alt,
  },
  {
    number: '03',
    title: 'Acesse sua inteligência superior.',
    image: IMAGES.howItWorksStep3.src,
    imageAlt: IMAGES.howItWorksStep3.alt,
  },
  {
    number: '04',
    title: 'Viva com confiança e liberdade.',
    image: IMAGES.howItWorksStep4.src,
    imageAlt: IMAGES.howItWorksStep4.alt,
  },
];

export const HowItWorksNewSection = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="como"
      className="relative min-h-screen bg-gradient-to-b from-[#00041b] to-[#0a0e2e] py-20 md:py-32 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        transition={{ staggerChildren: 0.3 }}
        className="container mx-auto px-4 md:px-8 max-w-[507px] mb-20 md:mb-32"
      >
        {/* Icon */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center mb-4"
        >
          <div className="bg-white border-[3px] border-[rgba(255,255,255,0.31)] rounded-[20.5px] p-2 w-10 h-10 flex items-center justify-center">
            <img
              src={IMAGES.howItWorksCog.src}
              alt={IMAGES.howItWorksCog.alt}
              className="w-6 h-6"
            />
          </div>
        </motion.div>

        {/* Label */}
        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[20px] font-semibold text-[rgba(255,255,255,0.8)] text-center mb-4 font-sans"
          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
        >
          COMO FUNCIONA
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[32px] md:text-[40px] font-medium text-white text-center mb-4 leading-tight font-sans"
          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
        >
          Liberte-se das Amarras do Medo e dos Traumas
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[16px] font-semibold text-white text-center leading-relaxed font-sans"
          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
        >
          Nossa metodologia combina práticas introspectivas, técnicas de
          desenvolvimento pessoal e ferramentas inovadoras para transformar
          vulnerabilidades em força.
        </motion.p>
      </motion.div>

      {/* Steps Timeline - Desktop Only */}
      <div className="hidden lg:block container mx-auto px-4 md:px-8 max-w-[1256px] relative">
        <div className="h-[2821px] relative w-full">
          {/* Background Connection Pattern - Behind everything */}
          <div className="absolute h-[632px] left-[214px] top-[2189px] w-[800px] z-0">
            <img
              src={IMAGES.howItWorksUnion.src}
              alt={IMAGES.howItWorksUnion.alt}
              className="block max-w-none w-full h-full opacity-100"
            />
          </div>

          {/* Connection Lines - z-10 */}
          <div className="absolute h-[240px] left-[245px] top-[680px] w-[472px] opacity-80 z-10">
            <img
              src={IMAGES.howItWorksVector14.src}
              alt="Connection line 1"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute h-[240px] left-[533px] top-[1186px] w-[454px] opacity-80 z-10">
            <img
              src={IMAGES.howItWorksVector15.src}
              alt="Connection line 2"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute h-[490px] left-[297px] top-[1648px] w-[427px] opacity-80 z-10">
            <img
              src={IMAGES.howItWorksVector16.src}
              alt="Connection line 3"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute h-[240px] left-[551px] top-[221px] w-[457px] opacity-80 z-10">
            <img
              src={IMAGES.howItWorksVector13.src}
              alt="Connection line 0"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Connection Dots - z-20 */}
          <div className="absolute left-[225px] w-[41px] h-[41px] top-[910px] z-20">
            <img
              src={IMAGES.howItWorksDot1.src}
              alt="Connection dot 1"
              className="w-full h-full"
            />
          </div>
          <div className="absolute left-[967px] w-[41px] h-[41px] top-[1423px] z-20">
            <img
              src={IMAGES.howItWorksDot2.src}
              alt="Connection dot 2"
              className="w-full h-full"
            />
          </div>
          <div className="absolute left-[596px] w-[41px] h-[41px] top-[2143px] z-20">
            <img
              src={IMAGES.howItWorksDot2.src}
              alt="Connection dot 3"
              className="w-full h-full"
            />
          </div>
          <div className="absolute left-[987px] w-[41px] h-[41px] top-[437px] z-20">
            <img
              src={IMAGES.howItWorksDot3.src}
              alt="Connection dot 0"
              className="w-full h-full"
            />
          </div>

          {/* Step 01 - Top Left - z-30 */}
          <StepCardDesktop
            step={steps[0]!}
            position="left-0 top-0 z-30"
            imageTransform="rotate-180 scale-y-[-1]"
            index={0}
          />

          {/* Step 02 - Top Right - z-30 */}
          <StepCardDesktop
            step={steps[1]!}
            position="left-[716px] top-[481px] z-30"
            imageTransform="rotate-180"
            index={1}
          />

          {/* Step 03 - Middle Left - z-30 */}
          <StepCardDesktop
            step={steps[2]!}
            position="left-0 top-[955px] z-30"
            imageTransform=""
            index={2}
          />

          {/* Step 04 - Bottom Right - z-30 */}
          <StepCardDesktop
            step={steps[3]!}
            position="left-[716px] top-[1438px] z-30"
            imageTransform="scale-y-[-1]"
            index={3}
          />
        </div>
      </div>

      {/* Mobile: Vertical Stack */}
      <div className="lg:hidden container mx-auto px-4 md:px-8 max-w-7xl space-y-12">
        {steps.map((step, index) => (
          <StepCardMobile key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
};

// Desktop Step Card Component
interface StepCardDesktopProps {
  step: Step;
  position: string;
  imageTransform: string;
  index: number;
}

const StepCardDesktop = ({ step, position, imageTransform, index }: StepCardDesktopProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className={`absolute flex flex-col gap-10 ${position} w-[540px]`}
    >
      {/* Image */}
      <div className="relative w-full flex items-center justify-center">
        <div className={imageTransform}>
          <img
            src={step.image}
            alt={step.imageAlt}
            className="w-[540px] h-[424px] object-cover rounded-2xl opacity-100"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex items-center gap-4">
        {/* Step Number */}
        <div
          className="text-[64px] font-black text-[rgba(255,187,0,0.72)] leading-none font-sans shrink-0"
          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
        >
          {step.number}
        </div>

        {/* Divider */}
        <div className="h-16 w-px bg-white/20 shrink-0" />

        {/* Title */}
        <p
          className="text-[24px] font-semibold text-[rgba(255,255,255,0.8)] leading-tight font-sans"
          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
        >
          {step.title}
        </p>
      </div>
    </motion.div>
  );
};

// Mobile Step Card Component
interface StepCardMobileProps {
  step: Step;
  index: number;
}

const StepCardMobile = ({ step, index }: StepCardMobileProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="flex flex-col gap-6"
    >
      {/* Image */}
      <div className="w-full">
        <img
          src={step.image}
          alt={step.imageAlt}
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="flex items-center gap-4">
        {/* Step Number */}
        <div
          className="text-[48px] md:text-[64px] font-black text-[rgba(255,187,0,0.72)] leading-none shrink-0 font-sans"
          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
        >
          {step.number}
        </div>

        {/* Divider */}
        <div className="h-12 md:h-16 w-px bg-white/20 shrink-0" />

        {/* Title */}
        <p
          className="text-[20px] md:text-[24px] font-semibold text-[rgba(255,255,255,0.8)] leading-tight font-sans"
          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
        >
          {step.title}
        </p>
      </div>
    </motion.div>
  );
};

export default HowItWorksNewSection;

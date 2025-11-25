import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Settings } from 'lucide-react';
import { IconBox } from '@components/common/IconBox';
import type { ProcessStep } from '@/types';

export const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const steps: ProcessStep[] = [
    { number: '01', title: 'Reconheça e compreenda seus bloqueios.' },
    { number: '02', title: 'Transforme vulnerabilidades em força.' },
    { number: '03', title: 'Acesse sua inteligência superior.' },
    { number: '04', title: 'Viva com confiança e liberdade.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-20 px-8 md:px-16 lg:px-[336px] bg-[#00041b]"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6 mb-16"
      >
        {/* Icon */}
        <IconBox icon={Settings} size="md" variant="default" />

        {/* Section Label */}
        <p className="text-base font-semibold text-white/80 tracking-wider">COMO FUNCIONA</p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-white text-center max-w-[490px] leading-tight">
          Liberte-se das Amarras do Medo e dos Traumas
        </h2>

        {/* Description */}
        <p className="text-base font-semibold text-white text-center max-w-[496px]">
          Nossa metodologia combina práticas introspectivas, técnicas de desenvolvimento
          pessoal e ferramentas inovadoras para transformar vulnerabilidades em força.
        </p>
      </motion.div>

      {/* Process Steps */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative min-h-[600px] hidden lg:block"
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={stepVariants}
            className={`absolute flex items-center gap-3 ${
              index === 0
                ? 'left-6 top-0'
                : index === 1
                ? 'right-6 top-[150px]'
                : index === 2
                ? 'left-6 top-[300px]'
                : 'right-6 top-[450px]'
            }`}
          >
            <span className="text-5xl md:text-[66px] font-black text-[rgba(255,187,0,0.72)]">
              {step.number}
            </span>
            <div className="w-[1px] h-24 bg-white/30 rotate-90" />
            <p className="text-xl md:text-2xl font-semibold text-white/80 max-w-[450px]">
              {step.title}
            </p>
          </motion.div>
        ))}

        {/* Decorative connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 100 50 Q 600 100, 1100 200 Q 600 300, 100 350 Q 600 400, 1100 500"
            stroke="rgba(255,187,0,0.3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Mobile Version - Stack vertically */}
      <div className="flex flex-col gap-8 lg:hidden">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <span className="text-4xl font-black text-[rgba(255,187,0,0.72)] flex-shrink-0">
              {step.number}
            </span>
            <p className="text-lg font-semibold text-white/80 pt-2">{step.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;

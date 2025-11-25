import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@components/common/Button';
import { IMAGES } from '@/assets/images';

// Hero background image from centralized assets
const HERO_BACKGROUND_URL = IMAGES.heroBackground.src;

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    // Scroll to mission section or open contact form
    const missionSection = document.querySelector('#mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const containerTransition = {
    staggerChildren: 0.2,
    delayChildren: 0.3,
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative h-screen min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[955px] w-full overflow-hidden">
      {/* Background with Parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src={HERO_BACKGROUND_URL}
          alt="Space Background"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00041b]/50 to-[#00041b]" />
      </div>

      {/* Floating Particles/Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [
                Math.random() * 0.5 + 0.3,
                Math.random() * 0.3,
                Math.random() * 0.5 + 0.3,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Gradient Rectangular Overlay - Bottom Transition */}
      <div
        className="absolute left-0 bottom-0 w-full h-[388px] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 4, 27, 0) 0%, rgba(0, 4, 27, 0.6) 40%, rgba(10, 14, 46, 0.95) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={containerTransition}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-full max-w-[90%] sm:max-w-[85%] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1100px] px-4 sm:px-6 md:px-8"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[32px] sm:text-[40px] md:text-5xl lg:text-[56px] xl:text-[64px] font-semibold text-white text-center leading-[1.1]"
        >
          Sua Força. Sua Essência. Sua Liberdade.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white text-center max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px]"
        >
          Uma escola criada para despertar sua força interior e transformar bloqueios em
          confiança, liberdade e autenticidade
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            variant="primary"
            size="lg"
            onClick={handleCTAClick}
            className="group"
          >
            Comece a sua Jornada
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12 md:mt-16 lg:mt-20"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-xs sm:text-sm">Role para baixo</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IMAGES } from '@/assets/images';

export const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleCTAClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 bg-gradient-to-b from-[#00041b] to-[#0a0e2e]"
    >
      <div className="max-w-[1400px] mx-auto relative h-auto min-h-[500px] md:min-h-[600px] lg:min-h-[650px] xl:min-h-[677px]">
        {/* Card Frame Background - positioned lower so woman extends above */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative md:absolute left-0 top-0 md:top-[80px] lg:top-[100px] xl:top-[118px] w-full h-auto md:h-[500px] lg:h-[530px] xl:h-[559px] min-h-[400px] rounded-[20px] md:rounded-[22px] lg:rounded-[24px] border-[2px] md:border-[2.5px] lg:border-[3px] border-[#5c3e94]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(40, 55, 110, 0.9) 0%, rgba(25, 35, 80, 0.95) 40%, rgba(15, 20, 55, 1) 100%)',
          }}
        />

        {/* Woman Image - Positioned on the right, extending above the card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative md:absolute right-0 md:right-[5%] lg:right-[40px] xl:right-[50px] top-0 w-full sm:w-[85%] sm:mx-auto md:w-[350px] lg:w-[420px] xl:w-[480px] 2xl:w-[501px] h-auto md:h-[550px] lg:h-[620px] xl:h-[677px] max-h-[350px] sm:max-h-[400px] md:max-h-none pointer-events-none z-10"
        >
          <img
            src={IMAGES.ctaImage.src}
            alt={IMAGES.ctaImage.alt}
            className="w-full h-full object-contain object-bottom"
          />
        </motion.div>

        {/* Content - Positioned on the left, inside the card area */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative md:absolute left-0 md:left-[5%] lg:left-[60px] xl:left-[80px] 2xl:left-[125px] top-0 md:top-[140px] lg:top-[170px] xl:top-[187px] flex flex-col gap-4 sm:gap-5 md:gap-[18px] lg:gap-[20px] xl:gap-[21px] max-w-full md:max-w-[400px] lg:max-w-[460px] xl:max-w-[499px] z-10 px-6 md:px-0 py-8 md:py-0"
        >
          {/* Headline */}
          <h2
            className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-semibold text-white/96 leading-[1.1] font-['Outfit']"
          >
            Transforme sua{' '}
            <span className="text-[#8561c9]">Vida</span>
          </h2>

          {/* Description */}
          <div
            className="text-[13px] sm:text-[13.5px] md:text-[14px] font-normal text-white leading-[1.6] font-sans"
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            <p className="mb-3 sm:mb-3.5 md:mb-4">
              Junte-se a nós nesta aventura transformadora. Liberte seu potencial, afirme sua
              confiança e abrace a liberdade de sua essência natural. Juntos, faremos brilhar sua
              força interior, pois o mundo precisa da sua luz.
            </p>
            <p>
              Dê o primeiro passo rumo à descoberta de seu poder interior. O futuro o aguarda, e
              está repleto de possibilidades infinitas.
            </p>
          </div>

          {/* CTA Button with Glassmorphism */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            onClick={handleCTAClick}
            className="relative w-full sm:w-[220px] md:w-[232px] h-[56px] sm:h-[58px] md:h-[59px] rounded-[40px] sm:rounded-[43px] md:rounded-[45px] overflow-hidden group mt-2 sm:mt-3 md:mt-4 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {/* Background layer */}
            <div
              className="absolute inset-0 border-[1.261px] border-[#948bdb] rounded-[45px]"
              style={{
                background: 'linear-gradient(90deg, rgba(3, 7, 41, 1) 0%, rgba(3, 7, 41, 1) 100%)',
              }}
            />

            {/* Mask group overlay */}
            <div className="absolute inset-0">
              <img
                src={IMAGES.ctaButtonMask.src}
                alt={IMAGES.ctaButtonMask.alt}
                className="w-full h-full"
              />
            </div>

            {/* Glassmorphism layer */}
            <div className="absolute inset-0 backdrop-blur-[11.6px] bg-[rgba(3,7,41,0.43)] border-[1.261px] border-[#948bdb] rounded-[45px] transition-all group-hover:bg-[rgba(3,7,41,0.6)]" />

            {/* Text */}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[13px] sm:text-[14px] md:text-[14.764px] font-medium text-white font-['Roboto'] leading-[32px] whitespace-nowrap">
              Descubra o seu Potencial
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

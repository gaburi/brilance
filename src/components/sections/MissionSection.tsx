import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IMAGES } from '@/assets/images';

export const MissionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleLearnMore = () => {
    const howItWorksSection = document.querySelector('#como');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="missao"
      ref={ref}
      className="section-padding bg-gradient-to-b from-[#00041b] to-[#0a0e2e]"
    >
      <div className="container-responsive">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center max-w-[1248px] mx-auto">
          {/* Image with Decorative Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-[48%] xl:w-[52%] flex-shrink-0"
          >
          {/* Background decorative element */}
          <div className="absolute left-0 top-0 w-[431px] h-[372px] bg-[#d8e0e6] rounded-[9.953px]">
            {/* Grid overlay */}
            <div className="absolute left-0 top-0 w-[431px] h-[52px] overflow-hidden">
              <div className="absolute left-[-365.93px] top-[-186.93px] w-[1183.938px] h-[538.153px] mix-blend-soft-light">
                <img
                  src={IMAGES.missionGridVector.src}
                  alt={IMAGES.missionGridVector.alt}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute left-[-374px] top-[-195px] w-[1200.082px] h-[554.298px] mix-blend-soft-light">
                <img
                  src={IMAGES.missionGridVector2.src}
                  alt={IMAGES.missionGridVector2.alt}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative mt-[54px] ml-[6px] w-[632px] h-[463px] border-[5px] border-[#d7dde5] rounded-[24px] overflow-hidden group">
            <img
              src={IMAGES.missionImage.src}
              alt={IMAGES.missionImage.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 w-full lg:w-[48%] xl:w-[44%] flex-shrink-0"
          >
          {/* Section Label with Icon */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <p
                  className="text-[16px] font-semibold text-[rgba(255,255,255,0.8)] font-sans"
                  style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                >
                  NOSSA MISSÃO
                </p>
                <div className="bg-white border-[3px] border-[rgba(255,255,255,0.31)] rounded-[20.5px] p-2 w-10 h-10 flex items-center justify-center">
                  <img
                    src={IMAGES.missionSchoolIcon.src}
                    alt={IMAGES.missionSchoolIcon.alt}
                    className="w-6 h-6"
                  />
                </div>
              </div>

              {/* Heading */}
              <h2
                className="text-[32px] md:text-[40px] font-medium text-white leading-tight font-sans"
                style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
              >
                Descubra Sua Força Interior
              </h2>
            </div>

            {/* Description */}
            <p
              className="text-[16px] font-semibold text-white leading-relaxed font-sans"
              style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
            >
              Na Brilance, acreditamos que cada pessoa carrega uma força única. Nosso
              propósito é ajudá-lo a despertar essa luz, superar bloqueios e viver com
              confiança e autenticidade. Criamos um espaço seguro e inspirador onde sua
              essência pode florescer, e sua liberdade de ser quem é se torna celebração.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-1 relative">
            {/* Main Button */}
            <button
              onClick={handleLearnMore}
              className="relative w-[291px] h-[74.332px] rounded-[56.144px] overflow-hidden group"
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-[#030729] border-[1.582px] border-[rgba(148,139,219,0.63)] rounded-[56.144px]" />

              {/* Mask group overlay */}
              <div className="absolute inset-0">
                <img
                  src={IMAGES.missionMaskGroup.src}
                  alt={IMAGES.missionMaskGroup.alt}
                  className="w-full h-full"
                />
              </div>

              {/* Glassmorphism layer */}
              <div className="absolute inset-0 backdrop-blur-[14.55px] bg-[rgba(3,7,41,0.43)] border-[1.582px] border-[rgba(148,139,219,0.63)] rounded-[56.144px] transition-all group-hover:bg-[rgba(3,7,41,0.6)]" />

              {/* Text */}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20px] font-medium text-white font-['Roboto'] leading-[40px]">
                Saiba mais
              </span>
            </button>

            {/* Arrow Button */}
            <button
              onClick={handleLearnMore}
              className="w-16 h-16 bg-[#030729] border border-[#5c3e94] rounded-[32px] flex items-center justify-center hover:bg-[#5c3e94]/20 transition-all"
            >
              <img
                src={IMAGES.missionArrowFrame.src}
                alt={IMAGES.missionArrowFrame.alt}
                className="w-6 h-6"
              />
            </button>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

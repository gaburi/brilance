import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IMAGES } from '@/assets/images';

export const ForWhomSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const audiences = [
    {
      icon: IMAGES.forWhomCompassIcon.src,
      alt: IMAGES.forWhomCompassIcon.alt,
      text: 'Pessoas que sentem que a vida perdeu direção.',
    },
    {
      icon: IMAGES.forWhomLightbulbIcon.src,
      alt: IMAGES.forWhomLightbulbIcon.alt,
      text: 'Profissionais em busca de propósito.',
    },
    {
      icon: IMAGES.forWhomAccountPlusIcon.src,
      alt: IMAGES.forWhomAccountPlusIcon.alt,
      text: 'Jovens e adultos querem superar medo e traumas.',
    },
    {
      icon: IMAGES.forWhomCodeIcon.src,
      alt: IMAGES.forWhomCodeIcon.alt,
      text: 'Quem deseja unir desenvolvimento humano e inovação tecnológica',
    },
  ];

  const handleLearnMore = () => {
    const nextSection = document.querySelector('#diferenciais');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="para-quem"
      ref={ref}
      className="section-padding bg-gradient-to-b from-[#0a0e2e] to-[#00041b]"
    >
      <div className="container-responsive">
        <div className="max-w-[1248px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-[#a4b6c4] border-[6px] md:border-[8px] lg:border-[10px] border-[rgba(164,182,196,0.23)] rounded-[20px] md:rounded-[22px] lg:rounded-[24px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-[68px]"
          >
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 w-full lg:w-[368px]">
              {/* Header */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <p
                    className="text-[16px] font-semibold text-[rgba(4,4,4,0.8)] font-sans"
                    style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                  >
                    PARA QUEM É
                  </p>
                  <h2
                    className="text-[32px] font-medium text-[rgba(4,4,4,0.8)] leading-tight font-sans"
                    style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                  >
                    Escola Brilance: Unidos para Elevar o Mundo
                  </h2>
                </div>

                {/* Audience List */}
                <div className="flex flex-col gap-4">
                  {audiences.map((audience, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-4">
                        <div className="bg-[#f4f4f4] rounded-lg p-2 shadow-[2px_10px_49px_0px_rgba(96,126,150,0.82)] w-10 h-10 flex items-center justify-center">
                          <img
                            src={audience.icon}
                            alt={audience.alt}
                            className="w-6 h-6"
                          />
                        </div>
                        <p
                          className="text-[14px] font-semibold text-[rgba(0,0,0,0.8)] flex-1 font-sans"
                          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                        >
                          {audience.text}
                        </p>
                      </div>
                      {index < audiences.length - 1 && (
                        <div className="h-[1px] bg-[rgba(0,0,0,0.15)] mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleLearnMore}
                className="relative w-[240px] h-[64px] rounded-[45.886px] overflow-hidden group"
              >
                {/* Background layer */}
                <div className="absolute inset-0 bg-[#030729] border-[1.293px] border-[rgba(148,139,219,0.63)] rounded-[45.886px]" />

                {/* Mask group overlay */}
                <div className="absolute inset-0">
                  <img
                    src={IMAGES.forWhomMaskGroup.src}
                    alt={IMAGES.forWhomMaskGroup.alt}
                    className="w-full h-full"
                  />
                </div>

                {/* Glassmorphism layer */}
                <div className="absolute inset-0 backdrop-blur-[11.892px] bg-[rgba(3,7,41,0.43)] border-[1.293px] border-[rgba(148,139,219,0.63)] rounded-[45.886px] transition-all group-hover:bg-[rgba(3,7,41,0.6)]" />

                {/* Text */}
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16.346px] font-medium text-white font-['Roboto'] leading-[32.692px]">
                  Saiba mais
                </span>
              </button>
            </div>

            {/* Right Image with Decorative Frame */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full lg:w-[483px] h-[423px]"
            >
              {/* Background decorative frame */}
              <div className="absolute left-[52px] top-0 w-[431px] h-[372px] bg-[#d8e0e6] rounded-[9.953px]">
                {/* Grid overlay */}
                <div className="absolute left-0 top-0 w-[431px] h-[52px] overflow-hidden">
                  <div className="absolute left-[-365.93px] top-[-186.93px] w-[1183.938px] h-[538.153px] mix-blend-soft-light">
                    <img
                      src={IMAGES.forWhomGridVector.src}
                      alt={IMAGES.forWhomGridVector.alt}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute left-[-374px] top-[-195px] w-[1200.082px] h-[554.298px] mix-blend-soft-light">
                    <img
                      src={IMAGES.forWhomGridVector2.src}
                      alt={IMAGES.forWhomGridVector2.alt}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="absolute left-0 top-[51px] w-[483px] h-[372px] border-[7px] border-[#d9dde0] rounded-[9.953px] overflow-hidden group">
                <img
                  src={IMAGES.forWhomImage.src}
                  alt={IMAGES.forWhomImage.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;

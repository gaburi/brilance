import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IMAGES } from '@/assets/images';

export const DifferentialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const differentials = [
    {
      icon: IMAGES.differentialsWisdomIcon.src,
      alt: IMAGES.differentialsWisdomIcon.alt,
      text: 'Programa pioneiro desenvolvido por especialistas.',
      position: 'left-[532px] top-0',
      align: 'right',
    },
    {
      icon: IMAGES.differentialsRocketIcon.src,
      alt: IMAGES.differentialsRocketIcon.alt,
      text: 'Conexão com carreiras do futuro',
      position: 'left-[1046px] top-[300px]',
      align: 'left',
    },
    {
      icon: IMAGES.differentialsLightbulbIcon.src,
      alt: IMAGES.differentialsLightbulbIcon.alt,
      text: 'Ambiente inovador com laboratórios e experimentação.',
      position: 'left-[136px] top-[123px]',
      align: 'right',
    },
    {
      icon: IMAGES.differentialsBullseyeIcon.src,
      alt: IMAGES.differentialsBullseyeIcon.alt,
      text: 'Formação personalizada para cada estudante.',
      position: 'left-0 top-[293px]',
      align: 'right',
    },
    {
      icon: IMAGES.differentialsHandshakeIcon.src,
      alt: IMAGES.differentialsHandshakeIcon.alt,
      text: 'Comunidade apaixonada e colaborativa',
      position: 'left-[904px] top-[123px]',
      align: 'left',
    },
  ];

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="relative section-padding bg-gradient-to-b from-[#00041b] to-[#0a0e2e] overflow-hidden"
    >
      {/* Top fade gradient */}
      <div
        className="absolute left-0 top-0 w-full h-[100px] pointer-events-none z-20"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0, 4, 27, 1) 0%, rgba(0, 4, 27, 0.5) 40%, transparent 100%)',
        }}
      />

      {/* Bottom fade gradient */}
      <div
        className="absolute left-0 bottom-0 w-full h-[250px] pointer-events-none z-20"
        style={{
          background:
            'linear-gradient(to top, rgba(0, 4, 27, 1) 0%, rgba(0, 4, 27, 0.9) 40%, rgba(0, 4, 27, 0.5) 70%, transparent 100%)',
        }}
      />

      <div className="container-responsive">
        <div className="max-w-[1456px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4 mb-20"
        >
          <p
            className="text-[16px] font-semibold text-white text-center font-sans"
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            DIFERENCIAIS
          </p>
          <div className="flex flex-col items-center gap-6">
            <h2
              className="text-[40px] font-medium text-white text-center max-w-[488px] leading-tight font-sans"
              style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
            >
              Escola Brilance: Unidos para Elevar o Mundo
            </h2>
            <p
              className="text-[16px] font-semibold text-white text-center max-w-[650px] font-sans"
              style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
            >
              A Escola Brilance une conhecimento científico, práticas de
              desenvolvimento humano e inovação tecnológica para criar um
              programa pioneiro e transformador.
            </p>
          </div>
        </motion.div>

        {/* Circular Layout */}
        <div className="relative w-full h-[697px] flex items-center justify-center">
          {/* Radial Gradient Glow Background */}
          <div
            className="absolute left-[339px] top-[66px] w-[768px] h-[768px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, rgba(255, 187, 0, 0.25) 0%, rgba(255, 187, 0, 0.15) 25%, rgba(133, 90, 0, 0.1) 50%, rgba(0, 0, 0, 0.3) 75%, transparent 100%)',
            }}
          />

          {/* Outer Circle with Golden Border */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute left-[339px] top-[66px] w-[768px] h-[768px] rounded-full border-[2.003px] border-[#ffbb00] flex items-center justify-center"
            style={{
              boxShadow:
                '0 0 60px rgba(255, 187, 0, 0.3), inset 0 0 40px rgba(255, 187, 0, 0.05)',
            }}
          >
            {/* Inner Circle */}
            <div
              className="w-[616px] h-[616px] rounded-full border-[2.003px] border-[#ffbb00] flex items-center justify-center"
              style={{
                boxShadow:
                  '0 0 40px rgba(255, 187, 0, 0.25), inset 0 0 30px rgba(255, 187, 0, 0.08)',
              }}
            >
              {/* White Center Circle with Logo */}
              <div
                className="w-[428px] h-[428px] rounded-full bg-white flex items-center justify-center"
                style={{
                  boxShadow:
                    '0 0 80px rgba(255, 187, 0, 0.4), 0 0 120px rgba(255, 187, 0, 0.2)',
                }}
              >
                <motion.img
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={inView ? { opacity: 0.9, rotate: 0 } : {}}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  src={IMAGES.differentialsLogo.src}
                  alt={IMAGES.differentialsLogo.alt}
                  className="w-[200px] h-[268px] object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Differential Cards */}
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className={`absolute ${diff.position} w-[410px] h-[84px] bg-white rounded-[16px] px-[10px] py-[7px] flex ${
                diff.align === 'right' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`flex items-center gap-4 ${
                  diff.align === 'right' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className="bg-[#071739] rounded-lg p-[11.4px] shadow-[2.85px_14.25px_69.825px_0px_rgba(96,126,150,0.31)] w-[56px] h-[56px] flex items-center justify-center">
                  <img src={diff.icon} alt={diff.alt} className="w-9 h-9" />
                </div>
                <p
                  className={`text-[16px] font-semibold text-[rgba(0,0,0,0.8)] w-[278px] font-sans ${
                    diff.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                  style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                >
                  {diff.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

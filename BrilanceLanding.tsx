import React from 'react';

// Image constants
const images = {
  heroBackground: "https://www.figma.com/api/mcp/asset/0cf32700-b3ef-43b7-8d93-61deca4f45e2",
  image20: "https://www.figma.com/api/mcp/asset/bc8b43c1-35af-4f1d-ba19-7328cab57e51",
  rectangle40289: "https://www.figma.com/api/mcp/asset/3dfc58a0-8aa5-4b2c-976f-0e92f579ad9c",
  rectangle40290: "https://www.figma.com/api/mcp/asset/d3b6f587-a6ed-4a19-80f2-d2047c9b658a",
  rectangle40291: "https://www.figma.com/api/mcp/asset/3cb174e5-b419-4676-a4f0-ec1ecea2924a",
  rectangle40292: "https://www.figma.com/api/mcp/asset/f0ef638a-4ca4-4e48-9973-ae8bdcb895f2",
  union3: "https://www.figma.com/api/mcp/asset/b23f451c-c023-4ee4-a76d-0ca9c772fa1f",
  frame21: "https://www.figma.com/api/mcp/asset/56d31aef-18c0-4d3c-8360-4addd0ebbebb",
  noBg1: "https://www.figma.com/api/mcp/asset/5f21d0f4-f572-4bd7-ab61-b615d918ce86",
  image27: "https://www.figma.com/api/mcp/asset/f1461e45-9aa8-40cf-9215-514dafaf0415",
  rectangle53: "https://www.figma.com/api/mcp/asset/3660ad24-ac60-481d-8ae4-a8c7096d0691",
  maskGroup: "https://www.figma.com/api/mcp/asset/761eeff1-e628-4f19-a6fc-7f88c6297d57",
  frame4167: "https://www.figma.com/api/mcp/asset/37392397-a39c-4f29-98e3-d612ff6d5920",
  school: "https://www.figma.com/api/mcp/asset/062250f4-f5e5-4de1-b555-829d001a5933",
  maskGroup1: "https://www.figma.com/api/mcp/asset/3b0be6c3-68e8-4618-ad26-f88a6fcdde66",
  frame: "https://www.figma.com/api/mcp/asset/5adbf997-0dd8-4ddc-b529-50a3f8df6499",
  cog: "https://www.figma.com/api/mcp/asset/1e078d0c-fb63-44b5-a5cd-8a488eca93e3",
  wisdom21: "https://www.figma.com/api/mcp/asset/c0f00631-ecb8-44d4-915a-90af14ca7b48",
  rocketLunch21: "https://www.figma.com/api/mcp/asset/e2fad520-0346-4384-b77f-6cab3ead48db",
  bullseyeArrow1: "https://www.figma.com/api/mcp/asset/8892827a-47cf-4d59-b0b5-e3fbc66d48d0",
  compassOutline: "https://www.figma.com/api/mcp/asset/093b44b2-8b64-4eda-86ea-4bd037825b75",
  lightbulbOn10: "https://www.figma.com/api/mcp/asset/1cfbc295-d34c-441f-8ccd-57dce5d9d257",
  accountPlusOutline: "https://www.figma.com/api/mcp/asset/58ac8dfc-a510-45ae-960f-a74400c575b4",
  codeBlockTags: "https://www.figma.com/api/mcp/asset/62e6ddd4-6ccc-48a1-bd07-99a3360e6f42",
  maskGroup2: "https://www.figma.com/api/mcp/asset/f003190c-4b3e-45ed-b9cc-3e26b171912c",
  frame110: "https://www.figma.com/api/mcp/asset/ecc40c35-a713-45b1-8197-270b80cd65cf",
  maskGroup3: "https://www.figma.com/api/mcp/asset/da1fe019-d4e5-4be8-9e41-33cf546c3708",
};

// Type definitions
interface NavItem {
  label: string;
  href: string;
}

interface Testimonial {
  name: string;
  role: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
}

interface TargetAudience {
  icon: string;
  description: string;
}

interface Differential {
  icon: string;
  title: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left';
}

// Navigation Component
const Navigation: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Nossa Missão', href: '#mission' },
    { label: 'Como Funciona', href: '#how-it-works' },
    { label: 'Nossos Alunos', href: '#students' },
    { label: 'Diferenciais', href: '#differentials' },
  ];

  return (
    <nav className="fixed top-[70px] left-1/2 transform -translate-x-1/2 z-50 bg-white/90 rounded-[79px] px-[85px] py-4 flex items-center gap-10 shadow-lg">
      <div className="flex items-center gap-5">
        <img src={images.frame4167} alt="Brilance Logo" className="w-8 h-4" />
        <span className="text-2xl font-semibold text-black">Brilance</span>
      </div>
      <ul className="flex gap-10">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-xl font-semibold text-[#080808] hover:text-[#5c3e94] transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[955px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.heroBackground}
          alt="Space Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00041b]/80" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10 w-[624px]">
        <h1 className="text-[56px] font-semibold text-white text-center leading-tight">
          Sua Força. Sua Essência. Sua Liberdade.
        </h1>
        <p className="text-base font-bold text-white text-center w-[408px]">
          Uma escola criada para despertar sua força interior e transformar bloqueios em
          confiança, liberdade e autenticidade
        </p>
        <button className="relative group">
          <div className="bg-[#030729] border-[1.582px] border-[rgba(148,139,219,0.63)] rounded-[56px] px-8 py-4 backdrop-blur-[14.55px]">
            <span className="text-xl font-medium text-white">Comece a sua Jornada</span>
          </div>
        </button>
      </div>
    </section>
  );
};

// Mission Section Component
const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-20 px-[336px] flex gap-20 items-center">
      <div className="relative w-[632px] h-[463px] rounded-3xl border-[6px] border-[#d7dde5] overflow-hidden">
        <img
          src={images.image20}
          alt="Mission Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-6 w-[547px]">
        <div className="flex items-center gap-2">
          <p className="text-base font-semibold text-white/80">NOSSA MISSÃO</p>
          <div className="bg-white border-[3px] border-white/31 rounded-[20.5px] p-2">
            <img src={images.school} alt="School Icon" className="w-6 h-6" />
          </div>
        </div>

        <h2 className="text-[40px] font-medium text-white leading-tight">
          Descubra Sua Força Interior
        </h2>

        <p className="text-base font-semibold text-white leading-normal">
          Na Brilance, acreditamos que cada pessoa carrega uma força única. Nosso propósito é
          ajudá-lo a despertar essa luz, superar bloqueios e viver com confiança e
          autenticidade. Criamos um espaço seguro e inspirador onde sua essência pode
          florescer, e sua liberdade de ser quem é se torna celebração.
        </p>

        <button className="relative inline-flex items-center gap-2">
          <div className="bg-[#030729] border-[1.582px] border-[rgba(148,139,219,0.63)] rounded-[56px] px-8 py-4 backdrop-blur-[14.55px]">
            <span className="text-xl font-medium text-white">Saiba mais</span>
          </div>
          <div className="bg-[#030729] border border-[#5c3e94] rounded-full p-5">
            <img src={images.frame} alt="Arrow" className="w-6 h-6" />
          </div>
        </button>
      </div>
    </section>
  );
};

// Process Steps Component
const ProcessSteps: React.FC = () => {
  const steps: ProcessStep[] = [
    { number: '01', title: 'Reconheça e compreenda seus bloqueios.' },
    { number: '02', title: 'Transforme vulnerabilidades em força.' },
    { number: '03', title: 'Acesse sua inteligência superior.' },
    { number: '04', title: 'Viva com confiança e liberdade.' },
  ];

  return (
    <section id="how-it-works" className="py-20 px-[336px]">
      <div className="flex flex-col items-center gap-6 mb-16">
        <div className="bg-white border-[3px] border-white/31 rounded-[20.5px] p-2">
          <img src={images.cog} alt="Cog Icon" className="w-6 h-6" />
        </div>
        <p className="text-xl font-semibold text-white/80">COMO FUNCIONA</p>
        <h2 className="text-[40px] font-medium text-white text-center w-[490px] leading-tight">
          Liberte-se das Amarras do Medo e dos Traumas
        </h2>
        <p className="text-base font-semibold text-white text-center w-[496px]">
          Nossa metodologia combina práticas introspectivas, técnicas de desenvolvimento
          pessoal e ferramentas inovadoras para transformar vulnerabilidades em força.
        </p>
      </div>

      <div className="relative min-h-[600px]">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`absolute flex items-center gap-3 ${
              index === 0 ? 'left-6 top-0' : 
              index === 1 ? 'right-6 top-[150px]' : 
              index === 2 ? 'left-6 top-[300px]' : 
              'right-6 top-[450px]'
            }`}
          >
            <span className="text-[66px] font-black text-[rgba(255,187,0,0.72)]">
              {step.number}
            </span>
            <div className="w-[1px] h-24 bg-white/30 rotate-90" />
            <p className="text-2xl font-semibold text-white/80 max-w-[450px]">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Target Audience Component
const TargetAudienceSection: React.FC = () => {
  const audiences: TargetAudience[] = [
    { icon: images.compassOutline, description: 'Pessoas que sentem que a vida perdeu direção.' },
    { icon: images.lightbulbOn10, description: 'Profissionais em busca de propósito.' },
    { icon: images.accountPlusOutline, description: 'Jovens e adultos querem superar medo e traumas.' },
    { icon: images.codeBlockTags, description: 'Quem deseja unir desenvolvimento humano e inovação tecnológica' },
  ];

  return (
    <section className="py-20 px-[336px] flex gap-20">
      <div className="flex flex-col gap-8 w-[368px]">
        <div>
          <p className="text-base font-semibold text-black/80 mb-4">PARA QUEM É</p>
          <h2 className="text-[32px] font-medium text-black/60 leading-tight">
            Escola Brilance: Unidos para Elevar o Mundo
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {audiences.map((audience, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-4">
                <div className="bg-[#f4f4f4] rounded-lg p-2 shadow-lg">
                  <img src={audience.icon} alt="" className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-black/80">{audience.description}</p>
              </div>
              {index < audiences.length - 1 && <div className="h-[1px] bg-gray-300" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="relative w-[483px] h-[423px]">
        <img
          src={images.frame21}
          alt="Target Audience"
          className="w-full h-full object-cover rounded-lg border-[7px] border-[#d9dde0]"
        />
      </div>
    </section>
  );
};

// Testimonials Component
const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'ISABELA LUCAS, CEO',
      role: 'Economist and Data Scientist',
      description: 'Bringing deep business insight and strategic technology consulting expertise across diverse industries, Isabela specializes in understanding complex organizational challenges and turning them into effecti',
    },
    {
      name: 'ISABELA LUCAS, CEO',
      role: 'Economist and Data Scientist',
      description: 'Bringing deep business insight and strategic technology consulting expertise across diverse industries, Isabela specializes in understanding complex organizational challenges and turning them into effecti',
    },
    {
      name: 'ISABELA LUCAS, CEO',
      role: 'Economist and Data Scientist',
      description: 'Bringing deep business insight and strategic technology consulting expertise across diverse industries, Isabela specializes in understanding complex organizational challenges and turning them into effecti',
    },
  ];

  return (
    <section id="students" className="py-20 overflow-hidden">
      <div className="flex flex-col items-center gap-6 mb-12">
        <h2 className="text-[40px] font-medium text-white text-center">Nossos Alunos</h2>
      </div>

      <div className="flex gap-6 animate-scroll">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-[#d9e1ec] rounded-[18px] p-8 min-w-[530px] flex-shrink-0"
          >
            <h3 className="text-2xl font-bold text-[#2a3351] mb-2">{testimonial.name}</h3>
            <p className="text-sm font-medium text-[rgba(73,73,73,0.62)] mb-4">
              {testimonial.role}
            </p>
            <p className="text-xs text-[#2a3351] leading-relaxed">
              {testimonial.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Differentials Component
const DifferentialsSection: React.FC = () => {
  const differentials: Differential[] = [
    { icon: images.wisdom21, title: 'Programa pioneiro desenvolvido por especialistas.', position: 'top-left' },
    { icon: images.rocketLunch21, title: 'Conexão com carreiras do futuro', position: 'bottom-right' },
    { icon: images.lightbulbOn10, title: 'Ambiente inovador com laboratórios e experimentação.', position: 'top-right' },
    { icon: images.bullseyeArrow1, title: 'Formação personalizada para cada estudante.', position: 'bottom-left' },
  ];

  return (
    <section id="differentials" className="py-20 px-[336px]">
      <div className="flex flex-col items-center gap-6 mb-16">
        <p className="text-base font-semibold text-white text-center">DIFERENCIAIS</p>
        <h2 className="text-[40px] font-medium text-white text-center w-[488px] leading-tight">
          Escola Brilance: Unidos para Elevar o Mundo
        </h2>
        <p className="text-base font-semibold text-white text-center w-[504px]">
          A Escola Brilance une conhecimento científico, práticas de desenvolvimento humano e
          inovação tecnológica para criar um programa pioneiro e transformador.
        </p>
      </div>

      <div className="relative h-[600px] flex items-center justify-center">
        <div className="absolute w-[769px] h-[769px] rounded-full border-[2px] border-white/20" />
        
        <img
          src={images.image27}
          alt="Center Image"
          className="relative z-10 w-[237px] h-[265px] rounded-lg opacity-90"
        />

        {differentials.map((diff, index) => (
          <div
            key={index}
            className={`absolute bg-white rounded-2xl p-4 flex items-center gap-4 w-[410px] ${
              diff.position === 'top-left' ? 'top-0 left-0' :
              diff.position === 'top-right' ? 'top-0 right-0' :
              diff.position === 'bottom-left' ? 'bottom-0 left-0' :
              'bottom-0 right-0'
            }`}
          >
            <div className="bg-[#071739] rounded-lg p-3 shadow-lg">
              <img src={diff.icon} alt="" className="w-9 h-9" />
            </div>
            <p className="text-base font-semibold text-black/80 flex-1">{diff.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-[336px] relative">
      <div className="flex items-center gap-20">
        <div className="flex flex-col gap-6 max-w-[500px]">
          <h2 className="text-[56px] font-semibold text-white/96 leading-tight">
            Transforme sua <span className="text-[#8561c9]">Vida</span>
          </h2>
          <p className="text-sm text-white leading-normal">
            Junte-se a nós nesta aventura transformadora. Liberte seu potencial, afirme sua
            confiança e abrace a liberdade de sua essência natural. Juntos, faremos brilhar
            sua força interior, pois o mundo precisa da sua luz.
          </p>
          <p className="text-sm text-white leading-normal">
            Dê o primeiro passo rumo à descoberta de seu poder interior. O futuro o aguarda, e
            está repleto de possibilidades infinitas.
          </p>
          <button className="bg-[rgba(3,7,41,0.43)] border border-[#948bdb] rounded-[45px] px-8 py-4 backdrop-blur-[11.6px] w-fit">
            <span className="text-base font-medium text-white">Descubra o seu Potencial</span>
          </button>
        </div>

        <div className="relative w-[500px] h-[677px]">
          <img
            src={images.noBg1}
            alt="Transform Your Life"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00041b] py-20 px-[336px]">
      <div className="grid grid-cols-3 gap-20">
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-extrabold text-white">Brilance</h3>
          <p className="text-[23px] font-light text-white">
            Na Escola Brilance, o futuro da performance espera por você. Está preparado?
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="exemplo@.com"
              className="w-full bg-transparent border border-[#6e4cad] rounded-lg px-10 py-6 text-white/60 placeholder:text-white/60"
            />
            <button className="absolute right-0 top-0 bg-[#6e4cad] rounded-lg px-5 py-6 h-full">
              <span className="text-[23px] font-bold text-white/67">Receber</span>
            </button>
          </div>
          <div>
            <p className="text-[22px] font-bold text-white tracking-wide mb-5">SIGA-NOS</p>
            <img src={images.frame110} alt="Social Media Icons" className="h-[27px]" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold text-white mb-4">Links</h3>
          <a href="#mission" className="text-[23px] text-white hover:text-[#8561c9]">
            Nossa missão
          </a>
          <a href="#how-it-works" className="text-[23px] text-white hover:text-[#8561c9]">
            Categoria
          </a>
          <a href="#students" className="text-[23px] text-white hover:text-[#8561c9]">
            Loja
          </a>
          <a href="#differentials" className="text-[23px] text-white hover:text-[#8561c9]">
            Sobre nós
          </a>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold text-white mb-4">Contacte-nos</h3>
          <p className="text-[23px] text-white">920 000 000</p>
          <p className="text-[23px] text-white">Brilance@gmail.com</p>
          <p className="text-[23px] text-white">Porto, Boa Vista</p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const BrilanceLanding: React.FC = () => {
  return (
    <div className="bg-[#00041b] min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[3306px] left-[-172px] w-[633px] h-[633px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-[5199px] left-[-267px] w-[633px] h-[633px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-[7118px] right-[336px] w-[725px] h-[725px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-[7817px] left-[-545px] w-[760px] h-[760px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <Navigation />
      <HeroSection />
      <MissionSection />
      <ProcessSteps />
      <TargetAudienceSection />
      <TestimonialsSection />
      <DifferentialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default BrilanceLanding;

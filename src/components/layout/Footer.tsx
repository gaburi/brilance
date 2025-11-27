import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import type { NewsletterFormData } from '@/types';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants';

export const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call - replace with actual newsletter subscription
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Newsletter subscription:', data);
      setSubmitMessage('Obrigado por se inscrever!');
      reset();
    } catch (error) {
      setSubmitMessage('Erro ao inscrever. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social Media SVG Icons
  const FacebookIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );

  const LinkedinIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  const YoutubeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
      <path d="m10 15 5-3-5-3z"></path>
    </svg>
  );

  const socialIconsMap = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    linkedin: LinkedinIcon,
    youtube: YoutubeIcon,
  };

  const footerLinks = [
    { label: 'Nossa missão', href: '#mission' },
    { label: 'Como funciona', href: '#how-it-works' },
    { label: 'Nossos Alunos', href: '#students' },
    { label: 'Diferenciais', href: '#differentials' },
  ];

  return (
    <footer className="bg-[#00041b] py-20 px-8 md:px-16 lg:px-[336px]">
      {/* Main Footer Container - FLEXBOX */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start justify-between max-w-7xl mx-auto">
        {/* Column 1: Brand & Newsletter - Largest column (52.6% proporção) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 w-full md:w-[48%] lg:w-[35%] xl:w-[36%] 2xl:w-[30%]"
        >
          <h3 className="text-2xl font-bold text-white leading-none">
            Brilance
          </h3>
          <p className="text-base font-light text-white leading-relaxed">
            Na Escola Brilance, o futuro da performance espera por você. Está
            preparado?
          </p>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex items-stretch gap-0 overflow-hidden"
          >
            <input
              type="email"
              placeholder="exemplo@email.com"
              {...register('email', {
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                },
              })}
              className={`flex-1 min-w-0 bg-transparent border ${
                errors.email ? 'border-red-500' : 'border-[#6e4cad]'
              } rounded-l-lg border-r-0 px-4 md:px-5 lg:px-6 py-3 md:py-4 text-sm md:text-base text-white placeholder:text-white/60 focus:outline-none focus:border-primary-violet transition-colors`}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-shrink-0 bg-[#6e4cad] hover:bg-primary-violet rounded-r-lg border border-[#6e4cad] border-l-0 px-4 md:px-5 lg:px-6 py-3 md:py-4 transition-colors disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
            >
              <span className="text-xs md:text-sm lg:text-base font-bold text-white/90">
                {isSubmitting ? 'Enviando...' : 'Receber'}
              </span>
              <Send className="w-4 h-4 md:w-5 md:h-5 text-white/90 flex-shrink-0" />
            </button>
          </form>

          {/* Form Messages */}
          {errors.email && (
            <p className="text-red-400 text-sm -mt-4">{errors.email.message}</p>
          )}
          {submitMessage && (
            <p
              className={`text-sm -mt-4 ${submitMessage.includes('Erro') ? 'text-red-400' : 'text-green-400'}`}
            >
              {submitMessage}
            </p>
          )}

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <p className="text-base font-bold text-white tracking-wide leading-none">
              SIGA-NOS
            </p>
            <div className="flex gap-3 md:gap-4">
              {SOCIAL_LINKS.map((social: any) => {
                const platform = social.platform || 'facebook';
                const Icon =
                  socialIconsMap[platform as keyof typeof socialIconsMap];
                return (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-primary-violet flex items-center justify-center transition-colors"
                    aria-label={`Follow us on ${platform}`}
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 text-white">
                      <Icon />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Column 2: Links - Smallest column (21.1% proporção) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 w-full md:w-[22%] lg:w-[16%] xl:w-[16%] 2xl:w-[12%]"
        >
          <h3 className="text-2xl font-bold text-white leading-none">Links</h3>
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-white hover:text-[#8561c9] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Column 3: Contact Info - Medium column (26.3% proporção) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-6 w-full md:w-[25%] lg:w-[20%] xl:w-[20%] 2xl:w-[15%]"
        >
          <h3 className="text-2xl font-bold text-white leading-none">
            Contacte-nos
          </h3>
          <p className="text-base text-white break-words">
            {CONTACT_INFO.phone}
          </p>
          <p className="text-base text-white break-words">
            {CONTACT_INFO.email}
          </p>
          <p className="text-base text-white break-words">
            {CONTACT_INFO.address}
          </p>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 pt-8 border-t border-white/10 text-center max-w-7xl mx-auto"
      >
        <p className="text-white/60 text-base md:text-lg">
          © {new Date().getFullYear()} Brilance. Todos os direitos reservados.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;

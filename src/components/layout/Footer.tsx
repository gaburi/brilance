import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Facebook, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
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

  const socialIconsMap = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    youtube: Youtube,
  };

  const footerLinks = [
    { label: 'Nossa missão', href: '#mission' },
    { label: 'Como funciona', href: '#how-it-works' },
    { label: 'Nossos Alunos', href: '#students' },
    { label: 'Diferenciais', href: '#differentials' },
  ];

  return (
    <footer className="bg-[#00041b] py-20 px-8 md:px-16 lg:px-[336px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
        {/* Brand & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <h3 className="text-2xl font-extrabold text-white">Brilance</h3>
          <p className="text-base font-light text-white leading-relaxed">
            Na Escola Brilance, o futuro da performance espera por você. Está preparado?
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="relative">
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
              className={`w-full bg-transparent border ${
                errors.email ? 'border-red-500' : 'border-[#6e4cad]'
              } rounded-lg px-10 py-6 text-white placeholder:text-white/60 focus:outline-none focus:border-primary-violet transition-colors`}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-0 top-0 bg-[#6e4cad] hover:bg-primary-violet rounded-lg px-5 py-6 h-full transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <span className="text-base font-bold text-white/90">
                {isSubmitting ? 'Enviando...' : 'Receber'}
              </span>
              <Send className="w-5 h-5 text-white/90" />
            </button>
          </form>

          {/* Form Messages */}
          {errors.email && (
            <p className="text-red-400 text-sm -mt-4">{errors.email.message}</p>
          )}
          {submitMessage && (
            <p className={`text-sm -mt-4 ${submitMessage.includes('Erro') ? 'text-red-400' : 'text-green-400'}`}>
              {submitMessage}
            </p>
          )}

          {/* Social Media */}
          <div>
            <p className="text-lg font-bold text-white tracking-wide mb-6">SIGA-NOS</p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social: any) => {
                const platform = social.platform || 'facebook';
                const Icon = socialIconsMap[platform as keyof typeof socialIconsMap];
                return (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary-violet flex items-center justify-center transition-colors"
                    aria-label={`Follow us on ${platform}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Links</h3>
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

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Contacte-nos</h3>
          <p className="text-base text-white">{CONTACT_INFO.phone}</p>
          <p className="text-base text-white">{CONTACT_INFO.email}</p>
          <p className="text-base text-white">{CONTACT_INFO.address}</p>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 pt-8 border-t border-white/10 text-center"
      >
        <p className="text-white/60 text-lg">
          © {new Date().getFullYear()} Brilance. Todos os direitos reservados.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;

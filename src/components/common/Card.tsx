import React from 'react';
import { motion } from 'framer-motion';
import type { CardProps } from '@/types';

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  rounded = true,
  children,
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-white/5 border border-white/10',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20',
    elevated: 'bg-white shadow-lg',
  };

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const roundedStyles = rounded ? 'rounded-3xl' : '';

  const baseStyles = `transition-all duration-300 ${roundedStyles}`;

  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;

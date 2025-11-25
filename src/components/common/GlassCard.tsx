import React from 'react';
import { motion } from 'framer-motion';
import type { GlassCardProps } from '@/types';

export const GlassCard: React.FC<GlassCardProps> = ({
  blur = 'md',
  opacity = 10,
  border = true,
  children,
  className = '',
}) => {
  const blurStyles = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const borderStyles = border ? 'border border-white/20' : '';

  const baseStyles = `bg-white/${opacity} ${blurStyles[blur]} ${borderStyles} rounded-3xl`;

  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;

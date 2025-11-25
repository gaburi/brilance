import React from 'react';
import { motion } from 'framer-motion';
import type { IconBoxProps } from '@/types';

export const IconBox: React.FC<IconBoxProps> = ({
  icon: Icon,
  size = 'md',
  variant = 'default',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-12 h-12 p-2',
    lg: 'w-16 h-16 p-3',
    xl: 'w-20 h-20 p-4',
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40,
  };

  const variantStyles = {
    default: 'bg-white border-[3px] border-white/31',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20',
    solid: 'bg-primary-violet border border-primary-light',
  };

  const baseStyles = 'inline-flex items-center justify-center rounded-[20.5px]';

  return (
    <motion.div
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Icon className="text-primary-dark" {...({ size: iconSizes[size] } as any)} />
    </motion.div>
  );
};

export default IconBox;

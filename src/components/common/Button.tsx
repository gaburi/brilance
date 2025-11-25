import React from 'react';
import { motion } from 'framer-motion';
import type { ButtonProps } from '@/types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'relative group inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-[56px] overflow-hidden';

  const variantStyles = {
    primary: 'bg-[#030729] border-[1.582px] border-[rgba(148,139,219,0.63)] backdrop-blur-[14.55px] text-white hover:border-[#8561c9] hover:shadow-[0_0_20px_rgba(133,97,201,0.4)]',
    secondary: 'bg-white/10 border border-white/20 backdrop-blur-md text-white hover:bg-white/20',
    ghost: 'bg-transparent text-white hover:bg-white/10',
    glass: 'glass-effect text-white hover:bg-white/20',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-xl',
    lg: 'px-10 py-5 text-2xl',
    xl: 'px-12 py-6 text-3xl',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  const { onClick, type = 'button' } = props;

  return (
    <motion.button
      className={combinedStyles}
      disabled={disabled || isLoading}
      onClick={onClick}
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      {leftIcon && <span className="relative z-10">{leftIcon}</span>}

      <span className="relative z-10">
        {isLoading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white" />
        ) : (
          children
        )}
      </span>

      {rightIcon && <span className="relative z-10">{rightIcon}</span>}
    </motion.button>
  );
};

export default Button;

import React from 'react';
import { Button as NextUiButton } from '@nextui-org/react';
export interface ButtonProps {
  children?: any;
  onClick?: any;
  className?: string;
  isCorrect?: boolean;
  disabled?: boolean;
  type?: 'sm' | 'md' | 'lg';
}

export const QuizzButton: React.FC<ButtonProps> = ({
  children,
  isCorrect = null,
  className,
  onClick,
}) => {
  let isCorrecClass =
    'bg-purple enabled:hover:bg-transparent  enabled:hover:text-purple  enabled:hover:border  enabled:hover:border-purple';
  if (isCorrect === true) {
    isCorrecClass = 'bg-green-600';
  } else if (isCorrect === false) {
    isCorrecClass = 'bg-red-600';
  }
  return (
    <NextUiButton
      onClick={onClick}
      className={`p-4 h-14 ${isCorrecClass} md:text-base flex justify-center text-sm text-white  uppercase ${className}`}
      disabled={isCorrect === true || isCorrect === false ? true : false}
    >
      {children}
    </NextUiButton>
  );
};

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  className,
  onClick,
  type,
}) => {
  const size = {
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
  };
  return (
    <NextUiButton
      onClick={onClick}
      className={`${
        (type && size[type]) || size['md']
      } h-14 bg-purple enabled:hover:bg-transparent p-button enabled:hover:text-purple flex justify-center enabled:hover:border  enabled:hover:border-purple text-white  uppercase ${className}`}
      disabled={disabled}
    >
      {children || ''}
    </NextUiButton>
  );
};

export default Button;

import React, { ReactNode, FC } from 'react';

interface ButtonProps {
  title: string
  stylet?: string; 
  children?: ReactNode;  
  onClick?: () => void; 
}

const Button: FC<ButtonProps> = ({
  stylet = 'bg-blue-500', 
  children, 
  title,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${stylet}`}
    >
      {title}
      {children}
    </button>
  );
};

export default Button;

import { FC, ReactElement } from 'react';

import classes from './Button.module.css';


export interface ButtonProps {
  type?: string;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  children?: any
}

const Button = (
{  children, 
   className,
   onClick
}: ButtonProps): ReactElement => {
  return (
    <button
      type={'submit'}
      className={`${classes.button} ${className ?? ''}`}
      onClick={onClick}
      style={{'marginLeft': '15px'}}
    >
      {children}
    </button> 
  );
};

export default Button;

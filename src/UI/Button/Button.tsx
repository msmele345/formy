import { FC, ReactElement } from 'react';

import classes from './Button.module.css';


export interface ButtonProps {
  type: string;
  className: string;
  onClick?: () => void;
  isDisabled: boolean;
  children?: any
}

const Button: FC<ButtonProps> = (props: ButtonProps): ReactElement => {
  return (
    <button
      type={'submit'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.children}
    </button> 
  );
};

export default Button;

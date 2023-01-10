import React from 'react';
import classes from './BasicInput.module.css';

type Input = {
  id: string;
  className?: string;
  type: string;
  step?: string;
  min?: number;
  max?: number;
  defaultValue?: string | number;
  value: number | number | undefined;
}

interface BasicInputProps {
  input: Input;
  label: string;
}

const BasicInput = ({ input, label }: BasicInputProps): JSX.Element => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input}  />
  </div>
  )
};

export default BasicInput;
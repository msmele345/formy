import React, { forwardRef, RefObject, useImperativeHandle, useRef } from 'react';
import classes from './PersonalInfoForm.module.css';

export type StandardInputProps = {
  value?: string | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  id: string;
  label: string;
  ref?: RefObject<HTMLInputElement> | undefined;
  forwardRef?: RefObject<HTMLInputElement> | undefined;
}

const InputForwardRef = React.forwardRef((props: StandardInputProps, ref: any) => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  const activate = () => {
    console.log('INPUT REF VAL', inputRef?.current?.value);
    inputRef.current?.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  });

  return (
    <div className={classes.control}>
    <label htmlFor={props.id}>{props.label}</label>
    <input 
      id={props.id}   
      type={'text'} 
      ref={inputRef}>
    </input>
  </div>
  )
});

export default InputForwardRef;
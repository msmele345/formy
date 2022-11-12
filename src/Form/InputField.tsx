import React, { ChangeEvent, FC, LegacyRef, MutableRefObject, PropsWithChildren, RefObject, useState } from "react";
import { isPropertySignature } from "typescript";
import Card from "../UI/Card/Card";
import classes from './PersonalInfoForm.module.css';

export interface InputFieldProps {
  id: string;
  type: string;
  value: string | number;
  label: string;
  customCss?: string
  labelCss?: string;
  placeholder?: string;
  forwardRef?: RefObject<HTMLInputElement> | undefined;
  isDiabled?: (val: any) => boolean;
  setFieldId: (val: string) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<PropsWithChildren<InputFieldProps>> = (
{
  id,
  type,
  value,
  forwardRef,
  placeholder,
  label,
  setFieldId
} 
): JSX.Element => {

  const [enteredText, setEnteredText] = useState('');

  return (
    <Card classes={classes.login}>
        <div className={`${classes.control}`} style={{marginTop: '80px', maxWidth: '50px'}}>
          <label htmlFor={id}>{label}</label>
          <input 
            onChange={(e) => {
              setEnteredText(e.target.value)
              setFieldId(id);
            }}
            id={id} 
            type={type} 
            value={enteredText}
            ref={forwardRef}>
          </input>
        </div>
    </Card>
  )
};

export default InputField;
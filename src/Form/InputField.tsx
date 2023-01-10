import React, { FC, PropsWithChildren, RefObject } from "react";
import { formStyle } from "./form-constants";
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
  forwardRef,
  label,
  setFieldId,
  onBlur,
  onFocus
} 
): JSX.Element => {

  // const style = {marginTop: '80px', maxWidth: '200px', minHeight: '80px'};

  return (
        <div className={classes.control}>
          <label style={{'marginLeft': '10px', 'marginTop': '10px'}}  htmlFor={id}>{label}</label>
          <input 
            onChange={(e) => setFieldId(e.target.value)}
            id={id}   
            type={type} 
            ref={forwardRef}
            style={formStyle}
            onBlur={onBlur}
            onFocus={onFocus}>
          </input>
        </div>  
  )
};

export default InputField;

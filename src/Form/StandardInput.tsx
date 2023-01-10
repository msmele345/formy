import { FC, ReactElement, RefObject, useContext, useEffect, useState } from "react";
import FormContext from "../store/form-context";
import { formStyle } from "./form-constants";
import classes from './PersonalInfoForm.module.css';

export type StandardInputProps = {
  value: string | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  id: string;
  label: string;
  ref?: RefObject<HTMLInputElement>;
};

const StandardInput: FC<StandardInputProps> = ({
  value,
  onChange,
  onBlur,
  onFocus,
  type,
  id,
  label
}): ReactElement => {

    const formCtx = useContext(FormContext);
    const [inputStyles, setInputStyles2] = useState({});

    useEffect(() => {

      if(formCtx.emailIsValid === false && id === 'email-input') {
        setInputStyles2({ borderColor: 'red' });
      } else if(formCtx.firstNameIsValid === false && id === 'first-name-input') {
        setInputStyles2({ borderColor: 'red' });
      } else {
        setInputStyles2({});
      }
      
    }, [formCtx, id])

    // function setInputStyles() {
    //   if(formCtx.emailIsValid === false && id === 'email-input') {
    //     return { borderColor: 'red' }
    //   }

    //   if(formCtx.firstNameIsValid === false && id === 'first-name-input') {
    //     return { borderColor: 'red' }
    //   }
    //   return formStyle;
    // }

    return (
      <div className={classes.control}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          // style={formStyle} 
          style={inputStyles}
          // className={`${formCtx.emailIsValid === false ? classes.invalid : ''}`}
        />
        <br/>
        <div id={'helper-text'} style={{color: 'red', display: 'block'}}>
            {/* <p>Error Text. Please Enter a ValidValue</p> */}
        </div>
    </div>
    )
};

export default StandardInput;
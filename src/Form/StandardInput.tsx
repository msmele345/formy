import { FC, ReactElement, RefObject } from "react";
import { formStyle, labelStyle } from "./form-constants";
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
    return (
      <div className={`${classes.control}`}>
        <label style={labelStyle} htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          style={formStyle} 
        />
    </div>
    )
};

export default StandardInput;

//${emailIsValid === false ? classes.invalid : ''}
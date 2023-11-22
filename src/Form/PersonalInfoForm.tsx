import { ReactElement, RefObject, useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import InputField from "./InputField";
import classes from './PersonalInfoForm.module.css';


export interface PersonalInfoFormProps {
  inputFields: string[];
  loginHandler: (val: boolean) => void;
  setFormData: (data: FormData) => void;
};

export interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
};

const PersonalInfoForm = (props: PersonalInfoFormProps): ReactElement => {

  const [fieldId, setFieldId] = useState('');

  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>()
  const emailRef = useRef<HTMLInputElement>();

  const mapRef = (fieldName: string): RefObject<HTMLInputElement> | undefined => { 
    
    if(fieldName === 'First Name') {
      return firstNameRef as RefObject<HTMLInputElement>;
    } if(fieldName === 'Last Name') {
      return lastNameRef as RefObject<HTMLInputElement>;
    } if(fieldName === 'Email') {
      return emailRef as RefObject<HTMLInputElement>;
    } 
    return undefined; 
  };

  const handleOnFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("ON Focus", firstNameRef.current?.value);
    const field = event.target.id;
    if(field === 'first-name-input') {
       return event.target.value = fieldId
    } if(field === 'last-name-input') {
       return event.target.value = fieldId
    }  if(field === 'email-input') {
       event.target.value = "";
       return event.target.value = fieldId
    }
  };

  const handleOnChange = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      props.setFormData({
        firstName: firstNameRef?.current?.value,
        lastName: lastNameRef?.current?.value,
        email: emailRef?.current?.value,
      });
      props.loginHandler(true);
  };

  const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("ON BLUR", event.target.id);
  };


  return (
    <Card className={classes.login}> 
      <form onSubmit={handleOnChange}>
          { 
            props.inputFields.map((field, index) => (
              <InputField 
                key={index}
                id={field.toLowerCase().split(' ').join('-') + '-input'} 
                type={"text"} 
                value={mapRef(field)?.current?.value!!} 
                label={field}
                forwardRef={mapRef(field)}
                setFieldId={setFieldId}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
                />
            ))
          }
          <Button>Submit</Button>
      </form>
    </Card>
  )
};
   
export default PersonalInfoForm;
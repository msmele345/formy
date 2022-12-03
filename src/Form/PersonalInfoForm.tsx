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

  const handleOnChange = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      props.setFormData({
        firstName: firstNameRef?.current?.value,
        lastName: lastNameRef?.current?.value,
        email: emailRef?.current?.value,
      });
      props.loginHandler(true);
  };


  return (
    <Card classes={classes.login}> 
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
                />
            ))
          }
          <Button>Submit</Button>
      </form>
    </Card>
  )
};
   
export default PersonalInfoForm;

      // if(fieldId === 'first-name-input') {
      //   setFormData({ ...formData, firstName: firstNameRef?.current?.value });
      // }
      // if(fieldId === 'last-name-input') {
      //   console.log("in last name form data", {formData});
      //   setFormData({ ...formData, lastName: lastNameRef?.current?.value });
      // } 
      // if(fieldId === 'email-input') {
      //   console.log("in email form data", {formData});
      //   setFormData({ ...formData, email: emailRef?.current?.value });
      // }
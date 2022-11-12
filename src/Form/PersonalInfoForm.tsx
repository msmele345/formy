import { ReactElement, RefObject, useEffect, useRef, useState } from "react";
import Card from "../UI/Card/Card";
import InputField from "./InputField";
import classes from './PersonalInfoForm.module.css';


export interface PersonalInfoFormProps {
  inputFields: string[];
}

export interface FormData {
  firstName?: string;
  lastName: string;
  ssnRef: string;
  dobRef: string;
}

const PersonalInfoForm = (props: PersonalInfoFormProps): ReactElement => {

  const [formData, setFormData] = useState<FormData>({
    firstName: 'string',
    lastName: 'string',
    ssnRef: 'string',
    dobRef: 'string'
  });

  const [fieldId, setFieldId] = useState('');

  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>()
  const ssnRef = useRef<HTMLInputElement>();
  const dobRef = useRef<HTMLInputElement>();

  useEffect(() => {
    console.log("FORM DATA", {formData});
    console.log("FIELD ID", fieldId);
  },[formData, fieldId])

  const mapRef = (fieldName: string): RefObject<HTMLInputElement> | undefined => { 
    
    if(fieldName === 'First Name') {
      return firstNameRef as RefObject<HTMLInputElement>;
    } if(fieldName === 'Last Name') {
      return lastNameRef as RefObject<HTMLInputElement>;
    } if(fieldName === 'Ssn') {
      return ssnRef as RefObject<HTMLInputElement>;
    } if(fieldName === 'Date Of Birth') {
      return dobRef as RefObject<HTMLInputElement>;
    }
    return undefined;
  };

  const handleOnChange = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if(fieldId === 'first-name-input') {
        setFormData({ ...formData, firstName: firstNameRef?.current?.value });
      }
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
                value={field} 
                label={field}
                forwardRef={mapRef(field)}
                setFieldId={setFieldId}
                />
            ))
          }
          <button type="submit">Submit</button>
      </form>
    </Card>
  )
};
   
export default PersonalInfoForm;
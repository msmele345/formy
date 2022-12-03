import { FC, ReactElement, useState } from "react";
import { StandardFormData } from "../Home/FormsPage";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from './PersonalInfoForm.module.css';
import StandardInput from "./StandardInput";

export type StandardFormProps = {
  formState: StandardFormData;
  setFormState: (data: StandardFormData) => void;
}

const StandardForm: FC<StandardFormProps> = ({
  formState,
  setFormState
}): ReactElement => {

  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log("ON BLUR", event.target.id);
    return "******";
  };
  
  const handleOnFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("ON FOCUS");
    if(event.target.id === 'email-input') {
      return enteredEmail;
    }
    if(event.target.id === 'first-name-input') {
      return enteredFirstName;
    }
  };

  const handleNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log("ON CHANGE", event.target.value);
    setEnteredFirstName(event.target.value);
    setFormState({
      ...formState,
      firstName: event.target.value
    });
    console.log("Form State at Name Change", { formState });
  };

  const handleEmailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log("ON CHANGE", event.target.value);
    setEnteredEmail(event.target.value);
    setFormState({
      ...formState,
      email: event.target.value,
    });
    console.log("Form State at Email Change", { formState });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("ON SUBMIT");
    console.log(enteredFirstName);
    console.log(enteredEmail);
    setFormState({
      ...formState,
      firstName: enteredFirstName,
      email: enteredEmail,
    });

    console.log("Form State at submit", { formState });
    setEnteredEmail('');
    setEnteredFirstName('');
  };
  return (
    <Card classes={classes.login}>
      <div style={{ marginTop: "120px", textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <StandardInput
            value={enteredFirstName}
            label={"First Name"}
            id={"first-name-input"}
            type={"text"}
            onChange={handleNameOnChange}
            // onBlur={handleOnBlur}
            // onFocus={handleOnFocus}
          />
          <StandardInput
            value={enteredEmail}
            label={"Email"}
            id={"email-input"}
            type={"text"}
            onChange={handleEmailOnChange}
            // onBlur={handleOnBlur}
            // onFocus={handleOnFocus}
          />
          <Button>Submit</Button>
        </form>
      </div>
    </Card>
  );
};

export default StandardForm;

/* <InputForwardRef
type={"text"}
id={"first-name-input"}
label={"First Name"}
onBlur={handleOnBlur}
onChange={handleNameOnChange}
// onFocus={}
ref={firstNameRef}
// forwardRef={firstNameRef as RefObject<HTMLInputElement>}
/> */
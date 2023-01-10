import { ReactElement, useState } from "react";
import { StandardFormData } from "../Home/FormsPage";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from './PersonalInfoForm.module.css';
import StandardInput from "./StandardInput";

export type StandardFormProps = {
  formState: StandardFormData;
  setFormState: (data: StandardFormData) => void;
  validationHandler: () => boolean;
}

const StandardForm = ({
  formState,
  setFormState,
  validationHandler
}: StandardFormProps): ReactElement => {

  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredFirstNameIsValid, setEnteredFirstNameisValid] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);

  const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("ON BLUR", event.target.id);
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

    if(enteredFirstName === '') {
      setEnteredFirstNameisValid(false);
    }
    if(enteredEmail === '') {
      setEnteredEmailIsValid(false);
    }

    const isFormValid = validationHandler();

    if(!isFormValid) {
      console.log("FORM INVALID ON SUBMIT");
      return;
    }

    setFormState({
      ...formState,
      firstName: enteredFirstName,
      email: enteredEmail,
    });

    // formCtx.onSubmitValidityHandler();

    console.log("Form State at submit", { formState });
    setEnteredEmail('');
    setEnteredFirstName('');
  };
  return (
    <Card className={classes.login}>
      <div className={classes.control}>
        <form onSubmit={handleSubmit}>
          <StandardInput
            value={enteredFirstName}
            label={"First Name"}
            id={"first-name-input"}
            type={"text"}
            onChange={handleNameOnChange}
            onBlur={handleOnBlur}
            // onFocus={handleOnFocus}
          />
          <StandardInput
            value={enteredEmail}
            label={"Email"}
            id={"email-input"}
            type={"text"}
            onChange={handleEmailOnChange}
            onBlur={handleOnBlur}
            // onFocus={handleOnFocus}
          />
          <Button>Submit</Button>
        </form>
      </div>
    </Card>
  );
};

export default StandardForm;
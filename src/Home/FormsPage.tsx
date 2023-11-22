import { useState } from "react";
import StandardForm from "../Form/StandardForm";
import MainHeader from "../MainHeader/MainHeader";
import FormContext from "../store/form-context";
import ErrorPage from "./ErrorPage";

export type StandardFormData = {
  firstName: string;
  email: string;
};

const FormsPage = () => {
  const [formState, setFormState] = useState<StandardFormData>({
    firstName: "",
    email: "",
  });

  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredFirstNameIsValid, setEnteredFirstNameisValid] = useState(true);

  //set flags in context that value is false
  const validationHandler = (): boolean => {
    let allFieldsValid = true;
    const input = document.getElementById("helper-text")!;

    if (formState.firstName === "") {
      setEnteredFirstNameisValid(false);
      setInvalidFields((prevstate) => [...prevstate, "First Name"]);
      input.innerHTML = `<p>Please Enter a Valid Value</p>`;
      allFieldsValid = false;
    } else {
      input.innerHTML = ``;
      setEnteredFirstNameisValid(true);
    }
    if (formState.email === "") {
      setEnteredEmailIsValid(false);
      setInvalidFields((prevstate) => [...prevstate, "Email"]);
      allFieldsValid = false;
    } else {
      setInvalidFields((prevstate) =>
        [...prevstate].filter((err) => err !== "Email")
      );
      setEnteredEmailIsValid(true);
    }
    return allFieldsValid;
  };

  return (
    <>
      <FormContext.Provider
        value={{
          firstName: formState.firstName,
          email: formState.email,
          emailIsValid: enteredEmailIsValid,
          firstNameIsValid: enteredFirstNameIsValid,
        }}
      >
        <MainHeader />
        <section style={{ marginTop: "120px" }}>
          <StandardForm
            formState={formState}
            setFormState={setFormState}
            validationHandler={validationHandler}
          />
        </section>
        {/* <UserInfo/> */}
        {invalidFields.length > 0 && (
          <ErrorPage invalidFields={invalidFields} />
        )}
      </FormContext.Provider>
    </>
  );
};

export default FormsPage;

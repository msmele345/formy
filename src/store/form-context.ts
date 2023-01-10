import React from "react";

interface FormContextProps {
  firstName: string;
  email: string;
  emailIsValid: boolean;
  firstNameIsValid: boolean;
}

const FormContext = React.createContext<FormContextProps>({
  firstName: '',
  email: '',
  emailIsValid: true,
  firstNameIsValid: true
});

export default FormContext;
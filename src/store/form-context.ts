import React from "react";

interface FormContextProps {
  firstName: string;
  email: string
}

const FormContext = React.createContext<FormContextProps>({
  firstName: '',
  email: ''
});

export default FormContext;
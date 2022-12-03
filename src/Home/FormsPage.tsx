import { useState } from "react";
import StandardForm from "../Form/StandardForm";
import MainHeader from "../MainHeader/MainHeader";
import FormContext from "../store/form-context";
import UserInfo from "./UserInfo";

export type StandardFormData = {
  firstName: string;
  email: string;
}

const FormsPage = () => {

  const [formState, setFormState] = useState<StandardFormData>({
    firstName: "",
    email: "",             
  });

  return (
    <>
      <FormContext.Provider value={{firstName: formState.firstName, email: formState.email}}>
        <MainHeader />
          <StandardForm formState={formState} setFormState={setFormState}/>
          <UserInfo/>
      </FormContext.Provider>
    </>
  );
};

export default FormsPage;
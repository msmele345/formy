import React, { useEffect, useState } from "react";
import AuthContext from "./auth-context";

export interface AuthProps {
  children: any
}

const AuthContextProvider = ({children}: AuthProps) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [formData, setFormData] = useState<AppFormData>({firstName: '', lastName: '',email: ''});

  useEffect(() => {
    const localStorageLoggedin = localStorage.getItem('isLoggedIn');
    localStorageLoggedin === 'true' && setIsLoggedIn(true);
    console.log('LG', isLoggedIn)
  }, [])

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', 'false')
    setIsLoggedIn(false);
  };


  return (
    <>
       <AuthContext.Provider value={{
         isLoggedIn: isLoggedIn,
         onLogout: logoutHandler
        }}>
          {children}
       </AuthContext.Provider>
   </>
  )
};

export default AuthContextProvider;
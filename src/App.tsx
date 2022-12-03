import React, { useEffect, useState } from 'react';
import './App.css';
import PersonalInfoForm from './Form/PersonalInfoForm';
import Home from './Home/Home';
import MainHeader from './MainHeader/MainHeader';
import AuthContext from './store/auth-context';

export interface AppFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
};

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [formData, setFormData] = useState<AppFormData>({firstName: '', lastName: '',email: ''});

  useEffect(() => {
    console.log("FORM DATA", {formData})
  }, [formData])

  useEffect(() => {
    const localStorageLoggedin = localStorage.getItem('isLoggedIn');
    localStorageLoggedin === 'true' && setIsLoggedIn(true);
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
      <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler}}>
        <MainHeader />
          <main>
            <h1 style={{textAlign: 'center'}}>Forms For Dayz</h1>
              {isLoggedIn && <Home formData={formData}/>}
              {!isLoggedIn &&
                <PersonalInfoForm 
                  loginHandler={loginHandler} 
                  inputFields={['First Name', 'Last Name', 'Email']}
                  setFormData={setFormData}
                />
              }
          </main>
        </AuthContext.Provider>
    </>
  );
}

export default App;
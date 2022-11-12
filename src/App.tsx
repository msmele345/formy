import React from 'react';
import './App.css';
import PersonalInfoForm from './Form/PersonalInfoForm';
import MainHeader from './MainHeader/MainHeader';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main >
        <h1>
          Forms For Dayz
        </h1>
        <PersonalInfoForm inputFields={['First Name']}/>
      </main>
    </div>
  );
}

export default App;
// , 'Last Name', 'Ssn', 'Date of Birth'
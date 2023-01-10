import React, { useState } from "react";
import useFireUser from "./hooks/useFireUser";


enum UserRole {
  FAMILY = 'family',  
  FRIEND = 'friend',
  ADMIN = 'admin'
};

type UserProfileProps = {
  id: string;
  firstName: string;
  role?: UserRole;
  fireUser: (id: string) => void;
};

export default function UserProfile({id,  firstName, role = UserRole.FRIEND, fireUser } : UserProfileProps) {

    return (
      <>
        <div>Hey {firstName}, you Suck!</div>
        <button onClick={() => fireUser(id)}>Fire this loser!</button>
      </>
    )
};

type UserProfileStateProps = {
  firstName: string;
  role?: UserRole;
};

function UserProfile2({firstName, role = UserRole.ADMIN } : UserProfileStateProps) {

  const { text, hireAndFireUser } = useFireUser(firstName);

  return (
    <>
      <div>Hey {firstName}, you Suck!</div>
      <button onClick={hireAndFireUser}>
          {text}
      </button>
    </>
  )
};



type UserAdmin = {
  name: string;
  roles: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Employee | UserAdmin;

type ElevatedEmployee = Employee & UserAdmin; //intersection, must have all 3''

function checkEmp(emp: UnknownEmployee) {
      console.log(emp.name) //exists on both types
      if('startDate' in emp) { //type guard number 2, check whats in the object
          console.log("Start Date", emp.startDate)
      }
}

type CardProps = {    
  children: React.ReactNode
};

const CardLayout = ({children} : CardProps) => {
  return <div>{children}</div>
};
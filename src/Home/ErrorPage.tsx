import React from "react";


interface ErrorPageProps {
  invalidFields: string[];
}

const ErrorPage = ({ invalidFields }: ErrorPageProps) => {
  return (
    <div>
      <ul style={{marginLeft: '150px'}}>
        {invalidFields.map((error, index) => (
          <li key={index} style={{fontSize: '30px', color: 'red'}}>
            {error}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default ErrorPage;
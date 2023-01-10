import { useState } from "react";

const useFireUser = (firstName: string) => {
  const [isFired, setIsFired] = useState(false);

  const hireAndFireUser = () => setIsFired(!isFired)

  return {
    text: isFired ? 'You are fired, loser.' : 'Welcome Back',
    hireAndFireUser: hireAndFireUser
  }
};

export default useFireUser; 
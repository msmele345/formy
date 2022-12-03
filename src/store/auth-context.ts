import React from "react";

interface AuthContextValues {
  isLoggedIn: boolean;
  onLogout?: () => void;
}

const AuthContext = React.createContext<AuthContextValues>({
  isLoggedIn: false,
  onLogout: () => {}
});

// const AuthContextProivder = (props: any): ReactElement => {
//   return (
//     <AuthContext.Provider>
//     </AuthContext.Provider>
//   )
// }

export default AuthContext;
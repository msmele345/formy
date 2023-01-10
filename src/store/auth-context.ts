import React from "react";

interface AuthContextValues {
  isLoggedIn: boolean;
  onLogout?: () => void;
}

const AuthContext = React.createContext<AuthContextValues>({
  isLoggedIn: false,
  onLogout: () => {}
});

export default AuthContext;
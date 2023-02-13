import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

const AuthProvider = ({ children }) => {
  const { user, logIn, logOut } = useAuth();

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

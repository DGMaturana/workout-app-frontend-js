// import { useAuth } from "../hooks/useAuth";

import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
// import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();
  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    navigate("/profile");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};

// export const AuthContext = createContext({
//   user: null,
//   logIn: () => {},
//   logOut: () => {},
// });

// const AuthProvider = ({ children }) => {

//   const { user, logIn, logOut } = useAuth();

//   return (
//     <AuthContext.Provider value={{ user, logIn, logOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

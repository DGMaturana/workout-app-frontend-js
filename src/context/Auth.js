import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  //   useEffect(()=>{
  //     const currentUser=
  //   })

  const ingresarUsuario = (data) => {
    const { usuario, token } = data;
    console.log("aa");
    console.log(usuario, token);
    if (!usuario || !token) throw new Error("Autenticación fallada");
    setAuth({
      token,
      usuario,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, ingresarUsuario }}>
      {children}
    </AuthContext.Provider>
  );
};

function getUser() {}

export function useAuth() {
  const { auth } = useContext(AuthContext);

  //   if (!auth) throw new Error("No hay autenticación");

  return auth;
}

export default AuthProvider;

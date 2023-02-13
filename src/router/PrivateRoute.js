import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const PrivateRoute = ({ children }) => {
  const user = useContext(AuthContext);
  console.log(user);
  if (!user) {
    console.log(`no hay!`);
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PrivateRoute;

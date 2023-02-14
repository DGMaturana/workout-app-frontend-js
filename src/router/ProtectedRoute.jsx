import React from "react";
// import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
// import { AuthContext } from "../context/Auth";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log(`en protected route`);
  // const { user } = useAuth();
  console.log(user);
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};

// const PrivateRoute = ({ children }) => {
//   const user = useContext(AuthContext);
//   console.log(user);
//   if (!user) {
//     console.log(`no hay!`);
//     return <Navigate to="/" replace />;
//   }
//   return children;
// };

export default ProtectedRoute;

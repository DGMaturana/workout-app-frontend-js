import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/ui/Header";
import Login from "../pages/Login";
import { ProtectedRoute } from "./PrivateRoute";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>}>
          Home
        </Route>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        {/* <PrivateRoute auth={auth}></PrivateRoute> */}
        <Route path="/register" element={<h1>Registro</h1>}>
          Registro
        </Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <h1>Perfil</h1>
            </ProtectedRoute>
          }
        >
          Registro
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;

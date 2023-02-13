import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/ui/Header";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
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
            <PrivateRoute>
              <h1>Perfil</h1>
            </PrivateRoute>
          }
        >
          Registro
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

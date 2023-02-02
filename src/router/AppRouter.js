import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/ui/Header";
import { useAuth } from "../context/Auth";
import Login from "../pages/Login";

const AppRouter = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route path="/registro" element={() => <h1>Registro</h1>}>
          Registro
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

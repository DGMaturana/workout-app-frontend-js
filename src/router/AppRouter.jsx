import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import { HomeLayout } from "../components/ui/HomeLayout";
import ProtectedLayout from "../components/ui/ProtectedLayout";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<h1>Home</h1>}>
          Home
        </Route>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route path="/register" element={<Register />}>
          Registro
        </Route>
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path="/profile" element={<h1>Profile</h1>}>
          Profile
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;

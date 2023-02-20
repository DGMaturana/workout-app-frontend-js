import React from "react";
import axios from "axios";
import { useFormik } from "formik";

import { TextField, Box, Button } from "@mui/material";
import FormBox from "./ui/FormBox";
import { useAuth } from "../context/Auth";

const registerUrl = `${import.meta.env.VITE_BACKEND_URL}/usuarios`;
const loginUrl = `${import.meta.env.VITE_BACKEND_URL}/auth/login`;

const RegisterForm = () => {
  const { login } = useAuth();
  const handleSubmit = async () => {
    const { nombre, email, password } = formik.values;

    try {
      const response = await axios.post(registerUrl, {
        nombre,
        email,
        password,
      });

      if (response.status == 201) login();
      const loginResponse = await axios.post(loginUrl, {
        email,
        password,
      });

      const { usuario, token } = response.data;
      login(usuario);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <FormBox>
      <TextField
        id="nombre"
        label="Nombre"
        value={formik.values.nombre}
        onChange={formik.handleChange}
      ></TextField>
      <TextField
        id="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
      ></TextField>
      <TextField
        id="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      ></TextField>
      <Button id="button" onClick={formik.handleSubmit} variant="contained">
        Registrar
      </Button>
    </FormBox>
  );
};

export default RegisterForm;

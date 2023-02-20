import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import {
  Alert,
  Button,
  FormControl,
  Grid,
  TextField,
  Box,
} from "@mui/material";
import { useAuth } from "../context/Auth";
import FormBox from "./ui/FormBox";

const loginUrl = `${import.meta.env.VITE_BACKEND_URL}/auth/login`;
const LoginForm = () => {
  const { login } = useAuth();

  const [error, setError] = useState(null);

  // const handleError = (error) => {
  //   console.log("error");
  // };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(loginUrl, {
        email: formik.values.email,
        password: formik.values.password,
      });

      const { usuario, token } = response.data;
      login(usuario);
      // logIn(usuario, token);
    } catch (error) {
      console.log(error);
      const { response } = error;
      setError(response.data.msg);
      // handleError(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });
  // if (user) return <h2>User logeado!</h2>;

  return (
    <FormBox>
      <TextField
        id="email"
        name="email"
        value={formik.values.email}
        placeholder="email"
        onChange={formik.handleChange}
        fullWidth
      />
      <TextField
        id="password"
        name="password"
        type="password"
        placeholder="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        fullWidth
      />
      <Button
        id="button"
        onClick={formik.submitForm}
        variant="contained"
        fullWidth
      >
        Ingresar
      </Button>
      {error && <Alert severity="error">{error}</Alert>}
    </FormBox>
  );
};

export default LoginForm;

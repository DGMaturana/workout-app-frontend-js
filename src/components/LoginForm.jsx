import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Alert, Button, FormControl, Grid, TextField } from "@mui/material";
import { useAuth } from "../context/Auth";
// import { AuthContext } from "../context/Auth";

const baseURL = "http://localhost:8000/api/auth/login";

const LoginForm = () => {
  const { login } = useAuth();

  // const { logIn } = useContext(AuthContext);
  const [error, setError] = useState(null);

  // const handleError = (error) => {
  //   console.log("error");
  // };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(baseURL, {
        email: formik.values.email,
        password: formik.values.password,
      });

      const { usuario, token } = response.data;
      login(usuario);
      // logIn(usuario, token);
    } catch (error) {
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
    <Grid
      container
      direction={"row"}
      alignItems="center"
      justify="flex-end"
      sx={{ height: "100%" }}
    >
      <Grid item xs={12} align="center">
        <FormControl
          onSubmit={formik.handleSubmit}
          sx={{ width: "20em", maxWidth: "100%" }}
        >
          <TextField
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            fullWidth
          />
          <Button
            id="button"
            onClick={formik.submitForm}
            variant="contained"
            type="submit"
          >
            Ingresar
          </Button>
          {error && <Alert severity="error">{error}</Alert>}
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default LoginForm;

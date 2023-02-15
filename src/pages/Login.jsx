import React from "react";
import LoginForm from "../components/LoginForm";
import { Grid, Typography } from "@mui/material";

const Login = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid direction="column" item alignItems="center">
        <Typography variant="h1" fontSize={"4em"} textAlign={"center"}>
          Login
        </Typography>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;

import { Grid, Typography } from "@mui/material";
import React from "react";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid direction="column" item alignItems="center">
        <Typography variant="h2" textAlign={"center"}>
          Registro
        </Typography>
        <RegisterForm />
      </Grid>
    </Grid>
  );
};

export default Register;

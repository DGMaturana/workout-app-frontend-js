import React from "react";
import { FormControl, Grid, TextField, Box, Button } from "@mui/material";
const RegisterForm = () => {
  return (
    <Box
      component="form"
      display={"flex"}
      flexDirection="column"
      sx={{
        "& .MuiTextField-root": { marginY: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Nombre"></TextField>
      <TextField label="Email"></TextField>
      <TextField label="Password" type="password"></TextField>
      <Button id="button" onClick={() => {}} variant="contained">
        Registrar
      </Button>
    </Box>

    // <Grid
    //   container
    //   direction="row"
    //   sx={{
    //     marginY: "2em",
    //   }}
    //   justifyContent="center"
    //   alignItems="center"
    // >
    //   <Grid direction="column" item alignItems="center">
    //     <Grid container direction="column" paddingBottom={4}>
    //       <Grid item marginBottom={2}>
    //         <TextField label="Nombre"></TextField>
    //       </Grid>
    //       <Grid item marginBottom={2}>
    //        <TextField label="Nombre"></TextField>
    //       </Grid>
    //       <Grid item marginBottom={2}>
    //         <TextField label="Password" type="password"></TextField>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default RegisterForm;

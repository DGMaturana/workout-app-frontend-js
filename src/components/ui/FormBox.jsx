import React from "react";
import { Box } from "@mui/material";

const FormBox = ({ children }) => {
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
      {children}
    </Box>
  );
};

export default FormBox;

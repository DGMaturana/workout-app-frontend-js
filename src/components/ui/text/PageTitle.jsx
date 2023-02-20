import React from "react";
import { Typography } from "@mui/material";

const PageTitle = ({ children }) => {
  return (
    <Typography
      variant="h1"
      fontSize={"2.5rem"}
      textAlign={"center"}
      padding={"1rem 0 1rem 0"}
    >
      {children}
    </Typography>
  );
};

export default PageTitle;

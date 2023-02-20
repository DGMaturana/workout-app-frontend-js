import React from "react";
import { Grid } from "@mui/material";

const Card = ({ children }) => {
  //Todo: Revisar/Modificar nombre de componente por uno más adecuado

  return (
    <Grid container direction="row" justifyContent="center" marginTop="2rem">
      <Grid
        item
        xl={2}
        lg={4}
        md={3}
        sm={6}
        xs={8}
        padding="2rem 3rem 4rem 3rem"
        borderRadius="15px"
        boxShadow={`-webkit-box-shadow: 3px 7px 43px 0px rgba(0,0,0,0.21);
                    -moz-box-shadow: 3px 7px 43px 0px rgba(0,0,0,0.21);
                    box-shadow: 3px 7px 43px 0px rgba(0,0,0,0.21);`}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default Card;

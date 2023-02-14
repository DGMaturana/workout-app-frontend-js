import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {/* <Container maxWidth="xl"> */}
        <Toolbar>
          {user ? (
            <>
              <Button onClick={logOut}>
                <Typography
                  variant="button"
                  color={"white"}
                  textTransform={"none"}
                >
                  Logout
                </Typography>
              </Button>
            </>
          ) : (
            <>
              <Button>
                <Link to="register" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="button"
                    color={"white"}
                    textTransform={"none"}
                  >
                    Register
                  </Typography>
                </Link>
              </Button>

              <Button>
                <Link to="login" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="button"
                    color={"white"}
                    textTransform={"none"}
                  >
                    Login
                  </Typography>
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

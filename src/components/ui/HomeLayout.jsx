import { Navigate, Outlet, Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../../context/Auth";

export const HomeLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
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
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};

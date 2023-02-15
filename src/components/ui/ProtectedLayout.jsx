import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const ProtectedLayout = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/dashboard/profile" />;
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={logout}>
              <Typography
                variant="button"
                color={"white"}
                textTransform={"none"}
              >
                Logout
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};

export default ProtectedLayout;

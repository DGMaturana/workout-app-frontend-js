import { Routes, Route } from "react-router-dom";
import AuthProvider from "./context/Auth";
import Login from "./pages/Login";
import { HomeLayout } from "./components/ui/HomeLayout";
import ProtectedLayout from "./components/ui/ProtectedLayout";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<h1>Home</h1>}>
            Home
          </Route>
          <Route path="/login" element={<Login />}>
            Login
          </Route>
          <Route path="/register" element={<h1>Registro</h1>}>
            Registro
          </Route>
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/profile" element={<h1>Profile</h1>}>
            Profile
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

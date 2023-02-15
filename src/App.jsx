import { Routes, Route } from "react-router-dom";
import AuthProvider from "./context/Auth";
import Login from "./pages/Login";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;

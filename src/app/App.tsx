import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { UsuarioProvider } from "../auth/UsuarioProvider";

// Pages
import Login from "../pages/Login/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

//Layout
import { Home } from "../pages/Home/Home";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../partials/LayoutDash";
import UsuarioLayout from "../partials/LayoutUsuario";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Usuarios */}
        <Route path="/" element={<User />}>
          <Route element={<Home />} path="/" />
        </Route>
        <Route element={<NotFound />} />
        <Route element={<Login />} path="/Iniciar" />
        <Route element={<Register />} path="/Registrarse" />
        {/* Dashboard */}
        <Route path="Dashboard" element={<Dash />}>
          <Route element={<Dashboard />} path="/Dashboard" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Dash: React.FC = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};
const User: React.FC = () => {
  return (
    <UsuarioLayout>
      <Outlet />
    </UsuarioLayout>
  );
};
const prev = () => (
  <UsuarioProvider>
    <App></App>
  </UsuarioProvider>
);
export default prev;

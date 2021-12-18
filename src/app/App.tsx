import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { UsuarioProvider } from "../auth/UsuarioProvider";

// Pages
import Login from "../pages/Login/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

//Layout
import { Home } from "../pages/Home/Home";
import { Carrito } from "../pages/Carrito/Carrito";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { ProductosDash } from "../pages/Dashboard/ProductosDash/ProductosDash";
import DashboardLayout from "../partials/LayoutDash";
import UsuarioLayout from "../partials/LayoutUsuario";
import { CategoriasDash } from "../pages/Dashboard/CategoriasDash/CategoriasDash";
import { CategoriaProvider } from "../pages/Dashboard/CategoriasDash/CategoriaProvider";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Usuarios */}
        <Route path="/" element={<User />}>
          <Route element={<Home />} path="/" />
          <Route element={<Carrito />} path="/Carrito" />
        </Route>
        <Route element={<NotFound />} />
        <Route element={<Login />} path="/Iniciar" />
        <Route element={<Register />} path="/Registrarse" />
        {/* Dashboard */}
        <Route path="Dashboard" element={<Dash />}>
          <Route element={<Dashboard />} path="/Dashboard" />
          <Route element={<ProductosDash />} path="/Dashboard/Productos/:categoria" />
          <Route element={<CategoriasDash />} path="/Dashboard/Categorias" />
          <Route element={<ProductosDash />} path="/Dashboard/Estadistica" />
          <Route element={<ProductosDash />} path="/Dashboard/Marketing" />
          <Route element={<ProductosDash />} path="/Dashboard/Pedidos" />
          <Route element={<ProductosDash />} path="/Dashboard/Empresas" />
          <Route element={<ProductosDash />} path="/Dashboard/Clientes" />
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
    <CategoriaProvider>
      <App></App>
    </CategoriaProvider>
  </UsuarioProvider>
);
export default prev;

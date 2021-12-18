import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContenedorDashboard } from "../../components/ContenedorDashboard/ContenedorDashboard";
import { HeaderDashboard } from "../../components/ContenedorDashboard/HeaderDashboard";
import { configScrollReveal } from "../../config/config";
import ScrollReveal from "scrollreveal";
import { ContenidoDashboard } from "../../components/ContenedorDashboard/ContenidoDashboard";
export const Dashboard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    //Para los efectos de aparicion
    ScrollReveal().reveal(".mostrar", configScrollReveal);
    return () => {};
  }, []);

  return (
    <main className="mostrar">
      <ContenedorDashboard>
        {/* Cabecera */}
        <HeaderDashboard titulo={"Dashboard"}>
          {/* Breadcrumbs */}
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item">
              <Link to="/">Inicio</Link>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </HeaderDashboard>

        {/* Contenido */}
        <ContenidoDashboard></ContenidoDashboard>
      </ContenedorDashboard>
    </main>
  );
};

import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ContenedorDashboard } from "../../../components/ContenedorDashboard/ContenedorDashboard";
import { ContenidoDashboard } from "../../../components/ContenedorDashboard/ContenidoDashboard";
import { HeaderDashboard } from "../../../components/ContenedorDashboard/HeaderDashboard";
import { configScrollReveal } from "../../../config/config";
import ScrollReveal from "scrollreveal";
import { ControlesDashboard } from "../../../components/ControlesDashboard/ControlesDashboard";
import { ListaProductosDash } from "./ListaProductosDash";
import { ModalProducto } from "./ModalProducto";

export const ProductosDash: React.FC = () => {
  const params = useParams();

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
        <HeaderDashboard titulo={"Productos"}>
          {/* Breadcrumbs */}
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item">
              <Link to="/Dashboard">Inicio</Link>
            </li>
            {params.categoria === "Todos" ? (
              <li className="breadcrumb-item active">Productos</li>
            ) : (
              <>
                <li className="breadcrumb-item">
                  <Link to="/Dashboard/Productos/Todos">Productos</Link>
                </li>
                <li className="breadcrumb-item active">Categoria</li>
              </>
            )}
          </ol>
        </HeaderDashboard>

        {/* Contenido */}
        <ContenidoDashboard>
          <ControlesDashboard>
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#agregarProducto">
              <i className="fas fa-plus"></i>
              <span className="ms-2">Agregar Producto</span>
            </button>
          </ControlesDashboard>
          <ListaProductosDash />
          <ModalProducto />
        </ContenidoDashboard>
      </ContenedorDashboard>
    </main>
  );
};

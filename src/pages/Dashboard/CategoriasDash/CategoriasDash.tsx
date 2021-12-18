import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContenedorDashboard } from "../../../components/ContenedorDashboard/ContenedorDashboard";
import { ContenidoDashboard } from "../../../components/ContenedorDashboard/ContenidoDashboard";
import { HeaderDashboard } from "../../../components/ContenedorDashboard/HeaderDashboard";
import { ControlesDashboard } from "../../../components/ControlesDashboard/ControlesDashboard";
import { configScrollReveal } from "../../../config/config";
import ScrollReveal from "scrollreveal";
import ListaCategoriasDash from "./ListaCategoriasDash";
import { ModalCategoriaDash } from "./ModalCategoriaDash";
import { useCategoria } from "./CategoriaProvider";
import { Categoria } from "../../../interface/Categoria";
const initialStateCategoria: Categoria = {
  color: "#000",
  icono: "",
  nombre: "",
  url: "#",
  habilitado: 1,
};
export const CategoriasDash: React.FC = () => {
  const { setCategoria } = useCategoria();

  const agregarCategoria = () => setCategoria(initialStateCategoria);

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
        <HeaderDashboard titulo={"Categorias"}>
          {/* Breadcrumbs */}
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item">
              <Link to="/Dashboard">Inicio</Link>
            </li>
            <li className="breadcrumb-item active">Categorias</li>
          </ol>
        </HeaderDashboard>

        {/* Contenido */}
        <ContenidoDashboard>
          <ControlesDashboard>
            <button type="button" onClick={agregarCategoria} className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#agregarCategoria">
              <i className="fas fa-plus"></i>
              <span className="ms-2">Agregar Categoria</span>
            </button>
          </ControlesDashboard>
          <ListaCategoriasDash />
        </ContenidoDashboard>
        <ModalCategoriaDash />
      </ContenedorDashboard>
    </main>
  );
};

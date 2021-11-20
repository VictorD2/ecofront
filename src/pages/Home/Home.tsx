// Componentes
import { Buscador } from "../../components/Buscador/Buscador";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { ListaProductos } from "./ListaProductos/ListaProductos";
import { BotonCarrito } from "../../components/BotonCarrito/BotonCarrito";

// Layout
import { ContenedorUsuario } from "../../components/ContenedorUsuario/ContenedorUsuario";

import ScrollReveal from "scrollreveal";
//styles
import "./Home.css";
import { useEffect } from "react";
import { configScrollReveal } from "../../config/config";

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    //Para los efectos de aparicion

    ScrollReveal().reveal(".show", configScrollReveal);
    return () => {};
  }, []);

  return (
    <main className="d-flex my-5 position-relative w-100 h-100 show">
      <MenuLateral />
      <ContenedorUsuario>
        <div className="d-flex flex-lg-row flex-column-reverse justify-content-center justify-content-lg-between align-items-center">
          <h1 className="text-uppercase fs-4 fw-bold mt-lg-0 mt-5 titulo__home m-0">Productos Populares</h1>
          <Buscador />
        </div>
        <ListaProductos />
      </ContenedorUsuario>
      <BotonCarrito />
    </main>
  );
};

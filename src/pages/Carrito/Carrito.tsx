import { ContenedorUsuario } from "../../components/ContenedorUsuario/ContenedorUsuario";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { ListaCarrito } from "./ListaCarrito/ListaCarrito";

import "./Carrito.css";
import { ResumenPedido } from "./ResumenPedido/ResumenPedido";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { configScrollReveal } from "../../config/config";

export const Carrito: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    //Para los efectos de aparicion
    ScrollReveal().reveal(".mostrar", configScrollReveal);
    return () => {};
  }, []);

  return (
    <main className="d-flex my-5 position-relative w-100 h-100 mostrar">
      <MenuLateral />
      <ContenedorUsuario>
        <div className="d-flex flex-lg-row flex-column-reverse justify-content-center justify-content-lg-between align-items-center">
          <h1 className="text-uppercase fs-4 fw-bold mt-lg-0 mt-5 titulo__home m-0">Carrito</h1>
        </div>
        <div className="w-100 mt-3 row">
          {/* Items */}
          <ListaCarrito />

          {/* Resumen de pedido */}
          <ResumenPedido />
        </div>
      </ContenedorUsuario>
    </main>
  );
};

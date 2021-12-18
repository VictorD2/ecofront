import { Link } from "react-router-dom";

import { GiShoppingCart } from "react-icons/gi";

import "./BotonCarrito.css";

export const BotonCarrito: React.FC = () => {
  return (
    <Link className="botonCarrito mostrar" to="/Carrito">
      <button className="btn btn-carrito d-flex justify-content-center align-items-center">
        <GiShoppingCart className="d-flex justify-content-center align-items-center" />
      </button>
    </Link>
  );
};

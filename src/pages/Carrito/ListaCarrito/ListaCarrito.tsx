import { Producto } from "../../../interface/Producto";
import { ItemCarrito } from "./ItemCarrito/ItemCarrito";

import productoFoto from "../../../images/producto.png";
import "./ListaCarrito.css";

const producto: Producto = {
  cantidad: 0,
  id_categoria:0,
  descripcion: "dqdihnpwq dniqwdpqwnd qwdiponqw qpwoidnqwdonqwd nqwd qwdqw dwqd qwd qwdqd dwdw dwdwdwdw",
  foto: productoFoto,
  nombre: "wefowefwef ewfwef wefwef wefwefwe fwef",
  precio: 1,
};

export const ListaCarrito: React.FC = () => {
  return (
    <div className="col-lg-7 bg-dark carrito p-4 overflow-scroll">
      <ItemCarrito producto={producto} />
      <ItemCarrito producto={producto} />
      <ItemCarrito producto={producto} />
      <ItemCarrito producto={producto} />
    </div>
  );
};

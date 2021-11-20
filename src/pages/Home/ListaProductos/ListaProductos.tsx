import { Producto } from "../../../interface/Producto";
import "./ListaProductos.css";
import { ProductoItem } from "./ProductoItem/ProductoItem";
import productoFoto from "../../../images/producto.png";
const producto: Producto = {
  descripcion: "loremqweqw qwe qweqw qwe qwewwweqweq qeqweqweqw wewe qdoinqweoiebn weofib weofib weofbiwebfi oewoifb weofibwefboi",
  nombre: "iodqwdqpdnwqwe  qweqwe qweqwe qwe qwe qwe qwewwqd",
  foto: productoFoto,
  precio: 2,
  cantidad: 1,
};

export const ListaProductos: React.FC = () => {
  return (
    <div className="row mt-5 justify-content-start p-0 mx-0">
      <ProductoItem producto={producto} />
      <ProductoItem producto={producto} />
      <ProductoItem producto={producto} />
      <ProductoItem producto={producto} />
      <ProductoItem producto={producto} />
      <ProductoItem producto={producto} />
      <ProductoItem producto={producto} />
      <ProductoItem producto={producto} />
    </div>
  );
};

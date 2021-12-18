import { useEffect, useState } from "react";
import swal from "sweetalert";
import { Loading } from "../../../components/Loading/Loading";
import { Producto } from "../../../interface/Producto";
import { getAllProducts } from "../../../services/Producto.service";
import { ProductoItemDash } from "./ProductoItemDash";
import { CardTable } from "../../../components/CardTable/CardTable";
export const ListaProductosDash: React.FC = () => {
  const [products, setProducts] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filtro, setFiltro] = useState<string>("");

  const getProducts = async () => {
    const datos = await getAllProducts();
    if (datos.data.error) {
      swal({ icon: "error", title: "Error al cargar", text: "Error al cargar datos", timer: 1, dangerMode: true, closeOnEsc: true, closeOnClickOutside: true });
      return setProducts([]);
    }
    if (datos.data.success) {
      setProducts(datos.data.products);
      setLoading(true);
    }
  };

  const filtroTexto = (text: string) => {
    setFiltro(text);
  };

  useEffect(() => {
    getProducts();
    return () => {
      setProducts([]);
      setLoading(false);
    };
  }, [filtro]);

  return (
    <CardTable funcion={filtroTexto} titulo={"Lista de productos"}>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th className="w-25 text-center">Controles</th>
          </tr>
        </thead>
        <tbody>
          {products.map((producto, index) => {
            return <ProductoItemDash key={index} producto={producto} />;
          })}
        </tbody>
      </table>
      {loading ? <></> : <Loading message="Cargando Productos" />}
    </CardTable>
  );
};

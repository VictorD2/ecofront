import { Producto } from "../../../interface/Producto";
import "./ResumenPedido.css";

const productoL: Producto = {
  cantidad: 2,
  id_categoria:0,
  descripcion: "wddqwd",
  foto: "",
  nombre: "wqeqweqe qwe qwqwe ",
  precio: 2,
};

export const ResumenPedido: React.FC = (props) => {
  return (
    <div className="col-lg-5">
      <div className="card">
        <div className="card-header text-center text-bold">Resumen del Pedido</div>
        <div className="card-body row">
          <div className="d-flex justify-content-between p-1">
            <p className="mb-2 d-block fw-bold">Producto</p>
            <p className="mb-2 d-block fw-bold">Monto a pagar</p>
          </div>
          <LineaProduct producto={productoL} />
          <LineaProduct producto={productoL} />
          <LineaProduct producto={productoL} />
          <LineaProduct producto={productoL} />
          <LineaProduct producto={productoL} />
          <div className="d-flex justify-content-between p-1">
            <p className="mb-2 d-block fw-bold">Total</p>
            <p className="mb-2 d-block fw-bold">S/. 23</p>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn text-white btn-success btn-pagar">Pagar AHORA</button>
        </div>
      </div>
    </div>
  );
};
interface LineaProducto {
  producto: Producto;
}
const LineaProduct: React.FC<LineaProducto> = (props) => {
  return (
    <>
      <div className="col-lg-6 mb-3">
        <p className="m-0 text-left text-bold">1. {productoL.nombre}</p>
      </div>
      <div className="col-lg-6 mb-3">
        <p className="m-0 text-right">S/. {productoL.precio * productoL.cantidad}</p>
      </div>
    </>
  );
};

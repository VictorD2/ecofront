import "./ItemCarrito.css";

import producto from "../../../../images/producto.png";
import { Producto } from "../../../../interface/Producto";

import { TiTimes } from "react-icons/ti";

interface Props {
  producto: Producto;
}

export const ItemCarrito: React.FC<Props> = (props) => {
  return (
    <div className="card mb-3 w-100 pt-1 ps-4 pb-4 pe-4">
      <div className="row g-0">
        <div className="col-12 d-flex justify-content-end">
          <button className="btn">
            <TiTimes />
          </button>
        </div>
        <div className="col-md-4 my-auto d-flex align-items-center justify-items-center">
          <img src={producto} className="img-fluid rounded-start w-100" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body pt-0">
            <h5 className="card-title text-dark fw-bold">{props.producto.nombre}</h5>
            <p className="card-text text-dark text-justify">{props.producto.descripcion}</p>
            <div className="w-100 row justify-content-center align-items-center">
              <div className="col-4">
                <p className="text-dark m-0">Cantidad</p>
              </div>
              <div className="col-8">
                <input type="number" className="form-control ms-auto text-right" name="" id="" />
              </div>
            </div>
            <div className="w-100 row justify-content-center align-items-center mt-2">
              <div className="col-4">
                <p className="text-dark m-0">Total</p>
              </div>
              <div className="col-8">
                <p className="card-text text-dark ms-auto text-right">{props.producto.cantidad * props.producto.precio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

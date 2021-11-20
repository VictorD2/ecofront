import { Link } from "react-router-dom";
import { Producto } from "../../../../interface/Producto";
import "./ProductoItem.css";

interface Props {
  producto: Producto;
}

export const ProductoItem: React.FC<Props> = (props) => {
  return (
    <div className="col-lg-3 mb-5 me-5">
      <div className="w-100">
        <Link to="/" className="w-100">
          <div className="w-100 d-flex justify-content-center">
            <img className="img-fluid w-100" src={props.producto.foto} alt={props.producto.nombre} />
          </div>
          <h3 className="fs-6 fw-bold text-uppercase text-dark">{props.producto.nombre}</h3>
        </Link>
        <p className="text-justify w-100 m-0">{props.producto.descripcion}</p>
      </div>
    </div>
  );
};

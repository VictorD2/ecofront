import "./Buscador.css";
import { AiOutlineSearch } from "react-icons/ai";
export const Buscador: React.FC = () => {
  return (
    <div className="buscador me-5">
      <form>
        <div className="d-flex">
          <input className="form-control me-1" type="text" placeholder="Buscar Producto" />
          <button type="submit" className="btn btn__search d-flex align-items-center">
            <AiOutlineSearch className="fs-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

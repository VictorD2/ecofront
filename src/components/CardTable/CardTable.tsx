import { BuscadorDash } from "../BuscadorDash/BuscadorDash";

interface Props {
  titulo: string;
  funcion: (text: string) => void;
}

export const CardTable: React.FC<Props> = (props) => {
  const funcionFiltro = (texto: string) => {
    props.funcion(texto);
  };

  return (
    <div className="card mt-3">
      <div className="card-header">
        <h3 className="card-title">
          <i className="fas fa-list"></i> {props.titulo}
        </h3>
        <div className="card-tools">
          <div className="input-group input-group-sm my-auto" style={{ width: 150 }}>
            <BuscadorDash funcion={funcionFiltro} />
          </div>
        </div>
      </div>
      <div className="card-body table-responsive" style={{ minHeight: "320px" }}>
        {props.children}
      </div>
    </div>
  );
};

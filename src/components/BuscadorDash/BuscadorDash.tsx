import { useRef } from "react";

interface Props {
  funcion: (text: string) => void;
}
export const BuscadorDash: React.FC<Props> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ref.current) props.funcion(ref.current.value);
  };

  return (
    <div className="input-group input-group-sm" style={{ width: 150 }}>
      <input ref={ref} type="text" name="table_search" className="form-control float-right" placeholder="Search" />
      <div className="input-group-append">
        <button onClick={handleInputChange} type="button" className="btn btn-default">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  );
};

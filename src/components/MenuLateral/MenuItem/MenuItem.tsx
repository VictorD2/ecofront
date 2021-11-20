import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./MenuItem.css";

interface Props {
  fondo: string;
  icono: string;
  url: string;
  nombreCategoria: string;
}

export const MenuItem: React.FC<Props> = (props) => {
  const refItem = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (refItem.current) refItem.current.innerHTML = props.icono + ` <p>${props.nombreCategoria}</p>`;
    return () => {};
  }, []);

  return (
    <li className="menuLateral__item d-flex align-items-center" style={{ background: `#${props.fondo}` }}>
      <Link className="w-100 text-center d-flex align-items-center justify-content-center flex-column" ref={(node) => (refItem.current = node)} to={props.url}></Link>
    </li>
  );
};

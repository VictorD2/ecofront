import "./ContenedorUsuario.css";

export const ContenedorUsuario: React.FC = (props) => {
  return <section className="contenedor__usuario">{props.children}</section>;
};

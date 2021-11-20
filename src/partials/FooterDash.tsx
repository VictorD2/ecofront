import { Link } from "react-router-dom";

export const FooterDash = () => {
  return (
    <footer className="main-footer">
      <strong>
        Copyright © 2021 <Link to="https://adminlte.io">Ecoshop</Link>.
      </strong>
      Todos los derechos reservados.
    </footer>
  );
};

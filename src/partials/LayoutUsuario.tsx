import React from "react";

// Componentes
import Footer from "./Footer";
import NavBar from "./NavBar/NavBar";

const UsuarioLayout: React.FC = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default UsuarioLayout;

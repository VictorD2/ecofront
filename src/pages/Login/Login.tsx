import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import ScrollReveal from "scrollreveal";

//Toastify
import { ToastContainer } from "react-toastify";

import "./Login.css";
import { configScrollReveal } from "../../config/config";

const Login: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    ScrollReveal().reveal(".show", configScrollReveal);
    return () => {};
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="content-main show">
        <div className="container px-5">
          <div className="d-flex justify-content-center my-5">
            <Link to="/">
              <img src={Logo} alt="logo-register" className="mx-auto my-auto logo-register" />
            </Link>
          </div>
          <form className="mx-auto mb-3">
            <div className="row align-items-center flex-column mb-lg-5 mb-md-4 mb-4">
              <div className="col-md-6 mb-4">
                <input type="email" className="input-register" name="email" placeholder="Correo electronico" />
              </div>
              <div className="col-md-6 mb-3">
                <input type="password" className="input-register" name="password" placeholder="Contraseña" />
              </div>
              <div className="col-md-6">
                <p className="text-end">
                  <Link className="password__olvidada" to="/">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </p>
              </div>
            </div>
            <div className="d-grid col-lg-6 col-md-8 mx-auto mb-lg-0 mb-md-0 mb-3" style={{ marginTop: "4rem" }}>
              <button className="btn btn_register mx-auto" type="button">
                Iniciar Sesión
              </button>
            </div>
            <div className="d-grid col-lg-6 col-md-8 mx-auto mb-lg-0 mb-md-0 mb-5" style={{ marginTop: "2rem" }}>
              <Link to="/Registrarse" className="text-center">
                <button className="btn btn_register mx-auto" type="button">
                  Registrate
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

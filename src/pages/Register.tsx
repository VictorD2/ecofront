import { useEffect } from "react";
import { Link } from "react-router-dom";
import { configScrollReveal } from "../config/config";
import Logo from "../images/logo.png";
import ScrollReveal from "scrollreveal";

function Register() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    ScrollReveal().reveal(".show", configScrollReveal);
    return () => {};
  }, []);

  return (
    <div className="content-main show">
      <div className="container px-5">
        <div className="d-flex justify-content-center my-5">
          <Link to="/">
            <img src={Logo} alt="logo-register" className="mx-auto my-auto logo-register" />
          </Link>
        </div>
        <form className="mx-auto mb-3">
          <div className="row align-items-end mb-lg-5 mb-md-4 mb-4">
            <div className="col-md-6 mb-lg-0 mb-md-0 mb-4">
              <input type="text" className="input-register" name="fullname" placeholder="Nombres y apellidos" />
            </div>
            <div className="col-md-6">
              <input type="email" className="input-register" name="email" placeholder="Correo electronico" />
            </div>
          </div>
          <div className="row align-items-end mb-lg-5 mb-md-4 mb-4">
            <div className="col-md-6 mb-lg-0 mb-md-0 mb-4">
              <div className="row">
                <span className="ps-2 dateLabel">Fecha de nacimiento</span>
                <div className="col-lg-2 col-md-3 col-3">
                  <input type="number" className="input-register" name="day" placeholder="Día" />
                </div>
                <div className="col-lg-2 col-md-3 col-3">
                  <input type="number" className="input-register" name="month" placeholder="Mes" />
                </div>
                <div className="col-lg-2 col-md-3 col-3">
                  <input type="number" className="input-register" name="year" placeholder="Año" />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-lg-0 mb-md-0 mb-4">
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-lg-0 mb-md-0 mb-4">
                  <input type="password" className="input-register" name="password" placeholder="Contraseña" />
                </div>
                <div className="col-lg-6 col-md-12">
                  <input type="password" className="input-register" name="verifyPassword" placeholder="Confirmar contraseña" />
                </div>
              </div>
            </div>
          </div>
          <label className="m-0 d-inline-flex align-items-center dateLabel fs-6">
            <input type="checkbox" className="me-2" name="confirmTerms" />
            Aceptar terminos y condiciones
          </label>
          <div className="d-grid col-lg-6 col-md-8 mx-auto mb-lg-0 mb-md-0 mb-5" style={{ marginTop: "4rem" }}>
            <button className="btn btn_register mx-auto" type="button">
              Registrate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

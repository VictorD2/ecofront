import React from "react";
import { Link, useNavigate } from "react-router-dom";

//Imagenes
import logo from "../../images/logo.png";

import { FaUserCircle } from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";

// Styles
import "./NavBar.css";

const NavBar: React.FC = () => {


  return (
    <>
      <header className="show">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navegacion">
          <div className="container-fluid text-center">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="img-fluid w-50 ms-lg-5" alt="Logo EcoShop" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="btn btn__iniciar">
                    <Link className="nav-link active text-uppercase" aria-current="page" to="/Iniciar">
                      Iniciar Sesión
                    </Link>
                  </button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-uppercase" aria-current="page" to="/Dashboard">
                    <div className="d-flex flex-column align-items-center fw-bold" style={{ color: "#3EAB6B" }}>
                      <RiDashboardLine className="fs-1" style={{ color: "#3EAB6B" }} />
                      Panel de Control
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-uppercase" aria-current="page" to="#">
                    <div className="d-flex flex-column align-items-center fw-bold" style={{ color: "#3EAB6B" }}>
                      <FaUserCircle className="fs-1" style={{ color: "#3EAB6B" }} />
                      Usuario
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

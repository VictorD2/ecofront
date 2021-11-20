import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import "./Aside.css";
import { MdOutlineFastfood } from "react-icons/md";
import { IoMdGlasses } from "react-icons/io";
import { GiMedicinePills, GiNecklaceDisplay, GiNoodles, GiRunningShoe } from "react-icons/gi";
import RutaInterface from "../../interface/RutaInterface";
import Ruta from "../../class/Ruta";

const Aside: React.FC = () => {
  const [rutas, setRutas] = useState<RutaInterface[]>([]);

  const abrirDropdown = (e: React.MouseEvent<HTMLLIElement | HTMLAnchorElement>) => {
    e.stopPropagation();
    e.currentTarget.classList.toggle("menu-is-opening");
    e.currentTarget.classList.toggle("menu-open");
    e.currentTarget.children[1].classList.toggle("d-none");
    e.currentTarget.children[1].classList.toggle("d-block");
  };

  const getCategorias = async () => {
    const categorias: RutaInterface[] = [
      { nombre: "Descartables", link: "/Dashboard/Productos/Descartables", icono: MdOutlineFastfood, rango: 1 },
      { nombre: "Moda", link: "/Dashboard/Productos/Moda", icono: IoMdGlasses, rango: 1 },
      { nombre: "Calzado", link: "/Dashboard/Productos/Calzado", icono: GiRunningShoe, rango: 1 },
      { nombre: "Alimentos", link: "/Dashboard/Productos/Alimentos", icono: GiNoodles, rango: 1 },
      { nombre: "Salud y bienestar", link: "/Dashboard/Productos/Salud y Bienestar", icono: GiMedicinePills, rango: 1 },
      { nombre: "Joyería", link: "/Dashboard/Productos/Joyeria", icono: GiNecklaceDisplay, rango: 1 },
    ];
    Ruta.agregarRutaCategorias(categorias);
    setRutas(Ruta.getAllRoutes());
  };

  useEffect(() => {
    getCategorias();
    return () => setRutas([]);
  }, []);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="#" className="nav-link text-white d-lg-none d-block" data-widget="pushmenu" role="button">
        <i className="fas fa-bars" />
      </Link>
      <Link to="#" className="brand-link">
        <span className="brand-text font-weight-light ms-3">Menu</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-transition os-host-scrollbar-horizontal-hidden">
        <div className="os-resize-observer-host observed">
          <div className="os-resize-observer" style={{ left: 0, right: "auto" }} />
        </div>
        <div className="os-size-auto-observer observed" style={{ height: "calc(100% + 1px)", float: "left" }}>
          <div className="os-resize-observer" />
        </div>
        <div className="os-content-glue" style={{ margin: "0px -8px", height: "567px", width: "249px" }} />
        <div className="os-padding">
          <div className="os-viewport os-viewport-native-scrollbook-invisible" style={{ overflowY: "scroll" }}>
            <div className="os-content" style={{ padding: "0px 8px", height: "auto", width: "100%" }}>
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="user-container d-flex">
                  <div className="user-icon text-center d-flex align-items-center justify-content-center text-white">
                    <i className="fas fa-user" />
                  </div>
                  <h5 className="my-2 text-white">Administrador</h5>
                </div>
              </div>

              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column nav-flat nav-legacy nav-compact nav-child-indent nav-collapse-hide-child" data-widget="treeview" role="menu" data-accordion="false">
                  {rutas.map((ruta, index) => {
                    if (ruta.rutasHija) {
                      return (
                        <>
                          <li key={index} onClick={abrirDropdown} className="nav-item">
                            <Link to={ruta.link} className="nav-link">
                              {typeof ruta.icono === "string" ? <i className={`nav-icon ${ruta.icono}`} /> : <ruta.icono className="nav-icon" />}
                              {ruta.nombre}
                              <i className="right fas fa-angle-left" />
                            </Link>
                            <ul key={index} className="nav nav-treeview d-none">
                              {ruta.rutasHija.map((ruta2, i) => {
                                return (
                                  <li key={i + 100} className="nav-item">
                                    <Link to={ruta2.link} className="nav-link">
                                      {typeof ruta2.icono === "string" ? <i className={`nav-icon ${ruta.icono}`}></i> : <ruta2.icono className="nav-icon" />}
                                      <p>{ruta2.nombre}</p>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        </>
                      );
                    }
                    return (
                      <li key={index} className="nav-item">
                        <Link to={ruta.link} className="nav-link">
                          {typeof ruta.icono === "string" ? <i className={`nav-icon ${ruta.icono}`} /> : <ruta.icono className="nav-icon" />}
                          <p>{ruta.nombre}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle" style={{ width: "50%", transform: "translate(0px, 0px)" }} />
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle" style={{ height: "51.5844%", transform: "translate(0px, 0px)" }} />
          </div>
        </div>
        <div className="os-scrollbar-corner" />
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Aside;

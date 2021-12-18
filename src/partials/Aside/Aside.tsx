/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { TiThSmall } from "react-icons/ti";

import { Link } from "react-router-dom";
import { useUsuario } from "../../auth/UsuarioProvider";
import { Categoria } from "../../interface/Categoria";

import "./Aside.css";

const Aside: React.FC = () => {
  const [listCategories, setListCategories] = useState<Categoria[]>([]);
  const { categorias, loadCategorias } = useUsuario();

  const abrirDropdown = (e: React.MouseEvent<HTMLLIElement | HTMLAnchorElement>) => {
    e.stopPropagation();
    e.currentTarget.classList.toggle("menu-is-opening");
    e.currentTarget.classList.toggle("menu-open");
    // e.currentTarget.children[1].classList.toggle("d-none");
    // e.currentTarget.children[1].classList.toggle("d-block");
  };

  useEffect(() => {
    if (loadCategorias) setListCategories(categorias);

    return () => setListCategories([]);
  }, [loadCategorias, categorias]);

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
                  {/* Inicio */}
                  <li className="nav-item">
                    <Link to="/Dashboard" className="nav-link">
                      <i className="fas fa-home nav-icon"></i>
                      <p>Inicio</p>
                    </Link>
                  </li>

                  {/* Productos */}
                  <li className="nav-item" onClick={abrirDropdown}>
                    <Link to="#" className="nav-link">
                      <i className="fas fa-copy nav-icon"></i>
                      <p>Productos</p>
                      <i className="right fas fa-angle-left"></i>
                    </Link>

                    {/* Lista de categorías */}
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="/Dashboard/Productos/Todos" className="nav-link">
                          <TiThSmall className="nav-icon" />
                          <p>Todos</p>
                        </Link>
                      </li>
                      {listCategories.map((category, index) => {
                        return (
                          <li className="nav-item" key={index}>
                            <ListItem category={category} />
                          </li>
                        );
                      })}
                    </ul>
                  </li>

                  {/* Categorias */}
                  <li className="nav-item">
                    <Link to="/Dashboard/Categorias" className="nav-link">
                      <i className="fas fa-list nav-icon"></i>
                      <p>Categorias</p>
                    </Link>
                  </li>

                  {/* Marketing */}
                  <li className="nav-item">
                    <Link to="/Dashboard/Marketing" className="nav-link">
                      <i className="fas fa-bullhorn nav-icon"></i>
                      <p>Marketing</p>
                    </Link>
                  </li>

                  {/* Estadisticas */}
                  <li className="nav-item" onClick={abrirDropdown}>
                    <Link to="#" className="nav-link">
                      <i className="fas fa-chart-bar nav-icon"></i>
                      <p>Estadisticas</p>
                      <i className="right fas fa-angle-left"></i>
                    </Link>
                    {/* Lista de estadisticas */}
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="/Dashboard/Estadisticas/Empresas" className="nav-link">
                          <i className="fas fa-book nav-icon"></i>
                          <p>Ranking de Empresas</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/Dashboard/Estadisticas/Ventas" className="nav-link">
                          <i className="fas fa-book nav-icon"></i>
                          <p>Ventas Mensuales</p>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Pedidos */}
                  <li className="nav-item">
                    <Link to="/Dashboard/Pedidos" className="nav-link">
                      <i className="fas fa-shopping-cart nav-icon"></i>
                      <p>Pedidos</p>
                    </Link>
                  </li>

                  {/* Empresas */}
                  <li className="nav-item">
                    <Link to="/Dashboard/Empresas" className="nav-link">
                      <i className="fas fa-building nav-icon"></i>
                      <p>Empresas</p>
                    </Link>
                  </li>

                  {/* Clientes */}
                  <li className="nav-item">
                    <Link to="/Dashboard/Clientes" className="nav-link">
                      <i className="fas fa-users nav-icon"></i>
                      <p>Clientes</p>
                    </Link>
                  </li>
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

interface Props {
  category: Categoria;
}
const ListItem: React.FC<Props> = ({ category }) => {
  const refItem = useRef<HTMLAnchorElement>(null);
  const cargar = () => {
    if (refItem.current) refItem.current.innerHTML = category.icono?.replace(/fs-1/g, "nav-icon") + `<p>${category.nombre}</p>`;
  };
  useEffect(() => {
    cargar();
    return () => {};
  }, []);

  return (
    <Link ref={refItem} to={`/Dashboard/Productos${category.url}`} className="nav-link">
      <p>{category.nombre}</p>
    </Link>
  );
};

export default Aside;

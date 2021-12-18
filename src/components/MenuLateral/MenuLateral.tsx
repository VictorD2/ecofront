/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useUsuario } from "../../auth/UsuarioProvider";
import { Categoria } from "../../interface/Categoria";
import { MenuItem } from "./MenuItem/MenuItem";
import "./MenuLateral.css";

export const MenuLateral: React.FC = () => {
  const { categorias, loadCategorias } = useUsuario();
  const [categories, setCategories] = useState<Categoria[]>([]);

  useEffect(() => {
    if (loadCategorias) setCategories(categorias);
    return () => {};
  }, [loadCategorias, categorias]);

  return (
    <aside className="menuLateral text-center">
      <ul className="list-unstyled w-100 text-center d-flex flex-row flex-lg-column align-items-center justify-content-evenly flex-wrap">
        {categories.map((categoria, index) => {
          return <MenuItem key={index} nombreCategoria={categoria.nombre} url={categoria.url} fondo={categoria.color} icono={categoria.icono?.replace(/fs-1/g, "fs-3") + ""} />;
        })}
      </ul>
    </aside>
  );
};

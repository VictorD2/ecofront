import React, { useState, useMemo } from "react";
import { Categoria } from "../../../interface/Categoria";
const initialState: Categoria = {
  color: "",
  nombre: "",
  url: "#",
  icono: "",
  habilitado: 1,
};
const CategoriaContext = React.createContext({
  categoria: initialState,
  setCategoria: (categoria: Categoria) => {},
});

export const CategoriaProvider = (props: any) => {
  const [categoria, setCategoria] = useState<Categoria>(initialState);

  const value = useMemo(() => {
    return { categoria, setCategoria };
  }, [categoria, setCategoria]);

  return <CategoriaContext.Provider value={value} {...props} />;
};

export function useCategoria() {
  const context = React.useContext(CategoriaContext);
  if (!context) throw new Error("useCategoria debe estar dentro del proveedor categoria context");
  return context;
}

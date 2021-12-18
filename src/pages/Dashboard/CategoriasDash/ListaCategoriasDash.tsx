/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useUsuario } from "../../../auth/UsuarioProvider";
import { CardTable } from "../../../components/CardTable/CardTable";
import { Loading } from "../../../components/Loading/Loading";
import { CategoriaItem } from "./CategoriaItem";
const ListaCategoriasDash = () => {
  const { categorias, loadCategorias } = useUsuario();
  const [filtro, setFiltro] = useState<string>("");

  const filtroTexto = (text: string) => setFiltro(text);

  useEffect(() => {}, [filtro]);

  return (
    <CardTable funcion={filtroTexto} titulo={"Lista de categorias"}>
      <table className="table table-hover table-striped text-nowrap">
        <thead>
          <tr>
            <th>Id</th>
            <th>Ícono</th>
            <th>Nombre</th>
            <th>Color</th>
            <th className="w-25 text-center">Controles</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria, index) => {
            return <CategoriaItem categoria={categoria} key={index} />;
          })}
        </tbody>
      </table>
      {loadCategorias ? <></> : <Loading message="Cargando Categorias" />}
    </CardTable>
  );
};

export default ListaCategoriasDash;

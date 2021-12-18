/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Categoria } from "../../../interface/Categoria";
import { useCategoria } from "./CategoriaProvider";
import * as categoryService from "../../../services/Categoria.service";
import "./CategoriaItem.css";
import swal from "sweetalert";
import swal2 from "sweetalert2";
import { useUsuario } from "../../../auth/UsuarioProvider";
interface Props {
  categoria: Categoria;
}
export const CategoriaItem: React.FC<Props> = ({ categoria }) => {
  const { setCategoria } = useCategoria();
  const { categorias, setCategorias } = useUsuario();
  const [cargando, setCargando] = useState<boolean>(false);
  const [categoriaState, setCategoriaState] = useState(categoria);

  const iconoRef = useRef<HTMLTableCellElement>(null);
  useEffect(() => {
    setCategoriaState(categoria);
    if (iconoRef.current) iconoRef.current.innerHTML = categoria.icono + "";
    setCargando(true);
    return () => {};
  }, [categoria, categorias]);

  const editarCategoria = () => setCategoria(categoriaState);

  const habilitarCategoria = async () => {
    const swalWithBootstrapButtons = swal2.mixin({
      customClass: {
        confirmButton: "btn btn-success mx-1",
        cancelButton: "btn btn-secondary mx-1",
        denyButton: "btn btn-danger mx-1",
      },
      buttonsStyling: false,
    });
    const confirm = await swalWithBootstrapButtons.fire({ title: `¿Desea deshabilitar la categoría ${categoriaState.nombre}?`, showDenyButton: true, showCancelButton: true, confirmButtonText: "Sí", denyButtonText: `No` });
    if (!confirm.isConfirmed) return;

    setCargando(false);
    const datos = await categoryService.enableCategory(categoriaState.id_categoria, categoriaState.habilitado);
    if (datos.data.success) {
      setCategoriaState({ ...categoria, habilitado: datos.data.habilitado });
      swal({ icon: "success", title: "Solicitud terminada", text: datos.data.success, timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
    }
    if (datos.data.error) swal({ icon: "danger", title: datos.data.error, text: datos.data.message, timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
    setCargando(true);
  };

  const eliminarCategoria = async () => {
    const swalWithBootstrapButtons = swal2.mixin({
      customClass: {
        confirmButton: "btn btn-success mx-1",
        cancelButton: "btn btn-secondary mx-1",
        denyButton: "btn btn-danger mx-1",
      },
      buttonsStyling: false,
    });
    const confirm = await swalWithBootstrapButtons.fire({ title: `¿Desea eliminar la categoría ${categoriaState.nombre}?`, showDenyButton: true, showCancelButton: true, confirmButtonText: "Sí", denyButtonText: `No` });
    if (!confirm.isConfirmed) return;
    setCargando(false);
    const datos = await categoryService.deleteCategory(categoria.id_categoria);
    if (datos.data.success) {
      setCategorias(categorias.filter((item) => item.id_categoria !== categoriaState.id_categoria));
      swal({ icon: "success", title: "Solicitud terminada", text: datos.data.success, timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
    }
    if (datos.data.error) swal({ icon: "danger", title: datos.data.error, text: datos.data.message, timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
    setCargando(true);
  };

  return (
    <tr className={`${cargando ? "" : "cargandoCelda"}`}>
      <td>{categoriaState.id_categoria}</td>
      <td ref={iconoRef}></td>
      <td>{categoriaState.nombre}</td>
      <td style={{ background: `${categoriaState.color}` }}></td>
      <td className={`d-flex justify-content-evenly`}>
        {cargando ? (
          <>
            <button onClick={editarCategoria} type="button" data-bs-toggle="modal" data-bs-placement="top" title={`Editar categoría ${categoriaState.nombre}`} className="btn btn-warning bg-gradient" data-bs-target="#agregarCategoria">
              <i className="fas fa-edit"></i>
            </button>
            <button onClick={eliminarCategoria} type="button" data-bs-toggle="tooltip" data-bs-placement="top" title={`Eliminar categoría ${categoriaState.nombre}`} className="btn btn-danger bg-gradient">
              <i className="fas fa-trash"></i>
            </button>
            <button onClick={habilitarCategoria} type="button" data-bs-toggle="tooltip" data-bs-placement="top" title={`${categoriaState.habilitado === 1 ? "Deshabilitar" : "Habilitar"} categoría ${categoriaState.nombre}`} className={`btn bg-gradient ${categoriaState.habilitado === 1 ? "btn-secondary" : "btn-success"}`}>
              {categoriaState.habilitado === 1 ? <i className="fas fa-ban"></i> : <i className="fas fa-check"></i>}
            </button>
          </>
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
};

/* eslint-disable react-hooks/exhaustive-deps*/
import { useEffect, useRef, useState } from "react";
import { Categoria } from "../../../interface/Categoria";
import CategoriaClass from "../../../class/Categoria";
import * as categoryService from "../../../services/Categoria.service";
import * as metodosValidar from "../../../utils/regularExpr";

import "./ModalCategoriaDash.css";
import { Validacion } from "../../../interface/Validacion";
import swal from "sweetalert";
import { Loading } from "../../../components/Loading/Loading";
import { useUsuario } from "../../../auth/UsuarioProvider";
import { useCategoria } from "./CategoriaProvider";
const initialStateCategoria: Categoria = {
  color: "#000000",
  icono: "",
  nombre: "",
  url: "#",
  habilitado: 1,
};
interface Validaciones {
  nombre_categoria: Validacion;
}
const initialValidaciones: Validaciones = {
  nombre_categoria: { message: "", verificacion: true },
};
export const ModalCategoriaDash: React.FC = () => {
  const { categorias, setCategorias } = useUsuario();
  const { categoria, setCategoria } = useCategoria();
  const [validaciones, setValidaciones] = useState<Validaciones>(initialValidaciones);
  const [loading, setLoading] = useState<boolean>(true);

  const refBtnClose = useRef<HTMLButtonElement>(null);
  const refContenedor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cambiarContenidoIcono();
    return () => {};
  }, [categoria]);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoria.nombre === "" || categoria.icono === "") return swal({ icon: "warning", title: "Faltan campos", text: "Falta llenar campos", timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
    if (!validaciones.nombre_categoria.verificacion) return swal({ icon: "warning", title: "Campos inválidos", text: "Siga las indicaciones", timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
    setLoading(false);
    categoria.id_categoria ? await modificarCategoria() : await crearCategoria();
    refBtnClose.current?.click();
    if (refContenedor.current) refContenedor.current.innerHTML = "";
    setCategoria(initialStateCategoria);
    setLoading(true);
  };

  const crearCategoria = async () => {
    const datos = await categoryService.createCategory(categoria);
    if (datos.data.error) swal({ icon: "warning", title: datos.data.error, text: datos.data.message, timer: 1, dangerMode: true, closeOnEsc: true, closeOnClickOutside: true });
    if (datos.data.success) {
      swal({ icon: "success", title: "Solicitud terminada", text: datos.data.success, timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
      setCategorias([...categorias, datos.data.categoria]);
    }
  };
  const modificarCategoria = async () => {
    const datos = await categoryService.updateCategory(categoria);
    if (datos.data.error) swal({ icon: "warning", title: datos.data.error, text: datos.data.message, timer: 1, dangerMode: true, closeOnEsc: true, closeOnClickOutside: true });
    if (datos.data.success) {
      const indice = buscarCategoria(categoria.id_categoria + "");
      const listaCategorias = [...categorias];
      listaCategorias[indice] = datos.data.categoria;
      setCategorias(listaCategorias);
      swal({ icon: "success", title: "Solicitud terminada", text: datos.data.success, timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
    }
  };

  const buscarCategoria = (id: string) => {
    let index: number = -1;
    for (let i = 0; i < categorias.length; i++) {
      if (categorias[i].id_categoria === parseInt(id)) {
        index = i;
        break;
      }
    }
    return index;
  };

  // Validaciones
  const comprobandoValidaciones = (value: string, name: string): Validacion => {
    switch (name) {
      case "nombre_categoria":
        return metodosValidar.validarNombre(value);
    }
    return { message: "", verificacion: true };
  };

  // Input Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
    if (refContenedor.current && e.target.name !== "color") {
      setValidaciones({ ...validaciones, [e.target.name]: comprobandoValidaciones(e.target.value, e.target.name) });
      refContenedor.current.innerHTML = categoria.icono + `<p> ${e.target.value}</p>`;
    }
  };

  // Seleccionar icono
  const handleDivChange = (e: React.MouseEvent<HTMLDivElement>): void => {
    const listaIconos = document.getElementsByClassName("icono");
    for (let index = 0; index < listaIconos.length; index++) listaIconos[index].classList.remove("bg-icon");
    e.currentTarget.classList.toggle("bg-icon");
    const iconoHTML = e.currentTarget.children.item(0)?.innerHTML;
    setCategoria({ ...categoria, icono: iconoHTML?.toString() });
    if (refContenedor.current) {
      refContenedor.current.innerHTML = e.currentTarget.children.item(0)?.innerHTML + `<p>${categoria.nombre}</p>`;
    }
  };

  const cambiarContenidoIcono = (): void => {
    if (refContenedor.current) refContenedor.current.innerHTML = categoria.icono + `<p> ${categoria.nombre}</p>`;
  };

  // Muestra la lista de iconos
  const showIcons = (e: React.MouseEvent<HTMLButtonElement>): void => {
    document.getElementsByClassName("cajaIconos").item(0)?.classList.toggle("d-none");
  };

  return (
    <div className="modal fade" id="agregarCategoria" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="agregarCategoriaLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          {categoria.id_categoria ? (
            <div className="modal-header bg-warning">
              <h5 className="modal-title" id="agregarCategoriaLabel">
                <i className="fas fa-edit me-2"></i>
                Modificar Categoría
              </h5>
              <button type="button" className="btn-close btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
          ) : (
            <div className="modal-header bg-dark">
              <h5 className="modal-title" id="agregarCategoriaLabel">
                <i className="fas fa-plus me-2"></i>
                Agregar Categoría
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
            </div>
          )}
          <form onSubmit={handleSubmitForm}>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-6">
                  <div className="mb-3 form-floating">
                    <input onChange={handleInputChange} value={categoria.nombre} name="nombre" type="text" className="form-control" id="floatingInput__nombre_categoria" placeholder="Nombre de la categoría" />
                    <label htmlFor="floatingInput__nombre_categoria">Nombre de la categoría</label>
                    {validaciones.nombre_categoria.verificacion ? <></> : <div className="text-danger">{validaciones.nombre_categoria.message}</div>}
                  </div>
                  <div className="mb-3 form-floating">
                    <input onChange={handleInputChange} value={categoria.color} name="color" type="color" className="form-control form-control-color" id="floatingInput__color" placeholder="Color" />
                    <label htmlFor="floatingInput__color">Color</label>
                  </div>
                  <div className="mb-3 form-floating position-relative">
                    <button onClick={showIcons} type="button" className="btn btn-outline-secondary w-100 d-flex justify-content-between align-items-center">
                      Ícono
                      <i className="fas fa-chevron-circle-down"></i>
                    </button>
                    <div className="position-absolute cajaIconos pb-4 d-none">
                      <div className="row">
                        {CategoriaClass.getListaIconos().map((iconElement, index) => {
                          return (
                            <div key={index} onClick={handleDivChange} className="col-sm-6 col-lg-2 text-center mt-4 icono p-2">
                              <label htmlFor={"huey" + index}>
                                <iconElement.icono key={index} className="fs-1" />
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-6 justify-content-center align-items-center d-flex">
                  <div ref={refContenedor} className="iconoState text-center text-capitalize d-flex justify-content-center align-items-center flex-column" style={{ background: categoria.color }}></div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refBtnClose} className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              {categoria.id_categoria ? (
                <button type="submit" className="btn btn-warning">
                  <i className="fas fa-edit me-2"></i>
                  Modificar
                </button>
              ) : (
                <button type="submit" className="btn btn-success">
                  <i className="fas fa-plus me-2"></i>
                  Crear
                </button>
              )}
            </div>
          </form>
        </div>
        {loading ? <></> : <Loading message="Procesando solicitud" />}
      </div>
    </div>
  );
};

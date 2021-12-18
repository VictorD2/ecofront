import { useEffect, useRef, useState } from "react";
import swal from "sweetalert";
import { Producto } from "../../../interface/Producto";
import { createProducto } from "../../../services/Producto.service";
import { ProductoItem } from "../../Home/ListaProductos/ProductoItem/ProductoItem";

const initialState: Producto = {
  id_producto: undefined,
  id_categoria: 0,
  cantidad: 0,
  descripcion: "",
  foto: "",
  nombre: "",
  precio: 0,
};

export const ModalProducto: React.FC = () => {
  const [producto, setProducto] = useState<Producto>(initialState);
  const [fotoFile, setFotoFile] = useState<File>();

  const InputFileRef = useRef<HTMLInputElement>(null);
  const refProgresss = useRef<HTMLDivElement>(null);
  const refBtnClose = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    return () => setProducto(initialState);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFotoFile(e.target.files[0]);
      setProducto({ ...producto, foto: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fotoFile) return swal({ icon: "warning", title: "No eligió una foto", text: "No seleccionó una foto del producto", timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
    const formData = new FormData();
    formData.append("id_categoria", producto.id_categoria + "");
    formData.append("nombre", producto.nombre);
    formData.append("cantidad", producto.cantidad + "");
    formData.append("descripcion", producto.descripcion);
    formData.append("precio", producto.precio + "");
    formData.append("foto", fotoFile);
    const data = createProducto(formData, refProgresss.current);
    console.log(data);
    borrarInputFile();
  };

  const borrarInputFile = (): void => {
    if (InputFileRef.current) InputFileRef.current.value = "";
  };

  return (
    <div className="modal fade" id="agregarProducto" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="agregarProductoLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header bg-dark">
            <h5 className="modal-title" id="agregarProductoLabel">
              <i className="fas fa-plus me-2"></i>
              Agregar Producto
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <form onSubmit={handleSubmitForm}>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-6">
                  <div className="mb-3 form-floating">
                    <input onChange={handleInputChange} value={producto.nombre} name="nombre" type="text" className="form-control" id="floatingInput__nombre" placeholder="Nombre del producto" />
                    <label htmlFor="floatingInput__nombre">Nombre del producto</label>
                  </div>
                  <div className="mb-3 form-floating">
                    <textarea onChange={handleInputChange} value={producto.descripcion} name="descripcion" style={{ height: "200px" }} className="form-control" id="floatingInput__descripcion" placeholder="Descripción" />
                    <label htmlFor="floatingInput__descripcion">Descripción</label>
                  </div>
                  <div className="mb-3 form-floating">
                    <input onChange={handleInputChange} value={producto.cantidad} name="cantidad" type="number" className="form-control" id="floatingInput__cantidad" placeholder="Cantidad" />
                    <label htmlFor="floatingInput__cantidad">Cantidad</label>
                  </div>
                  <div className="mb-3 form-floating">
                    <input onChange={handleInputChange} value={producto.precio} name="precio" type="text" className="form-control" id="floatingInput__precio" placeholder="Precio" />
                    <label htmlFor="floatingInput__precio">Precio</label>
                  </div>
                  <div className="mb-3 form-floating">
                    <input onChange={handleInputChange} value={producto.id_categoria} name="id_categoria" type="text" className="form-control" id="floatingInput__categoria" placeholder="Categoría" />
                    <label htmlFor="floatingInput__categoria">Categoría</label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="floatingInput__foto">Foto</label>
                    <input ref={InputFileRef} onChange={handleFileChange} name="foto" type="file" className="form-control" id="floatingInput__foto" placeholder="Foto" />
                    <div className="progress">
                      <div className="progress-bar" ref={refProgresss} role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                        0%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-6">
                  <ProductoItem producto={producto} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refBtnClose} className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button type="submit" className="btn btn-success">
                <i className="fas fa-circle-plus me-2"></i>
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

import { Producto } from "../interface/Producto";

class Carrito {
  private ListaProductos: Producto[];
  constructor() {
    this.ListaProductos = [];
  }
  agregarProducto(producto: Producto) {
    this.ListaProductos.push(producto);
  }
  quitarProducto(index: number) {
    this.ListaProductos.splice(index, 1);
  }
  subirCantidad(index: number, cantidad: number) {
    this.ListaProductos[index].cantidad = cantidad;
  }
  precioTotal(): number {
    let total: number = 0;
    for (let i = 0; i < this.ListaProductos.length; i++) {
      const element = this.ListaProductos[i];
      total += element.precio * element.cantidad;
    }
    return total;
  }
}

export default new Carrito();

import { TiThSmall } from "react-icons/ti";
import RutaInterface from "../interface/RutaInterface";

const initialRoutes: RutaInterface[] = [
  { link: "/Dashboard", icono: "fas fa-home", rango: 1, nombre: "Inicio" },
  { link: "#", icono: "fas fa-copy", rango: 1, nombre: "Productos", rutasHija: [{ icono: TiThSmall, nombre: "Todos", link: "/Dashboard/Productos/Todos", rango: 1 }] },
  { link: "/Dashboard/Marketing", icono: "fas fa-bullhorn", rango: 1, nombre: "Marketing" },
  {
    link: "#",
    icono: "fas fa-chart-bar",
    rango: 1,
    nombre: "Estadisticas",
    rutasHija: [
      {
        icono: "fas fa-book",
        link: "/Dashboard/Estadisticas/Empresas",
        nombre: "Ranking de Empresas",
        rango: 1,
      },
      {
        icono: "fas fa-book",
        link: "/Dashboard/Estadisticas/Ventas",
        nombre: "Ventas Mensuales",
        rango: 1,
      },
    ],
  },
  { link: "/Dashboard/Pedidos", icono: "fas fa-shopping-cart", rango: 1, nombre: "Pedidos" },
  { link: "/Dashboard/Empresas", icono: "fas fa-building", rango: 1, nombre: "Empresas" },
  { link: "/Dashboard/Clientes", icono: "fas fa-users", rango: 1, nombre: "Clientes" },
];

class Ruta {
  private rutas: RutaInterface[];
  constructor() {
    this.rutas = initialRoutes;
  }
  agregarRutaCategorias(categorias: RutaInterface[]) {
    this.rutas = initialRoutes;
    this.estadoInicial();
    this.rutas[1].rutasHija = this.rutas[1].rutasHija?.concat(categorias);
  }
  private estadoInicial() {
    this.rutas[1].rutasHija = [{ icono: TiThSmall, nombre: "Todos", link: "/Dashboard/Productos/Todos", rango: 1 }];
  }
  getAllRoutes(): RutaInterface[] {
    return this.rutas;
  }
}

export default new Ruta();

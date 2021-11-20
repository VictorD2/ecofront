import { IconType } from "react-icons/lib";

export default interface RutaInterface {
  rutasHija?: RutaInterface[];
  link: string;
  icono: IconType | string;
  rango: number;
  nombre: string;
}

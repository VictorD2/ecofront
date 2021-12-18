import axios from "axios";
import { API } from "../config/config";
import { Categoria } from "../interface/Categoria";
const api = API + "/api/v0/categorias";
export const getAllCategories = async () => {
    return await axios.get(api);
};
export const createCategory = async (categoria: Categoria) => {
    return await axios.post(api, categoria);
};
export const updateCategory = async (categoria: Categoria) => {
    console.log(categoria)
    return await axios.put(`${api}/${categoria.id_categoria}`, categoria);
};
export const deleteCategory = async (idCategoria: number | undefined) => {
    return await axios.delete(`${api}/${idCategoria}`);
};
export const enableCategory = async (idCategoria: number | undefined, habilitadoCategoria: number) => {
    const categoria = { habilitado: habilitadoCategoria }
    return await axios.patch(`${api}/${idCategoria}`, categoria);
}
import axios from "axios";
import { API } from "../config/config";
const api = API + "/signup";
export const singnUp = async (usuario: any, password: any) => {
  usuario.password = password.password;
  usuario.repeatPassword = password.repeatPassword;
  return await axios.post(api, usuario);
};
export const singnIn = async () => {
  return await axios.post(api);
};

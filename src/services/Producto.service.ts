import axios from "axios";
import { API } from "../config/config";
const api = API + "/api/v0/productos";
export const getAllProducts = async () => {
  return await axios.get(api);
};
export const createProducto = async (formData: FormData, progressBar: any) => {
  return await axios.post(api, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress(e) {
      let progress = Math.round((e.loaded * 100.0) / e.total);
      if (progressBar != null) {
        progressBar.innerHTML = `${progress}%`;
        progressBar.style.width = `${progress}%`;
      }
    },
  });
};

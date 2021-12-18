import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { configScrollReveal } from "../config/config";
import Logo from "../images/logo.png";
import ScrollReveal from "scrollreveal";
import { Usuario } from "../interface/Usuario";
import * as metodosValidar from "../utils/regularExpr";
import { Validacion } from "../interface/Validacion";
import swal from "sweetalert";
import * as authService from "../services/Auth.service";
interface Password {
  password: string;
  repeatPassword: string;
}
interface Validaciones {
  nombre: Validacion;
  email: Validacion;
  password: Validacion;
  repeatPassword: Validacion;
}

const initialUsuario: Usuario = {
  birthday: "",
  email: "",
  id_rango: 3,
  nombre: "",
};

const initialValidaciones: Validaciones = {
  nombre: { message: "", verificacion: true },
  email: { message: "", verificacion: true },
  password: { message: "", verificacion: true },
  repeatPassword: { message: "", verificacion: true },
};
const initialPassword: Password = {
  password: "",
  repeatPassword: "",
};
function Register() {
  const [validaciones, setValidaciones] = useState<Validaciones>(initialValidaciones);
  const [usuario, setUsuario] = useState<Usuario>(initialUsuario);
  const [password, setPassword] = useState<Password>(initialPassword);
  const [checkbox, setCheckbox] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
    setValidaciones({ ...validaciones, [e.target.name]: comprobandoValidaciones(e.target.value, e.target.name) });
  };
  const handleInputChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
    setValidaciones({ ...validaciones, [e.target.name]: comprobandoValidaciones(e.target.value, e.target.name) });
  };
  const handleCheckBox = () => {
    setCheckbox(!checkbox);
  };
  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validaciones.nombre.verificacion || !validaciones.email.verificacion || !validaciones.password.verificacion || !validaciones.repeatPassword.verificacion) return swal({ icon: "warning", title: "Campos inválidos", text: "Siga las indicaciones", timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
    if (!checkbox) return swal({ icon: "warning", title: "Faltan campos", text: "Marque la casilla de terminos y condiciones", timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
    if (password.password !== password.repeatPassword) return swal({ icon: "warning", title: "Contraseñas no coinciden", text: "Las contraseñas son diferentes", timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
    if (usuario.birthday === "") return swal({ icon: "warning", title: "Seleccione una fecha", text: "No ha seleccionado una fecha", timer: 1, dangerMode: false, closeOnEsc: true, closeOnClickOutside: true });
    const data = await authService.singnUp(usuario, password);
    console.log(data);
  };
  const comprobandoValidaciones = (value: string, name: string): Validacion => {
    switch (name) {
      case "nombre":
        return metodosValidar.validarNombre(value);
      case "email":
        return metodosValidar.validarCorreo(value);
      case "password":
        return metodosValidar.validarPassword(value);
      case "repeatPassword":
        return metodosValidar.validarPassword(value);
    }
    return { message: "", verificacion: true };
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    ScrollReveal().reveal(".mostrar", configScrollReveal);
    return () => {};
  }, []);

  return (
    <div className="content-main mostrar">
      <div className="container px-5">
        <div className="d-flex justify-content-center my-5">
          <Link to="/">
            <img src={Logo} alt="logo-register" className="mx-auto my-auto logo-register" />
          </Link>
        </div>
        <form onSubmit={handleSubmitForm} className="mx-auto mb-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <input required onChange={handleInputChange} type="text" className="input-register" placeholder="Nombres y Apellidos" name="nombre" value={usuario.nombre} />
              {validaciones.nombre.verificacion ? <></> : <div className="text-danger">{validaciones.nombre.message}</div>}
            </div>
            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <input required onChange={handleInputChange} type="text" className="input-register" placeholder="Correo Electrónico" name="email" value={usuario.email} />
              {validaciones.email.verificacion ? <></> : <div className="text-danger">{validaciones.email.message}</div>}
            </div>
            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <input required onChange={handleInputChangePassword} type="password" className="input-register" placeholder="Contraseña" name="password" />
              {validaciones.password.verificacion ? <></> : <div className="text-danger">{validaciones.password.message}</div>}
            </div>
            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <input required onChange={handleInputChangePassword} type="password" className="input-register" placeholder="Repetir Contraseña" name="repeatPassword" />
              {validaciones.repeatPassword.verificacion ? <></> : <div className="text-danger">{validaciones.repeatPassword.message}</div>}
            </div>
            <div className="col-lg-6 col-md-6 col-12 mb-3">
              <span className="dateLabel">Fecha de nacimiento</span>
              <input required onChange={handleInputChange} type="date" className="input-register" placeholder="Fecha de nacimiento" name="birthday" value={usuario.birthday} />
            </div>
          </div>

          <label className="m-0 d-inline-flex align-items-center dateLabel fs-6">
            <input required onChange={handleCheckBox} type="checkbox" className="me-2" name="confirmTerms" />
            Aceptar terminos y condiciones
          </label>
          <div className="d-grid col-lg-6 col-md-8 mx-auto mb-lg-0 mb-md-0 mb-5" style={{ marginTop: "4rem" }}>
            <button className="btn btn_register mx-auto" type="submit">
              Registrate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

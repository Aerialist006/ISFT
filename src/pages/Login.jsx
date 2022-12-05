import React from "react";
import {Link} from "react-router-dom"
import "../css/Login.css";

const Login = () => {
  return (
    <main>
      <div className="container-Login">
        <div className="imagen-Login">
          <div className="yellow-filter"></div>
        </div>
        <div className="texto-Login">
          <p>Iniciar Sesión</p>
          <form action="">
            <ul>
              <li>
                <p>Código</p>
                <input
                  type="text"
                  name="usercode"
                  id=""
                  placeholder="Introduce tu Código"
                />
              </li>
              <li>
                <p>Contraseña</p>
                <input
                  type="password"
                  name="pass"
                  id=""
                  placeholder="Introduce tu Contraseña"
                />
              </li>
            </ul>
            <div className="links-Login">
              <button type="submit">Ingresar</button>
              <Link to="/register" className="link-Login">Has Olvidado tu Contraseña?</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;

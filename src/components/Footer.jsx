import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../img/imagen_logo-Footer.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="parent-Footer">
      <div className="grupo1-Footer">
        <div className="box-Footer">
          <figure>
            <Link to="/">
              <img src={footerLogo} alt="Logo Gestion Notas" className="imagenlogo-Footer"/>
            </Link>
          </figure>
        </div>
        <div className="box-Footer">
          <h2>ALGO NO SE XD</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt molestias corrupti cumque vero quae suscipit, cupiditate est ut molestiae quas, ex soluta, itaque porro? Ipsam possimus veritatis odit at a!</p>
        </div>
        <div className="box-Footer">
          <h2>SIGUENOS</h2>
          <div className="redes_sociales-Footer">
            <a href="#">
              <FaFacebookSquare className="icon-Footer" />
            </a>
            <a href="#">
              <FaInstagramSquare className="icon-Footer" />
            </a>
            <a href="#">
              <FaTwitterSquare className="icon-Footer" />
            </a>
          </div>
        </div>
      </div>
      <div className="grupo2-Footer">
        <small>
          &copy; 2022 <b>Gestion Notas</b> - Todos los Derechos Reservados
        </small>
      </div>
    </footer>
  );
};

export default Footer;
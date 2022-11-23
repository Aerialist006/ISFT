import "../css/Navbar.css";
import logo from "../logoseminario1.png";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Navbar(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/pensum">PENSUM</Link>
          </li>
          <li>
            <Link to="/noticias">NOTICIAS</Link>
          </li>
          <li>
            <Link to="/nosotros">NOSOTROS</Link>
          </li>
          <li>
            <Link to="/">
              <img src={logo} alt="" className="logo-Navbar" />
            </Link>
          </li>
          <li>
            <Link to="/notas">NOTAS</Link>
          </li>
          <li>
            <Link to="/admisiones">ADMISIONES</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </nav>
      <div className="lowerDetails-Navbar">
        <p className="title-Navbar">{props.name}</p>
        <div className="userDetails-Navbar">
          <FaUserCircle className="usericon-Navbar" />
          <p>{props.user}</p>
        </div>
      </div>
    </header>
  );
}

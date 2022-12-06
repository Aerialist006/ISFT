import React from "react";
import { Link } from "react-router-dom";

const NewsButton = ({ route }) => {
  return (
    <div className="boton-news-container">
      <div className="news-button">
        <Link to="/noticias:1" style={{ textDecoration: "none", color: "white" }}>
          <p>LEER MAS...</p>
        </Link>
      </div>
    </div>
  );
};

export default NewsButton;

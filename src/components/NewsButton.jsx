import React from "react";
import { Link } from "react-router-dom";

const NewsButton = ({ route }) => {
  return (
    <div className="boton-news-container">
      <div className="news-button">
        <Link to={route} style={{ textDecoration: "none", color: "white" }}>
          <p>LEER MAS...</p>
        </Link>
      </div>
    </div>
  );
};

export default NewsButton;

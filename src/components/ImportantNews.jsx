import React from "react";
import "../css/ImportantNews.css";
import bgimage from "../img/imagen_news-Home.jpg";
import NewsButton from "./NewsButton";

const ImportantNews = () => {
  return (
    <div className="container-ImportantNews">
      <div
        className="image-ImportantNews"
        style={{ backgroundImage: `url(${bgimage})` }}
      />
      <div className="text-ImportantNews">
        <p className="title-ImportantNews">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
          qui!
        </p>
        <div className="thin-line" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          autem rem dignissimos quam quas consectetur natus ipsam officiis
          voluptatum architecto.
        </p>
        <NewsButton />
      </div>
    </div>
  );
};
export default ImportantNews;

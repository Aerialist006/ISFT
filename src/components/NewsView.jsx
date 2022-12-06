import React from "react";
import NewsButton from "./NewsButton";
import bgimage from "../img/imagen_news-Home.jpg"
import "../css/NewsView.css"

const NewsView = () => {
  return (
    
    <div className="container-NewsView">
        <div className="image-NewsView" style={{backgroundImage: `url(${bgimage})`}}/>
        <div className="text-NewsView">
            <p className="title-NewsView">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, qui!</p>
            <div className="thin-line"/>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque autem rem dignissimos quam quas consectetur natus ipsam officiis voluptatum architecto.
            </p>
            <NewsButton/>
        </div>
    </div>
  );
};

export default NewsView;
import React from "react";
import { Link } from "react-router-dom";
import NewsButton from "./NewsButton";
import bgimage from "../img/imagen_news-Home.jpg"
import "../css/NewsView.css"

const NewsView = () => {
  return (
    
    <div className="container-NewsView">
        <div className="image-NewsView" style={{backgroundImage: `url(${bgimage})`}}/>
        <div className="text-NewsView">
            <p className="title-NewsView">Titulo Noticias</p>
            <div className="thin-line"/>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non magni similique ad eius ea nemo expedita cum alias. Alias quos, atque recusandae consectetur qui pariatur voluptas sunt iste, beatae molestiae aliquam iusto, suscipit sapiente repellat.
            </p>
            <div><NewsButton/></div>
        </div>
    </div>
  );
};

export default NewsView;
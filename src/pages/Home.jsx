import React from "react";
import "../css/Home.css";
import NewsButton from "../components/NewsButton";
import { FaBible, FaGraduationCap } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="container_intro-Home">
        <div className="texto_intro-Home">
          <div className="title_intro-Home">
            <h3>GESTION</h3>
            <h2>NOTAS</h2>
          </div>
          <p></p>
        </div>
        <div className="imagen_intro-Home" />
      </div>
      <main>
        {/* cards */}

        <div className="container_cards-Home">
          <div className="card-Home">
            <FaBible className="card_icon-Home" />
            <div className="gray-center-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="imagen_cards-Home"></div>
          <div className="card-Home">
            <div className="gray-center-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <FaGraduationCap className="card_icon-Home" />
          </div>
        </div>

        {/* noticias */}

        <div className="container_news-Home">
          <div className="imagen_news-Home">
            <div className="fixed-title">NOTICIAS DESTACADAS</div>
            <IoIosArrowDroprightCircle className="icon_news-Home" />
          </div>
          <div className="text_news-Home">
            <h2>Titulo Noticia</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sed tellus commodo, accumsan velit quis, suscipit leo.
              Donec at facilisis eros. Sed et augue a lorem euismod mollis.
              Quisque tempor sodales ultricies. Donec tempor nunc ut turpis
              condimentum vehicula. Pellentesque suscipit, ligula vitae congue
              finibus, lacus orci consequat sapien, id ultrices tellus nibh eget
              felis. <br />
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <NewsButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

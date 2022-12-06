import React from "react";
import bgimage from "../img/imagen_news-Home.jpg";
import "../css/NewsDetails.css";
import ImportantNews from "../components/ImportantNews";

const NewsDetails = () => {
  return (
    <main>
      <div className="container-NewsDetails">
        <div className="containerPrincipal-NewsDetails">
          <p className="title-NewsDetails">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, id!
          </p>
          <p className="subtitle-NewsDetails">
            » Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            molestiae sunt libero eos tenetur ab incidunt quas corrupti culpa
            eveniet!
          </p>
          <img
            src={bgimage}
            alt="Imagen Cabecera"
            className="imagen-NewsDetails"
          />

          <p className="text_content-NewsDetails">
            El gobierno dominicano, a través del Ministerio Administra de la
            Presidencia (Mapre), entregó este martes al Instituto Tecnico
            Salesiano (ITESA) un aporte de RD$22 millones 084 mil que serán
            utilizados para la compra de equipos. <br /> <br /> El reverendo
            padre Ronny Stephan Díaz, director de ITESA, recibió los
            comprobantes de libramiento de la mano del ministro Administrativo,
            José Ignacio Paliza, y a su vez manifestó su grata sorpresa por la
            rápida respuesta a esta necesidad de equipar los talleres de los
            distintos cursos técnicos que imparten. <br /> <br /> Díaz manifestó
            su júbilo por los cambios que dijo se llevarán a cabo gracias al
            aporte del Gobierno. “La sociedad necesita de los hombres y mujeres
            que se están capacitando con nosotros”. Mientras, el ministro Paliza
            externó la disposición de la actual gestión de siempre colaborar en
            causas que estén vinculadas al desarrollo socio-educativo de los
            jóvenes dominicanos. <br /> <br /> “El presidente Luis Abinader
            favorece que en todo el territorio nacional operen instituciones
            académicas de este modelo, de importante trayectoria y grandes
            aportes técnicos”, dijo Paliza.
          </p>
        </div>
        <div className="importantSection-NewsDetails">
          <p className="titleimportant-NewsDetails">Noticias Destacadas</p>
          <ImportantNews />
          <ImportantNews />
          <ImportantNews />
        </div>
      </div>
    </main>
  );
};

export default NewsDetails;

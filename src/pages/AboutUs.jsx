import React from "react";
import { IoDiamond, IoEye } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";
import "../css/AboutUs.css";

const AboutUs = () => {
  return (
    <main>
      <div className="text-AboutUs">
      <div className="image_Container-AboutUs">
          <div className="image-AboutUs"/>
        </div>
        <div className="history-AboutUs">
          <p className="title-AboutUs">Sobre Nosotros...</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid
            laboriosam ipsam delectus, aspernatur sint esse ratione illo
            reiciendis provident at assumenda cum dicta ut, fugit laudantium sed
            ad. Praesentium pariatur nemo obcaecati porro esse quam quibusdam
            sed temporibus. Facere magni sunt illo libero labore. Odit,
            reiciendis? Sunt tenetur voluptas consequatur provident rerum, quos
            autem. In consectetur ex eligendi adipisci ducimus reprehenderit
            debitis est dolor illo, pariatur ipsum nam, nostrum nesciunt
            architecto eius, blanditiis voluptatem quam quidem perferendis
            inventore tenetur? Delectus ab molestias dignissimos, aut esse
            inventore harum libero aperiam vel veritatis ratione consequuntur
            magnam saepe numquam ipsum sit? Eveniet tenetur commodi optio
            possimus soluta? Quidem ad cumque id, consequuntur natus et
            voluptatem deleniti vitae illo fuga distinctio ipsam sed!
          </p>
        </div>
        
      </div>
      {/* CARTAS ABOUTUS */}
      <div className="cards-AboutUs">
        <div className="cardMVV">
          <FiTarget className="icon-AboutUs"/>
          <div className="text_Cards-AboutUs">
          <p className="title_Cards-AboutUs">Misión</p>
          <p className="paragraph_Cards-AboutUs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            veritatis possimus nam natus! Eos, ipsum minima. Ducimus recusandae
            enim aliquid sequi excepturi architecto quaerat tenetur?
          </p>
          </div>
        </div>
        <div className="cardMVV">
          <IoEye className="icon-AboutUs"/>
          <div className="text_Cards-AboutUs">
          <p className="title_Cards-AboutUs">Visión</p>
          <p className="paragraph_Cards-AboutUs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            veritatis possimus nam natus! Eos, ipsum minima. Ducimus recusandae
            enim aliquid sequi excepturi architecto quaerat tenetur?
          </p>
          </div>
        </div>
        <div className="cardMVV">
          <IoDiamond className="icon-AboutUs"/>
          <div className="text_Cards-AboutUs">
          <p className="title_Cards-AboutUs">Valores</p>
          <p className="paragraph_Cards-AboutUs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            veritatis possimus nam natus! Eos, ipsum minima. Ducimus recusandae
            enim aliquid sequi excepturi architecto quaerat tenetur?
          </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;

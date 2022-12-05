import React from "react";
import "../css/NotasVista.css";
import "../css/NotasPublicar.css";
import GradesCard from "../components/GradesCard";
import { FaClipboardList, FaCalendarCheck } from "react-icons/fa";

const NotasPublicar = () => {
  return (
    <main>
      <div className="container-Notas">
        <GradesCard name="DioriRoja" />
        <GradesCard name="DioriRoja" />
        <GradesCard name="DioriRoja" />
      </div>
      <div className="container_Queries-NotasPublicar">
        <div className="cardQuery-NotasPublicar">
          <div className="text_cardQuery-NotasPublicar">
            <h2>POR CORREGIR</h2>
            <p>999</p>
          </div>
          <FaClipboardList className="icon-NotasPublicar" />
        </div>
        <div className="cardQuery-NotasPublicar">
          <div className="text_cardQuery-NotasPublicar">
            <h2>CORREGIDOS</h2>
            <p>999</p>
          </div>
          <FaCalendarCheck className="icon-NotasPublicar" />
        </div>
      </div>
    </main>
  );
};

export default NotasPublicar;

import React from "react";
import "../css/Admisiones.css";

const formDataArray = {
  title: 'Datos Personales',
  form: '<input placeholder="pene">'
}

const Admisiones = () => {
  return (
    <main>
      <div className="container-Admisiones">
        <form action="">
          <p>{formDataArray.title}</p>
          {formDataArray.form}
        </form>
        <div className="sidedetails-Admisiones">

        </div>
      </div>
    </main>
  );
};

export default Admisiones;

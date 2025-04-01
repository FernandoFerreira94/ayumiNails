import React from "react";
import foto1 from "../../assets/unha1.jpg"; // Substitua pelos caminhos das suas fotos
import foto2 from "../../assets/unhas2.jpg";
import foto3 from "../../assets/unha3.jpg";
import "./carroseu.scss";

export default function Carroseu() {
  return (
    <div className="card-container">
      <div className="card">
        <img src={foto1} alt="Foto 1" className="card-image" />
      </div>
      <div className="card">
        <img src={foto2} alt="Foto 2" className="card-image" />
      </div>
      <div className="card">
        <img src={foto3} alt="Foto 3" className="card-image" />
      </div>
      <div className="card">
        <img src={foto3} alt="Foto 3" className="card-image" />
      </div>
    </div>
  );
}

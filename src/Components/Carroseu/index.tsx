import foto1 from "../../assets/unha-8.jpg"; // Substitua pelos caminhos das suas fotos
import foto2 from "../../assets/nails/quadrada/quadrada5.jpg";
import foto3 from "../../assets/nails/stiletto/stiletto5.jpg";
import foto4 from "../../assets/nails/quadrada/quadrada6.jpg";
import foto5 from "../../assets/nails/stiletto/stiletto6.jpg";
import "./carroseu.scss";

import { useNavigate } from "react-router-dom";

export default function Carroseu() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="card-container" onClick={() => navigate("/nails")}>
        <div className="card">
          <img src={foto1} alt="Foto 1" className="card-image" />
          <h4>Amond</h4>
        </div>
        <div className="card">
          <img src={foto2} alt="Foto 2" className="card-image" />
          <h4>Quadrada</h4>
        </div>
        <div className="card">
          <img src={foto3} alt="Foto 3" className="card-image" />
          <h4>Stiletto</h4>
        </div>
        <div className="card">
          <img src={foto4} alt="Foto 4" className="card-image" />
          <h4>Quadrada</h4>
        </div>
        <div className="card">
          <img src={foto5} alt="Foto 5" className="card-image" />
          <h4>Stiletto</h4>
        </div>
      </div>
      <div className="content">
        <span className="card-text">
          "Bem-vindo ao universo de design de unhas! Transformamos sua
          criatividade em arte e cuidado para suas mãos."
        </span>
      </div>
    </section>
  );
}

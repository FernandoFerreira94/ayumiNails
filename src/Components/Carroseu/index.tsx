import foto1 from "../../assets/unha-7.jpg"; // Substitua pelos caminhos das suas fotos
import foto2 from "../../assets/unha-4.jpg";
import foto3 from "../../assets/unha-5.jpg";
import foto4 from "../../assets/unha-6.jpg";
import foto5 from "../../assets/unha-8.jpg";
import "./carroseu.scss";

export default function Carroseu() {
  return (
    <section>
      <div className="content">
        <div className="card-container">
          <div className="card">
            <img src={foto1} alt="Foto 1" className="card-image" />
            <h4>style</h4>
          </div>
          <div className="card">
            <img src={foto2} alt="Foto 2" className="card-image" />
            <h4>style</h4>
          </div>
          <div className="card">
            <img src={foto3} alt="Foto 3" className="card-image" />
            <h4>style</h4>
          </div>
          <div className="card">
            <img src={foto4} alt="Foto 4" className="card-image" />
            <h4>style</h4>
          </div>
          <div className="card">
            <img src={foto5} alt="Foto 5" className="card-image" />
            <h4>style</h4>
          </div>
        </div>
        <span className="card-text">
          "Bem-vindo ao universo de design de unhas da Fernanda Ayumi!
          Transformamos sua criatividade em arte e cuidado para suas mãos."
        </span>
      </div>
    </section>
  );
}

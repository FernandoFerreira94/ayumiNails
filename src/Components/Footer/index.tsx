import "./footer.scss";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import Endereco from "../../assets/endereco.jpg";
import { Link } from "react-router-dom";
const wahtsap = "12 99202-4918";
const instagram = "@ayumifernails";

export default function Footer() {
  return (
    <>
      <div className="containe">
        <section className="footer-container">
          <h4>Contato</h4>
          <a
            href="https://api.whatsapp.com/message/2EVFOTRUORH7B1?autoload=1&app_absent=0"
            target="_blank"
          >
            <span>
              {" "}
              <SiWhatsapp color="#075e54" />{" "}
            </span>{" "}
            <span>{wahtsap}</span>
          </a>

          <a href="https://www.instagram.com/ayumifernails/" target="_blank">
            <span>
              {" "}
              <SiInstagram />
            </span>{" "}
            <span>{instagram}</span>
          </a>
        </section>

        <section className="footer-container">
          <h4>Endereço</h4>
          <section>
            <div className="endereco">
              <Link
                to="https://www.google.com.br/maps/place/Av.+Cidade+Jardim,+3978+-+Bosque+dos+Eucaliptos,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12232-000/@-23.2485208,-45.8872297,1056m/data=!3m1!1e3!4m6!3m5!1s0x94cc4ab543f8aca9:0x67e87ec5f0a17e84!8m2!3d-23.2482298!4d-45.885831!16s%2Fg%2F11snnyymvp?hl=pt-PT&entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="d-flex gap-4"
              >
                <img src={Endereco} alt="" />
                <p>
                  Avenida Cidade Jardim, 3978, <br />
                  Jardim satelite, <br /> São José dos Campos, sp <br />
                </p>
              </Link>
            </div>
          </section>
        </section>
        <section className="footer-container">
          <h4> Direitos autorais </h4>
          <span>© 2025 Fernanda Ayumi. Todos os direitos reservados.</span>
        </section>
      </div>
    </>
  );
}

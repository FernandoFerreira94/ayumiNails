import "./footer.scss";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import Endereco from "../../assets/endereco.jpg";
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
            <SiWhatsapp color="#075e54" /> <span>{wahtsap}</span>
          </a>

          <a href="https://www.instagram.com/ayumifernails/" target="_blank">
            <SiInstagram /> <span>{instagram}</span>
          </a>
        </section>

        <section className="footer-container">
          <h4>Endereço</h4>
          <section>
            <div className="endereco">
              <img src={Endereco} alt="" />
              <p>
                Avenida Cidade Jardim, 3978, <br />
                Jardim satelite, <br /> São José dos Campos, sp <br />
              </p>
            </div>
          </section>
        </section>
        <section className="footer-container">
          <h5> Direitos autorais </h5>
          <span>© 2025 Fernanda Ayumi. Todos os direitos reservados.</span>
        </section>
      </div>
    </>
  );
}

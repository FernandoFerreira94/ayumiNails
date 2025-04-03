import "./header.scss";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav-img">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="menu">
          <a className="nav-url" href="/">
            Home
          </a>
          <a className="nav-url" href="nails">
            Nails
          </a>
          <a className="nav-url" href="tabela">
            Tabela
          </a>
          <a className="nav-url" href="sobre">
            Sobre
          </a>
          <a className="nav-url" href="cuidado">
            Cuidado
          </a>
        </div>
      </nav>
    </header>
  );
}

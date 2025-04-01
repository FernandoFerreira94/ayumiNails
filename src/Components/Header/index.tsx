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
          <a href="#">Home</a>
          <a href="#">Nails</a>
          <a href="#">Tabela</a>
          <a href="#">Contato</a>
          <a href="#">Cuidado</a>
        </div>
      </nav>
    </header>
  );
}

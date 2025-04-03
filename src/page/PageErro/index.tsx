import "./pageErro.scss";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-error">
        <h1>Ops não encontramos essa pagina :(</h1>
        <button className="back" onClick={() => navigate("/")}>
          Voltar
        </button>
      </div>
    </>
  );
}

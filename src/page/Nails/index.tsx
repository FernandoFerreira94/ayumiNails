import "./nails.scss";
import Footer from "../../Components/Footer";
import Title from "../../Components/Title";
import { Almond, Quadrada, Stiletto } from "../../Components/Nails";

export default function Nail() {
  return (
    <>
      <div className="tabela">
        <Title title="Nails" />
        <Stiletto />
        <Almond />
        <Quadrada />
      </div>
      <Footer />
    </>
  );
}

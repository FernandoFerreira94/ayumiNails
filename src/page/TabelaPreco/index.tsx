import Footer from "../../Components/Footer";
import Title from "../../Components/Title";
import "./tabela.scss";

interface TabelaProps {
  text: string;
  valor: string;
}

export const Lista = ({ text, valor }: TabelaProps) => {
  return (
    <li>
      <span>{text}</span>
      <span className="valor">R$ {valor},00</span>
    </li>
  );
};

export default function Tabela() {
  return (
    <>
      <div className="tabela">
        <Title title="Tabela de preço" />

        <ul>
          <Lista text="Alogamento em Fibra" valor="140" />
          <Lista text="Manutenção até 20 dias   " valor="90" />
          <Lista text="Manutenção apos 20 dias" valor="100" />
          <Lista text="Banho em gel" valor="85" />
          <Lista text="Blindagem" valor="60" />
          <Lista text="Reposição de unha " valor="8" />
          <Lista text="Decoração encapsulada" valor="5" />
          <Lista text="Remoção" valor="50" />
        </ul>
        <p>Ps: qualquer procedimento inclui a esmaltação em gel</p>
      </div>
      <Footer />
    </>
  );
}

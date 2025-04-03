import Footer from "../../Components/Footer";
import Title from "../../Components/Title";

import "./cuidado.scss";
interface ListaCuidadoProps {
  title: string;
  text: string;
}

const ListaCuidado = ({ title, text }: ListaCuidadoProps) => {
  return (
    <li>
      <span>
        {" "}
        <strong>{title}:</strong> {text}
      </span>
    </li>
  );
};

export default function Cuidado() {
  return (
    <>
      <div className="tabela">
        <Title title="Cuidados" />{" "}
        {/* Certifique-se de que `Title` aceita "title" */}
        <ol>
          <ListaCuidado
            title="Evite produtos químicos agressivos"
            text="Use luvas ao lidar com produtos de limpeza ou químicos que possam danificar o gel."
          />

          <ListaCuidado
            title="Hidrate as cutículas"
            text="Aplique óleo ou creme hidratante regularmente para manter a região ao redor das unhas saudável."
          />
          <ListaCuidado
            title="Não use as unhas como ferramentas"
            text="Evite abrir embalagens ou realizar tarefas que possam causar pressão excessiva nas unhas."
          />
          <ListaCuidado
            title="Faça manutenção regularmente"
            text="Retorne ao profissional para ajustes e manutenção a cada 20 dias, dependendo do crescimento das unhas."
          />
          <ListaCuidado
            title="Evite roer as unhas"
            text="Isso pode comprometer a blindagem e causar danos ao gel."
          />
          <ListaCuidado
            title="Proteja as unhas de impactos"
            text="Evite bater ou pressionar as unhas contra superfícies duras."
          />
          <ListaCuidado
            title="Use esmaltes adequados"
            text="Caso deseje pintar as unhas, escolha esmaltes compatíveis com unhas em gel e finalize com top coat para maior durabilidade.
"
          />
          <ListaCuidado
            title="Evite exposição prolongada à água"
            text="Muita água pode enfraquecer a blindagem, então seque bem as mãos após lavá-las."
          />
          <ListaCuidado
            title="Não tente remover o gel sozinho"
            text="Sempre procure um profissional para evitar danos às unhas naturais."
          />
        </ol>
      </div>
      <Footer />
    </>
  );
}

import Footer from "../../Components/Footer";
import Title from "../../Components/Title";
import "./sobre.scss";
import PhotoPerfil from "../../assets/photo-perfil.png";

export default function Sobre() {
  return (
    <>
      <div className="tabela">
        <Title title="Sobre" />
        <div className="sobre">
          <div>
            <img src={PhotoPerfil} alt="" />
          </div>
          <div className="sobre-text">
            <p>
              " Olá! Meu nome é <strong>Fernanda Ayumi</strong>, tenho 22 anos e
              sou formada em Design de Nails Art. Trabalho com unhas com muito
              carinho, dedicação e atenção aos detalhes, sempre buscando
              valorizar a beleza e o bem-estar de cada cliente. Sou uma pessoa
              extrovertida, alegre e procuro sempre oferecer um atendimento
              humanizado, criando um ambiente acolhedor, onde minhas clientes se
              sintam à vontade, relaxadas e seguras. Tenho orgulho da minha
              origem oriental japonesa, que me inspira a ser disciplinada,
              cuidadosa e comprometida com a excelência. Além disso, sou
              estudante de Psicologia, o que contribui ainda mais para o meu
              olhar atento e respeitoso com cada pessoa que atendo. Amo o que
              faço e estou em constante evolução para entregar sempre o melhor
              resultado — porque mais do que unhas bonitas, quero proporcionar"
              uma experiência completa de cuidado e autoestima. 💅✨ "
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

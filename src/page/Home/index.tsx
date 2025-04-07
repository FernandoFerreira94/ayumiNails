import Carroseu from "../../Components/Carroseu";
import Footer from "../../Components/Footer";
import Logo from "../../Components/Logo";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function load() {
      toast("Olá seja bem vinda 💅");
    }
    load();
  }, []);
  return (
    <>
      <Logo />
      <main>
        <Carroseu />
      </main>
      <Footer />
    </>
  );
}

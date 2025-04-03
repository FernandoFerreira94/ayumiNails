import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../page/Home";
import Page404 from "../page/PageErro";
import Nail from "../page/Nails";
import Tabela from "../page/TabelaPreco";
import Sobre from "../page/Sobre";
import Cuidado from "../page/Cuidado/interx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:nails" element={<Nail />} />
        <Route path="/tabela" element={<Tabela />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cuidado" element={<Cuidado />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

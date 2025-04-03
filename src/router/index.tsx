import { func } from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Page404 from "../page/PageErro";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

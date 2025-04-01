import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./sass/custom.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")!).render(<App />);

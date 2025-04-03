import Header from "./Components/Header";
import AppRouter from "./router";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <Header />

      <AppRouter />
      <ToastContainer autoClose={2000} />
    </>
  );
}

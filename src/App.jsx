import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import N8nChat from "./components/N8nChat.jsx";

import Sobre from "./pages/Sobre.jsx";
import Projetos from "./pages/Projetos.jsx";
import Tecnologias from "./pages/Tecnologias.jsx";
import Contato from "./pages/Contato.jsx";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <Header />

        <Routes>
          {/* Página inicial */}
          <Route
            path="/"
            element={
              <main className="relative">
                <Hero />
                {/* Gradiente e blur */}
                <img
                  className="absolute top-0 right-0 opacity-60 -z-1"
                  src="/gradient.png"
                  alt="Gradient-img"
                />
                <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>
                <N8nChat />
              </main>
            }
          />

          {/* Outras páginas */}
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
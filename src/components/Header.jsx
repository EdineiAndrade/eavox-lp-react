import 'boxicons/css/boxicons.min.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
  };

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
      <header className="flex justify-between items-center p-4 px-4 lg:px-20">
        {/* Título 3D - só aparece na home */}
        {isHome && ( <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold md:font-light leading-snug md:leading-tight m-0"
        >
          EAVOX - 3D Interativo
        </h1>)}

        {/* DESKTOP NAVEGAÇÃO */}
        <nav
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="hidden md:flex items-center gap-12"
        >
          <Link
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            to="/"
          >
            Home
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            to="/Sobre"
          >
            Sobre
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            to="/Projetos"
          >
            Projetos
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2500"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            to="/Tecnologias"
          >
            Tecnologias
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            to="/Contato"
          >
            Contato
          </Link>
        </nav>

        <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
          Login
        </button>

        {/* MOBILE MENU BUTTON */}
        <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
          <i className="bx bx-menu"></i>
        </button>

        {/* MOBILE NAVEGAÇÃO */}
        <div
          id="mobileMenu"
          className="hidden fixed top-16 right-0 left-0 bottom-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-sm"
        >
          <nav className="flex flex-col gap-6 items-center">
            <Link
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              to="/"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            
            <Link
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              to="/Sobre"
              onClick={toggleMobileMenu}
            >
              Sobre
            </Link>
            <Link
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              to="/Projetos"
              onClick={toggleMobileMenu}
            >
              Projetos
            </Link>
            <Link
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              to="/Tecnologias"
              onClick={toggleMobileMenu}
            >
              Tecnologias
            </Link>
            <Link
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              to="/Contato"
              onClick={toggleMobileMenu}
            >
              Contato
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

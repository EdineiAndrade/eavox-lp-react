import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

const Hero = () => {
 return (
    <main className="relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">

      <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="max-w-xl ml-[5%] z-10">
        {/* Hero Text */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full flex">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-xs sm:text-sm">
            <i className="bx bx-diamond"></i>
            APRESENTANDO
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider my-8">
          CRIAÇÃO DE <br />
          SITES MODERNOS
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base tracking-wider text-gray-400 max-w-[25rem]">
          Desenvolvimento de interfaces web rápidas, responsivas e bem estruturadas, combinando design moderno, performance e experiências interativas em 3D. Projetos pensados para apresentar marcas, serviços e produtos de forma clara, profissional e visualmente impactante.
        </p>

        {/* Call-to-Action Button */}
        <div className="flex gap-4 mt-8 flex-wrap">
          <Link
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-base text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
            to="/Tecnologias"
          >
            Tecnologias <i className="bx bx-link-external"></i>
          </Link>

          <Link
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-base text-sm font-semibold tracking-wider transition-all duration-300 bg-gray-300 text-black hover:bg-[#1a1a1a] hover:text-white"
            to="/Projetos"
          >
            Ver Projetos <i className="bx bx-link-external"></i>
          </Link>
        </div>
      </div>

      {/* 3D Robot */}

      <Spline className="order-first w-[180px] h-[180px] mx-auto mb-8 sm:w-[260px] sm:h-[260px] lg:order-none lg:mb-0 lg:w-[420px] lg:h-[420px] z-0" scene="https://prod.spline.design/xT2D5-PXRdX9r7gu/scene.splinecode" />


    </main>
  )
}

export default Hero

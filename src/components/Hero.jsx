import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
        <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
           {/* Hero Text */}
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full flex'>
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                    <i class='bx  bx-diamond'></i>
                    APRESENTANDO
                </div>
            </div>
            {/* Main Heading */}
            <h1 className='text-3x1 sm:text-4x1 md:text-5x1 lg:text-6x1 font-semibold tracking-wider my-8'>
               CRIAÇÃO DE <br/>
              SITES MODERNOS
            </h1>
            {/* Subheading */}
            <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max'>
                Desenvolvimento de interfaces web rápidas, responsivas e bem estruturadas, combinando design moderno, performance e experiências interativas em 3D. Projetos pensados para apresentar marcas, serviços e produtos de forma clara, profissional e visualmente impactante.
            </p>
            {/* Call-to-Action Button */}
            <div className=''>
                <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]'href="">
                    Documentation
                    <i className='bx bx-link-external'></i> 
                </a>
                 <a className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white'href="">
                    GetStarted
                    <i className='bx bx-link-external'></i> 
                </a>
            </div>
        </div>
        {/* 3D Robot */}
   
        <Spline className="w-full h-[280px] mx-auto mb-8 sm:h-[360px] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-12 lg:w-[420px] lg:h-[420px] pointer-events-none z-0" scene="https://prod.spline.design/xT2D5-PXRdX9r7gu/scene.splinecode" />

    </main>
  )
}

export default Hero

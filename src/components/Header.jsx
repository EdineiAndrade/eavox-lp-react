import 'boxicons/css/boxicons.min.css';

const Header = () => {
    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        }else {
            mobileMenu.classList.add('hidden');
        }
    };

  return (
    <div>
      <header className="flex justify-between items-center p-4 px-4 lg:px20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0 ">
            EAVOX
        </h1>
        {/* DESKTOP NAVEGAÇÃO */}
        <nav className="hidden md:flex items-center gap-12">
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#home">Home</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#serviços">Serviços</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#sobre">Sobre</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#contato">Contato</a>
        </nav>

        <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50"> 
            Login

        </button>
        {/* MOBILE MENU BUTTON */}
        <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50 '>
            <i class='bx  bx-menu'></i> 
        </button>
        {/* MOBILE NAVEGAÇÃO */}
        <div id='mobileMenu' className='hidden fixed top-16 right-0 left-0 bottom-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-sm md'>
            <nav className='flex flex-col gap-6 items-center'>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#home">Home</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#serviços">Serviços</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#sobre">Sobre</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#contato">Contato</a>
            </nav>
        </div>

      </header>
    </div>
  )
}

export default Header

import React, { useState } from 'react';

const NavItem = ({ href, children, mobile }) => {
  const baseClasses = "border-b-2 border-transparent hover:border-white transition duration-300";
  const mobileClasses = mobile ? "pb-1 inline-block" : "pb-2";
  
  return (
    <li>
      <a className={`${baseClasses} ${mobileClasses}`} href={href}>
        {children}
      </a>
    </li>
  );
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-[#222222] px-6 py-5 md:px-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#1A98D2] text-2xl font-semibold md:text-[2rem]">Technoholic</h1>
        </div>

        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        <div className="hidden md:block">
          <ul className="flex w-auto space-x-6 text-[1.3rem] text-white">
            <NavItem href="#">Home</NavItem>
            <NavItem href="#">Products</NavItem>
            <NavItem href="#">About</NavItem>
            <NavItem href="#">Contact</NavItem>
            <NavItem href="#">Sign in</NavItem>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col space-y-4 text-lg text-white">
            <NavItem href="#" mobile>Home</NavItem>
            <NavItem href="#" mobile>Products</NavItem>
            <NavItem href="#" mobile>About</NavItem>
            <NavItem href="#" mobile>Contact</NavItem>
            <NavItem href="#" mobile>Sign in</NavItem>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
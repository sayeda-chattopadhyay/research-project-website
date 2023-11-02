

import  { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`flex justify-between items-center p-4 bg-gray-800 text-white ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="font-bold">Your Logo</div>

      <div className="hidden md:flex">
        <NavLink to="/" exact className="text-white hover:text-gray-300 mx-2">
          Home
        </NavLink>
        <NavLink to="/about" className="text-white hover:text-gray-300 mx-2">
          About
        </NavLink>
        <NavLink to="/research" className="text-white hover:text-gray-300 mx-2">
          Research
        </NavLink>
        <NavLink to="/publications" className="text-white hover:text-gray-300 mx-2">
          Publications
        </NavLink>
        <NavLink to="/team" className="text-white hover:text-gray-300 mx-2">
          Team
        </NavLink>
      </div>

      <div className="mr-2">Language</div>

      <div className="md:hidden cursor-pointer text-2xl" onClick={toggleMobileMenu}>
        ☰
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col absolute top-16 left-0 bg-gray-800 w-full">
          <div onClick={toggleMobileMenu} className="text-white text-right p-2">
            ✖
          </div>
          <NavLink to="/" exact onClick={toggleMobileMenu} className="text-white p-2">
            Home
          </NavLink>
          <NavLink to="/about" onClick={toggleMobileMenu} className="text-white p-2">
            About
          </NavLink>
          <NavLink to="/research" onClick={toggleMobileMenu} className="text-white p-2">
            Research
          </NavLink>
          <NavLink to="/publications" onClick={toggleMobileMenu} className="text-white p-2">
            Publications
          </NavLink>
          <NavLink to="/team" onClick={toggleMobileMenu} className="text-white p-2">
            Team
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;

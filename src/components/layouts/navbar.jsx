import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./logo";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`flex justify-between items-center px-8 md:px-[4rem] py-4 bg-primary text-white fixed top-0 left-0 right-0 z-1 ${
        isMobileMenuOpen ? "mobile-menu-open" : ""
      }`}
    >
      <NavLink to="/" className="font-bold">
        <Logo />
      </NavLink>
      {/* desktop navbar */}
      <div className="hidden md:flex">
        <NavLink to="/" exact className="text-white hover:text-gray-300 mx-3">
          Home
        </NavLink>
        <NavLink to="/about" className="text-white hover:text-gray-300 mx-3">
          About
        </NavLink>
        <NavLink to="/research" className="text-white hover:text-gray-300 mx-3">
          Research
        </NavLink>
        <NavLink
          to="/publications"
          className="text-white hover:text-gray-300 mx-3"
        >
          Publications
        </NavLink>
        <NavLink to="/team" className="text-white hover:text-gray-300 mx-3">
          Team
        </NavLink>
      </div>
      {/* desktop navbar end */}
      {/* mobile nav bar - hamburger menu */}
      <div
        className="md:hidden cursor-pointer text-2xl"
        onClick={toggleMobileMenu}
      >
        <FaBars />
      </div>

      {/* mobile nav bar */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col gap-4 items-center px-10 py-10 fixed top-0 right-0 bg-primary w-[60%] h-[90%] rounded-md">
          <div
            onClick={toggleMobileMenu}
            className="text-white text-right p-2 text-2xl"
          >
            <FaTimes />
          </div>
          <NavLink
            to="/"
            exact
            onClick={toggleMobileMenu}
            className="text-white p-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMobileMenu}
            className="text-white p-2"
          >
            About
          </NavLink>
          <NavLink
            to="/research"
            onClick={toggleMobileMenu}
            className="text-white p-2"
          >
            Research
          </NavLink>
          <NavLink
            to="/publications"
            onClick={toggleMobileMenu}
            className="text-white p-2"
          >
            Publications
          </NavLink>
          <NavLink
            to="/team"
            onClick={toggleMobileMenu}
            className="text-white p-2"
          >
            Team
          </NavLink>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;

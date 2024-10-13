import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for hamburger and close
import { FaGithub } from "react-icons/fa"; // Icon for GitHub

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Contact");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu state

  const handleClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu after selecting a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <div className="fixed top-0 w-full z-50 shadow-lg bg-white text-black box-border">
      {/* Navbar for larger screens */}
      <div className="hidden lg:flex justify-between px-8 lg:px-20 py-8 items-center">
        <div className="logo text-[20px] font-Poppins font-semibold cursor-pointer hover:text-[#C5D86D]">isbahFalaqiy.log();</div>
        <ul className="flex gap-8  list-none font-Poppins font-semibold text-[15px] items-center ">
          <li>
            <Link to="/" onClick={() => handleClick("Home")} className={`hover:text-[#C5D86D] ${activeLink === "Home" ? "border-b-4 border-[#C5D86D] text-[#C5D86D]" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={() => handleClick("About")} className={`hover:text-[#C5D86D] ${activeLink === "About" ? "border-b-4 border-[#C5D86D] text-[#C5D86D]" : ""}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Project" onClick={() => handleClick("Project")} className={`hover:text-[#C5D86D] ${activeLink === "Project" ? "border-b-4 border-[#C5D86D] text-[#C5D86D]" : ""}`}>
              Project
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={() => handleClick("Contact")} className={`hover:text-[#C5D86D] ${activeLink === "Contact" ? "border-b-4 border-[#C5D86D] text-[#C5D86D]" : ""}`}>
              Contact
            </Link>
          </li>
        </ul>
        {/* GitHub Icon */}
        <a href="https://github.com/Isbahfalaqiy" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:text-[#C5D86D]  flex justify-end relative left-[7px]" />
        </a>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between px-8 py-8 items-center">
        <div className="logo text-[17px] font-Poppins font-semibold cursor-pointer hover:text-[#C5D86D]">isbahFalaqiy.log();</div>
        {/* Hamburger Menu Icon */}
        <div onClick={toggleMenu}>{isMenuOpen ? <AiOutlineClose className="text-3xl cursor-pointer" /> : <AiOutlineMenu className="text-3xl cursor-pointer" />}</div>
      </div>

      {/* Mobile Menu - conditional rendering */}
      {isMenuOpen && (
        <div className="flex flex-col gap-6 items-center py-4 bg-white text-black opacity-90">
          <Link to="/" onClick={() => handleClick("Home")} className={`hover:text-[#C5D86D] ${activeLink === "Home" ? "border-b-4 border-[#C5D86D] text-[#C5D86D]" : ""}`}>
            Home
          </Link>
          <Link to="/About" onClick={() => handleClick("About")} className={`hover:text-[#C5D86D] ${activeLink === "About" ? "border-b-4 border-[#C5D86D] text-[#C5D86D]" : ""}`}>
            About
          </Link>
          <Link to="/Project" onClick={() => handleClick("Project")} className={`hover:text-[#C5D86D] ${activeLink === "Project" ? "border-b-4 border-[#C5D86D] text-[#C5D86D]" : ""}`}>
            Project
          </Link>
          <Link to="/Contact" onClick={() => handleClick("Contact")} className={`hover:text-[#C5D86D] ${activeLink === "Contact" ? "border-b-4 border-[#C5D86D] text-[#C5D86D]" : ""}`}>
            Contact
          </Link>
          {/* GitHub Icon for Mobile Menu */}
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-[#C5D86D]" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;

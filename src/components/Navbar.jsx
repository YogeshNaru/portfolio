import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 bg-[#0a192f] shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 h-16">
        {/* Logo */}
        <a href="/portfolio" className="inline-block">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="logo image"
            width={40}
            height={40}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <ol className="flex space-x-8 text-sm text-[#ccd6f6]">
            <li>
              <span className="text-[#64ffda] mr-1 text-xs">01.</span>
              <a href="#About" className="hover:text-[#64ffda]">
                About
              </a>
            </li>
            <li>
              <span className="text-[#64ffda] mr-1 text-xs">02.</span>
              <a href="#Skills" className="hover:text-[#64ffda]">
                Skills
              </a>
            </li>
            <li>
              <span className="text-[#64ffda] mr-1 text-xs">03.</span>
              <a href="#Projects" className="hover:text-[#64ffda]">
                Projects
              </a>
            </li>
            <li>
              <span className="text-[#64ffda] mr-1 text-xs">04.</span>
              <a href="#Contact" className="hover:text-[#64ffda]">
                Contact
              </a>
            </li>
          </ol>
          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" text-sm border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded transform transition duration-300 ease-in-out hover:scale-105 hover:bg-[#64ffda] hover:text-[#0a192f]  ">
              Resume
            </button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#64ffda]"
        >
          {isOpen ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a192f] px-6 pb-6 space-y-4 text-sm text-[#ccd6f6]">
          <ol className="space-y-4">
            <li>
              <span className="text-[#64ffda] mr-1 text-xs">01.</span>
              <a href="#About" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <span className="text-[#64ffda] mr-1 text-xs">02.</span>
              <a href="#Skills" onClick={() => setIsOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <span className="text-[#64ffda] mr-1 text-xs">03.</span>
              <a href="#Projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <span className="text-[#64ffda] mr-1 text-xs">04.</span>
              <a href="#Contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ol>
          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" mt-4  w-full text-sm border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded transform transition duration-300 ease-in-out hover:scale-105 hover:bg-[#64ffda] hover:text-[#0a192f]">
              Resume
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}

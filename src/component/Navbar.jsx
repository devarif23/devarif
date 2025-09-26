import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <header className="relative mb-16">
        <nav className="fixed left-0 right-0 top-0  lg:w-[1024px] xl:w-[1250px] md:w-[700px] sm:w-[390px]  w-[320px] bg-bg-color rounded-bl-xl rounded-br-xl mb-20 mx-auto px-6 py-4 flex items-center justify-between z-50">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <h1 className="text-xl font-bold text-primary font-helvetica">arifjahan</h1>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={handleToggle}
              id="menu-toggle"
              className="focus:outline-none"
            >
              {open ? (
                <IoMdClose className="w-6 h-6 text-[#87F5FF]" />
              ) : (
                <svg
                  className="w-6 h-6 text-[#87F5FF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu Items */}
          <ul className="hidden text-sm lg:flex lg:items-center lg:space-x-6">
            <li>
              <Link
                to="/"
                className="relative block py-2 text-white nav-glow hover:text-primary lg:py-0 font-mont"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Service-page"
                className="relative block py-2 text-white nav-glow font-mont hover:text-primary lg:py-0"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/Protfolio-page"
                className="relative block py-2 text-white nav-glow font-mont hover:text-primary lg:py-0"
              >
                Portfolio
              </Link>
            </li>
            {/* <li>
              <Link
                to="/blog-page"
                className="relative block py-2 text-white nav-glow font-mont hover:text-primary lg:py-0"
              >
               Blog
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/About-page"
                className="relative block py-2 text-white nav-glow font-mont hover:text-primary lg:py-0"
              >
                About
              </Link>
            </li> */}
           {/*  <li>
              <Link
                to="#blog"
                className="relative block py-2 text-white nav-glow font-mont hover:text-primary lg:py-0"
              >
                Blog
              </Link>
            </li> */}
            <li>
              <Link
                to="/Contatc-page"
                className="relative block py-2 text-white nav-glow font-mont hover:text-primary lg:py-0"
              >
                Contact
              </Link>
            </li>
            <li className="hidden space-x-2 lg:flex rtl:space-x-reverse">
              <Link
                to="https://github.com/devarif420"
                className="px-4 py-2 text-sm text-center transition duration-300 ease-in-out delay-75 rounded-full bg-primary md:hover:bg-body md:hover:text-secondary md:hover:border md:border font-mont border-primary"
              >
                GitHub
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setOpen(false)}
          ></div>
          <ul
            className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <button onClick={handleToggle} className="text-white">
                <IoMdClose className="w-6 h-6 text-[#87F5FF]" />
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <li>
                <Link
                  to="/"
                  className="relative block py-2 text-white nav-glow hover:text-primary font-mont"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Service-page"
                  className="relative block py-2 text-white nav-glow font-mont hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  to="/Protfolio-page"
                  className="relative block py-2 text-white nav-glow font-mont hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/blog-page"
                  className="relative block py-2 text-white nav-glow font-mont hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                 Blog
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="/About-page"
                  className="relative block py-2 text-white nav-glow font-mont hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </li> */}
          
              <li>
                <Link
                  to="/Contatc-page"
                  className="relative block py-2 text-white nav-glow font-mont hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm font-normal text-center text-black transition duration-300 ease-in-out delay-75 rounded-full bg-primary font-mont border-1 hover:bg-body hover:text-primary hover:border-primary"
                  onClick={() => setOpen(false)}
                >
                 GitHub
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
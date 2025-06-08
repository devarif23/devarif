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
              <h1 className="text-primary text-2xl font-bold">arifjahan</h1>
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
          <ul className="hidden lg:flex lg:items-center lg:space-x-6 text-sm">
            <li>
              <Link
                to="/"
                className="nav-glow relative hover:text-primary text-white block py-2 lg:py-0 font-mont"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Service-page"
                className="nav-glow relative font-mont hover:text-primary text-white block py-2 lg:py-0"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/Protfolio-page"
                className="nav-glow relative font-mont hover:text-primary text-white block py-2 lg:py-0"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog-page"
                className="nav-glow relative font-mont hover:text-primary text-white block py-2 lg:py-0"
              >
               Blog
              </Link>
            </li>
            <li>
              <Link
                to="/About-page"
                className="nav-glow relative font-mont hover:text-primary text-white block py-2 lg:py-0"
              >
                About
              </Link>
            </li>
           {/*  <li>
              <Link
                to="#blog"
                className="nav-glow relative font-mont hover:text-primary text-white block py-2 lg:py-0"
              >
                Blog
              </Link>
            </li> */}
            <li>
              <Link
                to="/Contatc-page"
                className="nav-glow relative font-mont hover:text-primary text-white block py-2 lg:py-0"
              >
                Contact
              </Link>
            </li>
            <li className="hidden lg:flex space-x-2 rtl:space-x-reverse">
              <Link
                to="https://github.com/devarif420"
                className="px-4 py-2 bg-primary md:hover:bg-body md:hover:text-secondary md:hover:border md:border font-mont rounded-full text-sm text-center border-primary transition delay-75 duration-300 ease-in-out"
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
            <div className="p-4 flex justify-end">
              <button onClick={handleToggle} className="text-white">
                <IoMdClose className="w-6 h-6 text-[#87F5FF]" />
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <li>
                <Link
                  to="/"
                  className="nav-glow relative hover:text-primary text-white block py-2 font-mont"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Service-page"
                  className="nav-glow relative font-mont hover:text-primary text-white block py-2"
                  onClick={() => setOpen(false)}
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  to="/Protfolio-page"
                  className="nav-glow relative font-mont hover:text-primary text-white block py-2"
                  onClick={() => setOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog-page"
                  className="nav-glow relative font-mont hover:text-primary text-white block py-2"
                  onClick={() => setOpen(false)}
                >
                 Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/About-page"
                  className="nav-glow relative font-mont hover:text-primary text-white block py-2"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </li>
          
              <li>
                <Link
                  to="/Contatc-page"
                  className="nav-glow relative font-mont hover:text-primary text-white block py-2"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  to="#"
                  className="px-4 py-2 bg-primary text-black font-normal rounded-full text-sm text-center font-mont transition delay-75 duration-300 ease-in-out border-1 hover:bg-body hover:text-primary hover:border-primary block"
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
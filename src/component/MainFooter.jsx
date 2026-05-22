import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MainFooter = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-32 text-white overflow-hidden bg-slate-950">
      {/* Floating particle background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('/particle.png')] bg-repeat animate-pulse"></div>
      </div>

      <div className="relative px-6 py-16 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo & Social */}
          <div className="flex-1 space-y-4">
            <Link
              to="/"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <img src="/arifjahan01.png" width={180} alt="Arif Jahan" />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Front-End Web Developer || React.JS || Tailwind CSS || WordPress
              Site Builder
            </p>

            <div className="flex gap-4 text-lg mt-2">
              <a
                href="https://www.facebook.com/devarif23"
                className="p-2 rounded-full bg-white/10 hover:bg-blue-500 hover:scale-110 transition-transform"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/devarif23"
                className="p-2 rounded-full bg-white/10 hover:bg-gray-700 hover:scale-110 transition-transform"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/devarif23/"
                className="p-2 rounded-full bg-white/10 hover:bg-pink-500 hover:scale-110 transition-transform"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/devarif23/"
                className="p-2 rounded-full bg-white/10 hover:bg-sky-500 hover:scale-110 transition-transform"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-cyan-400 transition-all hover:pl-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Service-page"
                  className="hover:text-cyan-400 transition-all hover:pl-2"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/Contatc-page"
                  className="hover:text-cyan-400 transition-all hover:pl-2"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-all hover:pl-2">
                Web Design
              </li>
              <li className="hover:text-cyan-400 transition-all hover:pl-2">
                Front-End Development
              </li>
              <li className="hover:text-cyan-400 transition-all hover:pl-2">
                WordPress Development
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Rangpur, Bangladesh</li>
              <li>📞 +880 1568552746</li>
              <li>✉ mdarifjahan2004@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 mt-12 text-center text-gray-500 border-t border-white/10">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400 font-semibold">Arif Jahan</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollTop}
        className="fixed z-50 p-3 text-white transition-all duration-300 rounded-full shadow-lg bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 hover:scale-110"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default MainFooter;

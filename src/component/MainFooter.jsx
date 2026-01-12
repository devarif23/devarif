import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const MainFooter = () => {
    return (
        < >
       


<footer className="px-4 py-12 text-white bg-slate-900 md:w-full md:mt-32 sm:px-6 lg:px-8 ">
  <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">
    
 
    {<div className="space-y-4">
      <h3 className="text-xl font-bold">ARIFJAHAN</h3>
      <p className="text-gray-400">Front-End Web Developer || React.JS || Tailwind CSS || WordPress Site Builder</p>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/devarif23" className="text-gray-400 transition hover:text-white">
          <FaFacebookF />
        </a>
        <a href="https://github.com/devarif23" className="text-gray-400 transition hover:text-white">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/devarif23/" className="text-gray-400 transition hover:text-white">
          <FaInstagram/>
        </a>
        <a href="#https://www.linkedin.com/in/devarif23/" className="text-gray-400 transition hover:text-white">
         <FaLinkedin/>
        </a>
      </div>
    </div>}


    <div className="space-y-4">
      <h3 className="text-xl font-bold">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="/" className="text-gray-400 transition hover:text-white">Home</a></li>
        {/* <li><a href="#" className="text-gray-400 transition hover:text-white">About Us</a></li> */}
        <li><a href="/Service-page" className="text-gray-400 transition hover:text-white">Services</a></li>
        <li><a href="/Contatc-page" className="text-gray-400 transition hover:text-white">Contact</a></li>
      </ul>
    </div>

  
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Services</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 transition hover:text-white">Web Design</a></li>
        <li><a href="#" className="text-gray-400 transition hover:text-white">Development</a></li>
        <li><a href="#" className="text-gray-400 transition hover:text-white">WoordPress Developer</a></li>
       {/*  <li><a href="#" className="text-gray-400 transition hover:text-white">Marketing</a></li> */}
      </ul>
    </div>


    <div className="space-y-4">
      <h3 className="text-xl font-bold">Contact Us</h3>
      <ul className="space-y-2 text-gray-400">
        <li className="flex items-center space-x-2">
          <i className="fas fa-map-marker-alt"></i>
          <span>Rangpur, Bangladesh</span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-phone-alt"></i>
          <span>+880 1568552746</span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-envelope"></i>
          <span>mdarifjahan2004@gmail.com</span>
        </li>
      </ul>
    </div>
  </div>

{/*   <!-- Copyright --> */}
  <div className="pt-6 mx-auto mt-12 text-center text-gray-500 border-t border-gray-800 max-w-7xl">
    <p>&copy;2024 Arif Jahan. All Rights Reserved.</p>
  </div>
</footer>
        </>
    );
};

export default MainFooter;
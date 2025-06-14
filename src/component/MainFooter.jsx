import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const MainFooter = () => {
    return (
        < >
       


<footer className="bg-gray-900 md:w-full text-white py-12 md:mt-32 px-4 sm:px-6 lg:px-8 ">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    
 
    {<div className="space-y-4">
      <h3 className="text-xl font-bold">ARIFJAHAN</h3>
      <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white transition">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <FaGithub />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <FaInstagram/>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
         <FaLinkedin/>
        </a>
      </div>
    </div>}


    <div className="space-y-4">
      <h3 className="text-xl font-bold">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
      </ul>
    </div>

  
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Services</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 hover:text-white transition">Web Design</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Development</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">WoordPress Developer</a></li>
       {/*  <li><a href="#" className="text-gray-400 hover:text-white transition">Marketing</a></li> */}
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
  <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
    <p>&copy; 2024 Your Company. All Rights Reserved.</p>
  </div>
</footer>
        </>
    );
};

export default MainFooter;
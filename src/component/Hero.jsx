import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Work from "./Work";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
    // 👉 রাইট ক্লিক বন্ধ
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // 👉 Ctrl+C, Ctrl+U, Ctrl+S ইত্যাদি বন্ধ
    const handleKeyDown = (e) => {
      if (
        e.ctrlKey &&
        ["c", "u", "s", "a"].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <section className=" w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">

          <div
      class=" flex flex-wrap justify-between items-center relative  px-4"
    >
   {/*    <!-- Other content (e.g., heading, paragraph, button) --> */}

      <img
        src="/react1.png"
        alt="React Logo"
        class="w-[250px] md:w-[350px] lg:w-[410px] absolute z-[-50] top-[40px] md:top-[70px] md:left-[66%] left-[20%] -translate-x-1/2 backdrop-opacity-85  animate-slow-spin"
      />
    </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-primary md:mt-20 lg:mb-20 ">
          {/* Left Side Text Content */}
          <motion.div 
            className="order-2 md:order-1 max-w-[600px] md:leading-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.button 
              className="mb-4 px-6 py-3 text-body rounded-full text-sm font-medium border border-blue-950"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Transforming Ideas
            </motion.button>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Hi, I'm Arif Jahan
            </h1>

            <div className="h-10 sm:h-20 md:h-20 flex items-center">
              <TypeAnimation 
                className="text-[#78e08f] text-2xl sm:text-3xl md:text-4xl"
                sequence={[
                  "Front End Web Developer",
                  1000,
                  "WordPress Developer",
                  1000,
                ]}
                wrapper="span"
                speed={1.0}
                deletionSpeed={1.0}
                repeat={Infinity}
              />
            </div>

            <p className="text-base sm:text-lg mb-6 md:mb-8 md:leading-relaxed font-helvetica  ">
              From Rangpur, Bangladesh. I'm a Front End Web developer who is passionate about making error-free websites. I am good at WordPress. I love to talk with you about your unique projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Button 1 */}
              <motion.div 
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="w-full sm:w-[10.5em] h-[3.0em] relative button">
                  <a
                    href="#"
                    className="w-full h-full text-primary border-border bg-neutral-900 border-2 px-4 py-1 font-medium flex justify-center items-center text-base sm:text-lg z-10 relative hover:translate-x-1 hover:translate-y-1 transition-all"
                  >
                    Download CV
                  </a>
                  <div className="absolute z-0 bg-border w-full h-full top-1 left-1"></div>
                </div>
              </motion.div>

              {/* Button 2 */}
             {/*  <motion.div 
                className=""
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
              
              </motion.div> */}

           <div className="md:w-full flex justify-center md:justify-start items-center gap-3 md:gap-5 ml-0 md:ml-2 flex-wrap">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/devarif23"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-blue-500/20"
  >
    <FaFacebookF className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 text-xl md:text-2xl transition-colors duration-300" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/devarif23/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:border-transparent transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-purple-500/20"
  >
    <FaInstagram className="text-gray-700 dark:text-gray-300 group-hover:text-white text-xl md:text-2xl transition-colors duration-300" />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/devarif23"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/30 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-gray-500/20"
  >
    <FaGithub className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white text-xl md:text-2xl transition-colors duration-300" />
  </a>

  {/* Twitter/X */}
  <a
    href="https://x.com/ArifJahan30/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-gray-500/20"
  >
    <FaXTwitter className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white text-xl md:text-2xl transition-colors duration-300" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/your-profile"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-blue-500/20"
  >
    <FaLinkedinIn className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 text-xl md:text-2xl transition-colors duration-300" />
  </a>
  <a
    href="https://linkedin.com/in/your-profile"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:bg-gray-200 dark:hover:bg-blue-900/30 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-blue-500/20"
  >
    <FaPinterest className="text-gray-700 dark:text-gray-300 group-hover:text-[#E60023] text-xl md:text-2xl transition-colors duration-300" />
  </a>
</div>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div 
            className="order-1 md:order-2 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              className="w-full rounded rounded-b-full transition-all duration-1000"
              src="/hero-img.png"
              alt="Arif Jahan - Web Developer"
              whileHover={{ scale: 1.3 }}
            />
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default Hero;

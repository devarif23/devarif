import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect } from "react";

// Tech icons import
import { SiReact, SiTailwindcss, SiPython, SiHtml5, SiCss3, SiWordpress, SiMysql, SiJavascript, SiExpress } from "react-icons/si";

const Hero = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    const handleKeyDown = (e) => {
      if (e.ctrlKey && ["c", "u", "s", "a"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Social media data
  const socialLinks = [
    { 
      href: "https://www.facebook.com/devarif23", 
      icon: FaFacebookF, 
      color: "hover:border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:shadow-blue-500/20",
      iconColor: "group-hover:text-blue-600"
    },
    { 
      href: "https://www.instagram.com/devarif23/", 
      icon: FaInstagram, 
      color: "hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:border-transparent hover:shadow-purple-500/20",
      iconColor: "group-hover:text-white"
    },
    { 
      href: "https://github.com/devarif23", 
      icon: FaGithub, 
      color: "hover:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/30 hover:shadow-gray-500/20",
      iconColor: "group-hover:text-black dark:group-hover:text-white"
    },
    { 
      href: "https://x.com/devarif23", 
      icon: FaXTwitter, 
      color: "hover:border-black dark:hover:border-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-gray-500/20",
      iconColor: "group-hover:text-black dark:group-hover:text-white"
    },
    { 
      href: "https://www.linkedin.com/in/devarif23/", 
      icon: FaLinkedinIn, 
      color: "hover:border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:shadow-blue-500/20",
      iconColor: "group-hover:text-blue-600"
    },
    { 
      href: "https://www.pinterest.com/mdarifjahan90", 
      icon: FaPinterest, 
      color: "hover:border-blue-500 hover:bg-gray-200 dark:hover:bg-blue-900/30 hover:shadow-blue-500/20",
      iconColor: "group-hover:text-[#E60023]"
    },
  ];

  // Tech icons data with different positions around the screen
  const techIcons = [
    { icon: SiReact, name: "React", color: "text-cyan-100", x: "40%", y: "25%" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-blue-400", x: "85%", y: "25%" },
    { icon: SiPython, name: "Python", color: "text-yellow-400", x: "15%", y: "75%" },
    { icon: SiHtml5, name: "HTML5", color: "text-orange-500", x: "80%", y: "70%" },
    { icon: SiCss3, name: "CSS3", color: "text-blue-500", x: "50%", y: "50%" },
    { icon: SiWordpress, name: "WordPress", color: "text-blue-700", x: "90%", y: "55%" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-600", x: "25%", y: "15%" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400", x: "70%", y: "85%" },
    { icon: SiExpress, name: "API", color: "text-gray-100", x: "45%", y: "10%" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Individual floating animation for each icon
  const floatingAnimation = (delay = 0) => ({
    animate: {
      y: [0, -15, 0, 10, 0],
      x: [0, 8, 0, -8, 0],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }
    },
    hover: {
      scale: 1.8,
      rotate: 360,
      y: -20,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  });

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <>
      <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative min-h-screen">
        {/* Tech Icons Distributed Around Screen */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {techIcons.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="absolute"
                style={{
                  top: tech.y,
                  left: tech.x,
                }}
                variants={floatingAnimation(index * 0.5)}
                animate="animate"
                whileHover="hover"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 0.7,
                  scale: 1,
                  transition: { 
                    duration: 1, 
                    delay: index * 0.3,
                    ease: "easeOut" 
                  }
                }}
              >
                <Icon className={`text-3xl md:text-4xl ${tech.color} drop-shadow-lg filter brightness-125  animate-bounce transform-gpu` } />
              </motion.div>
            );
          })}
        </div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row text-primary md:mt-20 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side Text Content */}
          <motion.div
            className="order-2 md:order-1 max-w-[600px] md:leading-none"
            variants={itemVariants}
          >
            {/* Transforming Ideas Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mb-6"
            >
              <button className="px-6 py-3 text-sm font-medium border border-blue-900 rounded-full text-body bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                Transforming Ideas
              </button>
            </motion.div>

            {/* Name */}
            <motion.h1 
              className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Arif Jahan</span>
            </motion.h1>

            {/* Type Animation */}
            <motion.div 
              className="flex items-center mb-2 sm:h-8 md:h-8"
              variants={itemVariants}
            >
              <TypeAnimation
                className="text-2xl font-semibold text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text sm:text-3xl md:text-4xl"
                sequence={[
                  "Front End Web Developer",
                  1500,
                  "WordPress Developer",
                  1500,
                  "React Developer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={40}
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p 
              className="mb-8 text-gray-300 sm:text-lg md:leading-relaxed font-helvetica"
              variants={itemVariants}
            >
              From Rangpur, Bangladesh. I'm a passionate Front End Web Developer 
              dedicated to creating error-free, responsive websites. Specialized in 
              WordPress and modern frameworks. Let's discuss your unique projects!
            </motion.p>

            {/* Buttons and Social Links */}
            <motion.div 
              className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
              variants={itemVariants}
            >
              {/* CV Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
               <div className="w-[22.0em]   sm:w-[9.5em] h-[3.0em] relative button mb-4">
                  <a
                    href="/cv.pdf"
                    className="relative z-10 flex items-center justify-center w-full h-full px-4 py-1 text-base font-medium transition-all border-2 text-primary border-border bg-neutral-900 sm:text-lg hover:translate-x-1 hover:translate-y-1"
                    download
                  >
                    Download CV
                  </a>
                  <div className="absolute z-0 w-full h-full bg-secondary top-1 left-1"></div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-3 sm:justify-start"
                variants={itemVariants}
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 transition-all duration-300 border-2 border-gray-300 rounded-full cursor-pointer dark:border-gray-600 group backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.15,
                        y: -2
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.8 + (index * 0.1) }
                      }}
                    >
                      <Icon className={`text-gray-300 group-hover:text-white text-xl md:text-2xl transition-colors duration-300 ${social.iconColor}`} />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="order-1 md:order-2 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <motion.div
              className="relative"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.img
                className="w-full rounded-3xl rounded-br-[80px] rounded-tl-[80px] shadow-2xl shadow-cyan-500/20 border-4 border-cyan-400/30"
                src="/hero-img.png"
                alt="Arif Jahan - Web Developer"
                whileHover={{
                  boxShadow: "0 20px 40px -10px rgba(34, 211, 238, 0.5)"
                }}
              />
              {/* Animated Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl rounded-br-[80px] rounded-tl-[80px] bg-cyan-400/20 blur-xl -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Floating Background Elements */}
      <motion.div
        className="fixed z-0 w-4 h-4 rounded-full top-20 left-10 bg-cyan-400 opacity-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="fixed z-0 w-6 h-6 bg-blue-400 rounded-full bottom-40 right-20 opacity-30"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </>
  );
};

export default Hero;
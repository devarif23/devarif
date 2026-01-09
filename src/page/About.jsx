import { HiEnvelopeOpen } from "react-icons/hi2";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useEffect } from "react";
// import { motion } from "framer-motion";
import EducationSkillsSection from "../component/EducationSkillsSection.jsx";

const About = () => {
  /* ====================== */
  useEffect(() => {
    // 👉 রাইট ক্লিক বন্ধ
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // 👉 Ctrl+C, Ctrl+U, Ctrl+S ইত্যাদি বন্ধ
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
  /* ================================== */

  return (
    <>
      <section className="flex items-center justify-center min-h-screen p-6 text-white font-helvetica">
        <div className="flex flex-col items-center w-full max-w-6xl gap-10 md:flex-row">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-secondary to-green-400 p-1"
          >
            <img
              src="/hero1.png"
              alt="Arif Jahan"
              className="object-cover w-full h-full border-4 rounded-full border-secondary"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <p className="text-lg font-thin text-secondary font-montserrat">
              ● About Us
            </p>
            <h2 className="text-4xl font-thin font-montserrat">
              Who is <span className="text-secondary">Arif Jahan?</span>
            </h2>
            <p className="text-xl font-thin text-gray font-helvetica">
              "Helping businesses grow with creative web design and development
              solutions."
            </p>
            <p className="leading-relaxed text-gray font-helvetica">
              Hi, I'm a passionate{" "}
              <span className="font-medium text-secondary">
                Frontend Web Developer
              </span>{" "}
              and{" "}
              <span className="font-thin text-secondary font-montserrat">
                WordPress Expert
              </span>{" "}
              with a strong focus on delivering clean, responsive, and
              user-friendly web experiences. I specialize in crafting modern UI
              with technologies like{" "}
              <span className="font-medium text-secondary">ReactJS</span>,{" "}
              <span className="font-medium text-secondary">JavaScript</span>,
              and{" "}
              <span className="font-medium text-secondary">Tailwind CSS</span>,
              while also building powerful and customizable websites using
              WordPress.
            </p>

            {/* Contact + Experience */}
            <div className="flex flex-col items-start justify-between w-full gap-6 pt-4 md:flex-row">
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 font-thin font-montserrat"
                >
                  <HiEnvelopeOpen className="w-11 h-11 text-secondary" />
                  <span>
                    Email Us At <br />
                    <p className="text-gray">mdarifjahan2004@gmail.com</p>
                  </span>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 font-thin font-montserrat"
                >
                  <BiSolidPhoneCall className="w-11 h-11 text-secondary" />
                  <span>
                    Phone Number <br />
                    <p className="text-gray">+880 1720415286</p>
                  </span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1940434a] w-full md:w-auto p-6 rounded-xl text-center shadow-lg hover:shadow-lime-400/20 transition duration-500"
              >
                <h3 className="text-5xl font-bold text-secondary">2+</h3>
                <p className="mt-2 text-lg font-thin text-gray font-montserrat">
                  Years Experience
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== */}
      <EducationSkillsSection />
    </>
  );
};

export default About;
import { HiEnvelopeOpen } from "react-icons/hi2";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useEffect } from "react";
import { motion } from "framer-motion";
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
      <section className="min-h-screen  text-white flex items-center justify-center p-6 font-helvetica">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-secondary to-green-400 p-1"
          >
            <img
              src="/hero1.png"
              alt="Arif Jahan"
              className="rounded-full w-full h-full object-cover border-4 border-secondary"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 space-y-6"
          >
            <p className="text-secondary text-lg font-montserrat font-thin">
              ● About Us
            </p>
            <h2 className="text-4xl font-montserrat font-thin">
              Who is <span className="text-secondary">Arif Jahan?</span>
            </h2>
            <p className="text-xl text-gray font-helvetica font-thin">
              “Helping businesses grow with creative web design and development
              solutions.”
            </p>
            <p className="text-gray leading-relaxed font-helvetica">
              Hi, I’m a passionate{" "}
              <span className="text-secondary font-medium">
                Frontend Web Developer
              </span>{" "}
              and{" "}
              <span className="text-secondary font-thin font-montserrat">
                WordPress Expert
              </span>{" "}
              with a strong focus on delivering clean, responsive, and
              user-friendly web experiences. I specialize in crafting modern UI
              with technologies like{" "}
              <span className="text-secondary font-medium">ReactJS</span>,{" "}
              <span className="text-secondary font-medium">JavaScript</span>,
              and{" "}
              <span className="text-secondary font-medium">Tailwind CSS</span>,
              while also building powerful and customizable websites using
              WordPress.
            </p>

            {/* Contact + Experience */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 pt-4">
              <div className="space-y-6">
                <div className="flex items-center gap-3 font-montserrat font-thin">
                  <HiEnvelopeOpen className="w-11 h-11 text-secondary" />
                  <span>
                    Email Us At <br />
                    <p className="text-gray">mdarifjahan2004@gmail.com</p>
                  </span>
                </div>

                <div className="flex items-center gap-3 font-montserrat font-thin">
                  <BiSolidPhoneCall className="w-11 h-11 text-secondary" />
                  <span>
                    Phone Number <br />
                    <p className="text-gray">+880 1720415286</p>
                  </span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-[#1940434a] w-full md:w-auto p-6 rounded-xl text-center shadow-lg hover:shadow-lime-400/20 transition duration-500"
              >
                <h3 className="text-secondary text-5xl font-bold">2+</h3>
                <p className="text-gray text-lg mt-2 font-montserrat font-thin">
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

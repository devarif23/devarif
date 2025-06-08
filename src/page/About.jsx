/* import { HiAcademicCap, HiEnvelopeOpen } from "react-icons/hi2";
import { BiSolidBookAlt, BiSolidPhoneCall } from "react-icons/bi";
import { FaBookOpen, FaLaptopCode } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi"; */
import { HiEnvelopeOpen } from "react-icons/hi2";
import EducationSkillsSection from "../component/EducationSkillsSection.jsx";
import { BiSolidPhoneCall } from "react-icons/bi";
//import ProgressBar from "@ramonak/react-progress-bar";
const About = () => {
    return (
<>

 <div className="min-h-screen  text-white flex items-center justify-center p-6 md:top-0 md:bottom-0 ">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-6xl w-full animate-fade-in-up duration-1000">
        
        {/* Profile Image */}
        <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr  to-green-400 p-1 animate-spin-slow">
          <img
            src="/hero.png"
            alt="Arif Jahan"
            className="rounded-full w-full h-full object-cover border-4 border-[#21ad17]"
          />
        </div>
        
        {/* Content Section */}
        <div className="flex-1 space-y-4 animate-fade-in-right duration-1000 delay-200 font-montserrat">
          <p className="text-lime-400  text-lg font-montserrat font-thin">● About Us</p>
          <h2 className="text-4xl font-montserrat font-thin">
            Who is <span className="text-lime-400">Arif Jahan?</span>
          </h2>
          <p className="text-xl  text-white font-montserrat font-thin">
            “Helping businesses grow with creative web design and development solutions.”
          </p>
          <p className="text-gray-300 leading-relaxed">
            Hi, I’m a passionate <span className="text-lime-400 font-medium">Frontend Web Developer</span> and <span className="text-lime-400 font-thin font-montserrat">WordPress Expert</span> with a strong focus on delivering clean, responsive, and user-friendly web experiences. I specialize in crafting modern UI with technologies like <span className="text-lime-400 font-medium">ReactJS</span>, <span className="text-lime-400 font-medium">JavaScript</span>, and <span className="text-lime-400 font-medium">Tailwind CSS</span>, while also building powerful and customizable websites using WordPress.
          </p>

          {/* Contact + Experience */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 pt-4">
            <div className="space-y-6">
              <div className="flex items-center gap-3 font-montserrat font-thin">
                <HiEnvelopeOpen className="w-11 h-11 text-lime-400" />
                <span>Email Us At <br /><p>mdarifjahan2004@gmail.com</p></span>
              </div>

              <div className="flex items-center gap-3 font-montserrat font-thin">
                <BiSolidPhoneCall className="w-11 h-11 text-lime-400" />
                <span>Phone Number <br /><p>+880 1720415286</p></span>
              </div>
            </div>

                <div className="bg-[#1940434a] w-full md:w-auto p-6 rounded-xl text-center shadow-lg hover:shadow-lime-400/20 transition duration-500">
                <h3 className="text-lime-400 text-5xl font-bold">2+</h3>
                <p className="text-white text-lg  mt-2 font-montserrat font-thin">Years Experience</p>
                
                </div>
          
          </div>
        </div>
      </div>
    </div>







{/* ==================== */}
<EducationSkillsSection/>
</>
    );
};

export default About;
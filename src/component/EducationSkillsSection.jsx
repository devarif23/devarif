import { HiAcademicCap } from "react-icons/hi2";
import { FaBookOpen, FaLaptopCode } from "react-icons/fa";
import { BiSolidBookAlt } from "react-icons/bi";
import { PiNotebookFill } from "react-icons/pi";
//import { motion } from "framer-motion";

const EducationSkillsSection = () => {
  const skills = [
    { name: "HTML & CSS", level: 90, color: "#67E8F9" },
    { name: "WordPress", level: 40, color: "#67E8F9" },
    { name: "JavaScript", level: 50, color: "#67E8F9" },
    { name: "Java", level: 43, color: "#67E8F9" },
    { name: "Canva", level: 57, color: "#67E8F9" },
    { name: "Figma", level: 44, color: "#67E8F9" },
  ];

  const education = [
    { year: "2020-2021", title: "SSC in Science", icon: <FaBookOpen className="text-xl" /> },
    { year: "2022-2024", title: "Diploma in CST", icon: <BiSolidBookAlt className="text-xl" /> },
    { year: "2025", title: "Inspired IT - Web Design", icon: <PiNotebookFill className="text-xl" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* 🎓 Education Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1 border border-secondary rounded-xl shadow-lg overflow-hidden 
                     transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-[#1f2937]"
        >
          <div className="bg-secondary p-4">
            <h3 className="text-xl uppercase font-bold text-black flex items-center gap-2">
              <HiAcademicCap className="text-2xl" />
              Education
            </h3>
          </div>
          <div className="p-6 space-y-6">
            {education.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="p-3 rounded-full text-secondary bg-gray-800">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-300">{item.year}</p>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 💻 Skills Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1 border border-secondary rounded-xl shadow-lg overflow-hidden 
                     transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-[#1f2937]"
        >
          <div className="bg-secondary p-4">
            <h3 className="text-xl uppercase font-bold text-black flex items-center gap-2">
              <FaLaptopCode className="text-2xl" />
              My Skills
            </h3>
          </div>
          <div className="p-6 space-y-5">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-white">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#374151] rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.15,
                      type: "spring",
                      damping: 6,
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationSkillsSection;

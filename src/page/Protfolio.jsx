import { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineEye } from "react-icons/ai";

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on component mount and resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  /* ========================================================================================================== */
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
  /* ========================================================================================================== */

  // Portfolio content organized as an object
  const portfolioContent = {
    header: {
      subtitle: "Visit my portfolio and keep your feedback",
      title: "My Portfolio"
    },
    projects: [
      {
        projectNumber: "Project 1",
        title: "Branding Nice Studio",
        description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn.",
        image: "/protfolio-demo.jpg",
        demoLink: "https://astonishing-bubblegum-d9818b.netlify.app/",
        readMoreLink: "#project1-details"
      },
      {
        projectNumber: "Project 2",
        title: "Restaurant Landing page",
        description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone.",
        image: "/pro1.jpg",
        demoLink: "https://example-demo-2.com",
        readMoreLink: "#project2-details"
      },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 px-4 md:px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <div className="mt-10 md:mb-10 flex flex-col justify-center items-center">
          <div className="relative px-6 py-4 mb-6 mt-6">
            <h1 className="text-sm font-normal text-[#5DF4A0]">
              {portfolioContent.header.subtitle}
            </h1>

            {/* Border Corners */}
            <div className="absolute top-2 left-0 w-3 h-3 border-t-2 border-l-2 border-[#5DF4A0]"></div>
            <div className="absolute top-2 right-0 w-3 h-3 border-t-2 border-r-2 border-[#5DF4A0]"></div>
            <div className="absolute bottom-2 left-0 w-3 h-3 border-b-2 border-l-2 border-[#5DF4A0]"></div>
            <div className="absolute bottom-2 right-0 w-3 h-3 border-b-2 border-r-2 border-[#5DF4A0]"></div>
          </div>
          <h1 className="md:text-5xl text-3xl text-white font-bold text-center">
            {portfolioContent.header.title}
          </h1>
        </div>

        {/* Projects Section */}
        <div className="space-y-20 md:space-y-32 mt-16">
          {portfolioContent.projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${isMobile ? '' : 'md:flex-row'} items-center gap-8 md:gap-14 group transition-all duration-500 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Block - Always on top for mobile */}
              <div className="relative w-full md:w-1/2 group">
                {/* Animated Background */}
                <div className="absolute -inset-3 bg-[#090925] rounded-2xl blur-xl opacity-70 animate-pulse"></div>
                
                {/* Image with hover animation */}
                <div className="relative z-10 transform transition-all duration-500 ">
                  <img
                    className="rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-[#5DF4A0]/20"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>

              {/* Text Block */}
              <div className="text-white w-full md:w-1/2">
                <span className="text-[#5DF4A0] text-sm font-semibold">
                  {project.projectNumber}
                </span>
                <h1 className="text-2xl md:text-4xl font-light my-3 transition-all duration-300 group-hover:text-[#5DF4A0]">
                  {project.title}
                </h1>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed my-5">
                  {project.description}
                </p>
                
                {/* Button Container */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {/* Demo Button */}
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 text-white rounded-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30 group-hover:gap-3"
                  >
                    <AiOutlineEye className="text-lg transition-transform duration-300 group-hover:scale-110" />
                    <span>Live Demo</span>
                  </a>
                  
                  {/* Read More Button */}
                  <a
                    href={project.readMoreLink}
                    className="inline-flex items-center gap-2 px-5 py-3 text-yellow-300 border border-yellow-300 rounded-md transition-all duration-300 hover:bg-yellow-300 hover:text-gray-900 group-hover:gap-3"
                  >
                    <span>Read More</span>
                    <AiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
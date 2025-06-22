import { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Protfolio = () => {
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
        image: "/protfolio-demo.jpg"
      },
      {
        projectNumber: "Project 2",
        title: "Restaurant Landing page",
        description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone.",
        image: "/pro1.jpg"
      },
      {
        projectNumber: "Project 2",
        title: "Restaurant Landing page",
        description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone.",
        image: "/pro1.jpg"
      }
      ,
      {
        projectNumber: "Project 2",
        title: "Restaurant Landing page",
        description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone.",
        image: "/pro1.jpg"
      }
      ,
      {
        projectNumber: "Project 2",
        title: "Restaurant Landing page",
        description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone.",
        image: "/pro1.jpg"
      }
      ,
      {
        projectNumber: "Project 2",
        title: "Restaurant Landing page",
        description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone.",
        image: "/pro1.jpg"
      }
      ,
      {
        projectNumber: "Project 2",
        title: "Restaurant Landing page",
        description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone.",
        image: "/pro1.jpg"
      }
      ,
      {
        projectNumber: "Project 2",
        title: "Restaurant Landing page",
        description: "The technological revolution is changing aspect of our lives, and the fabric of society itself. It's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone.",
        image: "/pro1.jpg"
      }
    ]
  };

  return (
    <>
      {/* Header Section */}
      <div>
        <div className="mt-20 md:mb-10 flex flex-col justify-center items-center">
          <div className="relative px-4 py-4 mb-4 mt-6">
            <h1 className="text-sm font-normal font-mont text-primary">
              {portfolioContent.header.subtitle}
            </h1>

            {/* Border Corners */}
            <div className="absolute top-2 left-0 w-3 h-3 border-t-2 border-l-2 border-border"></div>
            <div className="absolute top-2 right-0 w-3 h-3 border-t-2 border-r-2 border-border"></div>
            <div className="absolute bottom-2 left-0 w-3 h-3 border-b-2 border-l-2 border-border"></div>
            <div className="absolute bottom-2 right-0 w-3 h-3 border-b-2 border-r-2 border-border"></div>
          </div>
          <h1 className="md:text-5xl text-3xl text-white font-mont font-bold text-center">
            {portfolioContent.header.title}
          </h1>
        </div>
      </div>

      {/* Projects Section */}
      {portfolioContent.projects.map((project, index) => (
        <section
          key={index}
          className={`md:flex md:items-center px-6 mt-7 md:w-[1320px] m-auto gap-14 md:my-32 group transition-all duration-500 ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          }`}
        >
          {/* Text Block */}
          <div className="text-white md:w-[50%]">
            <span className="text-[#5DF4A0] text-[16px] font-poppins font-semibold">
              {project.projectNumber}
            </span>
            <h1 className="text-4xl font-montserrat font-thin my-3 md:text-5xl transition-all duration-300">
              {project.title}
            </h1>
            <p className="text-[16px] md:text-[18px] font-montserrat font-thin leading-6 md:leading-7 my-3 md:my-7 text-gray-300">
              {project.description}
            </p>
            <a
              href="#"
              className="my-3 inline-flex items-center gap-2 text-yellow-300 text-[18px] transition-all duration-300 hover:gap-4"
            >
              <span>Read More</span>
              <AiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Image Block with animation */}
          <div className="relative my-4 md:w-[50%] group">
            {/* Animated Green Background */}
            <div className="absolute inset-10 bg-[#090925] rounded-3xl blur-xl animate-bounce  z-0"></div>

            {/* Rotated Image */}
            <div className="relative z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img
                className="rounded-3xl shadow-lg hover:shadow-green-300/30 transition-shadow duration-500"
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Protfolio;

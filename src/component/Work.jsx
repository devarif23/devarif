import { useState } from "react";

const accordionData = [
  {
    title: "Material Tailwind React",
    content:
      "Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.",
  },
  {
    title: "Material Tailwind HTML",
    content:
      "Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.",
  },
  {
    title: "Material Tailwind Vue",
    content:
      "Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.",
  },
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section id="portfolio" className="  mx-auto mt-20">
        <div className="mt-20 flex flex-col justify-center items-center">
          <div className="relative px-4 py-4 mb-4">
            <h1 className="text-sm font-normal font-mont text-primary">
              My Awesome Works
            </h1>

            {/* Corner Borders */}
           <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-border"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-border"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-border"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-border"></div>
          </div>
          <h1 className="md:text-5xl text-2xl text-white font-mont font-bold text-center">
            My Recent Works
          </h1>
        </div>
      </section>

      <div className="lg:w-[1320px] w-[320px] px-5 mx-auto md:mt-10 md:mb-48">
        {accordionData.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full py-5 text-left font-medium dark:text-white text-slate-800 cursor-pointer"
            >
              {item.title}
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                width="1.5em"
                height="1.5em"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="mb-5 text-sm text-slate-600 dark:text-slate-400">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Work;

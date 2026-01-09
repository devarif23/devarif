import { useEffect } from "react";
import Hero from "../component/Hero";
import Hight from "../component/Hight";
import Service from "../component/Service";
import Contact from "./Contact";


const Home = () => {
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
        <div>
           
           <Hero/>
           
           {/* ======================================================= */}
             
  <div id="" className="flex flex-col items-center justify-center px-8 mt-3 md:mb-10">
        <div className="relative px-4 py-4 mt-6 mb-4">
          <h1 className="text-sm font-normal font-mont text-primary">My Specializations Services</h1>
      
         {/*  <!-- Top-left corner --> */}
          <div className="absolute left-0 w-3 h-3 border-t-2 border-l-2 top-2 border-border"></div>
          {/* <!-- Top-right corner --> */}
          <div className="absolute right-0 w-3 h-3 border-t-2 border-r-2 top-2 border-border"></div>
         {/*  <!-- Bottom-left corner --> */}
          <div className="absolute left-0 w-3 h-3 border-b-2 border-l-2 bottom-2 border-border"></div>
       {/*    <!-- Bottom-right corner --> */}
          <div className="absolute right-0 w-3 h-3 border-b-2 border-r-2 bottom-2 border-border"></div>
        </div>
        <h1 className="text-3xl font-bold text-center text-white md:text-5xl font-mont">What I Do</h1>

       {/*  <p className="mt-3 text-center text-gray font-montserrat ">
          Develop comprehensive content strategies tailored to your unique goals <br />
d and target audience, ensuring that every piece of content.
        </p> */}
      </div>

           {/* ======================================================= */}
           <Service id="#service" />
           <Contact/>
        </div>
    );
};

export default Home;
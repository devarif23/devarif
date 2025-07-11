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
           <Service id="#service" />
           <Contact/>
        </div>
    );
};

export default Home;
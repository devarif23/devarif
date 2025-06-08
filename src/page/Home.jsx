import Hero from "../component/Hero";
import Service from "../component/Service";
import Contact from "./Contact";


const Home = () => {
    return (
        <div>
           <Hero/>
           <Service id="#service" />
           <Contact/>
        </div>
    );
};

export default Home;
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import MainFooter from "../component/MainFooter";

const MainLayout = () => {
    return (
        <>
           <div className="">
       <Navbar/>
       <Outlet/>
       <MainFooter/>
           </div>
        </>
    );
};

export default MainLayout;
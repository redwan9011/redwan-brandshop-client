import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../HomeComponents/Footer/Footer";


const LayOuts = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>

                <Footer></Footer>
        </div>
    );
};

export default LayOuts;
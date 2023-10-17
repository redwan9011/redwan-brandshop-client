import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";


const LayOuts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOuts;
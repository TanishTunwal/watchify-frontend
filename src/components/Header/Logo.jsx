import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../images/image.png";
import { useState } from "react";
import SideBar from "../SideBar";
import { Link } from "react-router-dom";

function Logo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex items-center h-14 bg-black-900 text-white shadow-md z-20">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer z-30"
            >
                <GiHamburgerMenu className="w-6 h-6 text-white" />
            </div>
            <Link to="/">
                <img src={logo} alt="Logo" className="h-7 w-auto ml-4 cursor-pointer z-20 mr-5" />
            </Link>

            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default Logo;



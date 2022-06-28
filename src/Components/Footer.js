import React from 'react';
import {Link} from "react-router-dom";
import {FaSearch, FaShoppingCart, FaUser} from "react-icons/fa";

function Footer(props) {
    return (
        <div className="w_full bg-gray-400 mt-24">
            <div className="w-[80%] mx-auto py-8 px-2 flex justify-between items-between">
                <div className="font-bold text-2xl cursor-pointer">
                    E-Shopy.
                </div>
                <div className="flex  hidden md:block">
                    <div className="space-x-12 mr-20 flex justify-center items-center">
                        <Link to="/" className="uppercase text-base">home</Link>
                        <Link to="/" className="uppercase text-base">shop</Link>
                        <Link to="/" className="uppercase text-base">page</Link>
                        <Link to="/" className="uppercase text-base">blog</Link>
                        <Link to="/" className="uppercase text-base">Contact</Link>
                    </div>
                    <div className="flex space-x-10 justify-center items-center">
                        <div>
                            <FaSearch/>
                        </div>
                        <div>
                            <FaUser/>
                        </div>
                        <div className="bg-gray-300 rounded-full w-10 h-10 p-3">
                            <FaShoppingCart className={"text-gray-900"} />
                        </div>
                    </div>
                </div>
                <div className="md:hidden">

                </div>
            </div>
        </div>
    );
}

export default Footer;
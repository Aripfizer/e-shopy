import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {Link} from "react-router-dom";
import {FaSearch, FaShoppingCart, FaStream, FaTimes, FaUser} from "react-icons/fa";
import PrimaryButton from "./Utilitaires/PrimaryButton";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="mt-0 fixed z-10 top-0 left-0 w-full shadow-md shadow-gray-500 bg-white">
                <div className="md:w-[80%] w-full md:px-0 mx-auto md:py-8 py-3 px-2 flex justify-between items-between">
                    <div className="font-bold cursor-pointer text-xl md:text-2xl flex justify-center items-center font-Lato">
                        <span className="text-green-700">E-Sh</span>
                        <span className="text-rose-600">opy.</span>
                    </div>
                    <div className="flex flex-row hidden md:block">
                        <div className="md:space-x-6 lg:space-x-12 flex justify-center items-center font-Lato font-medium">
                            <PrimaryButton link="/" text="home"></PrimaryButton>
                            <PrimaryButton link="/" text="shop"></PrimaryButton>
                            <PrimaryButton link="/" text="page"></PrimaryButton>
                            <PrimaryButton link="/" text="blog"></PrimaryButton>
                            <PrimaryButton link="/" text="Contact"></PrimaryButton>
                            <div className="ml-20 flex space-x-10 items-center justify-center">
                                <div>
                                    <FaSearch className={"text-green-700 hover:text-rose-600"} />
                                </div>
                                <div>
                                    <FaUser className={"text-green-700 hover:text-rose-600"} />
                                </div>
                                <div className="bg-gray-300 rounded-full w-10 h-10 p-3 relative flex items-center justify-center">
                                    <FaShoppingCart className={"text-gray-900 text-[12px]"} />
                                    <span className="absolute top-0 right-0 text-center bg-green-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-semibold font-Lato">5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <FaStream className={"text-white"} />
                            ) : (
                                <FaTimes className={"text-white"} />
                            )}
                        </button>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 divide-y-2">
                                <Link to="/" className="uppercase text-gray-900 hover:text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">home</Link>
                                <Link to="/" className="uppercase text-gray-900 hover:text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">shop</Link>
                                <Link to="/" className="uppercase text-gray-900 hover:text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">page</Link>
                                <Link to="/" className="uppercase text-gray-900 hover:text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">blog</Link>
                                <Link to="/" className="uppercase text-gray-900 hover:text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
            <div className="w-full p-[3.25rem]"></div>
        </>
    );
}

export default Header;
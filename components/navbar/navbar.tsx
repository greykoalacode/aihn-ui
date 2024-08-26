import React from "react";

const NavBar = () => {
    return (
        <nav className="">
            <div className="w-3/4 container mx-auto py-2 flex items-center justify-between">
                {/* <!-- Logo Section --> */}
                <div className="flex items-center py-3">
                    <img src="aihn_text_logo.png" alt="Logo" className="h-10 w-auto" />
                </div>

                {/* <!-- Navigation Links --> */}
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-800 hover:text-gray-600">feed</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">saved</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">account</a>
                </div>

                {/* <!-- Mobile Menu Button --> */}
                <div className="md:hidden">
                    <button className="text-gray-800 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
import Link from "next/link";
import React from "react";
import Clock from "../clock/Clock";

const NavBar = () => {
    return (
        <nav className="fixed w-full overflow-hidden top-0 left-0 bg-white bg-opacity-75 z-10">
            <div className="w-3/4 container mx-auto py-2 flex items-center justify-between">
                {/* <!-- Logo Section --> */}
                <div className="flex items-center py-3">
                    <Link href="/">
                        <img src="aihn_text_logo.png" alt="Logo" className="h-10 w-auto" />
                    </Link>
                </div>

                <Clock />

                {/* <!-- Navigation Links --> */}
                <div className="hidden md:flex space-x-6">
                    <Link href="feed" className="text-gray-800 hover:text-gray-600">feed</Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-600">saved</Link>
                    <Link href="#" className="text-gray-800 hover:text-gray-600">account</Link>
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
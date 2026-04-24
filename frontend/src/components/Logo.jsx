import React, { useState } from 'react'
import logo from '../assets/aipeslogo.jpeg'

const Logo = () => {
        // State for active menu and mobile menu
        const [activeMenu, setActiveMenu] = useState("home");
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
       // ================= SCROLL TO SECTION FUNCTION =================
    const scrollToSection = (sectionId) => {
        setActiveMenu(sectionId);
        setIsMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <div
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 cursor-pointer"
        >
            {/* <span className="text-2xl">📰</span> */}
            <div className="w-12 h-12 rounded-3xl overflow-hidden">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                A.I.P.E.S.
            </h1>
        </div>
    )
}

export default Logo
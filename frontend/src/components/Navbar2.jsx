import React, { useState } from 'react'
import Logo from './Logo';


const Navbar2 = () => {

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

    // ================= MENU ITEMS =================
    const menuItems = [
        { id: "home", label: "होम" },
        { id: "patrakars", label: "पत्रकार" },
        { id: "team", label: "हमारी टीम" },
        { id: "contact", label: "संपर्क" }
    ];


    return (
        <>
            {/* ================= HEADER WITH CLICKABLE MENU ================= */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">

                        {/* Logo */}
                    <Logo/>

                        {/* Desktop Menu - Clickable */}
                        <nav className="hidden md:flex space-x-6">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${activeMenu === item.id
                                        ? "text-red-600 border-b-2 border-red-600"
                                        : "text-gray-600 hover:text-red-500 hover:bg-red-50"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-2xl text-gray-600 p-2 hover:bg-gray-100 rounded-lg"
                        >
                            {isMobileMenuOpen ? "✕" : "☰"}
                        </button>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-100">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition ${activeMenu === item.id
                                        ? "bg-red-50 text-red-600"
                                        : "text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}

export default Navbar2
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: "home", label: "होम", path: "/" },
    { id: "sadasya", label: "सदस्य", path: "/team" },
    { id: "sampark", label: "संपर्क", path: "/contact" },
    { id: "about", label: "हमारे बारे में", path: "/about" }
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={handleNavClick}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-600 hover:text-red-500 hover:bg-red-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={handleNavClick}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                  isActive(item.path)
                    ? "bg-red-50 text-red-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar2;
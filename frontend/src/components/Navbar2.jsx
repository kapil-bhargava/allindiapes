import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar2 = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Menu configuration
  const menuItems = [
    { id: "home", label: "होम", path: "/", sectionId: "home" },
    // { id: "patrakars", label: "पत्रकार", path: "/#patrakars", sectionId: "patrakars" },
    { id: "team", label: "हमारी टीम", path: "/#team", sectionId: "team" },
    { id: "contact", label: "संपर्क", path: "/contact", sectionId: "contact" }
  ];

  const externalLinks = [
    { id: "about", label: "हमारे बारे में", path: "/about" }
  ];

  // Handle navigation with smooth scroll
  const handleNavigation = (item) => {
    setIsMobileMenuOpen(false);
    
    if (item.sectionId && location.pathname === '/') {
      // On home page - smooth scroll
      setActiveMenu(item.id);
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (item.sectionId && location.pathname !== '/') {
      // On other page - navigate to home with hash
      window.location.href = item.path;
    } else {
      // Regular navigation
      setActiveMenu(item.id);
    }
  };

  // Handle external link navigation
  const handleExternalNav = (link) => {
    setActiveMenu(link.id);
    setIsMobileMenuOpen(false);
  };

  // Update active menu based on route and scroll
  useEffect(() => {
    if (location.pathname === '/about') {
      setActiveMenu('about');
    } else if (location.pathname === '/') {
      const hash = window.location.hash.replace('#', '');
      if (hash && menuItems.some(item => item.sectionId === hash)) {
        setActiveMenu(hash);
      } else {
        setActiveMenu('home');
      }
    }
  }, [location]);

  // Handle hash scroll after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  // Get active class for menu item
  const getActiveClass = (itemId) => {
    const isActive = activeMenu === itemId && location.pathname === '/';
    return isActive 
      ? "text-red-600 border-b-2 border-red-600" 
      : "text-gray-600 hover:text-red-500 hover:bg-red-50";
  };

  const getMobileActiveClass = (itemId) => {
    const isActive = activeMenu === itemId && location.pathname === '/';
    return isActive
      ? "bg-red-50 text-red-600"
      : "text-gray-600 hover:bg-gray-50";
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link to="/" onClick={() => setActiveMenu('home')} className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavigation(item)}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${getActiveClass(item.id)}`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* About Link */}
            {externalLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => handleExternalNav(link)}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeMenu === link.id
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-600 hover:text-red-500 hover:bg-red-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
                onClick={() => handleNavigation(item)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition ${getMobileActiveClass(item.id)}`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* About Link in Mobile */}
            {externalLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => handleExternalNav(link)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                  activeMenu === link.id
                    ? "bg-red-50 text-red-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar2;
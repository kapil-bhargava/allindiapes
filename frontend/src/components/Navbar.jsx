import { useState } from "react";
import { Link } from "react-router-dom";

// ================= MENU COMPONENT =================
const Menu = ({ activeSection, onMenuClick, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const menuItems = [
    { id: "home", label: "होम", labelEn: "Home", icon: "🏠" },
    { id: "patrakars", label: "पत्रकार", labelEn: "Patrakars", icon: "✍️" },
    { id: "team", label: "हमारी टीम", labelEn: "Our Team", icon: "👥" },
    { id: "services", label: "सेवाएँ", labelEn: "Services", icon: "⚙️" },
    { id: "contact", label: "संपर्क", labelEn: "Contact", icon: "📞" }
  ];

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-1 lg:space-x-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onMenuClick(item.id)}
            className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 text-sm lg:text-base ${activeSection === item.id
              ? "bg-red-50 text-red-600 border-b-2 border-red-600"
              : "text-gray-600 hover:text-red-500 hover:bg-red-50"
              }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
            <span className="hidden lg:inline text-xs text-gray-400">| {item.labelEn}</span>
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button & Dropdown */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl text-gray-600 p-2 hover:bg-gray-100 rounded-lg"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-xl rounded-b-2xl z-50 py-2 mx-4 border border-gray-100">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onMenuClick(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-5 py-3 flex items-center gap-3 transition ${activeSection === item.id
                  ? "bg-red-50 text-red-600 border-l-4 border-red-600"
                  : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs text-gray-400">{item.labelEn}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const Navbar = () => {


    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    // Scroll to section handler
    const scrollToSection = (sectionId) => {
      setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  
  return (
    <>

      {/* ================= HEADER with MENU COMPONENT ================= */}
      <header className="bg-white shadow-md sticky top-0 z-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">

            {/* Logo Section */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("home")}>
              <div className="text-3xl bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                📰
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
                  AllIndiaPes
                </h1>
                <p className="text-[10px] md:text-xs text-gray-400 hidden sm:block">देश की आवाज़ · Voice of India</p>
              </div>
            </div>

            {/* Menu Component */}
            <Menu
              activeSection={activeSection}
              onMenuClick={scrollToSection}
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </div>
        </div>
      </header >
    </>
  );
};

export default Navbar;
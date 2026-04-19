import React, { useState } from 'react'
import Logo from './Logo';

const Footer2 = () => {
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
          <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
            <Logo/>
            </div>
            <div className="flex gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm hover:text-white transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center text-xs text-gray-600 pt-6 mt-4 border-t border-gray-800">
            © 2026 AllIndiaPes Media Pvt. Ltd. सर्वाधिकार सुरक्षित
          </div>
        </div>
      </footer>
  )
}

export default Footer2
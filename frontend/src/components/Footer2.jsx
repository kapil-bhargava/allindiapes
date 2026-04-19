import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from './Logo';

const Footer2 = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveMenu(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = [
    { id: "home", label: "होम" },
    { id: "patrakars", label: "पत्रकार" },
    { id: "team", label: "हमारी टीम" },
    { id: "contact", label: "संपर्क" }
  ];

  const socialLinks = [
    { icon: FaFacebook, url: "https://facebook.com/allindiapes", label: "Facebook", color: "hover:text-blue-600" },
    { icon: FaTwitter, url: "https://twitter.com/allindiapes", label: "Twitter", color: "hover:text-sky-500" },
    { icon: FaInstagram, url: "https://instagram.com/allindiapes", label: "Instagram", color: "hover:text-pink-600" },
    { icon: FaYoutube, url: "https://www.youtube.com/@kdsingh4433", label: "YouTube", color: "hover:text-red-600" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Logo />
          </div>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 ${social.color} transition hover:scale-110 transform duration-200`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
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
  );
};

export default Footer2;
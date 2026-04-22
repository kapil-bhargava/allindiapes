import React, { useState } from "react";

/**
 * Professional Minimal Homepage - AllIndiaPes
 * Focus: Team Cards in Portrait View
 * Clickable Header Menu with Working Sections
 * Hindi First Language
 * Fully Responsive with Tailwind CSS
 */

// Importing teams members 
import dinesh from './assets/dinesh.jpeg'
import kd from './assets/kd.jpeg'
import TeamPage from "./components/TeamPage";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
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
    <div className="font-['Inter',sans-serif] bg-gray-50 text-gray-800 min-h-screen">



      {/* ================= HOME SECTION ================= */}
      <section id="home" className="bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="md:text-6xl font-bold text-4xl">
            ऑल इंडिया पत्रकार एकता संघ ( A.I.P.E.S.)
          </h1> <br />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            में आपका स्वागत है <br />
          </h1>
          <p className="text-base md:text-lg text-red-100 mb-6 max-w-2xl mx-auto">
            देश की आवाज़, आपका भरोसा। सटीक, त्वरित और निष्पक्ष पत्रकारिता।
          </p>
          <Link
            to="/patrakars"
            // onClick={() => scrollToSection("patrakars")}
            className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            हमारे सदस्य देखें →
          </Link>
        </div>
      </section>


      {/* ================= OUR TEAM SECTION - PORTRAIT CARDS ================= */}
      <section id="team" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">राष्ट्रीय पदाधिकारी व सदस्य</h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
            <p className="text-gray-500 mt-2">जानिए हमारे सभी राष्ट्रीय पदाधिकारियों और सक्रिय सदस्यों के बारे में</p>
          </div>

          {/* Team cards  */}
          <TeamPage />
        </div>
      </section>

    </div>
  );
}
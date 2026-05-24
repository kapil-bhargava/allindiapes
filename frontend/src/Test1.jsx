import React, { useState } from "react";


// Importing teams members 
import TeamPage from "./components/TeamPage";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ActivitiesPreview from "./components/ActivitiesPreview";

export default function HomePage5() {




  return (
    <div className="font-['Inter',sans-serif] bg-gray-50 text-gray-800 min-h-screen">
      <HeroSection />



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

          {/* <ActivitiesPreview/> */}
        </div>
      </section>

    </div>
  );
}
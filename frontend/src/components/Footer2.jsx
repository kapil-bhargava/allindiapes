import React, { useState } from 'react';

import { FaXTwitter } from "react-icons/fa6";  // For X logo
import {
  FaFacebook, FaWhatsapp, FaTwitter, FaInstagram, FaYoutube,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart,
  FaCode, FaGooglePlay, FaApple, FaArrowRight
} from 'react-icons/fa';
import { MdSecurity, MdPrivacyTip, MdHelpOutline, MdBusinessCenter } from 'react-icons/md';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer2 = () => {
  const [, setActiveMenu] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveMenu(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = [
    { id: "home", label: "होम", path: "/" },
    { id: "sadasya", label: "सदस्य", path: "/team" },
    { id: "sampark", label: "संपर्क", path: "/contact" },
    { id: "about", label: "हमारे बारे में", path: "/about" }
  ];

  // Social Media Links
  const socialLinks = [
    { icon: FaFacebook, url: "https://www.facebook.com/share/14bg9jjCJHv/", label: "Facebook", color: "hover:text-blue-500" },
    { icon: FaXTwitter, url: "https://x.com/Kdsingh19569040", label: "Twitter", color: "hover:text-white" },
    { icon: FaInstagram, url: "https://instagram.com/allindiapes", label: "Instagram", color: "hover:text-pink-500" },
    { icon: FaYoutube, url: "https://www.youtube.com/@kdsingh4433", label: "YouTube", color: "hover:text-red-500" }
  ];

  // Developer Information
  const developer = {
    name: "कपिल भार्गव",
    nameEn: "Kapil Bhargava",
    mobile: "+919565017342",
    mobileDisplay: "9565017342",
    role: "डेवलपर",
    roleEn: "Developer"
  };

  // Useful Links
  const usefulLinks = [
    { name: "हमारे बारे में", icon: MdBusinessCenter, path: "/about" },
    { name: "गोपनीयता नीति", icon: MdPrivacyTip, path: "/privacy" },
    { name: "नियम एवं शर्तें", icon: MdSecurity, path: "/terms" },
    { name: "सहायता केंद्र", icon: MdHelpOutline, path: "/help" },
  ];

  // Contact Info
  const contactInfo = [
    { icon: FaPhone, text: "+91-522-7118207", link: "tel:+915227118207" },
    { icon: FaEnvelope, text: "allindiapes14@gmail.com", link: "mailto:allindiapes14@gmail.com" },
    { icon: FaMapMarkerAlt, text: "सेक्टर 8/24, जानकीपुरम विस्तार, लखनऊ", link: "https://www.google.com/maps/place/24,+Sector+8,+Jankipuram+Vistar,+Khargapur+Jagir,+Lucknow,+Uttar+Pradesh+226031/@26.9384486,80.9320013,1005m/data=!3m1!1e3!4m6!3m5!1s0x399956fae26c0679:0x6621dab0ce8e05b6!8m2!3d26.9384438!4d80.9345762!16s%2Fg%2F11qmpm8s04?entry=ttu&g_ep=EgoyMDI2MDQxOS4wIKXMDSoASAFQAw%3D%3D" },
  ];

  return (
    <footer className="bg-gray-900">
      {/* Red Top Border */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Footer Grid - 5 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-10 border-b border-gray-800">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-10 border-b border-gray-800"> */}

          {/* Column 1: Logo & About */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-5">
              <Logo />
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5">
              ऑल इंडिया पत्रकार एकता संघ देशभर के पत्रकारों की एकता, सुरक्षा और अधिकारों के लिए समर्पित एक संगठन है।
            </p>
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition hover:scale-110 transform duration-200 text-xl`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold text-base md:text-lg mb-4 relative inline-block lg:inline-block">
              त्वरित लिंक
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-red-500 rounded-full lg:left-0 left-1/2 transform lg:transform-none -translate-x-1/2 lg:translate-x-0"></span>
            </h3>
            <ul className="space-y-3 mt-4 flex flex-col items-center lg:items-start">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-red-500 transition duration-200 text-sm md:text-base flex items-center gap-2 mx-auto lg:mx-0 justify-center lg:justify-start"
                  >
                    <FaArrowRight size={10} className="text-red-500" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold text-base md:text-lg mb-4 relative inline-block lg:inline-block">
              उपयोगी लिंक
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-red-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-4 ">
              {usefulLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-red-500 transition duration-200 text-sm md:text-base flex items-center justify-center lg:justify-start gap-2"
                  >
                    <link.icon size={14} className="text-red-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-semibold text-base md:text-lg mb-4 relative inline-block lg:inline-block">
              संपर्क सूत्र
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-red-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3 mt-4">
              {contactInfo.map((info, idx) => (
                <li key={idx}>
                  <a
                    target='_blank'
                    href={info.link}
                    className="text-gray-400 hover:text-red-500 transition duration-200 text-sm md:text-base flex items-center justify-center lg:justify-start gap-3"
                  >
                    <info.icon size={14} className="text-red-500" />
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Download App & Developer */}
          <div className="text-center lg:text-left">
            {/* Download App Section */}
            <h3 className="text-white font-semibold text-base md:text-lg mb-4 relative inline-block lg:inline-block">
              डाउनलोड ऐप
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-red-500 rounded-full"></span>
            </h3>
            <div className="space-y-3 mt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.kutumb.android"
                target='blank'
                className="flex items-center justify-center lg:justify-start gap-3 bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 text-white px-4 py-2.5 rounded-xl transition group w-full sm:w-auto"
              >
                <FaGooglePlay size={22} className="text-red-500 group-hover:scale-110 transition" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400">Google Play</p>
                  <p className="text-sm font-semibold">ऐप डाउनलोड करें</p>
                </div>
              </a>
              {/* <a 
                href="" 
                className="flex items-center justify-center lg:justify-start gap-3 bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 text-white px-4 py-2.5 rounded-xl transition group w-full sm:w-auto"
              >
                <FaApple size={22} className="text-red-500 group-hover:scale-110 transition" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400">App Store</p>
                  <p className="text-sm font-semibold">ऐप डाउनलोड करें</p>
                </div>
              </a> */}
            </div>

            {/* Developer Info */}
            <div className="mt-6 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500 mb-2">डेवलपर</p>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <FaCode size={14} className="text-red-500" />
                <span className="text-white text-sm md:text-base font-medium">{developer.name}</span>
              </div>
              <a
                href={`tel:${developer.mobile}`}
                className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition text-sm md:text-base"
              >
                <a
                  href={`https://wa.me/${developer.mobile}?text=नमस्ते%20${encodeURIComponent(developer.nameEn)},%20मैं%20आपसे%20ऑल%20इंडिया%20पत्रकार%20एकता%20संघ%20वेबसाइट%20के%20बारे%20में%20बात%20करना%20चाहता/चाहती%20हूँ।`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                >
                  <FaWhatsapp className='text-green-600 hover:text-white' size={20} />
                </a>

                <FaPhone className='-scale-x-100' size={12} />
                {developer.mobileDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-gray-500 text-xs sm:text-sm text-left">
            © 2024 ऑल इंडिया पत्रकार एकता संघ | सर्वाधिकार सुरक्षित <br />
            भारतीय ट्रस्ट अधिनियम 1882 के अंतर्गत पंजीकृत | पंजीकरण संख्या: 4/70-179/226/20/25
          </p>
          <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
            <FaCode size={12} className="text-red-500" />
            <span>Developed with</span>
            <FaHeart size={12} className="text-red-500 animate-pulse" />
            <span>by</span>
            <a
              href={`tel:${developer.mobile}`}
              className="text-gray-400 hover:text-red-500 transition font-medium"
            >
              {developer.name}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
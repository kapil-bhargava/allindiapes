import { useState } from "react";

const Footer = () => {

// State for active menu and mobile menu
  const [activeMenu, setActiveMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const scrollToSection = (sectionId) => {
    setActiveMenu(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">

          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📰</span>
              <h3 className="text-white font-bold text-lg">AllIndiaPes</h3>
            </div>
            <p className="text-sm leading-relaxed">
              देश की आवाज़, आपका भरोसा। सटीक, त्वरित और निष्पक्ष पत्रकारिता के लिए समर्पित।
            </p>
            <p className="text-xs text-gray-500 mt-2">Voice of India, Your Trust.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-3">त्वरित लिंक | Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection("home")} className="hover:text-white transition">होम | Home</button></li>
              <li><button onClick={() => scrollToSection("patrakars")} className="hover:text-white transition">पत्रकार | Patrakars</button></li>
              <li><button onClick={() => scrollToSection("team")} className="hover:text-white transition">हमारी टीम | Our Team</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition">सेवाएँ | Services</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-white transition">संपर्क | Contact</button></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-3">श्रेणियाँ | Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">🏛️ राजनीति | Politics</a></li>
              <li><a href="#" className="hover:text-white transition">💻 टेक्नोलॉजी | Technology</a></li>
              <li><a href="#" className="hover:text-white transition">🏏 खेल | Sports</a></li>
              <li><a href="#" className="hover:text-white transition">🎬 मनोरंजन | Entertainment</a></li>
              <li><a href="#" className="hover:text-white transition">📈 व्यापार | Business</a></li>
            </ul>
          </div>

          {/* Newsletter Note - Honest */}
          <div>
            <h4 className="text-white font-bold mb-3">अपडेट रहें | Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-3">
              जल्द ही हमारा न्यूज़लेटर लॉन्च हो रहा है। तब तक हमारे सोशल मीडिया से जुड़ें।
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-500 hover:text-white text-xl transition">📘</a>
              <a href="#" className="text-gray-500 hover:text-white text-xl transition">🐦</a>
              <a href="#" className="text-gray-500 hover:text-white text-xl transition">📸</a>
              <a href="#" className="text-gray-500 hover:text-white text-xl transition">📺</a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 pt-6">
          © 2026 AllIndiaPes Media Pvt. Ltd. | सर्वाधिकार सुरक्षित | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
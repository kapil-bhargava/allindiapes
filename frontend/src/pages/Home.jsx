import React, { useState } from "react";
import Footer from "../components/Footer";

/**
 * Professional Static Homepage - AllIndiaPes
 * Complete website with Menu component, Patrakars, Team, Contact form
 * Hindi focus with English support
 * Fully responsive - No fake news, No fake app
 */



// ================= MAIN HOME PAGE COMPONENT =================
export default function HomePage() {
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

  // Patrakars Data (Journalists)
  const patrakars = [
    {
      id: 1,
      name: "राजेश कुमार शर्मा",
      nameEn: "Rajesh Kumar Sharma",
      role: "मुख्य संपादक",
      roleEn: "Chief Editor",
      experience: "22 वर्ष",
      expertise: "राजनीति, अर्थव्यवस्था",
      qualification: "एम.ए. पत्रकारिता (दिल्ली विश्वविद्यालय)",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "सच्चाई ही सबसे बड़ी खबर है।"
    },
    {
      id: 2,
      name: "प्रिया सिंह मेहता",
      nameEn: "Priya Singh Mehta",
      role: "वरिष्ठ संवाददाता",
      roleEn: "Senior Correspondent",
      experience: "15 वर्ष",
      expertise: "टेक्नोलॉजी, शिक्षा",
      qualification: "एम.एससी. आईटी (बीआईटी मेसरा)",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "तकनीक बदल रही है, और हम इसके साथ हैं।"
    },
    {
      id: 3,
      name: "विक्रम सिंह राठौर",
      nameEn: "Vikram Singh Rathore",
      role: "खेल संपादक",
      roleEn: "Sports Editor",
      experience: "18 वर्ष",
      expertise: "क्रिकेट, फुटबॉल",
      qualification: "एम.ए. खेल पत्रकारिता",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "खेल के मैदान की हर धड़कन हमारे पास है।"
    },
    {
      id: 4,
      name: "डॉ. अंजलि नायर",
      nameEn: "Dr. Anjali Nair",
      role: "अन्वेषणात्मक पत्रकार",
      roleEn: "Investigative Journalist",
      experience: "12 वर्ष",
      expertise: "अपराध, सामाजिक मुद्दे",
      qualification: "पीएच.डी. पत्रकारिता (जेएनयू)",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      quote: "हर सच्चाई तक पहुंचना मेरा कर्तव्य है।"
    },
    {
      id: 5,
      name: "संजय गुप्ता",
      nameEn: "Sanjay Gupta",
      role: "व्यापार संपादक",
      roleEn: "Business Editor",
      experience: "20 वर्ष",
      expertise: "शेयर बाजार, अर्थव्यवस्था",
      qualification: "एमबीए (आईआईएम अहमदाबाद)",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "बाजार की हर हलचल आप तक।"
    },
    {
      id: 6,
      name: "नेहा कपूर",
      nameEn: "Neha Kapoor",
      role: "मनोरंजन संपादक",
      roleEn: "Entertainment Editor",
      experience: "10 वर्ष",
      expertise: "बॉलीवुड, वेब सीरीज",
      qualification: "एम.ए. जनसंचार",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      quote: "मनोरंजन जगत की हर खबर आपके लिए।"
    }
  ];

  // Team Members Data
  const teamMembers = [
    {
      id: 1,
      name: "अमित वर्मा",
      nameEn: "Amit Verma",
      role: "प्रौद्योगिकी प्रमुख",
      roleEn: "CTO",
      bio: "15+ वर्षों का वेब विकास अनुभव",
      image: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      id: 2,
      name: "स्वाति मिश्रा",
      nameEn: "Swati Mishra",
      role: "सामग्री प्रबंधक",
      roleEn: "Content Manager",
      bio: "पूर्व टाइम्स ऑफ इंडिया संपादक",
      image: "https://randomuser.me/api/portraits/women/55.jpg"
    },
    {
      id: 3,
      name: "राहुल खन्ना",
      nameEn: "Rahul Khanna",
      role: "विपणन प्रमुख",
      roleEn: "Marketing Head",
      bio: "डिजिटल मार्केटिंग विशेषज्ञ",
      image: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      id: 4,
      name: "मीरा जोशी",
      nameEn: "Meera Joshi",
      role: "ग्राहक सेवा प्रमुख",
      roleEn: "Customer Support Head",
      bio: "ग्राहक संतुष्टि में विशेषज्ञ",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ];

  // Services Data
  const services = [
    {
      icon: "📰",
      title: "सटीक समाचार",
      titleEn: "Accurate News",
      description: "प्रमाणित स्रोतों से 100% सत्यापित समाचार। Verified news from trusted sources."
    },
    {
      icon: "⚡",
      title: "ब्रेकिंग अलर्ट",
      titleEn: "Breaking Alerts",
      description: "तुरंत सूचनाएं और लाइव अपडेट। Instant notifications and live updates."
    },
    {
      icon: "📊",
      title: "विश्लेषण",
      titleEn: "In-depth Analysis",
      description: "विशेषज्ञों द्वारा गहन विश्लेषण। Expert opinions and deep analysis."
    },
    {
      icon: "🎥",
      title: "वीडियो कंटेंट",
      titleEn: "Video Content",
      description: "समाचार वीडियो, इंटरव्यू और डिबेट। News videos, interviews and debates."
    },
    {
      icon: "📱",
      title: "मोबाइल फ्रेंडली",
      titleEn: "Mobile Friendly",
      description: "किसी भी डिवाइस पर बेहतरीन अनुभव। Best experience on any device."
    },
    {
      icon: "🔒",
      title: "प्राइवेसी फोकस्ड",
      titleEn: "Privacy Focused",
      description: "आपका डेटा सुरक्षित। Your data is safe with us."
    }
  ];

  // Statistics Data
  const stats = [
    { value: "25+", label: "विशेषज्ञ पत्रकार", labelEn: "Expert Journalists", icon: "👨‍💼" },
    { value: "50+", label: "शहरों में उपस्थिति", labelEn: "Cities Covered", icon: "🏙️" },
    { value: "1000+", label: "समाचार कवरेज", labelEn: "News Coverage", icon: "📰" },
    { value: "24/7", label: "सेवा उपलब्ध", labelEn: "Service Available", icon: "⏰" }
  ];

  // Handle contact form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    e.target.reset();
  };

  return (
    <div className="font-['Inter',sans-serif] bg-white text-gray-800 min-h-screen">



      {/* ================= HERO SECTION ================= */}
      <section id="home" className="bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <span className="text-yellow-300 mr-2">🏆</span>
                <span className="text-sm">भारत का भरोसेमंद समाचार प्लेटफॉर्म</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                सच्चाई, <span className="text-yellow-300">गति</span> और <span className="text-yellow-300">निष्पक्षता</span>
              </h1>

              <p className="text-base md:text-lg text-red-100 mb-6 leading-relaxed">
                AllIndiaPes में आपका स्वागत है। हम देश भर की सटीक, त्वरित और निष्पक्ष खबरें आप तक पहुंचाते हैं।
                राजनीति से लेकर मनोरंजन तक, हर विषय पर पूर्ण कवरेज।
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection("patrakars")}
                  className="bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
                >
                  हमारे पत्रकार देखें →
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition"
                >
                  संपर्क करें 📞
                </button>
              </div>
            </div>

            {/* Right Content - Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-red-100">{stat.label}</div>
                  <div className="text-xs text-red-200/70">{stat.labelEn}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT / MISSION SECTION ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">हमारा मिशन</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              हमारा लक्ष्य है सटीक, त्वरित और निष्पक्ष पत्रकारिता के माध्यम से देश की जनता को सशक्त बनाना।
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="text-5xl mb-3">🎯</div>
              <h3 className="font-bold text-xl mb-2">हमारा लक्ष्य</h3>
              <p className="text-gray-500 text-sm">देश के हर कोने तक सटीक समाचार पहुंचाना और पत्रकारिता में नए मानदंड स्थापित करना।</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="text-5xl mb-3">💡</div>
              <h3 className="font-bold text-xl mb-2">हमारा दृष्टिकोण</h3>
              <p className="text-gray-500 text-sm">तकनीक और मानवीय मूल्यों का संतुलन, जहां हर खबर सच्चाई पर आधारित हो।</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="text-5xl mb-3">🤝</div>
              <h3 className="font-bold text-xl mb-2">हमारा मूल्य</h3>
              <p className="text-gray-500 text-sm">पाठकों का विश्वास हमारी सबसे बड़ी पूंजी है। हम हमेशा निष्पक्ष रहेंगे।</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PATRAKARS SECTION ================= */}
      <section id="patrakars" className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">हमारे पत्रकार</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-500 mt-3">जानिए हमारी टीम के बारे में | Meet our experienced journalists</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {patrakars.map((patrakar) => (
            <div key={patrakar.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={patrakar.image}
                  alt={patrakar.name}
                  className="w-full h-56 object-cover object-top group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white text-xs font-medium">{patrakar.experience}</p>
                    </div>
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {patrakar.expertise.split(",")[0]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-gray-800 text-lg">{patrakar.name}</h3>
                <p className="text-gray-500 text-sm">{patrakar.nameEn}</p>
                <div className="mt-2">
                  <p className="text-red-600 font-semibold text-sm">{patrakar.role}</p>
                  <p className="text-gray-400 text-xs">{patrakar.roleEn}</p>
                </div>
                <p className="text-gray-600 text-sm mt-3 italic">"{patrakar.quote}"</p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-400">
                    <span className="font-medium">शिक्षा:</span> {patrakar.qualification}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR TEAM SECTION ================= */}
      <section id="team" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">हमारी टीम</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
            <p className="text-gray-500 mt-3">हमारे पीछे की प्रतिभाशाली टीम | The talented team behind us</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition text-center group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition duration-500"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-lg">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.nameEn}</p>
                  <p className="text-red-500 text-sm font-medium mt-1">{member.role}</p>
                  <p className="text-gray-400 text-xs mt-1">{member.roleEn}</p>
                  <p className="text-gray-500 text-xs mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">हमारी सेवाएँ</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-500 mt-3">हम आपके लिए क्या लेकर आए हैं | What we offer for you</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="font-bold text-xl mb-1">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{service.titleEn}</p>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATISTICS BANNER ================= */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl mb-1">📅</div>
              <div className="text-2xl font-bold">2015</div>
              <div className="text-sm text-red-100">स्थापना वर्ष</div>
            </div>
            <div>
              <div className="text-3xl mb-1">👥</div>
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-sm text-red-100">दैनिक पाठक</div>
            </div>
            <div>
              <div className="text-3xl mb-1">✍️</div>
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm text-red-100">योगदानकर्ता</div>
            </div>
            <div>
              <div className="text-3xl mb-1">🏆</div>
              <div className="text-2xl font-bold">12+</div>
              <div className="text-sm text-red-100">पुरस्कार</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION with FORM ================= */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">संपर्क करें</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
            <p className="text-gray-500 mt-3">हमसे जुड़ने के लिए नीचे दिए गए फॉर्म का उपयोग करें</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <span>📞</span> संपर्क जानकारी | Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-medium">पता | Address</p>
                    <p className="text-gray-500 text-sm">AllIndiaPes Media Pvt. Ltd., Connaught Place, New Delhi - 110001</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-medium">फ़ोन | Phone</p>
                    <p className="text-gray-500 text-sm">+91-11-4567-8900, +91-98765-43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-medium">ईमेल | Email</p>
                    <p className="text-gray-500 text-sm">contact@allindianpes.com, support@allindianpes.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <span className="text-2xl">🕒</span>
                  <div>
                    <p className="font-medium">कार्यालय समय | Office Hours</p>
                    <p className="text-gray-500 text-sm">सोमवार - शनिवार, सुबह 9:00 बजे - शाम 6:00 बजे</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-6 pt-4 border-t">
                <p className="font-medium mb-3">सोशल मीडिया पर जुड़ें | Follow us</p>
                <div className="flex gap-3">
                  <a href="#" className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition">📘</a>
                  <a href="#" className="bg-sky-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-sky-600 transition">🐦</a>
                  <a href="#" className="bg-pink-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-pink-700 transition">📸</a>
                  <a href="#" className="bg-red-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 transition">📺</a>
                  <a href="#" className="bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-800 transition">🔗</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <span>📝</span> सन्देश भेजें | Send Message
              </h3>

              {formSubmitted && (
                <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center">
                  ✓ आपका संदेश भेज दिया गया है! हम जल्द ही संपर्क करेंगे।
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    पूरा नाम | Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. राजेश कुमार"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ईमेल पता | Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    मोबाइल नंबर | Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    विषय | Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-400"
                  >
                    <option value="">चुनें | Select</option>
                    <option>समाचार संबंधी पूछताछ | News Inquiry</option>
                    <option>विज्ञापन के लिए | Advertising</option>
                    <option>फीडबैक | Feedback</option>
                    <option>अन्य | Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    संदेश | Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="अपना संदेश यहां लिखें..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
                >
                  संदेश भेजें → Send Message
                </button>

                <p className="text-xs text-gray-400 text-center">
                  * हम आपके संदेश का 24 घंटे के भीतर जवाब देंगे।
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
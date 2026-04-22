// src/pages/HelpCenter.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHeadset, FaQuestionCircle, FaPhone, FaEnvelope, 
  FaWhatsapp, FaUserFriends, FaNewspaper, FaUserShield,
  FaChevronDown, FaChevronUp, FaComments, FaClock,
  FaMobileAlt, FaShieldAlt, FaHandshake
} from 'react-icons/fa';
import { MdSupportAgent, MdEmail, MdContactSupport } from 'react-icons/md';

const HelpCenter = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    {
      question: "AllIndiaPes क्या है?",
      answer: "AllIndiaPes (ऑल इंडिया पत्रकार एकता संघ) एक पंजीकृत संगठन है जो देशभर के पत्रकारों के अधिकारों, सुरक्षा और सम्मान के लिए कार्य करता है।"
    },
    {
      question: "मैं संगठन से कैसे जुड़ सकता हूँ?",
      answer: "आप हमारी वेबसाइट के 'संपर्क' पेज पर जाकर फॉर्म भर सकते हैं या सीधे हमें कॉल/व्हाट्सएप कर सकते हैं। हमारी टीम आपसे संपर्क करेगी।"
    },
    {
      question: "पत्रकार सदस्यता कैसे लें?",
      answer: "पत्रकार सदस्यता के लिए आपको अपने दस्तावेज़ (प्रेस आईडी, पैन कार्ड, आधार कार्ड) जमा करने होंगे। अधिक जानकारी के लिए हमसे संपर्क करें।"
    },
    {
      question: "संगठन किन-किन राज्यों में सक्रिय है?",
      answer: "हमारा संगठन उत्तर प्रदेश, दिल्ली, महाराष्ट्र, बिहार, गुजरात, राजस्थान, मध्य प्रदेश, पंजाब, हरियाणा समेत 25+ राज्यों में सक्रिय है।"
    },
    {
      question: "पत्रकारों को क्या-क्या सुविधाएं मिलती हैं?",
      answer: "हम पत्रकारों को कानूनी सहायता, बीमा सुरक्षा, पेंशन योजना, स्वास्थ्य सुविधाएं, सम्मान एवं सुरक्षा प्रदान करते हैं।"
    },
    {
      question: "मुझे किसी समस्या पर शिकायत कहाँ करनी है?",
      answer: "आप हमारे 'संपर्क' पेज पर फॉर्म भरकर, ईमेल करके या सीधे कॉल/व्हाट्सएप पर शिकायत दर्ज करा सकते हैं।"
    },
    {
      question: "क्या यह संगठन सरकार द्वारा मान्यता प्राप्त है?",
      answer: "हाँ, हमारा संगठन भारत सरकार द्वारा IT Act 1882 के अंतर्गत विधिवत पंजीकृत है। पंजीकरण संख्या: 4/70-179/226/20/25"
    }
  ];

  // Support Options
  const supportOptions = [
    { icon: FaPhone, title: "फोन सहायता", description: "सुबह 10:00 से शाम 6:00 बजे तक", contact: "+91-522-7118207", link: "tel:+915227118207", color: "bg-green-500" },
    { icon: FaWhatsapp, title: "व्हाट्सएप", description: "24x7 संदेश भेजें", contact: "9565017342", link: "https://wa.me/919565017342", color: "bg-green-600" },
    { icon: FaEnvelope, title: "ईमेल सहायता", description: "24x7 ईमेल सपोर्ट", contact: "allindiapes14@gmail.com", link: "mailto:allindiapes14@gmail.com", color: "bg-blue-500" }
  ];

  // Quick Topics
  const quickTopics = [
    { icon: FaUserFriends, title: "सदस्यता", description: "नई सदस्यता लें", link: "/contact" },
    { icon: FaNewspaper, title: "पत्रकार सहायता", description: "पत्रकारों के लिए", link: "/contact" },
    { icon: FaUserShield, title: "कानूनी सहायता", description: "कानूनी सलाह लें", link: "/contact" },
    { icon: FaComments, title: "शिकायत दर्ज करें", description: "अपनी समस्या बताएं", link: "/contact" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
            <MdSupportAgent size={16} />
            <span className="text-sm font-medium">सहायता केंद्र | Help Center</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            हम आपकी कैसे सहायता कर सकते हैं?
          </h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-red-100 max-w-2xl mx-auto">
            किसी भी प्रश्न, समस्या या जानकारी के लिए हम आपकी सहायता के लिए यहाँ हैं।
          </p>
        </div>
      </section>

      {/* Quick Topics Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickTopics.map((topic, idx) => (
            <Link 
              key={idx}
              to={topic.link}
              className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                <topic.icon className="text-red-600" size={22} />
              </div>
              <h3 className="font-semibold text-gray-800">{topic.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{topic.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Left Side - Support Options */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Contact Support Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                <FaHeadset className="text-red-600" size={20} />
                सहायता विकल्प
              </h2>
              <div className="space-y-4">
                {supportOptions.map((option, idx) => (
                  <a
                    key={idx}
                    href={option.link}
                    target={option.link.startsWith('http') ? "_blank" : undefined}
                    rel={option.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                  >
                    <div className={`${option.color} w-10 h-10 rounded-full flex items-center justify-center text-white`}>
                      <option.icon size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm">{option.title}</p>
                      <p className="text-xs text-gray-500">{option.description}</p>
                      <p className="text-xs font-semibold text-red-600 mt-1">{option.contact}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                <FaClock className="text-red-600" size={20} />
                कार्यालय समय
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">सोमवार - शुक्रवार</span>
                  <span className="font-medium text-gray-800">सुबह 10:00 - शाम 6:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">शनिवार</span>
                  <span className="font-medium text-gray-800">सुबह 10:00 - दोपहर 2:00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">रविवार</span>
                  <span className="font-medium text-gray-400">बंद</span>
                </div>
              </div>
            </div>

            {/* Emergency Card */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-3">
                <FaShieldAlt className="text-red-600" size={24} />
                <h3 className="font-bold text-red-800">आपातकालीन सहायता</h3>
              </div>
              <p className="text-sm text-red-700 mb-3">
                किसी भी आपातकालीन स्थिति में 24x7 संपर्क करें
              </p>
              <a 
                href="tel:+919450324690"
                className="block text-center bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                ☎ आपातकालीन हेल्पलाइन: +91-9450324690
              </a>
            </div>
          </div>

          {/* Right Side - FAQs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-6">
                <FaQuestionCircle className="text-red-600" size={24} />
                <h2 className="font-bold text-xl text-gray-800">
                  अक्सर पूछे जाने वाले प्रश्न (FAQ)
                </h2>
              </div>
              
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition"
                    >
                      <span className="font-medium text-gray-800 text-sm md:text-base">
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <FaChevronUp className="text-red-500 flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openFaq === index && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Still Need Help Card */}
            <div className="mt-6 bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-6 text-center">
              <MdContactSupport size={40} className="text-red-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                अभी भी सहायता चाहिए?
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                हमारी टीम आपकी मदद के लिए तैयार है। कृपया हमसे संपर्क करें।
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
              >
                <FaHandshake size={16} />
                संपर्क करें
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Home Button */}
      <div className="text-center pb-10">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 transition">
          ← होम पेज पर वापस जाएं
        </Link>
      </div>
    </div>
  );
};

export default HelpCenter;
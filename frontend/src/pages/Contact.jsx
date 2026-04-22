import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendEmail } from "../services/emailService";

// CORRECT IMPORTS - These icons exist in react-icons
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHeadset, FaShieldAlt, FaUsers, FaPaperPlane, FaMapMarkerAlt, FaClock, FaBuilding } from "react-icons/fa";
import { MdSend, MdLocationOn } from "react-icons/md";
import { IoCall, IoMail, IoTime, IoBusiness, IoGlobe, IoHeart, IoChatbubble, IoCheckmarkCircle, IoArrowBack } from "react-icons/io5";
import { useToast } from '../hooks/useToast';
import { FaXTwitter } from "react-icons/fa6";  // For X logo

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { showSuccess, showError, showInfo, showWarning } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormSubmitted(true);
  //   setTimeout(() => setFormSubmitted(false), 5000);
  //   setform({ name: "", email: "", phone: "", subject: "", message: "" });
  // };

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔐 Basic validation
    if (!form.name || !form.email || !form.message) {
      setStatus("कृपया सभी आवश्यक जानकारी भरें");
      showError("कृपया सभी आवश्यक जानकारी भरें", { type: "error" });
      return;
    }
    setLoading(true);
    setStatus("");

    const res = await sendEmail(form);

    if (res.success) {
      setStatus("संदेश सफलतापूर्वक भेजा गया ✅");
      showSuccess("संदेश सफलतापूर्वक भेजा गया!", { type: "success" });
      setForm({ name: "", email: "", phone: "", message: "", subject: "" });
    } else {
      setStatus("संदेश भेजने में समस्या ❌");
      showError("संदेश भेजने में समस्या हुई। कृपया बाद में पुनः प्रयास करें।", { type: "error" });
    }
    setLoading(false);
  };

  // Contact Information
  const contactInfo = [
    { icon: IoBusiness, title: "मुख्य कार्यालय", details: "सेक्टर 8/24, जानकीपुरम विस्तार, लखनऊ - 226021", color: "text-red-600" },
    { icon: IoCall, title: "फोन नंबर", details: "+91-522-7118207, +91-9450324690", link: "tel:+915227118207", color: "text-green-600" },
    { icon: IoMail, title: "ईमेल पता", details: "allindiapes14@gmail.com", link: "mailto:allindiapes14@gmail.com", color: "text-blue-600" },
    { icon: IoTime, title: "कार्यालय समय", details: "सोमवार - शनिवार, सुबह 10:00 - शाम 6:00", color: "text-orange-600" }
  ];

  // Support Cards
  const supportCards = [
    { icon: FaHeadset, title: "ग्राहक सहायता", description: "किसी भी समस्या के लिए 24x7 सहायता", contact: "+91-9450324690", bgColor: "bg-blue-50", iconColor: "text-blue-600" },
    { icon: FaShieldAlt, title: "पत्रकार सुरक्षा", description: "पत्रकारों के अधिकारों की रक्षा के लिए", contact: "allindiapes14@gmail.com", bgColor: "bg-green-50", iconColor: "text-green-600" },
    { icon: FaUsers, title: "सदस्यता हेल्पलाइन", description: "नई सदस्यता और नवीनीकरण के लिए", contact: "+91-9450324690", bgColor: "bg-purple-50", iconColor: "text-purple-600" }
  ];

  // Office Locations
  const officeLocations = [
    { city: "लखनऊ (मुख्यालय)", address: "सेक्टर 8/24, जानकीपुरम विस्तार", phone: "9450324690" },

  ];

  // Social Media Links
  const socialLinks = [
    { icon: FaFacebook, name: "Facebook", url: "https://www.facebook.com/share/14bg9jjCJHv/", color: "hover:text-blue-600" },
    { icon: FaXTwitter, name: "Twitter", url: "https://x.com/Kdsingh19569040", color: "hover:text-black" },
    { icon: FaInstagram, name: "Instagram", url: "https://instagram.com/allindiapes", color: "hover:text-pink-600" },
    { icon: FaYoutube, name: "YouTube", url: "https://www.youtube.com/@kdsingh4433", color: "hover:text-red-600" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
            <IoChatbubble size={16} />
            <span className="text-sm font-medium">संपर्क सूत्र</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">हमसे संपर्क करें</h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-red-100 max-w-2xl mx-auto">
            हम आपकी हर समस्या का समाधान करने के लिए यहाँ हैं। किसी भी प्रश्न, सुझाव या शिकायत के लिए हमसे संपर्क करें।
          </p>
        </div>
      </section>

      {/* ================= QUICK SUPPORT CARDS ================= */}
      <section className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="grid md:grid-cols-3 gap-6">
          {supportCards.map((card, idx) => (
            <div key={idx} className={`${card.bgColor} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition`}>
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md mb-3 ${card.iconColor}`}>
                <card.icon size={22} />
              </div>
              <h3 className="font-bold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{card.description}</p>
              <p className="text-red-600 font-semibold text-sm mt-2">{card.contact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE - Contact Info */}
          <div className="space-y-6">
            {/* Contact Information Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
                <IoBusiness size={20} className="text-red-600" />
                संपर्क जानकारी
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className={`p-2 bg-white rounded-lg shadow-sm ${info.color}`}>
                      <info.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{info.title}</p>
                      {info.link ? (
                        <a href={info.link} className="text-gray-700 font-medium hover:text-red-600 transition">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Locations Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
                <IoGlobe size={20} className="text-red-600" />
                हमारी शाखा स्थान
              </h2>
              <div className="space-y-3">
                {officeLocations.map((office, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 border-b border-gray-100 last:border-0">
                    <FaMapMarkerAlt size={18} className="text-red-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">{office.city}</p>
                      <p className="text-sm text-gray-500">{office.address}</p>
                      <a href={`tel:${office.phone}`} className="text-xs text-red-500 hover:underline">
                        📞 {office.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
                <IoHeart size={20} className="text-red-600" />
                सोशल मीडिया पर जुड़ें
              </h2>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 ${social.color} transition hover:scale-110 transform duration-200`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                सोशल मीडिया पर फॉलो करें और नवीनतम अपडेट प्राप्त करें
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
              <FaPaperPlane size={20} className="text-red-600" />
              सन्देश भेजें
            </h2>

            {formSubmitted && (
              <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-sm flex items-center gap-2">
                <IoCheckmarkCircle size={16} />
                आपका संदेश सफलतापूर्वक भेज दिया गया है! हम जल्द ही संपर्क करेंगे।
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="आपका पूरा नाम *"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="ईमेल पता *"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="मोबाइल नंबर"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
                />
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-400"
                >
                  <option value="">विषय चुनें *</option>
                  <option value="सदस्यता">सदस्यता लेना है</option>
                  <option value="समाचार">समाचार संबंधी जानकारी</option>
                  <option value="शिकायत">शिकायत दर्ज करानी है</option>
                  <option value="सहयोग">सहयोग करना चाहता हूँ</option>
                  <option value="अन्य">अन्य</option>
                </select>
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="आपका संदेश विस्तार से लिखें *"
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transition shadow-md flex items-center justify-center gap-2"
              >
                <MdSend size={18} />

                {loading ? "भेजा जा रहा है..." : "संदेश भेजें"}
              </button>
              {/* Status Message */}
              {status && (
                <p className="text-center text-sm text-gray-600">{status}</p>
              )}

              <p className="text-xs text-gray-400 text-center">
                * हम आपके संदेश का 24 घंटे के भीतर जवाब देंगे।
              </p>
            </form>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-10 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-5 text-center text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FaHeadset size={20} />
              <span className="font-semibold">आपातकालीन हेल्पलाइन:</span>
              <a href="tel:+919450324690" className="font-bold underline text-yellow-200">+91-9450324690</a>
            </div>
            <div className="flex items-center gap-2">
              <IoMail size={20} />
              <span className="font-semibold">24x7 ईमेल सपोर्ट:</span>
              <a href="mailto:allindiapes14@gmail.com" className="font-bold underline text-yellow-200">allindiapes14@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="text-center pb-10">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 transition">
          <IoArrowBack size={18} />
          होम पेज पर वापस जाएं
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Briefcase } from "lucide-react";

// Import images (create these images in your assets folder)
// import kd from '../assets/kd.jpeg';
// import dinesh from '../assets/dinesh.jpeg';
// import gulrej from '../assets/gulrej.jpeg';
// import dineshtripathi from '../assets/dineshtripathi.jpeg';
// import nishith from '../assets/nishith.jpeg';
// import rup from '../assets/rupkishor.jpeg';
// import om from '../assets/omprakash.jpeg';
// import liyaqat from '../assets/liyakat.jpeg';
// import raghuram from '../assets/raghuram.jpeg';
// import vishal from '../assets/vishalkumar.jpeg';
// import ashwani from '../assets/ashvanikumar.jpeg';
// import anuradha from '../assets/anuradha.jpeg';
// import mukul from '../assets/mukul.jpeg';
// import gurjeet from '../assets/gurujeet.jpeg';
// import ajay from '../assets/ajaykumar.jpeg';
// import daulat from '../assets/daulat.jpeg';
import { teamMembers } from "../data/teamData";

// ================= COMPLETE TEAM MEMBERS DATA =================
// const teamMembers = [
//   // Original 4 members
//   {
//     id: 1,
//     name: "दिनेश कुमार दीक्षित",
//     role: "संस्थापक",
//     location: "कमलानगर कमलाबाद बढ़ौली छठामील, लखनऊ",
//     phone: "+919807626031",
//     phoneDisplay: "9807626031",
//     image: dinesh,
//     experience: "20 वर्ष"
//   },
//   {
//     id: 2,
//     name: "गुरजीत सिंह",
//     role: "अध्यक्ष",
//     location: "लखनऊ",
//     phone: "+919452444008",
//     phoneDisplay: "9452444008",
//     image: gurjeet,
//     experience: "18+ वर्ष"
//   },
//   {
//     id: 3,
//     name: "गुलरेज लारी",
//     role: "राष्ट्रीय उपाध्यक्ष",
//     location: "त्रिवेणी नगर, लखनऊ",
//     phone: "+919628976677",
//     phoneDisplay: "9628976677",
//     image: gulrej,
//     experience: "20 वर्ष"
//   },
//   {
//     id: 4,
//     name: "दिनेश त्रिपाठी",
//     role: "राष्ट्रीय महामंत्री",
//     location: "लखीमपुर खीरी",
//     phone: "+919838018453",
//     phoneDisplay: "9838018453",
//     image: dineshtripathi,
//     experience: "15 वर्ष"
//   },
//   // New team members
//   {
//     id: 5,
//     name: "के.डी. सिंह",
//     role: "चेयरमैन, राष्ट्रीय अध्यक्ष",
//     location: "बृजनगर कालोनी, जानकीपूरम, लखनऊ",
//     phone: "+919450324690",
//     phoneDisplay: "9450324690",
//     image: kd,
//     experience: "25+ वर्ष"

//   },
//   {
//     id: 6,
//     name: "रुप किशोर मालपानी",
//     role: "राष्ट्रीय मंत्री",
//     location: "महाराष्ट्र",
//     phone: "+919320141114",
//     phoneDisplay: "9320141114",
//     image: rup,
//     experience: "16+ वर्ष"
//   },
//   {
//     id: 7,
//     name: "ओम प्रकाश उदैनिया",
//     role: "राष्ट्रीय मीडिया प्रभारी",
//     location: "जालौन, उत्तर प्रदेश",
//     phone: "+916392543648",
//     phoneDisplay: "6392543648",
//     image: om,
//     experience: "14+ वर्ष"
//   },
//   {
//     id: 8,
//     name: "लियाकत अली",
//     role: "राष्ट्रीय सचिव",
//     location: "जनपद जौनपुर, उत्तर प्रदेश",
//     phone: "+918601660660",
//     phoneDisplay: "8601660660",
//     image: liyaqat,
//     experience: "15+ वर्ष"
//   },
//   {
//     id: 9,
//     name: "रघुराम सिंदूर",
//     role: "राष्ट्रीय कानूनी सलाहकार",
//     location: "छत्तीसगढ़",
//     phone: "+919926760022",
//     phoneDisplay: "9926760022",
//     image: raghuram,
//     experience: "20+ वर्ष"
//   },
//   {
//     id: 10,
//     name: "विशाल कुमार सिंह (एड)",
//     role: "राष्ट्रीय विधिक सलाहकार",
//     location: "लखनऊ",
//     phone: "+918896001416",
//     phoneDisplay: "8896001416",
//     image: vishal,
//     experience: "12+ वर्ष"
//   },
//   {
//     id: 11,
//     name: "अश्वनी कुमार",
//     role: "राष्ट्रीय कार्यकारिणी सदस्य",
//     location: "हरियाणा",
//     phone: "+919991190023",
//     phoneDisplay: "9991190023",
//     image: ashwani,
//     experience: "15+ वर्ष"
//   },
//   {
//     id: 12,
//     name: "अनुराधा सिंह",
//     role: "राष्ट्रीय कोषाध्यक्ष",
//     location: "लखनऊ",
//     phone: "+919450324690",
//     phoneDisplay: "9450324690",
//     image: anuradha,
//     experience: "12+ वर्ष"
//   },
//   {
//     id: 13,
//     name: "मुकुल मिश्रा",
//     role: "राष्ट्रीय प्रवक्ता",
//     location: "बिहार",
//     phone: "+917880561285",
//     phoneDisplay: "7880561285",
//     image: mukul,
//     experience: "14+ वर्ष"
//   },
//   {
//     id: 14,
//     name: "निशीथ भटनागर",
//     role: "राष्ट्रीय संगठन मंत्री",
//     location: "सूरज, गुजरात",
//     phone: "+919909910029",
//     phoneDisplay: "9909910029",
//     image: nishith,
//     experience: "18+ वर्ष"
//   },
//   {
//     id: 15,
//     name: "अजय कुमार",
//     role: "सचिव",
//     location: "लखनऊ",
//     phone: "+919120059782",
//     phoneDisplay: "9120059782",
//     image: ajay,
//     experience: "10+ वर्ष"
//   },
//   {
//     id: 16,
//     name: "डॉ. दौलत पालीवाल",
//     role: "राष्ट्रीय कार्यकारिणी सदस्य",
//     location: "महाराष्ट्र",
//     phone: "+917977070242",
//     phoneDisplay: "7977070242",
//     image: daulat,
//     experience: "20+ वर्ष"
//   }
// ];

// ================= PROFESSIONAL TEAM CARD COMPONENT =================
const ProfessionalTeamCard = ({ member }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500 z-10"></div>

      {/* Portrait Image Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-72 object-cover object-top group-hover:scale-105 transition duration-500"
        />

        {/* Experience Badge (Optional - commented out as in original) */}
        {/* <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1 bg-red-600/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-full shadow-lg">
            <Briefcase size={12} className="text-yellow-300" />
            <span className="text-xs font-semibold">{member.experience}</span>
          </div>
        </div> */}

        {/* Semi-transparent Overlay for Name */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
          <h3 className="text-white font-bold text-xl">{member.name}</h3>
          <p className="text-red-300 text-sm font-medium">{member.role}</p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Location Section */}
        <div className="flex items-start gap-2 mb-4">
          <MapPin size="18" className="text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-gray-600 text-sm leading-relaxed">{member.location}</p>
        </div>

        {/* Phone Section with Direct Call Link */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl mb-2">
          <div className="flex items-center gap-2">
            <Phone size="18" className="text-red-500" />
            <span className="text-gray-700 text-sm font-medium">{member.phoneDisplay}</span>
          </div>

          {/* Mobile Calling Button */}
          <a
            href={`tel:${member.phone}`}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition shadow-md"
          >
            <Phone size="12" />
            कॉल करें
          </a>
        </div>

        {/* Quick Action Note */}
        <p className="text-xs text-gray-400 text-center mt-3">
          📞 मोबाइल से सीधे कॉल करने के लिए क्लिक करें
        </p>
      </div>
    </div>
  );
};

// ================= MAIN FULL TEAM PAGE COMPONENT =================
export default function FullTeamPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">हमारी पूरी टीम</h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-red-100 max-w-2xl mx-auto">
            ऑल इंडिया पत्रकार एकता संघ के सभी पदाधिकारी एवं सदस्य
          </p>
          <p className="text-red-200 text-sm mt-2">
            कुल सदस्य: {teamMembers.length} | पूरे भारत में सक्रिय
          </p>
        </div>
      </div>

      {/* Team Grid - Responsive Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <ProfessionalTeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border-2 border-red-500 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <span className="group-hover:-translate-x-1 transition">←</span>
            <span>होम पेज पर वापस जाएं</span>
          </Link>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center pb-8 text-xs text-gray-400 border-t border-gray-200 pt-6">
        <p>📱 मोबाइल नंबर पर क्लिक करके सीधे कॉल करें | Click on call button to connect instantly</p>
        <p className="mt-1">© 2024 ऑल इंडिया पत्रकार एकता संघ | सर्वाधिकार सुरक्षित</p>
      </div>
    </div>
  );
}
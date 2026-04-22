import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, User, Briefcase, Mail } from "lucide-react";
import kd from '../assets/kd.jpeg'
import dinesh from '../assets/dinesh.jpeg'
import gulrej from '../assets/gulrej.jpeg'
import dineshtripathi from '../assets/dineshtripathi.jpeg'

// ================= TEAM MEMBERS DATA =================
import { teamMembers } from "../data/teamData";

// ================= PROFESSIONAL TEAM CARD COMPONENT =================
const ProfessionalTeamCard = ({ member }) => {
    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">

            {/* Top Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500 z-10"></div>

            {/* Portrait Image Section - Optimized for Portrait Photos */}
            <div className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover object-top group-hover:scale-105 transition duration-500"
                />

                {/* Experience Badge */}
                <div className="absolute top-3 right-3">
                    {/* <div className="flex items-center gap-1 bg-red-600/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-full shadow-lg">
            <Briefcase size={12} className="text-yellow-300" />
            <span className="text-xs font-semibold">{member.experience}</span>
          </div> */}
                </div>

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

                    {/* Mobile Calling Button - Anchor Tag for Direct Call */}
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

// ================= MAIN TEAM PAGE COMPONENT =================
export default function TeamPage() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white">

            {/* Team Grid - 4 Cards in a Row */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.slice(0, 4).map((member) => (
                        <ProfessionalTeamCard key={member.id} member={member} />
                    ))}
                </div>

                {/* View All Patrakars Button */}
                <div className="text-center mt-12">
                    <Link
                        to="/team"
                        className="inline-flex items-center gap-2 border-2 border-red-500 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
                    >
                        <span>सभी सदस्य देखें</span>
                        <span className="group-hover:translate-x-1 transition">→</span>
                    </Link>
                </div>
            </div>

            {/* Footer Note */}
            <div className="text-center pb-8 text-xs text-gray-400">
                <p>📱 मोबाइल नंबर पर क्लिक करके सीधे कॉल करें | Click on call button to connect instantly</p>
            </div>
        </div>
    );
}
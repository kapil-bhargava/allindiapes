import React from "react";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Users, 
  TrendingUp, 
  FileText, 
  MapPin, 
  Phone, 
  Mail, 
  Award,
  CheckCircle,
  Building,
  Calendar,
  Globe
} from "lucide-react";

const About = () => {
  // Organization stats
  const stats = [
    { value: "25+", label: "राज्यों में उपस्थिति", icon: Globe },
    { value: "10,000+", label: "पंजीकृत पत्रकार", icon: Users },
    { value: "50+", label: "प्रशिक्षण कार्यक्रम", icon: Award },
    { value: "15+", label: "वर्षों का अनुभव", icon: Calendar }
  ];

  // Mission points
  const missionPoints = [
    {
      icon: Users,
      title: "एकता",
      description: "देशभर के पत्रकारों को एक मजबूत और संगठित मंच पर लाना।",
      color: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Shield,
      title: "सुरक्षा",
      description: "पत्रकारों के अधिकारों, सुरक्षा और सम्मान की रक्षा करना।",
      color: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: TrendingUp,
      title: "विकास",
      description: "पत्रकारों के सामाजिक और आर्थिक विकास के लिए कार्य करना।",
      color: "bg-red-50",
      iconColor: "text-red-600"
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      
      {/* ================= HERO SECTION WITH RED THEME ================= */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Building size={16} />
            <span className="text-sm font-medium">पंजीकृत संगठन | Registered Organization</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            ऑल इंडिया पत्रकार एकता संघ
          </h1>
          
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          
          <p className="text-base md:text-lg text-red-100 max-w-3xl mx-auto leading-relaxed">
            देशभर के पत्रकारों की एकता, सुरक्षा और अधिकारों के लिए समर्पित एक संगठन। 
            भारत सरकार द्वारा विधिवत पंजीकृत, हम पत्रकार समुदाय के उत्थान के लिए निरंतर प्रयासरत हैं।
          </p>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-red-600">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ORGANIZATION INFO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full mb-4">
              <FileText size={14} />
              <span className="text-xs font-medium">संगठन परिचय</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              ऑल इंडिया पत्रकार एकता संघ
            </h2>
            
            <div className="w-16 h-1 bg-red-500 rounded-full mb-5"></div>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              यह संगठन भारत सरकार द्वारा <strong className="text-red-600">IT Act 1882</strong> के अंतर्गत विधिवत पंजीकृत है। 
              इसका मुख्य उद्देश्य देशभर के पत्रकारों को एकजुट करना और उनके अधिकारों, 
              सुरक्षा एवं सम्मान के लिए कार्य करना है।
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              हम पत्रकारों के हितों की रक्षा, उनके सामाजिक एवं आर्थिक विकास तथा 
              एक मजबूत और संगठित पत्रकार समुदाय के निर्माण के लिए निरंतर प्रयासरत हैं।
            </p>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span className="text-sm text-gray-600">पंजीकृत संगठन</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span className="text-sm text-gray-600">सरकार द्वारा मान्यता प्राप्त</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                <span className="text-sm text-gray-600">पूरे भारत में सक्रिय</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-100 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-100 rounded-full blur-2xl opacity-60"></div>
            <img
              src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&h=400&fit=crop"
              alt="पत्रकार संगठन"
              className="relative w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= REGISTRATION DETAILS CARD ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full mb-3">
              <FileText size={14} />
              <span className="text-xs font-medium">आधिकारिक जानकारी</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              पंजीकरण विवरण
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
            {/* Header with Red Gradient */}
            <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-4">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Building size={20} />
                संगठन का पंजीकरण विवरण
              </h3>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText size={18} className="text-red-500 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400">पंजीकरण अधिनियम</p>
                      <p className="font-medium text-gray-800">IT Act 1882</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FileText size={18} className="text-red-500 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400">पंजीकरण संख्या</p>
                      <p className="font-medium text-gray-800">4/70-179/226/20/25</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building size={18} className="text-red-500 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400">पंजीकरण प्राधिकरण</p>
                      <p className="font-medium text-gray-800">भारत सरकार</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-red-500 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400">कार्यालय पता</p>
                      <p className="font-medium text-gray-800">सेक्टर 8/24, जानकीपुरम विस्तार, लखनऊ - 226021</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-red-500 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400">फोन नंबर</p>
                      <p className="font-medium text-gray-800">0522-7118207, 9450324690</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-red-500 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400">ईमेल पता</p>
                      <p className="font-medium text-gray-800">allindiapes14@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full mb-3">
            <Award size={14} />
            <span className="text-xs font-medium">हमारा उद्देश्य</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            हमारे मूल उद्देश्य
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            हम पत्रकार समुदाय के उत्थान और सशक्तिकरण के लिए प्रतिबद्ध हैं
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {missionPoints.map((point, idx) => (
            <div 
              key={idx} 
              className={`${point.color} rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-red-100`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl mb-4 shadow-lg">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            पत्रकार समुदाय से जुड़ें
          </h2>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            यदि आप एक पत्रकार हैं और हमारे साथ जुड़ना चाहते हैं, तो आज ही संपर्क करें।
            मिलकर बनाएंगे एक मजबूत पत्रकार समुदाय।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              संपर्क करें
            </Link>
            <Link 
              to="/patrakars" 
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
            >
              <Users size={18} />
              हमारे पत्रकार देखें
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER NOTE ================= */}
      <div className="bg-gray-50 py-4 text-center border-t border-gray-200">
        <p className="text-xs text-gray-400">
          © 2024 ऑल इंडिया पत्रकार एकता संघ | सर्वाधिकार सुरक्षित
        </p>
      </div>

    </div>
  );
};

export default About;
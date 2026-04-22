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
  Globe,
  Target,
  HeartHandshake,
  Scale,
  Stethoscope,
  Gavel,
  Handshake,
  Clock,
  BadgeCheck
} from "lucide-react";

const About = () => {
  // Organization stats
  const stats = [
    { value: "25+", label: "राज्यों में उपस्थिति", icon: Globe },
    { value: "10,000+", label: "पंजीकृत पत्रकार", icon: Users },
    { value: "50+", label: "प्रशिक्षण कार्यक्रम", icon: Award },
    { value: "15+", label: "वर्षों का अनुभव", icon: Calendar }
  ];

  // ================= ORGANIZATION OBJECTIVES (8 POINTS) =================
  const objectives = [
    {
      id: 1,
      title: "पत्रकार सुरक्षा एक्ट कानून",
      description: "पत्रकार सुरक्षा एक्ट कानून को लागू कराना।",
      icon: Shield,
      color: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      id: 2,
      title: "पेंशन योजना",
      description: "भारत के सभी पत्रकारों को एकजुट करना एवं पेंशन योजना लागू कराना।",
      icon: Users,
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 3,
      title: "बीमा सुरक्षा",
      description: "पत्रकारों को बीमा सुरक्षा व स्वास्थ्य सुविधाएं दिलाने के लिए शासन से मांग करना।",
      icon: Stethoscope,
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      id: 4,
      title: "मान सम्मान",
      description: "पत्रकारों को शासन-प्रशासन द्वारा पूरा मान, सम्मान एवं सुरक्षा प्रदान कराना।",
      icon: Award,
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 5,
      title: "निष्पक्ष जांच",
      description: "किसी भी पत्रकार पर बिना जांच-पड़ताल के मुकदमा दर्ज न हो, उच्च अधिकारियों द्वारा जांच कराना।",
      icon: Scale,
      color: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: 6,
      title: "आर्थिक स्थिरता",
      description: "देश के कोने-कोने में पत्रकारों को संगठित करना और उनकी आर्थिक स्थिति सुधारने के लिए शासन से मांग करना।",
      icon: TrendingUp,
      color: "bg-teal-50",
      iconColor: "text-teal-600"
    },
    {
      id: 7,
      title: "त्वरित कार्रवाई",
      description: "पत्रकारों के साथ किसी भी घटना पर 24 घंटे के अंदर शासन-प्रशासन की सहायता से कार्रवाई कराना।",
      icon: Clock,
      color: "bg-rose-50",
      iconColor: "text-rose-600"
    },
    {
      id: 8,
      title: "समान सुविधाएं",
      description: "गैर-मान्यता प्राप्त पत्रकारों को भी वह समस्त सुविधाएं दिलाना जो मान्यता प्राप्त पत्रकारों को दी जाती हैं।",
      icon: BadgeCheck,
      color: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  // ================= SAN KALP (संकल्प) SECTION CONTENT =================
  const sankalpContent = [
    "हम ऑल इंडिया पत्रकार एकता संघ के सदस्य यह दृढ़ संकल्प लेते हैं कि हम बिखराव को समाप्त कर एकता की मशाल जलाएंगे।",
    "हम व्यक्तिगत स्वार्थ से उपर उठकर संगठन को सर्वोपरि मानेंगे।",
    "हम पत्रकारों के अधिकारों की सुरक्षा एवं सम्मान की लड़ाई में एकजुट होकर संघर्ष करेंगे।",
    "हम लोकतंत्र की रक्षा में अपनी कलम को कभी झुकने नहीं देंगे।",
    "हम पत्रकार आवाज़ हैं, लेकिन संगठित पत्रकार बदलाव की ताकत हैं।",
    "सत्य के साथ, संगठन के साथ - यही हमारी पहचान है।"
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      
      {/* ================= HERO SECTION WITH RED THEME ================= */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white overflow-hidden">
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
            ऑल इंडिया पत्रकार एकता संघ (A.I.P.E.S.)
          </h1>
          
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          
          <p className="text-base md:text-lg text-red-100 max-w-3xl mx-auto leading-relaxed">
            देशभर के पत्रकारों की एकता, सुरक्षा और अधिकारों के लिए समर्पित एक संगठन। 
            भारत सरकार द्वारा विधिवत पंजीकृत, हम पत्रकार समुदाय के उत्थान के लिए निरंतर प्रयासरत हैं।
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className=" hidden py-12 bg-white border-b border-gray-100">
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
          
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full mb-4">
              <FileText size={14} />
              <span className="text-xs font-medium">संगठन परिचय</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              ऑल इंडिया पत्रकार एकता संघ (A.I.P.E.S.) के बारे में
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
            <p className="text-gray-500 mt-2 text-sm">
              भारतीय ट्रस्ट अधिनियम 1882 के अंतर्गत क्रमांक 20/25 दिनांक 3/3/2025 को पंजीकृत
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
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
                      <p className="font-medium text-gray-800">IT Act 1882 (भारतीय ट्रस्ट अधिनियम)</p>
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
                    <Calendar size={18} className="text-red-500 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400">पंजीकरण दिनांक</p>
                      <p className="font-medium text-gray-800">3 मार्च 2025</p>
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
                  
                  <div className="flex items-start gap-3">
                    <Award size={18} className="text-red-500 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400">दर्पण नीति आयोग</p>
                      <p className="font-medium text-gray-800">भारत सरकार द्वारा पंजीकृत</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OBJECTIVES SECTION (8 POINTS) ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full mb-3">
            <Target size={14} />
            <span className="text-xs font-medium">हमारा लक्ष्य</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            संगठन के प्रमुख उद्देश्य
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            हम पत्रकारों के उत्थान और सशक्तिकरण के लिए इन 8 प्रमुख उद्देश्यों पर कार्य कर रहे हैं
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {objectives.map((obj) => (
            <div 
              key={obj.id} 
              className={`${obj.color} rounded-xl p-5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg bg-white shadow-sm ${obj.iconColor}`}>
                  <obj.icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">
                    {obj.id}. {obj.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SAN KALP (संकल्प) SECTION ================= */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <HeartHandshake size={16} />
              <span className="text-sm font-medium">हमारा संकल्प</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              दृढ़ संकल्प
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            {sankalpContent.map((text, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-red-700 text-xs font-bold">{index + 1}</span>
                </div>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 pt-4 border-t border-white/20">
            <p className="text-yellow-300 text-sm font-medium">
              "सत्य के साथ, संगठन के साथ - यही हमारी पहचान है"
            </p>
            <p className="text-red-200 text-xs mt-2">
              24 घंटे पत्रकारों के लिए तत्पर | Always ready for journalists
            </p>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            पत्रकार समुदाय से जुड़ें
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            यदि आप एक पत्रकार हैं और हमारे साथ जुड़ना चाहते हैं, तो आज ही संपर्क करें।
            मिलकर बनाएंगे एक मजबूत पत्रकार समुदाय।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              संपर्क करें
            </Link>
            <Link 
              to="/patrakars" 
              className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition inline-flex items-center justify-center gap-2"
            >
              <Users size={18} />
              हमारे पत्रकार देखें
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
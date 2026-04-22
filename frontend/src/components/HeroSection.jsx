// components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, ChevronRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1600&h=900&fit=crop"
          alt="News Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/95 via-red-900/90 to-black/80"></div>
      </div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-400 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      {/* Top Curve */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Breaking News Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold tracking-wide text-red-200">
              सत्य, निष्पक्ष, त्वरित
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            ऑल इंडिया पत्रकार
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400 mt-2">
              एकता संघ
            </span>
          </h1>
          
          {/* Tagline */}
          <div className="text-lg sm:text-xl md:text-2xl text-red-200 font-medium mb-4">
            A.I.P.E.S.
          </div>
          
          {/* Description */}
          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            देश की आवाज़, आपका भरोसा। सटीक, त्वरित और निष्पक्ष पत्रकारिता के लिए प्रतिबद्ध।
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/team"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3.5 rounded-full font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center gap-2">
                हमारे सदस्य देखें
                <ChevronRight size={18} className="group-hover:translate-x-1 transition" />
              </span>
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <Play size={16} />
              संपर्क करें
            </Link>
          </div>
          
          {/* Trust Indicators - No Numbers */}
          <div className="flex flex-wrap gap-6 mt-12 pt-6 border-t border-white/20 justify-center">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-yellow-400" />
              <span className="text-sm text-gray-200">पंजीकृत संगठन</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-yellow-400" />
              <span className="text-sm text-gray-200">सरकार द्वारा मान्यता प्राप्त</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-yellow-400" />
              <span className="text-sm text-gray-200">पूरे भारत में सक्रिय</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Curve */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white" className="w-full h-auto">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Newspaper, ArrowLeft } from 'lucide-react';

const NotFoundPage  = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-2xl w-full text-center">
        
        {/* Logo / Brand */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-600 shadow-2xl">
            <Newspaper className="text-white w-12 h-12" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-red-600 tracking-tight">
          404
        </h1>

        {/* English */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>

        {/* Hindi */}
        <h3 className="mt-3 text-xl md:text-2xl font-semibold text-red-700">
          क्षमा करें, यह पेज उपलब्ध नहीं है
        </h3>

        <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          आप जिस समाचार पेज को खोज रहे हैं वह हटाया जा चुका है,
          स्थानांतरित किया गया है या फिर अस्थायी रूप से उपलब्ध नहीं है।
        </p>

        {/* Divider */}
        <div className="w-32 h-1 bg-red-600 mx-auto rounded-full mt-8"></div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            to="/"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 font-medium"
          >
            <Home size={20} />
            होम पेज पर जाएँ
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border border-red-200 hover:border-red-500 hover:bg-red-50 text-red-700 px-6 py-3 rounded-xl transition-all duration-300 font-medium"
          >
            <ArrowLeft size={20} />
            वापस जाएँ
          </button>
        </div>

        {/* Footer */}
        <div className="mt-14 text-sm text-gray-500">
          AllIndiapes • All India Patrakar Ekta Sangh
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
// pages/NotFoundPage.jsx - With Progress Bar
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Lock, Phone, Mail, AlertCircle } from 'lucide-react';

const NotFoundPage = () => {
  // Example: 60% payment received
  const paymentPercentage = 37.5;
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Red Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-4 text-center">
          <Lock size={32} className="text-white mx-auto mb-2" />
          <h2 className="text-white font-bold text-lg">Access Restricted</h2>
          <p className="text-red-200 text-xs">पहुंच प्रतिबंधित</p>
        </div>
        
        {/* Content */}
        <div className="p-6">
          
          {/* 404 */}
          <div className="text-center mb-4">
            <div className="text-5xl font-bold text-gray-200">404</div>
            <p className="text-gray-500 text-sm mt-1">Page Not Found</p>
          </div>
          
          {/* Payment Status */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>भुगतान स्थिति</span>
              <span>{paymentPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-red-600 h-2 rounded-full" 
                style={{ width: `${paymentPercentage}%` }}
              ></div>
            </div>
          </div>
          
          {/* Message */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <div className="flex items-start gap-2">
              <AlertCircle size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-yellow-800">
                वेबसाइट को पूर्ण रूप से सक्रिय करने के लिए कृपया शेष {100 - paymentPercentage}% भुगतान करें।
              </p>
            </div>
          </div>
          
          {/* Contact */}
          <div className="bg-gray-50 rounded-lg p-3 mb-5">
            <p className="text-xs text-gray-500 text-center mb-2">डेवलपर से संपर्क करें</p>
            <div className="flex justify-center gap-4">
              <a href="tel:+919565017342" className="flex items-center gap-1 text-sm text-red-600">
                <Phone size={14} /> 9565017342
              </a>
              <a href="mailto:kapil.twoscience@gmail.com" className="flex items-center gap-1 text-sm text-red-600">
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
          
          {/* Home Button */}
          <Link
            to="/"
            className="block text-center bg-red-600 text-white py-2.5 rounded-lg font-medium hover:bg-red-700 transition"
          >
            ← होम पेज पर जाएं
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
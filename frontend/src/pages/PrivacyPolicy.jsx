// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Shield size={32} className="text-red-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            गोपनीयता नीति
          </h1>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4">
            Privacy Policy | Last Updated: {new Date().toLocaleDateString('hi-IN')}
          </p>
        </div>

        {/* Notice Card */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-1">
                नोट / Important Note
              </h3>
              <p className="text-yellow-700 text-sm">
                यह गोपनीयता नीति वेबसाइट लॉन्च से पहले संगठन द्वारा अंतिम रूप दी जाएगी। 
                कृपया जल्द ही अपडेट के लिए देखते रहें।
              </p>
              <p className="text-yellow-700 text-sm mt-2">
                This privacy policy will be finalized by the organization before the website launch. 
                Please check back soon for updates.
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center">
          <FileText size={48} className="text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            जल्द आ रहा है
          </h2>
          <p className="text-gray-500">
            गोपनीयता नीति जल्द ही यहाँ उपलब्ध होगी।
          </p>
          <Link 
            to="/"
            className="inline-block mt-6 text-red-600 hover:text-red-700 font-medium"
          >
            ← होम पेज पर वापस जाएं
          </Link>
        </div>

        {/* Template for Client */}
        <div className="mt-8 bg-gray-100 rounded-xl p-6">
          <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <FileText size={16} />
            Client के लिए निर्देश / Instructions for Client:
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
            <li>कृपया अपने वकील से गोपनीयता नीति तैयार करवाएं</li>
            <li>Please get the privacy policy drafted by your legal counsel</li>
            <li>यह पेज आपकी तैयार की गई सामग्री से replace किया जाएगा</li>
            <li>This page will be replaced with your finalized content</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
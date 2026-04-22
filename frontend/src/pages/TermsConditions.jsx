// src/pages/TermsConditions.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Scale, AlertCircle, Gavel, Shield } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Scale size={32} className="text-red-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            नियम एवं शर्तें
          </h1>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4">
            Terms and Conditions | Last Updated: {new Date().toLocaleDateString('hi-IN')}
          </p>
        </div>

        {/* Notice Card - Important */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-1">
                ⚠️ महत्वपूर्ण सूचना / Important Notice
              </h3>
              <p className="text-yellow-700 text-sm">
                यह नियम एवं शर्तें वेबसाइट लॉन्च से पहले संगठन द्वारा अंतिम रूप दी जाएगी। 
                कृपया जल्द ही अपडेट के लिए देखते रहें।
              </p>
              <p className="text-yellow-700 text-sm mt-2">
                These terms and conditions will be finalized by the organization before the website launch. 
                Please check back soon for updates.
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center mb-8">
          <FileText size={48} className="text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            जल्द आ रहा है
          </h2>
          <p className="text-gray-500">
            नियम एवं शर्तें जल्द ही यहाँ उपलब्ध होगी।
          </p>
        </div>

        {/* Basic Template Structure for Client */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="bg-red-600 px-6 py-3">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <FileText size={18} />
              नियम एवं शर्तें - टेम्पलेट / Template for Client
            </h3>
          </div>
          <div className="p-6">
            <p className="text-gray-500 text-sm mb-4">
              नीचे दिए गए टेम्पलेट को अपने वकील से भरवाएं / Fill this template with your legal counsel:
            </p>
            
            <div className="space-y-4 text-sm">
              <div className="border-b border-gray-100 pb-3">
                <h4 className="font-semibold text-gray-700 mb-1">1. स्वीकृति / Acceptance</h4>
                <p className="text-gray-500 text-xs">[वेबसाइट का उपयोग करके आप इन नियमों को स्वीकार करते हैं]</p>
              </div>
              
              <div className="border-b border-gray-100 pb-3">
                <h4 className="font-semibold text-gray-700 mb-1">2. उपयोग के नियम / Usage Rules</h4>
                <p className="text-gray-500 text-xs">[वेबसाइट के उपयोग के नियम यहाँ लिखें]</p>
              </div>
              
              <div className="border-b border-gray-100 pb-3">
                <h4 className="font-semibold text-gray-700 mb-1">3. सामग्री / Content</h4>
                <p className="text-gray-500 text-xs">[सामग्री के कॉपीराइट और उपयोग के नियम]</p>
              </div>
              
              <div className="border-b border-gray-100 pb-3">
                <h4 className="font-semibold text-gray-700 mb-1">4. जिम्मेदारी / Liability</h4>
                <p className="text-gray-500 text-xs">[दायित्व सीमाएं यहाँ लिखें]</p>
              </div>
              
              <div className="border-b border-gray-100 pb-3">
                <h4 className="font-semibold text-gray-700 mb-1">5. संशोधन / Modifications</h4>
                <p className="text-gray-500 text-xs">[नियमों में बदलाव की प्रक्रिया]</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">6. संपर्क करें / Contact Us</h4>
                <p className="text-gray-500 text-xs">[ईमेल: संगठन का ईमेल, फोन: संगठन का फोन]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions for Client */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Gavel size={16} />
            क्लाइंट के लिए निर्देश / Instructions for Client:
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
            <li>कृपया अपने वकील से नियम एवं शर्तें तैयार करवाएं</li>
            <li>Please get the terms and conditions drafted by your legal counsel</li>
            <li>यह पेज आपकी तैयार की गई सामग्री से replace किया जाएगा</li>
            <li>This page will be replaced with your finalized content</li>
            <li>वेबसाइट लॉन्च से पहले यह आवश्यक है / Required before website launch</li>
          </ul>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            ← होम पेज पर वापस जाएं
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
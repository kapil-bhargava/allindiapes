import React from "react";

const FullTeamPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="text-center max-w-md">
        
        {/* Icon */}
        <div className="text-5xl mb-4">🚧</div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          पेज निर्माणाधीन है
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 mb-6">
          हमारी टीम इस पेज पर काम कर रही है। कृपया कुछ समय बाद पुनः देखें।
        </p>

        {/* Divider */}
        <div className="w-16 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>

        {/* Button */}
        <button
          onClick={() => window.history.back()}
          className="px-5 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          वापस जाएँ
        </button>

      </div>
    </div>
  );
};

export default FullTeamPage;
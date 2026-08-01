import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

const Logo = ({ className = '', isWhite = false }) => {
  return (
    <Link to="/admin" className={`flex items-center gap-2 ${className}`}>
      {/* <div className={`${isWhite ? 'bg-white/20 backdrop-blur-sm border border-white/30' : 'bg-red-600'} p-2 rounded-xl transition-all duration-200`}> */}
        {/* <svg className={`w-6 h-6 ${isWhite ? 'text-white' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
          />
        </svg> */}

          <img src={logo} alt="" className=" rounded-full w-10 h-10 " />
      {/* </div> */}
      <div>
        <h1 className={`text-xl font-bold ${isWhite ? 'text-white' : 'text-red-700'}`}>Admin Panel</h1>
        {/* <p className={`text-xs ${isWhite ? 'text-red-100' : 'text-gray-500'}`}>राष्ट्रीय पदाधिकारी</p> */}
      </div>
    </Link>
  );
};

export default Logo;
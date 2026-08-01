import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';
import logo from '../../assets/logo.jpeg';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (formData.email === 'admin' && formData.password === '321') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ 
          email: formData.email,
          name: 'Admin User'
        }));
        setLoading(false);
        navigate('/admin');
      } else {
        setError('Invalid email or password. Please try again.');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-rose-50 p-4">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-100 rounded-full opacity-10 blur-2xl"></div>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-red-200">
          {/* Header with Logo */}
          <div className="px-8 pt-8 pb-6 text-center">
            <div className="flex flex-col items-center">
              {/* Logo */}
              <div className="w-24 h-24 rounded-full border-4 border-red-600 p-1 shadow-lg hover:shadow-red-200 transition-shadow duration-300">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-800 mt-4">Admin Login</h1>
              {/* <p className="text-sm text-gray-500 mt-1">National Office Bearers & Members Management</p> */}
              
              {/* Red Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-rose-600 rounded-full mt-3"></div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            {/* Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-2 focus:ring-red-200"
                />
                Remember Me
              </label>
              <a href="#" className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full py-3 px-4 rounded-lg font-medium text-white
                bg-gradient-to-r from-red-600 to-rose-600
                hover:shadow-lg hover:shadow-red-200 transition-all duration-200
                ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}
                flex items-center justify-center gap-2
                border-2 border-red-600
              `}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>

            {/* Footer */}
            <div className="text-center pt-2">
              <p className="text-xs text-gray-400">© 2024 Admin Panel. All rights reserved.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
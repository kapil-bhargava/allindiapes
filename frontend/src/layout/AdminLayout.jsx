import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import {
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const AdminLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleProfile = () => {
    console.log('Profile clicked');
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{"name": "Admin", "email": "admin@example.com"}');

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
            <div className="hidden sm:block">
              <h2 className="text-lg font-semibold text-gray-800">राष्ट्रीय पदाधिकारी</h2>
              <p className="text-xs text-gray-500">National Office Bearers & Members</p>
            </div>
          </div>
          
          {/* Admin Dropdown Menu */}
          <div className="flex items-center gap-3 relative" ref={dropdownRef}>
            <span className="text-sm text-gray-600 hidden sm:block">{user.name || 'Admin'}</span>
            
            {/* Avatar with Dropdown Toggle */}
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 focus:outline-none group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <span className="text-sm font-medium">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'A'}
                </span>
              </div>
              <ChevronDownIcon className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                {/* User Info */}
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-800">{user.name || 'Admin User'}</p>
                  <p className="text-xs text-gray-500">{user.email || 'admin@example.com'}</p>
                </div>

                {/* Menu Items */}
                <div className="py-1">
                  <button
                    onClick={handleProfile}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    <UserCircleIcon className="w-5 h-5" />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={() => {
                      console.log('Settings clicked');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    <Cog6ToothIcon className="w-5 h-5" />
                    <span>Settings</span>
                  </button>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100"></div>

                {/* Logout */}
                <div className="py-1">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
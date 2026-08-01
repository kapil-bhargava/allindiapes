import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import {
  HomeIcon,
  UsersIcon,
  CalendarIcon,
  XMarkIcon,
  GlobeAltIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  BellIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  DocumentTextIcon,
  FolderIcon
} from '@heroicons/react/24/outline';

import logo from '../../assets/logo.jpeg';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('hi');
  const location = useLocation();

  // Detect browser language
  useEffect(() => {
    const browserLang = navigator.language || navigator.languages?.[0];
    if (browserLang && browserLang.startsWith('en')) {
      setCurrentLanguage('en');
    }
  }, []);

  const navItems = [
    { 
      path: '/admin', 
      icon: HomeIcon, 
      label: 'Dashboard',
      labelHi: 'डैशबोर्ड',
      iconBg: 'bg-red-50 text-red-600',
      activeBg: 'bg-red-50'
    },
    { 
      path: '/admin/members', 
      icon: UsersIcon, 
      label: 'Members',
      labelHi: 'सदस्य',
      iconBg: 'bg-rose-50 text-rose-600',
      activeBg: 'bg-rose-50'
    },
    { 
      path: '/admin/events', 
      icon: CalendarIcon, 
      label: 'Events',
      labelHi: 'कार्यक्रम',
      iconBg: 'bg-red-50 text-red-600',
      activeBg: 'bg-red-50'
    },
  ];

  // Quick stats for sidebar footer
  const quickStats = [
    { label: 'Members', value: '124', color: 'text-red-600' },
    { label: 'Events', value: '45', color: 'text-rose-600' },
  ];

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const handleMobileToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const getLabel = (item) => {
    return currentLanguage === 'hi' ? item.labelHi : item.label;
  };

  const isActiveRoute = (path) => {
    if (path === '/admin' && location.pathname === '/admin') return true;
    if (path !== '/admin' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0  bg-black/60  z-40 md:hidden "
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Toggle Button */}
      <button
        onClick={handleMobileToggle}
        className="fixed top-4 left-4 z-50 md:hidden bg-gradient-to-r from-red-600 to-rose-600 text-white p-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative z-50
          h-full bg-white shadow-2xl
          transition-all duration-300 ease-in-out
          flex flex-col
          ${isMobileOpen ? 'left-0 w-80' : '-left-80 md:left-0'}
          ${isOpen ? 'md:w-64' : 'md:w-20'}
          border-r border-gray-100
        `}
      >
        {/* Header with Gradient */}
        <div className={`
          relative overflow-hidden
          ${isOpen || isMobileOpen ? 'p-4' : 'p-3'}
          border-b border-gray-100
          bg-gradient-to-r from-red-600 to-rose-600
        `}>
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full"></div>
          
          <div className="flex items-center justify-between relative z-10">
            {isOpen || isMobileOpen ? (
              <Logo className="flex-shrink-0" isWhite={true} />
            ) : (
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 border border-white/30">
                <img src={logo} alt="" className="w-full h-full  rounded-full" />
              </div>
            )}
            <button
              onClick={handleMobileToggle}
              className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors md:hidden"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            {!isMobileOpen && (
              <button
                onClick={toggleSidebar}
                className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors hidden md:block"
              >
                {isOpen ? (
                  <ChevronLeftIcon className="w-5 h-5" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5" />
                )}
              </button>
            )}
          </div>

          {/* User profile mini */}
          {/* {(isOpen || isMobileOpen) && (
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/20 relative z-10">
              <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white font-semibold text-sm border border-white/30">
                A
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">Admin User</p>
                <p className="text-xs text-red-100 truncate">administrator@example.com</p>
              </div>
            </div>
          )} */}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1.5">
            {navItems.map((item) => {
              const active = isActiveRoute(item.path);
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-xl
                      transition-all duration-200 group
                      ${active
                        ? 'bg-gradient-to-r from-red-50 to-rose-50 text-red-700 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-red-600'
                      }
                      ${(isOpen || isMobileOpen) ? 'justify-start' : 'justify-center'}
                      relative
                    `}
                    onClick={() => window.innerWidth < 768 && setIsMobileOpen(false)}
                  >
                    {/* Active indicator */}
                    {active && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-red-600 to-rose-600 rounded-r-full"></div>
                    )}
                    
                    <div className={`
                      p-1.5 rounded-lg transition-all duration-200
                      ${active ? 'bg-white shadow-sm' : 'group-hover:bg-red-50'}
                    `}>
                      <item.icon className={`
                        w-5 h-5 transition-colors duration-200
                        ${active ? 'text-red-600' : 'text-gray-400 group-hover:text-red-600'}
                      `} />
                    </div>
                    
                    {(isOpen || isMobileOpen) && (
                      <span className={`
                        font-medium transition-colors duration-200
                        ${active ? 'text-red-700' : 'text-gray-700 group-hover:text-red-600'}
                      `}>
                        {getLabel(item)}
                      </span>
                    )}

                    {/* Active badge */}
                    {active && (isOpen || isMobileOpen) && (
                      <span className="ml-auto w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="my-4 border-t border-gray-100"></div>

          {/* Quick Stats */}
          {(isOpen || isMobileOpen) && (
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider px-3">
                Quick Stats
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickStats.map((stat, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-3 text-center hover:bg-red-50 transition-colors cursor-pointer">
                    <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <button
            onClick={toggleLanguage}
            className={`
              flex items-center gap-3 w-full px-3 py-2.5 rounded-xl
              hover:bg-white transition-all duration-200 group
              ${(isOpen || isMobileOpen) ? 'justify-start' : 'justify-center'}
              border border-transparent hover:border-red-100
            `}
          >
            <div className="p-1.5 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors">
              <GlobeAltIcon className="w-5 h-5 text-red-600" />
            </div>
            {(isOpen || isMobileOpen) && (
              <span className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                {currentLanguage === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
              </span>
            )}
            {(isOpen || isMobileOpen) && (
              <span className="ml-auto text-xs font-medium px-2 py-0.5 bg-red-100 text-red-600 rounded-full">
                {currentLanguage.toUpperCase()}
              </span>
            )}
          </button>

          {/* Version info */}
          {(isOpen || isMobileOpen) && (
            <div className="mt-3 text-center">
              <p className="text-[10px] text-gray-400">v2.0.0 • © 2024</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
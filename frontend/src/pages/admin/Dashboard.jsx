import React, { useState, useEffect } from 'react';
import { 
  UsersIcon, 
  CalendarIcon, 
  UserGroupIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChevronRightIcon,
  UserPlusIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [language, setLanguage] = useState('hi');

  // Translations
  const translations = {
    hi: {
      dashboard: 'डैशबोर्ड',
      subtitle: 'राष्ट्रीय पदाधिकारी एवं सदस्य प्रबंधन',
      totalMembers: 'कुल सदस्य',
      activeMembers: 'सक्रिय सदस्य',
      totalEvents: 'कार्यक्रम',
      upcomingEvents: 'आगामी कार्यक्रम',
      recentMembers: 'हाल के सदस्य',
      viewAll: 'सभी देखें',
      name: 'नाम',
      phone: 'फोन',
      region: 'क्षेत्र',
      status: 'स्थिति',
      active: 'सक्रिय',
      inactive: 'निष्क्रिय',
      upcoming: 'आगामी',
      details: 'विवरण',
      quickContact: 'त्वरित संपर्क',
      joinDate: 'जुड़ने की तारीख',
      viewDetails: 'विवरण देखें',
      noData: 'कोई डेटा नहीं',
      today: 'आज',
      thisWeek: 'इस सप्ताह',
      thisMonth: 'इस माह',
      notifications: 'सूचनाएं',
      welcome: 'स्वागत है',
      admin: 'प्रशासक'
    },
    en: {
      dashboard: 'Dashboard',
      subtitle: 'National Office Bearers & Members Management',
      totalMembers: 'Total Members',
      activeMembers: 'Active Members',
      totalEvents: 'Events',
      upcomingEvents: 'Upcoming Events',
      recentMembers: 'Recent Members',
      viewAll: 'View All',
      name: 'Name',
      phone: 'Phone',
      region: 'Region',
      status: 'Status',
      active: 'Active',
      inactive: 'Inactive',
      upcoming: 'Upcoming',
      details: 'Details',
      quickContact: 'Quick Contact',
      joinDate: 'Join Date',
      viewDetails: 'View Details',
      noData: 'No Data',
      today: 'Today',
      thisWeek: 'This Week',
      thisMonth: 'This Month',
      notifications: 'Notifications',
      welcome: 'Welcome',
      admin: 'Admin'
    }
  };

  // Detect browser language
  useEffect(() => {
    const browserLang = navigator.language || navigator.languages?.[0];
    if (browserLang && browserLang.startsWith('en')) {
      setLanguage('en');
    }
  }, []);

  const t = (key) => translations[language][key] || key;

  // Statistics with red theme
  const stats = [
    {
      title: t('totalMembers'),
      value: '124',
      icon: UsersIcon,
      color: 'bg-red-600',
      lightColor: 'bg-red-50',
      textColor: 'text-red-600',
      change: '+12%',
      trend: 'up'
    },
    {
      title: t('activeMembers'),
      value: '98',
      icon: UserGroupIcon,
      color: 'bg-rose-600',
      lightColor: 'bg-rose-50',
      textColor: 'text-rose-600',
      change: '+8%',
      trend: 'up'
    },
    {
      title: t('totalEvents'),
      value: '45',
      icon: CalendarIcon,
      color: 'bg-red-700',
      lightColor: 'bg-red-50',
      textColor: 'text-red-700',
      change: '+5%',
      trend: 'up'
    },
    {
      title: t('upcomingEvents'),
      value: '12',
      icon: ClockIcon,
      color: 'bg-rose-700',
      lightColor: 'bg-rose-50',
      textColor: 'text-rose-700',
      change: '+3%',
      trend: 'up'
    }
  ];

  // Recent members
  const recentMembers = [
    {
      id: 1,
      name: 'राम कुमार',
      phone: '+91-9807626031',
      region: 'कमलानगर, लखनऊ',
      joinDate: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'श्याम सिंह',
      phone: '+91-9450324690',
      region: 'जानकीपुरम, लखनऊ',
      joinDate: '2024-02-20',
      status: 'active'
    },
    {
      id: 3,
      name: 'राधा कुमारी',
      phone: '+91-9628976677',
      region: 'त्रिवेणी नगर, लखनऊ',
      joinDate: '2024-03-10',
      status: 'active'
    },
    {
      id: 4,
      name: 'मोहन लाल',
      phone: '+91-9838018453',
      region: 'लखीमपुर खीरी',
      joinDate: '2024-03-25',
      status: 'inactive'
    }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'राष्ट्रीय सम्मेलन 2024',
      date: '2024-12-15',
      time: '10:00 AM',
      venue: 'कमलानगर, लखनऊ',
      organizer: 'राम कुमार'
    },
    {
      id: 2,
      title: 'क्षेत्रीय बैठक',
      date: '2024-11-20',
      time: '2:30 PM',
      venue: 'त्रिवेणी नगर, लखनऊ',
      organizer: 'श्याम सिंह'
    },
    {
      id: 3,
      title: 'सदस्यता अभियान',
      date: '2024-10-05',
      time: '9:00 AM',
      venue: 'जानकीपुरम, लखनऊ',
      organizer: 'राधा कुमारी'
    }
  ];

  // Language toggle button
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'hi' ? 'en' : 'hi');
  };

  return (
    <div className="space-y-6">
      {/* Language Toggle - Top Right */}
      {/* <div className="flex justify-end">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-red-200 rounded-lg shadow-sm hover:bg-red-50 transition-all duration-200 text-sm font-medium text-red-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <span>{language === 'hi' ? 'English' : 'हिंदी'}</span>
        </button>
      </div> */}

      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl shadow-xl p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{t('welcome')} {t('admin')}!</h1>
            <p className="text-red-100 mt-1 text-sm md:text-base opacity-90">{t('subtitle')}</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-sm">{t('today')}</span>
              <span className="text-sm font-medium">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-red-500 hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  {stat.trend === 'up' ? (
                    <ArrowUpIcon className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDownIcon className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-400 ml-1">{t('thisMonth')}</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-xl shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Members */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-red-50 to-rose-50">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <UserPlusIcon className="w-5 h-5 text-red-600" />
              {t('recentMembers')}
            </h2>
            <button className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 font-medium transition-colors">
              {t('viewAll')}
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('name')}</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('phone')}</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('region')}</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('status')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-red-50 transition-colors duration-150">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-sm">
                          {member.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-gray-800">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{member.phone}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{member.region}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 inline-flex items-center gap-1 text-xs font-semibold rounded-full ${
                        member.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {member.status === 'active' ? (
                          <CheckCircleIcon className="w-3 h-3" />
                        ) : (
                          <XCircleIcon className="w-3 h-3" />
                        )}
                        {member.status === 'active' ? t('active') : t('inactive')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-red-50 to-rose-50">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <CalendarDaysIcon className="w-5 h-5 text-red-600" />
              {t('upcomingEvents')}
            </h2>
            <button className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 font-medium transition-colors">
              {t('viewAll')}
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4 space-y-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-all duration-200 group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex flex-col items-center justify-center text-white shadow-md">
                  <span className="text-xs font-bold">{event.date.split('-')[2]}</span>
                  <span className="text-[10px] opacity-90">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      {event.time}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPinIcon className="w-3 h-3" />
                      {event.venue}
                    </span>
                  </div>
                </div>
                <button className="flex-shrink-0 text-xs font-medium text-red-600 hover:text-red-800 opacity-0 group-hover:opacity-100 transition-all duration-200">
                  {t('details')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Contact Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <PhoneIcon className="w-5 h-5 text-red-600" />
          {t('quickContact')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'राम कुमार', phone: '+91-9807626031', role: 'राष्ट्रीय अध्यक्ष' },
            { name: 'श्याम सिंह', phone: '+91-9450324690', role: 'राष्ट्रीय सचिव' },
            { name: 'राधा कुमारी', phone: '+91-9628976677', role: 'राष्ट्रीय कोषाध्यक्ष' },
            { name: 'मोहन लाल', phone: '+91-9838018453', role: 'राष्ट्रीय सदस्य' }
          ].map((contact, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-red-50 rounded-xl hover:shadow-md transition-all duration-200 group cursor-pointer border border-red-100">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md">
                {contact.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800">{contact.name}</p>
                <p className="text-xs text-gray-500">{contact.role}</p>
                <a href={`tel:${contact.phone}`} className="text-xs text-red-600 hover:text-red-800 font-medium flex items-center gap-1">
                  <PhoneIcon className="w-3 h-3" />
                  {contact.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
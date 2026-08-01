import React, { useState, useEffect } from 'react';
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon,
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon,
  UserPlusIcon,
  FunnelIcon,
  ArrowPathIcon,
  DocumentArrowDownIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const Members = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'राम कुमार',
      phone: '+91-9807626031',
      email: 'ram@example.com',
      position: 'राष्ट्रीय अध्यक्ष',
      region: 'कमलानगर, लखनऊ',
      joinDate: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'श्याम सिंह',
      phone: '+91-9450324690',
      email: 'shyam@example.com',
      position: 'राष्ट्रीय सचिव',
      region: 'जानकीपुरम, लखनऊ',
      joinDate: '2024-02-20',
      status: 'active'
    },
    {
      id: 3,
      name: 'राधा कुमारी',
      phone: '+91-9628976677',
      email: 'radha@example.com',
      position: 'राष्ट्रीय कोषाध्यक्ष',
      region: 'त्रिवेणी नगर, लखनऊ',
      joinDate: '2024-03-10',
      status: 'active'
    },
    {
      id: 4,
      name: 'मोहन लाल',
      phone: '+91-9838018453',
      email: 'mohan@example.com',
      position: 'राष्ट्रीय सदस्य',
      region: 'लखीमपुर खीरी',
      joinDate: '2024-03-25',
      status: 'inactive'
    },
    {
      id: 5,
      name: 'सीता देवी',
      phone: '+91-9876543210',
      email: 'sita@example.com',
      position: 'राष्ट्रीय उपाध्यक्ष',
      region: 'कमलानगर, लखनऊ',
      joinDate: '2024-04-01',
      status: 'active'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  // Language state
  const [language, setLanguage] = useState('hi');

  useEffect(() => {
    const browserLang = navigator.language || navigator.languages?.[0];
    if (browserLang && browserLang.startsWith('en')) {
      setLanguage('en');
    }
  }, []);

  const translations = {
    hi: {
      title: 'सदस्य प्रबंधन',
      totalMembers: 'कुल सदस्य',
      addMember: 'नया सदस्य जोड़ें',
      search: 'खोजें...',
      filter: 'फ़िल्टर',
      all: 'सभी',
      active: 'सक्रिय',
      inactive: 'निष्क्रिय',
      sNo: 'क्र.सं.',
      name: 'नाम',
      phone: 'फोन',
      position: 'पद',
      region: 'क्षेत्र',
      status: 'स्थिति',
      actions: 'कार्य',
      edit: 'संपादित करें',
      delete: 'हटाएं',
      view: 'देखें',
      previous: 'पिछला',
      next: 'अगला',
      noData: 'कोई सदस्य नहीं मिला',
      showing: 'दिखा रहे हैं',
      to: 'से',
      of: 'कुल',
      results: 'परिणाम',
      export: 'निर्यात करें',
      refresh: 'ताज़ा करें',
      joinDate: 'जुड़ने की तारीख'
    },
    en: {
      title: 'Members Management',
      totalMembers: 'Total Members',
      addMember: 'Add New Member',
      search: 'Search...',
      filter: 'Filter',
      all: 'All',
      active: 'Active',
      inactive: 'Inactive',
      sNo: 'S.No',
      name: 'Name',
      phone: 'Phone',
      position: 'Position',
      region: 'Region',
      status: 'Status',
      actions: 'Actions',
      edit: 'Edit',
      delete: 'Delete',
      view: 'View',
      previous: 'Previous',
      next: 'Next',
      noData: 'No members found',
      showing: 'Showing',
      to: 'to',
      of: 'of',
      results: 'results',
      export: 'Export',
      refresh: 'Refresh',
      joinDate: 'Join Date'
    }
  };

  const t = (key) => translations[language][key] || key;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'hi' ? 'en' : 'hi');
  };

  // Filter and search
  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.phone.includes(searchTerm) ||
                          member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || member.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Sort
  const sortedMembers = [...filteredMembers].sort((a, b) => {
    const aValue = a[sortField] || '';
    const bValue = b[sortField] || '';
    const comparison = aValue.toString().localeCompare(bValue.toString());
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedMembers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedMembers.length / itemsPerPage);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' 
      ? 'bg-green-50 text-green-700 border-green-200' 
      : 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const getStatusIcon = (status) => {
    return status === 'active' 
      ? <CheckCircleIcon className="w-4 h-4 text-green-500" />
      : <XCircleIcon className="w-4 h-4 text-gray-500" />;
  };

  const getRegionColor = (region) => {
    const colors = {
      'कमलानगर, लखनऊ': 'bg-red-50 text-red-700 border-red-200',
      'जानकीपुरम, लखनऊ': 'bg-rose-50 text-rose-700 border-rose-200',
      'त्रिवेणी नगर, लखनऊ': 'bg-orange-50 text-orange-700 border-orange-200',
      'लखीमपुर खीरी': 'bg-amber-50 text-amber-700 border-amber-200'
    };
    return colors[region] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  return (
    <div className="space-y-6">
      {/* Header with Language Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{t('title')}</h1>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
            <span>{t('totalMembers')}:</span>
            <span className="font-semibold text-red-600">{members.length}</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span>{language === 'hi' ? 'English' : 'हिंदी'}</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105">
            <PlusIcon className="w-5 h-5" />
            <span>{t('addMember')}</span>
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={t('search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
          >
            <option value="all">{t('all')}</option>
            <option value="active">{t('active')}</option>
            <option value="inactive">{t('inactive')}</option>
          </select>
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <ArrowPathIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <DocumentArrowDownIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-red-50 to-rose-50 px-6 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              {t('showing')} {indexOfFirstItem + 1} {t('to')} {Math.min(indexOfLastItem, sortedMembers.length)} {t('of')} {sortedMembers.length} {t('results')}
            </span>
          </div>
        </div>

        {/* Table - Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:text-red-600 transition-colors"
                  onClick={() => handleSort('id')}
                >
                  <div className="flex items-center gap-1">
                    {t('sNo')}
                    <ChevronUpDownIcon className="w-4 h-4" />
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:text-red-600 transition-colors"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-1">
                    {t('name')}
                    <ChevronUpDownIcon className="w-4 h-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {t('phone')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {t('position')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {t('region')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {t('status')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {t('actions')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <UserPlusIcon className="w-12 h-12 text-gray-300" />
                      <p>{t('noData')}</p>
                    </div>
                  </td>
                </tr>
              ) : (
                currentItems.map((member, index) => (
                  <tr key={member.id} className="hover:bg-red-50/50 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                      {indexOfFirstItem + index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-md">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{member.name}</div>
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <EnvelopeIcon className="w-3 h-3" />
                            {member.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <PhoneIcon className="w-4 h-4 text-gray-400" />
                        {member.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-700">{member.position}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getRegionColor(member.region)}`}>
                        {member.region}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex items-center gap-1.5 text-xs font-semibold rounded-full border ${getStatusColor(member.status)}`}>
                        {getStatusIcon(member.status)}
                        {member.status === 'active' ? t('active') : t('inactive')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <EyeIcon className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden divide-y divide-gray-100">
          {currentItems.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              <div className="flex flex-col items-center gap-2">
                <UserPlusIcon className="w-12 h-12 text-gray-300" />
                <p>{t('noData')}</p>
              </div>
            </div>
          ) : (
            currentItems.map((member, index) => (
              <div key={member.id} className="p-4 hover:bg-red-50/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center text-white font-semibold text-lg shadow-md flex-shrink-0">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-900 truncate">{member.name}</span>
                        <span className={`px-2 py-0.5 inline-flex items-center gap-1 text-xs font-medium rounded-full ${getStatusColor(member.status)}`}>
                          {getStatusIcon(member.status)}
                          {member.status === 'active' ? t('active') : t('inactive')}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 space-y-0.5">
                        <div className="flex items-center gap-2">
                          <PhoneIcon className="w-3 h-3" />
                          <span>{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <EnvelopeIcon className="w-3 h-3" />
                          <span className="truncate">{member.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-lg">
                    {member.position}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getRegionColor(member.region)}`}>
                    {member.region}
                  </span>
                  <div className="flex items-center gap-1 ml-auto">
                    <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <EyeIcon className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {sortedMembers.length > 0 && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              {t('showing')} {indexOfFirstItem + 1} {t('to')} {Math.min(indexOfLastItem, sortedMembers.length)} {t('of')} {sortedMembers.length} {t('results')}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {t('previous')}
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                        currentPage === pageNum
                          ? 'bg-red-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {t('next')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Members;
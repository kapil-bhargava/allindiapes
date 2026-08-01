import React, { useState, useEffect } from 'react';
// import EventForm from './EventForm';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  CalendarIcon,
  MapPinIcon,
  UserIcon,
  ClockIcon,
  DocumentArrowDownIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  XCircleIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';
import EventForm from '../../components/admin/EventForm';

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'राष्ट्रीय सम्मेलन 2024',
      description: 'वार्षिक राष्ट्रीय सम्मेलन जिसमें सभी राष्ट्रीय पदाधिकारी और सदस्य भाग लेंगे।',
      date: '2024-12-15',
      time: '10:00',
      venue: 'कमलानगर, लखनऊ',
      organizer: 'राम कुमार',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'क्षेत्रीय बैठक',
      description: 'त्रिवेणी नगर क्षेत्रीय बैठक जिसमें क्षेत्रीय समस्याओं पर चर्चा की जाएगी।',
      date: '2024-11-20',
      time: '14:30',
      venue: 'त्रिवेणी नगर, लखनऊ',
      organizer: 'श्याम सिंह',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'सदस्यता अभियान',
      description: 'नए सदस्यों को संगठन से जोड़ने के लिए विशेष अभियान।',
      date: '2024-10-05',
      time: '09:00',
      venue: 'जानकीपुरम, लखनऊ',
      organizer: 'राधा कुमारी',
      status: 'ongoing',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=200&fit=crop'
    }
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [language, setLanguage] = useState('hi');

  useEffect(() => {
    const browserLang = navigator.language || navigator.languages?.[0];
    if (browserLang && browserLang.startsWith('en')) {
      setLanguage('en');
    }
  }, []);

  const translations = {
    hi: {
      title: 'कार्यक्रम प्रबंधन',
      totalEvents: 'कुल कार्यक्रम',
      addEvent: 'नया कार्यक्रम जोड़ें',
      search: 'खोजें...',
      filter: 'फ़िल्टर',
      all: 'सभी',
      upcoming: 'आगामी',
      ongoing: 'चल रहा है',
      completed: 'समाप्त',
      cancelled: 'रद्द',
      edit: 'संपादित करें',
      delete: 'हटाएं',
      view: 'देखें',
      previous: 'पिछला',
      next: 'अगला',
      noData: 'कोई कार्यक्रम नहीं मिला',
      showing: 'दिखा रहे हैं',
      to: 'से',
      of: 'कुल',
      results: 'परिणाम',
      export: 'निर्यात करें',
      refresh: 'ताज़ा करें',
      deleteConfirm: 'क्या आप इस कार्यक्रम को हटाना चाहते हैं?'
    },
    en: {
      title: 'Events Management',
      totalEvents: 'Total Events',
      addEvent: 'Add New Event',
      search: 'Search...',
      filter: 'Filter',
      all: 'All',
      upcoming: 'Upcoming',
      ongoing: 'Ongoing',
      completed: 'Completed',
      cancelled: 'Cancelled',
      edit: 'Edit',
      delete: 'Delete',
      view: 'View',
      previous: 'Previous',
      next: 'Next',
      noData: 'No events found',
      showing: 'Showing',
      to: 'to',
      of: 'of',
      results: 'results',
      export: 'Export',
      refresh: 'Refresh',
      deleteConfirm: 'Are you sure you want to delete this event?'
    }
  };

  const t = (key) => translations[language][key] || key;

  const getStatusColor = (status) => {
    const colors = {
      upcoming: 'bg-blue-50 text-blue-700 border-blue-200',
      ongoing: 'bg-green-50 text-green-700 border-green-200',
      completed: 'bg-gray-50 text-gray-700 border-gray-200',
      cancelled: 'bg-red-50 text-red-700 border-red-200',
    };
    return colors[status] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const getStatusIcon = (status) => {
    const icons = {
      upcoming: <ClockIcon className="w-4 h-4" />,
      ongoing: <CheckCircleIcon className="w-4 h-4" />,
      completed: <CheckCircleIcon className="w-4 h-4" />,
      cancelled: <XCircleIcon className="w-4 h-4" />,
    };
    return icons[status] || <ClockIcon className="w-4 h-4" />;
  };

  const getStatusLabel = (status) => {
    const labels = {
      upcoming: t('upcoming'),
      ongoing: t('ongoing'),
      completed: t('completed'),
      cancelled: t('cancelled'),
    };
    return labels[status] || status;
  };

  // Filter and search
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const handleAddEvent = () => {
    setEditingEvent(null);
    setIsFormOpen(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setIsFormOpen(true);
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm(t('deleteConfirm'))) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  const handleFormSubmit = (formData) => {
    if (editingEvent) {
      // Edit existing event
      setEvents(events.map(e => 
        e.id === editingEvent.id ? { ...formData, id: e.id } : e
      ));
    } else {
      // Add new event
      const newEvent = {
        ...formData,
        id: Date.now()
      };
      setEvents([...events, newEvent]);
    }
    setIsFormOpen(false);
    setEditingEvent(null);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingEvent(null);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'hi' ? 'en' : 'hi');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{t('title')}</h1>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
            <span>{t('totalEvents')}:</span>
            <span className="font-semibold text-red-600">{events.length}</span>
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
          <button
            onClick={handleAddEvent}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <PlusIcon className="w-5 h-5" />
            <span>{t('addEvent')}</span>
          </button>
        </div>
      </div>

      {/* Search and Filter */}
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
            <option value="upcoming">{t('upcoming')}</option>
            <option value="ongoing">{t('ongoing')}</option>
            <option value="completed">{t('completed')}</option>
            <option value="cancelled">{t('cancelled')}</option>
          </select>
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <ArrowPathIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <DocumentArrowDownIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <div className="flex flex-col items-center gap-2">
              <CalendarIcon className="w-16 h-16 text-gray-300" />
              <p className="text-gray-500">{t('noData')}</p>
            </div>
          </div>
        ) : (
          currentItems.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-r from-red-100 to-rose-100">
                {event.image ? (
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <PhotoIcon className="w-16 h-16 text-gray-400" />
                  </div>
                )}
                {/* Status Badge on Image */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 inline-flex items-center gap-1.5 text-xs font-semibold rounded-full border ${getStatusColor(event.status)} bg-white/90 backdrop-blur-sm`}>
                    {getStatusIcon(event.status)}
                    {getStatusLabel(event.status)}
                  </span>
                </div>
                {/* Date Badge */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <ClockIcon className="w-4 h-4 text-red-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPinIcon className="w-4 h-4 text-red-500" />
                    <span className="line-clamp-1">{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <UserIcon className="w-4 h-4 text-red-500" />
                    <span>{event.organizer}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => handleEditEvent(event)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <PencilIcon className="w-4 h-4" />
                    {t('edit')}
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <TrashIcon className="w-4 h-4" />
                    {t('delete')}
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                    <EyeIcon className="w-4 h-4" />
                    {t('view')}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {filteredEvents.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl shadow-lg px-6 py-4">
          <div className="text-sm text-gray-600">
            {t('showing')} {indexOfFirstItem + 1} {t('to')} {Math.min(indexOfLastItem, filteredEvents.length)} {t('of')} {filteredEvents.length} {t('results')}
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

      {/* Event Form Modal */}
      <EventForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        event={editingEvent}
        language={language}
      />
    </div>
  );
};

export default Events;
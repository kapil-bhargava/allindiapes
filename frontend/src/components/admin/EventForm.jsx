import React, { useState, useEffect } from 'react';
import {
    XMarkIcon,
    PhotoIcon,
    CalendarIcon,
    ClockIcon,
    MapPinIcon,
    UserIcon,
    DocumentTextIcon,
    TagIcon
} from '@heroicons/react/24/outline';

const EventForm = ({
    isOpen,
    onClose,
    onSubmit,
    event = null,
    language = 'hi'
}) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        time: '',
        venue: '',
        organizer: '',
        status: 'upcoming',
        image: ''
    });
    const [imagePreview, setImagePreview] = useState('');

    const translations = {
        hi: {
            addEvent: 'नया कार्यक्रम जोड़ें',
            editEvent: 'कार्यक्रम संपादित करें',
            title: 'शीर्षक',
            description: 'विवरण',
            date: 'तिथि',
            time: 'समय',
            venue: 'स्थान',
            organizer: 'आयोजक',
            status: 'स्थिति',
            image: 'छवि',
            imageUrl: 'छवि URL',
            imagePreview: 'छवि पूर्वावलोकन',
            uploadImage: 'छवि URL डालें',
            save: 'सहेजें',
            cancel: 'रद्द करें',
            select: 'चुनें...',
            upcoming: 'आगामी',
            ongoing: 'चल रहा है',
            completed: 'समाप्त',
            cancelled: 'रद्द',
            enterTitle: 'कार्यक्रम शीर्षक दर्ज करें',
            enterDescription: 'कार्यक्रम विवरण दर्ज करें',
            enterVenue: 'स्थान दर्ज करें',
            enterOrganizer: 'आयोजक का नाम दर्ज करें',
        },
        en: {
            addEvent: 'Add New Event',
            editEvent: 'Edit Event',
            title: 'Title',
            description: 'Description',
            date: 'Date',
            time: 'Time',
            venue: 'Venue',
            organizer: 'Organizer',
            status: 'Status',
            image: 'Image',
            imageUrl: 'Image URL',
            imagePreview: 'Image Preview',
            uploadImage: 'Enter Image URL',
            save: 'Save',
            cancel: 'Cancel',
            select: 'Select...',
            upcoming: 'Upcoming',
            ongoing: 'Ongoing',
            completed: 'Completed',
            cancelled: 'Cancelled',
            enterTitle: 'Enter event title',
            enterDescription: 'Enter event description',
            enterVenue: 'Enter venue',
            enterOrganizer: 'Enter organizer name',
        }
    };

    const t = (key) => {
        return translations[language]?.[key] || translations['hi'][key] || key;
    };

    useEffect(() => {
        if (event) {
            setFormData({
                title: event.title || '',
                description: event.description || '',
                date: event.date || '',
                time: event.time || '',
                venue: event.venue || '',
                organizer: event.organizer || '',
                status: event.status || 'upcoming',
                image: event.image || ''
            });
            setImagePreview(event.image || '');
        } else {
            setFormData({
                title: '',
                description: '',
                date: '',
                time: '',
                venue: '',
                organizer: '',
                status: 'upcoming',
                image: ''
            });
            setImagePreview('');
        }
    }, [event]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'image') {
            setImagePreview(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop - Black Transparent Background */}
            <div
                className="fixed inset-0 z-40 backdrop-blur-sm bg-black/40"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-red-600 to-rose-600 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
                            <h2 className="text-xl font-bold">
                                {event ? t('editEvent') : t('addEvent')}
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            {/* Image Section */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {t('image')}
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <div className="relative">
                                            <PhotoIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                name="image"
                                                value={formData.image}
                                                onChange={handleChange}
                                                placeholder={t('imageUrl')}
                                                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">{t('uploadImage')}</p>
                                    </div>
                                    <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden border-2 border-dashed border-gray-300">
                                        {imagePreview ? (
                                            <img
                                                src={imagePreview}
                                                alt={t('imagePreview')}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <div className="text-center">
                                                    <PhotoIcon className="w-8 h-8 mx-auto mb-1" />
                                                    <span className="text-xs">{t('imagePreview')}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Title - Full Width */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('title')} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <TagIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            placeholder={t('enterTitle')}
                                            required
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Description - Full Width */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('description')} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <DocumentTextIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            placeholder={t('enterDescription')}
                                            required
                                            rows="3"
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Date */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('date')} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Time */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('time')} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Venue - Full Width */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('venue')} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="venue"
                                            value={formData.venue}
                                            onChange={handleChange}
                                            placeholder={t('enterVenue')}
                                            required
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Organizer */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('organizer')} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="organizer"
                                            value={formData.organizer}
                                            onChange={handleChange}
                                            placeholder={t('enterOrganizer')}
                                            required
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Status */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('status')} <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                                    >
                                        <option value="upcoming">{t('upcoming')}</option>
                                        <option value="ongoing">{t('ongoing')}</option>
                                        <option value="completed">{t('completed')}</option>
                                        <option value="cancelled">{t('cancelled')}</option>
                                    </select>
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="w-full sm:w-auto px-6 py-2.5 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                                >
                                    {t('cancel')}
                                </button>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
                                >
                                    {t('save')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventForm;
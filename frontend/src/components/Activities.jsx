import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, Eye, Heart, Share2, X, ZoomIn, 
  ArrowLeft, TrendingUp, Clock, MessageCircle, 
  Download, ChevronLeft, ChevronRight
} from "lucide-react";
import activitiesData from "../data/activitiesData";

const Activities = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [likedActivities, setLikedActivities] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get all images from activities for gallery navigation
  const allImages = activitiesData.map(item => item.image);

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikedActivities(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleShare = async (title, e) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this activity: ${title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const openModal = (image, index, activity) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedActivity(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % allImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(allImages[nextIndex]);
    setSelectedActivity(activitiesData[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(allImages[prevIndex]);
    setSelectedActivity(activitiesData[prevIndex]);
  };

  // Handle keyboard navigation
  useState(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 transition mb-4"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">वापस जाएं</span>
          </button>
          
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full mb-3">
            <TrendingUp size={14} />
            <span className="text-xs font-medium">हमारी गतिविधियाँ</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            समाचार एवं गतिविधियाँ
          </h1>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            हमारे संगठन की नवीनतम गतिविधियों, समाचारों और उपलब्धियों के बारे में जानें
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-red-600">{activitiesData.length}+</div>
            <div className="text-xs text-gray-500">कुल गतिविधियाँ</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-red-600">25+</div>
            <div className="text-xs text-gray-500">राज्यों में</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-red-600">500+</div>
            <div className="text-xs text-gray-500">सदस्यों ने भाग लिया</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-red-600">50+</div>
            <div className="text-xs text-gray-500">कार्यक्रम आयोजित</div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activitiesData.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(item.image, index, item)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                
                {/* Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn size={24} className="text-white" />
                  </div>
                </div>
                
                {/* Date Badge */}
                {item.date && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1.5 rounded-lg shadow-md">
                    <div className="text-sm font-bold">{new Date(item.date).getDate()}</div>
                    <div className="text-[10px] opacity-90">
                      {new Date(item.date).toLocaleString('hi-IN', { month: 'short' })}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category */}
                {item.category && (
                  <div className="mb-2">
                    <span className="inline-block bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                )}
                
                {/* Title */}
                <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-2 line-clamp-2 group-hover:text-red-600 transition">
                  {item.title}
                </h3>
                
                {/* Description */}
                {item.description && (
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                )}
                
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  {item.date && (
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{new Date(item.date).toLocaleDateString('hi-IN')}</span>
                    </div>
                  )}
                  {item.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{item.readTime} मिनट पढ़ें</span>
                    </div>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => handleLike(item.id, e)}
                      className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition"
                    >
                      <Heart 
                        size={16} 
                        className={likedActivities[item.id] ? "fill-red-500 text-red-500" : ""}
                      />
                      <span className="text-xs">{item.likes || 0}</span>
                    </button>
                    <button
                      onClick={(e) => handleShare(item.title, e)}
                      className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition"
                    >
                      <Share2 size={14} />
                      <span className="text-xs">शेयर</span>
                    </button>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Eye size={14} />
                      <span className="text-xs">{item.views || 0}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(item.image, index, item);
                    }}
                    className="text-red-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    पढ़ें
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal for Image View */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full mx-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition text-2xl"
            >
              <X size={28} />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
            >
              <ChevronLeft size={32} className="text-white" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
            >
              <ChevronRight size={32} className="text-white" />
            </button>
            
            {/* Image */}
            <img
              src={selectedImage}
              alt={selectedActivity?.title}
              className="w-full max-h-[75vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Activity Details in Modal */}
            {selectedActivity && (
              <div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                  {selectedActivity.title}
                </h3>
                <div className="flex items-center gap-4 text-gray-300 text-sm mb-3">
                  {selectedActivity.date && (
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(selectedActivity.date).toLocaleDateString('hi-IN')}</span>
                    </div>
                  )}
                  {selectedActivity.location && (
                    <div className="flex items-center gap-1">
                      <span>📍</span>
                      <span>{selectedActivity.location}</span>
                    </div>
                  )}
                </div>
                {selectedActivity.description && (
                  <p className="text-gray-200 text-sm max-w-2xl line-clamp-3">
                    {selectedActivity.description}
                  </p>
                )}
                <button
                  onClick={() => navigate(`/activities/${selectedActivity.id}`)}
                  className="mt-3 inline-flex items-center gap-1 text-red-400 hover:text-red-300 transition text-sm"
                >
                  पूरा विवरण देखें <ArrowLeft size={14} className="rotate-180" />
                </button>
              </div>
            )}
            
            {/* Image Counter */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
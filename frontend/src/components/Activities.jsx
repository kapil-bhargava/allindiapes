import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, ZoomIn, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import activitiesData from "../data/activitiesData";

// Activity data - only the information from the image


const Activities = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = activitiesData.map(item => item.image);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-600 transition mb-4"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">वापस जाएं</span>
          </button>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            गतिविधियाँ
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Activities Grid - Using only data from image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activitiesData.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              onClick={() => openModal(item.image, index, item)}
            >
              {/* Image */}
              <div className="relative h-56 bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <ZoomIn size={24} className="text-white" />
                </div>
              </div>

              {/* Title - Only the information from image */}
              <div className="p-5">
                <h3 className="font-bold text-gray-800 text-base md:text-lg leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image View */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-orange-400 transition text-2xl"
            >
              <X size={28} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
            >
              <ChevronRight size={28} className="text-white" />
            </button>
            
            <img
              src={selectedImage}
              alt={selectedActivity?.title}
              className="w-full max-h-[70vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {selectedActivity && (
              <div 
                className="mt-4 bg-gray-900 rounded-xl p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-white font-bold text-lg">
                  {selectedActivity.title}
                </h3>
              </div>
            )}
            
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
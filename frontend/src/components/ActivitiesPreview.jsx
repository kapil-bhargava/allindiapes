import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Eye, ArrowRight, TrendingUp } from "lucide-react";
import activitiesData from "../data/activitiesData";

// Skeleton Loader Component
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
    <div className="w-full h-56 bg-gray-200"></div>
    <div className="p-5">
      <div className="h-4 bg-gray-200 rounded w-20 mb-3"></div>
      <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
        <div className="h-3 bg-gray-200 rounded w-24"></div>
        <div className="h-4 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  </div>
);

const ActivitiesPreview = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [previewData, setPreviewData] = useState([]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setPreviewData(activitiesData.slice(0, 3));
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full mb-3">
            <TrendingUp size={14} />
            <span className="text-xs font-medium">ताज़ा अपडेट</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            नवीनतम गतिविधियाँ
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            हमारे संगठन की नवीनतम गतिविधियों और उपलब्धियों के बारे में जानें
          </p>
        </div>

        {/* Activities Grid with Loading State */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {loading ? (
            // Show skeletons while loading
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            previewData.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(`/activities/${item.id}`)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                  {item.date && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 rounded-lg shadow-md">
                      <div className="text-xs font-bold">{new Date(item.date).getDate()}</div>
                      <div className="text-[10px] opacity-90">
                        {new Date(item.date).toLocaleString('hi-IN', { month: 'short' })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  {item.category && (
                    <div className="mb-2">
                      <span className="inline-block bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-2 line-clamp-2 group-hover:text-red-600 transition">
                    {item.title}
                  </h3>
                  
                  {item.description && (
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar size={12} />
                      <span>{item.date ? new Date(item.date).toLocaleDateString('hi-IN') : "हाल ही में"}</span>
                    </div>
                    <button className="text-red-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      पढ़ें <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* View All Button */}
        {!loading && (
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/activities")}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>सभी गतिविधियाँ देखें</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivitiesPreview;
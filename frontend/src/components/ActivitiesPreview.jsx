import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Eye } from "lucide-react";
import activitiesData from "../data/activitiesData";

const ActivitiesPreview = () => {
  const navigate = useNavigate();

  // Get only first 4 activities
  const previewActivities = activitiesData.slice(0, 4);

  return (
    <div className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            हाल की गतिविधियाँ
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            हमारी नवीनतम गतिविधियों और आयोजनों के बारे में जानें
          </p>
        </div>

        {/* Activities Grid - Only First 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewActivities.map((activity) => (
            <div
              key={activity.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            // onClick={() => navigate(`/activities/${activity.id}`)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Category */}
                {/* {activity.category && (
                  <span className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full mb-2">
                    {activity.category}
                  </span>
                )}
                 */}
                {/* Title */}
                <h3 className="font-bold text-gray-800 text-sm md:text-base leading-snug line-clamp-2 mb-2">
                  {activity.title}
                </h3>

                {/* Location (if available) */}
                {/* {activity.location && (
                  <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
                    <MapPin size={12} />
                    <span>{activity.location}</span>
                  </div>
                )}
                 */}
                {/* Read More Link */}
                {/* <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/activities/${activity.id}`);
                    }}
                    className="text-orange-600 text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    और जानें
                    <ArrowRight size={12} />
                  </button>
                  
                  {activity.views && (
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <Eye size={12} />
                      <span>{activity.views}</span>
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <div className="text-center mt-12">
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 border-2 border-red-500 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>  सभी गतिविधियाँ देखें</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPreview;
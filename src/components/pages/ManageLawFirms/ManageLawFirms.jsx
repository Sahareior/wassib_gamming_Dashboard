import React from "react";
import Headers from "../../Reusable/Headers.jsx";
import { FaPlus, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

// Demo Data
const firmsData = [
    {
        id: 1,
        name: "Freshfields",
        tagline: "Elite International Firm",
        location: "London, Global",
        members: "2800+",
        tags: ["Antitrust", "Tax", "M&A", "Corporate"],
        iconColor: "bg-blue-100 text-blue-600",
    },
    {
        id: 2,
        name: "Broadfields Law",
        tagline: "Excellence in Corporate Law",
        location: "London, UK",
        members: "250+",
        tags: ["Corporate Law", "M&A", "Tax"],
        iconColor: "bg-green-100 text-green-600",
    },
    {
        id: 3,
        name: "Lexbridge Associates",
        tagline: "Trusted Legal Experts",
        location: "New York, USA",
        members: "120+",
        tags: ["Litigation", "Tax", "Real Estate"],
        iconColor: "bg-yellow-100 text-yellow-600",
    },
    {
        id: 4,
        name: "Silverstone Legal",
        tagline: "Leading Law Solutions",
        location: "Sydney, AU",
        members: "500+",
        tags: ["Finance", "M&A", "Corporate"],
        iconColor: "bg-purple-100 text-purple-600",
    },
];

const LawFirmCard = ({ firm }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col gap-4 relative hover:-translate-y-1 overflow-hidden">
            {/* Featured Tag */}
            <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
        Featured
      </span>

            {/* Icon */}
            <div
                className={`w-14 h-14 ${firm.iconColor} mx-auto flex items-center justify-center rounded-xl mt-5 shadow-inner`}
            >
                <FaMapMarkerAlt size={20} />
            </div>

            {/* Firm Info */}
            <div className="flex flex-col gap-3 text-center px-5 pb-5">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">{firm.name}</h3>
                    <p className="text-gray-500 text-sm">{firm.tagline}</p>
                </div>

                {/* Location and Members */}
                <div className="flex items-center justify-between text-gray-600 text-sm border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt size={14} className="text-yellow-600" />
                        <span>{firm.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaUsers size={14} className="text-yellow-600" />
                        <span>{firm.members}</span>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {firm.tags.slice(0, 3).map((tag, i) => (
                        <span
                            key={i}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200"
                        >
              {tag}
            </span>
                    ))}
                    {firm.tags.length > 3 && (
                        <span className="text-xs text-gray-500">
              +{firm.tags.length - 3} more
            </span>
                    )}
                </div>

                {/* View Button */}
                <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
                    View Profile →
                </button>
            </div>
        </div>
    );
};

const ManageLawFirms = () => {
    return (
        <div className="w-full flex flex-col gap-8">
            {/* Header */}
            <div className="flex justify-between items-center">
                <Headers
                    title={"Manage Law Firm Profiles"}
                    subHeader={"Approve or manage all law firm profiles"}
                />
                <button
                    className="flex gap-2 items-center bg-yellow-400 hover:bg-yellow-500 py-3 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300 font-semibold text-gray-900 hover:scale-105"
                >
                    <FaPlus className="text-sm" />
                    Create New
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {firmsData.map((firm) => (
                    <LawFirmCard key={firm.id} firm={firm} />
                ))}
            </div>
        </div>
    );
};

export default ManageLawFirms;

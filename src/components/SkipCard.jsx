import React from "react";

const SkipCard = ({ skip, isSelected, onSelect }) => {
  const {
    size,
    price_before_vat,
    hire_period_days,
    area,
    postcode,
    allowed_on_road,
    supports_heavy_waste,
  } = skip;

  const imageSrc = "/assets/images/skip-placeholder.png";

  return (
    <div
      onClick={() => onSelect(skip)}
      className={`transition-all duration-300 transform rounded-2xl p-4 cursor-pointer w-full max-w-[400px] flex flex-col justify-between border ${
        isSelected
          ? "bg-[#fef3e3] border-orange-400 ring-2 ring-orange-300 scale-[1.02]"
          : "bg-white border-gray-200 hover:shadow-xl hover:-translate-y-1 hover:ring-1 hover:ring-sky-200"
      }`}
    >
      {/* Image section */}
      <div className="relative">
        <img
          src={imageSrc}
          alt={`${size} Yard Skip`}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <span className="absolute top-2 right-2 bg-sky-600 text-white text-sm px-3 py-1 rounded-full shadow">
          {size} Yards
        </span>
      </div>

      {/* Info */}
      <h2 className="text-xl font-bold mb-2 text-gray-800">{size} Yard Skip</h2>
      <p className="text-gray-600 mb-1">📅 Hire Period: {hire_period_days} days</p>
      <p className="text-gray-600 mb-2">📍 Location: {area}, {postcode}</p>

      {/* Tags */}
      <div className="flex gap-4 flex-wrap mb-3">
        <div className={`flex items-center gap-1 text-sm ${allowed_on_road ? "text-green-600" : "text-red-500"}`}>
          {allowed_on_road ? "✅" : "❌"} {allowed_on_road ? "Allowed on Road" : "Not Allowed"}
        </div>
        <div className={`flex items-center gap-1 text-sm ${supports_heavy_waste ? "text-green-600" : "text-red-500"}`}>
          {supports_heavy_waste ? "🪨" : "❌"} {supports_heavy_waste ? "Heavy Waste OK" : "No Heavy Waste"}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-2">
        <p className="text-orange-700 font-bold text-xl">£{price_before_vat}</p>
        <button
          className={`transition-all duration-300 py-3 rounded-lg font-semibold shadow-sm ${
            isSelected
              ? "bg-gradient-to-r from-orange-300 to-orange-500 text-white hover:from-orange-400 hover:to-orange-600 hover:scale-105"
              : "bg-gradient-to-r from-sky-200 to-sky-400 text-sky-900 hover:from-sky-300 hover:to-sky-500 hover:scale-105"
          }`}
        >
          {isSelected ? "Selected" : "Select This Skip →"}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;

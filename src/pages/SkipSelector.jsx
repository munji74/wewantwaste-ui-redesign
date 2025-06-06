import React, { useEffect, useState } from "react";
import axios from "axios";
import ProgressSteps from "../components/ProgressSteps";
import SkipGrid from "../components/SkipGrid";

const SkipSelector = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const res = await axios.get(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=LE10%201SH&area=Hinckley"
        );
        setSkips(res.data);
      } catch (err) {
        console.error("Error fetching skips:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSelect = (skip) => {
    if (selectedSkipId === skip.id) {
      setSelectedSkipId(null);
      setSelectedSkip(null);
    } else {
      setSelectedSkipId(skip.id);
      setSelectedSkip(skip);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7ec] via-[#eafcfc] to-[#d1f4ff] text-gray-800">
      <ProgressSteps currentStep={1} />

      <div className="px-4 py-10">
        <h1 className="text-3xl font-extrabold text-center mb-2">Choose Your Skip Size</h1>
        <p className="text-center text-gray-500 mb-10">Select the skip size that best suits your needs</p>

        {loading ? (
          <p className="text-center">Loading skips...</p>
        ) : (
          <SkipGrid
            skips={skips}
            selectedSkipId={selectedSkipId}
            onSkipClick={handleSelect}
          />
        )}
      </div>

      {selectedSkip && (
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 text-white px-4 py-3 flex justify-between items-center text-sm sm:text-base z-50 shadow-inner">
          <div>
            <span className="font-semibold">{selectedSkip.size} Yard Skip</span>
            <span className="mx-2 text-orange-400 font-bold text-lg">£{selectedSkip.price_before_vat}</span>
            <span className="italic">{selectedSkip.hire_period_days} day hire</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 transition duration-200 text-white px-5 py-1.5 rounded-md">
            Continue →
          </button>
        </div>
      )}
    </div>
  );
};

export default SkipSelector;

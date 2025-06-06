import React from "react";
import SkipCard from "./SkipCard";

const SkipGrid = ({ skips, selectedSkipId, onSkipClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 items-stretch">

      {skips.map((skip, index) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          isSelected={skip.id === selectedSkipId}
          onSelect={onSkipClick}
          index={index}
        />
      ))}
    </div>
  );
};

export default SkipGrid;

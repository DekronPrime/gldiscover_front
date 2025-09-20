import React from "react";

interface DayWeekToggleProps {
  value: "day" | "week";
  onChange: (value: "day" | "week") => void;
}

const DayWeekToggle: React.FC<DayWeekToggleProps> = ({ value, onChange }) => {
  return (
    <div className="relative w-1/5 inline-flex items-center border-2 border-light rounded-lg font-exo2Bold font-bold text-3xl">
      <div
        className={`
          absolute top-0 left-0 h-full w-1/2 bg-light rounded-md
          transition-transform duration-300 ease-in-out
        `}
        style={{
          transform: value === "day" ? "translateX(0%)" : "translateX(100%)",
        }}
      />
      <button
        className={`relative z-10 w-1/2 px-4 pt-2 pb-3 rounded-md transition-colors duration-300 ${
          value === "day" ? "text-black" : "text-light"
        }`}
        onClick={() => onChange("day")}
      >
        Day
      </button>
      <button
        className={`relative z-10 w-1/2 px-4 pt-2 pb-3 rounded-md transition-colors duration-300 ${
          value === "week" ? "text-black" : "text-light"
        }`}
        onClick={() => onChange("week")}
      >
        Week
      </button>
    </div>
  );
};

export default DayWeekToggle;

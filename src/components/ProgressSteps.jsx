import React from "react";
import { FaTrash, FaTruck, FaShieldAlt, FaCalendarAlt, FaCreditCard } from "react-icons/fa";

const steps = [
  { label: "Waste Type", icon: <FaTrash /> },
  { label: "Select Skip", icon: <FaTruck /> },
  { label: "Permit Check", icon: <FaShieldAlt /> },
  { label: "Choose Date", icon: <FaCalendarAlt /> },
  { label: "Payment", icon: <FaCreditCard /> },
];

const ProgressSteps = ({ currentStep = 1 }) => {
  return (
    <div className="w-full flex items-center justify-center gap-4 px-4 py-4 bg-zinc-900 text-white overflow-x-auto">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`flex flex-col items-center text-sm ${
            idx === currentStep ? "text-blue-400 font-semibold" : "text-gray-400"
          }`}
        >
          <div className={`text-2xl mb-1`}>{step.icon}</div>
          {step.label}
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;

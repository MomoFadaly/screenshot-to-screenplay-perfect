
import React from "react";

interface StatCardProps {
  number: string;
  description: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ number, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 text-center flex-1">
      <div className="text-captionBlue text-4xl md:text-5xl font-bold mb-2">
        {number}
      </div>
      <div className="text-gray-800 text-sm md:text-base">
        {description}
      </div>
    </div>
  );
};

export default StatCard;

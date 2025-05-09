
import React from "react";
interface StatCardProps {
  number: string;
  description: React.ReactNode;
}
const StatCard: React.FC<StatCardProps> = ({
  number,
  description
}) => {
  return <div className="bg-white rounded-xl p-4 md:p-6 text-center flex-1">
      <div className="text-captionBlue text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
        {number}
      </div>
      <div className="text-gray-800 text-xs md:text-sm lg:text-base">
        {description}
      </div>
    </div>;
};
export default StatCard;

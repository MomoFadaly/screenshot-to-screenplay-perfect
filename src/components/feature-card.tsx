
import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
    </div>
  );
};

export default FeatureCard;

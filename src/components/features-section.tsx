
import React from "react";
import FeatureCard from "./feature-card";
import { Zap, ShieldCheck, Globe } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Zap size={40} className="text-captionYellow" />} 
          title="Lightning Fast" 
        />
        <FeatureCard 
          icon={<ShieldCheck size={40} className="text-captionBlue" />} 
          title="99% Accuracy" 
        />
        <FeatureCard 
          icon={<Globe size={40} className="text-captionBlue" />} 
          title="Multi-language" 
        />
      </div>
    </section>
  );
};

export default FeaturesSection;


import React from "react";
import FeatureCard from "./feature-card";
import { Zap, ShieldCheck, Globe } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-8 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
        Key Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <FeatureCard 
          icon={<Zap size={32} className="md:size-40 text-captionYellow" />} 
          title="Lightning Fast" 
        />
        <FeatureCard 
          icon={<ShieldCheck size={32} className="md:size-40 text-captionBlue" />} 
          title="99% Accuracy" 
        />
        <FeatureCard 
          icon={<Globe size={32} className="md:size-40 text-captionBlue" />} 
          title="Multi-language" 
        />
      </div>
    </section>
  );
};

export default FeaturesSection;


import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TranscribeForm from "@/components/transcribe-form";
import StatsSection from "@/components/stats-section";
import FeaturesSection from "@/components/features-section";

const Index: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#0842BF] via-[#1054D9] to-[#126EF5]">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4">
          <Hero />
          <TranscribeForm />
          <StatsSection />
        </div>
      </div>
      <FeaturesSection />
    </div>
  );
};

export default Index;

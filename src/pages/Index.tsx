
import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TranscribeForm from "@/components/transcribe-form";
import StatsSection from "@/components/stats-section";
import FeaturesSection from "@/components/features-section";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-captionBlue via-captionBlue-light to-captionBlue-light">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        <main>
          <Hero />
          <TranscribeForm />
          <StatsSection />
          <FeaturesSection />
        </main>
      </div>
    </div>
  );
};

export default Index;

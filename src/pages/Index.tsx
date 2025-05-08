
import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TranscribeForm from "@/components/transcribe-form";
import StatsSection from "@/components/stats-section";
import FeaturesSection from "@/components/features-section";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-captionBlue to-captionBlue-light">
      <Navbar />
      <main>
        <Hero />
        <TranscribeForm />
        <StatsSection />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Index;

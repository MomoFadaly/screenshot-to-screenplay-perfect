
import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TranscribeForm from "@/components/transcribe-form";
import StatsSection from "@/components/stats-section";
import FeaturesSection from "@/components/features-section";

const Index: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Listen to mobile menu state changes
  useEffect(() => {
    const handleMenuChange = (e: CustomEvent) => {
      setMenuOpen(e.detail.open);
    };
    
    window.addEventListener('mobile-menu-toggle', handleMenuChange as EventListener);
    return () => {
      window.removeEventListener('mobile-menu-toggle', handleMenuChange as EventListener);
    };
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-l from-[#1032A8] to-[#1A58D3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-[112px]">
          <Navbar />
          {!menuOpen && (
            <>
              <Hero />
              <TranscribeForm />
              <StatsSection />
            </>
          )}
        </div>
      </div>
      {!menuOpen && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturesSection />
        </div>
      )}
    </div>
  );
};

export default Index;


import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero: React.FC = () => {
  return <section className="pt-8 pb-24 flex flex-col md:flex-row items-center relative">
      <div className="w-full md:w-3/5">
        <h1 className="text-white text-5xl font-bold mb-6 md:text-7xl">
          Transcribe Any Video, Instantly
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8">
          Paste your video link and get accurate captions effortlessly
        </p>
        
      </div>
      <div className="w-full md:w-2/5 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img 
          alt="Caption Genie Mascot" 
          src="/lovable-uploads/c20bf402-ee5d-401f-99a7-a319b2e725bf.png" 
          className="w-80 md:w-96 object-contain relative z-10 -mb-16" 
        />
      </div>
    </section>;
};
export default Hero;

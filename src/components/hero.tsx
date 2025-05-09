
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-8 pb-24 px-4 md:px-6 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-3/5">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
          Transcribe Any Video, Instantly
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8">
          Paste your video link and get accurate captions effortlessly
        </p>
        <Button className="bg-white text-captionBlue hover:bg-gray-100 text-lg py-6 px-10 rounded-md font-semibold">
          Start Transcribing
        </Button>
      </div>
      <div className="w-full md:w-2/5 mt-10 md:mt-0 flex justify-center">
        <img 
          src="/lovable-uploads/adc9a263-7dac-4416-be25-512e9c8e49ae.png" 
          alt="Caption Genie Mascot"
          className="w-72"
        />
      </div>
    </section>
  );
};

export default Hero;

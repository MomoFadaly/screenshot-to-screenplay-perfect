
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const TranscribeForm: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-captionBlue-light bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 mb-16 -mt-8">
      <div className="flex flex-col md:flex-row md:items-center relative">
        <Input 
          type="text" 
          placeholder="Paste your video link here" 
          className="flex-grow py-6 px-6 text-lg bg-white border-0 rounded-md h-[60px] shadow-sm md:pr-36"
        />
        <Button className="bg-captionBlue hover:bg-captionBlue-dark text-white font-semibold text-lg py-2 px-8 rounded-md h-[60px] flex items-center gap-2 whitespace-nowrap shadow-md md:absolute md:right-0 md:top-0">
          <ArrowRight size={20} className="order-last" />
          <span>Transcribe Now</span>
        </Button>
      </div>
    </div>
  );
};

export default TranscribeForm;

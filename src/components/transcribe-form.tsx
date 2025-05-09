
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const TranscribeForm: React.FC = () => {
  return <div className="w-full bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 mb-16 bg-[#247bfd] relative z-0">
      <div className="flex flex-col md:flex-row md:items-center relative">
        <Input type="text" placeholder="Paste your video link here" className="flex-grow py-6 px-6 text-lg bg-white border-0 rounded-md h-[60px] shadow-sm md:pr-36" />
        <Button 
          className="bg-gradient-to-r from-[#247BFD] to-[#1e69d9] hover:from-[#1e69d9] hover:to-[#1054D9] text-white font-semibold text-lg py-2 px-8 rounded-md h-[60px] flex items-center gap-3 whitespace-nowrap shadow-md mt-3 md:mt-0 md:absolute md:right-0 md:top-0 md:w-[180px]"
        >
          <ArrowRight size={24} className="order-first" />
          <span>Transcribe Now</span>
        </Button>
      </div>
    </div>;
};

export default TranscribeForm;

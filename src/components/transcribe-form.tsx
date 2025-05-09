
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
const TranscribeForm: React.FC = () => {
  return <div className="w-full bg-opacity-30 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 mb-8 md:mb-16 bg-[#247bfd] relative z-0">
      <div className="flex flex-col md:flex-row md:items-center relative">
        <Input 
          type="text" 
          placeholder="Paste your video link here" 
          className="flex-grow py-4 md:py-6 px-4 md:px-6 text-base md:text-lg bg-white border-0 rounded-md h-[50px] md:h-[60px] shadow-sm md:pr-36" 
        />
        <Button 
          className="bg-gradient-to-r from-[#247BFD] to-[#0c34af] hover:from-[#1e69d9] hover:to-[#0a2d99] text-white font-semibold text-base md:text-lg py-2 px-6 md:px-8 rounded-md h-[50px] md:h-[60px] flex items-center gap-2 md:gap-3 whitespace-nowrap shadow-md mt-3 md:mt-0 md:absolute md:right-0 md:top-0 md:w-[240px] md:w-[280px] w-full"
        >
          <ArrowRight size={20} className="md:size-24 order-first" />
          <span>Transcribe Now</span>
        </Button>
      </div>
    </div>;
};
export default TranscribeForm;

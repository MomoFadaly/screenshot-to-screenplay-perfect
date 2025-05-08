
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const TranscribeForm: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-captionBlue-light bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 mb-16">
      <div className="flex flex-col md:flex-row gap-4">
        <Input 
          type="text" 
          placeholder="Paste your video link here" 
          className="flex-grow py-6 px-6 text-lg bg-white border-0"
        />
        <Button className="bg-captionBlue hover:bg-captionBlue-dark text-white text-lg py-6 md:py-0 px-8 flex items-center gap-2">
          <span>Transcribe Now</span>
          <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default TranscribeForm;

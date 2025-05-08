
import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="py-4 px-6 md:px-16 flex justify-between items-center">
      <Logo />
      
      <nav className="hidden md:flex gap-10">
        <a href="#about" className="text-white text-lg font-medium hover:text-opacity-80 transition-colors">
          About
        </a>
        <a href="#pricing" className="text-white text-lg font-medium hover:text-opacity-80 transition-colors">
          Pricing
        </a>
        <a href="#support" className="text-white text-lg font-medium hover:text-opacity-80 transition-colors">
          Support
        </a>
      </nav>
      
      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="h-6 w-6" />
      </Button>
    </header>
  );
};

export default Navbar;

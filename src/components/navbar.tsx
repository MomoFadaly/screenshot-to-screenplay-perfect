
import React, { useState } from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 flex justify-between items-center relative">
      <Logo />
      
      {/* Desktop Navigation */}
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
      
      {/* Mobile Menu Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden text-white z-20" 
        onClick={toggleMenu}
      >
        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Navigation */}
      {menuOpen && isMobile && (
        <div className="fixed inset-0 bg-gradient-to-l from-[#1032A8] to-[#1A58D3] z-10 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            <a 
              href="#about" 
              className="text-white text-xl font-medium hover:text-opacity-80 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#pricing" 
              className="text-white text-xl font-medium hover:text-opacity-80 transition-colors"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a 
              href="#support" 
              className="text-white text-xl font-medium hover:text-opacity-80 transition-colors"
              onClick={toggleMenu}
            >
              Support
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import React, { useState, useEffect } from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { Menu, X, UserPlus } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    const newState = !menuOpen;
    setMenuOpen(newState);
    
    // Dispatch an event to notify other components about menu state
    const event = new CustomEvent('mobile-menu-toggle', { 
      detail: { open: newState } 
    });
    window.dispatchEvent(event);
  };

  return (
    <header className="py-4 flex justify-between items-center relative">
      <Logo />
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5">
        <nav className="flex gap-10">
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
        
        {/* Sign up/Login Button */}
        <Button 
          className="bg-white text-captionBlue hover:bg-opacity-90 font-medium px-6 rounded-full shadow-md flex items-center gap-2 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <UserPlus className="h-4 w-4" />
          <span>Sign Up</span>
        </Button>
      </div>
      
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
            
            {/* Sign up/Login Button in mobile menu */}
            <Button 
              className="bg-white text-captionBlue hover:bg-opacity-90 font-medium px-6 py-2 rounded-full shadow-md flex items-center gap-2 mt-4"
              onClick={toggleMenu}
            >
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

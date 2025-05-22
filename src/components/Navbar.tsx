
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl md:text-3xl font-serif font-semibold text-anahata-brown">
          Anahata<span className="text-anahata-terracotta">Craft</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
            Home
          </a>
          <a href="#bracelets" className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
            Bracelets
          </a>
          <a href="#earrings" className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
            Earrings
          </a>
          <a href="#about" className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
            About
          </a>
          <a href="#contact" className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
            <Search size={20} />
          </button>
          <button className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
            <User size={20} />
          </button>
          <button className="relative text-anahata-brown hover:text-anahata-terracotta transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-anahata-terracotta text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-anahata-brown"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-md">
          <div className="container flex flex-col space-y-4">
            <a href="/" className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
              Home
            </a>
            <a href="#bracelets" className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
              Bracelets
            </a>
            <a href="#earrings" className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
              Earrings
            </a>
            <a href="#about" className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
              About
            </a>
            <a href="#contact" className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-4 pt-2">
              <button className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
                <Search size={20} />
              </button>
              <button className="text-anahata-brown hover:text-anahata-terracotta transition-colors">
                <User size={20} />
              </button>
              <button className="relative text-anahata-brown hover:text-anahata-terracotta transition-colors">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-anahata-terracotta text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

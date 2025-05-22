
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2391&auto=format&fit=crop"
          alt="Elegant jewelry on display" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 animate-fade-in">
            Handcrafted Jewelry For Your Soul
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover our collection of unique, ethically-made bracelets and earrings designed to reflect your inner beauty.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-anahata-terracotta hover:bg-anahata-brown text-white border-none px-8 py-6 text-lg">
              Shop Bracelets
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-anahata-brown px-8 py-6 text-lg">
              Shop Earrings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

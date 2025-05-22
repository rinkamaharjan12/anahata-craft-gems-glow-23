
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=2340&auto=format&fit=crop"
          alt="Elegant jewelry display" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      {/* Overlay Images Container */}
      <div className="absolute inset-0 z-1 flex items-center justify-center pointer-events-none">
        <div className="relative w-4/5 md:w-3/4 flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Bracelets Image */}
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1609245340409-cad2474ab1d5?q=80&w=1887&auto=format&fit=crop"
              alt="Beautiful bracelets collection" 
              className="w-full h-auto object-contain opacity-90 shadow-2xl rounded-lg"
            />
          </div>
          
          {/* Earrings Image */}
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1631541911232-aaf11d6e4f3a?q=80&w=1887&auto=format&fit=crop"
              alt="Beautiful earrings collection" 
              className="w-full h-auto object-contain opacity-90 shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 animate-fade-in text-anahata-gold">
            Handcrafted Jewelry For Your Soul
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover our collection of unique, ethically-made bracelets and earrings designed to reflect your inner beauty.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              className="bg-anahata-terracotta hover:bg-anahata-brown text-white border-none px-8 py-6 text-lg"
              asChild
            >
              <a href="#bracelets">Shop Bracelets</a>
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-anahata-brown px-8 py-6 text-lg"
              asChild
            >
              <a href="#earrings">Shop Earrings</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

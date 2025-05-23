
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/ce87eabb-262f-44b8-b7a9-e31cfdd61b7c.png" 
          alt="Elegant jewelry display with pearls and gold earrings" 
          className="w-full h-full object-cover object-center shadow-lg" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/40 p-10 rounded-xl shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* New jewelry collection image */}
            <div className="w-full md:w-1/2">
              <img 
                src="/lovable-uploads/06bfd6a3-de19-43ba-8cf4-e37510116733.png" 
                alt="Collection of gold and silver jewelry including necklaces, bracelets, earrings and rings" 
                className="rounded-lg shadow-md hover-scale"
              />
            </div>
            
            {/* Text content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-serif font-semibold mb-6 animate-fade-in text-black md:text-5xl drop-shadow-md">
                Handcrafted Jewelry For Your Soul
              </h1>
              <p 
                style={{
                  animationDelay: "0.2s"
                }} 
                className="text-lg mb-8 opacity-90 animate-fade-in text-black md:text-xl font-medium drop-shadow-md"
              >
                Discover our collection of unique, ethically-made jewelry designed to reflect your inner beauty. From dazzling necklaces to elegant bracelets and stunning earrings.
              </p>
              <div 
                style={{
                  animationDelay: "0.4s"
                }} 
                className="flex flex-wrap gap-4 animate-fade-in justify-center md:justify-start"
              >
                <Button size="lg" className="bg-anahata-terracotta hover:bg-anahata-brown text-white font-medium px-8 py-6 text-lg">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="bg-white/80 border-anahata-terracotta text-anahata-brown hover:bg-white px-8 py-6 text-lg">
                  Our Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

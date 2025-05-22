
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return <section className="relative h-screen flex items-center">
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
        <div className="max-w-xl backdrop-blur-sm bg-white/30 p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-serif font-semibold mb-6 animate-fade-in text-black md:text-6xl drop-shadow-md">
            Handcrafted Jewelry For Your Soul
          </h1>
          <p 
            style={{
              animationDelay: "0.2s"
            }} 
            className="text-xl mb-8 opacity-90 animate-fade-in text-black md:text-2xl font-medium drop-shadow-md"
          >
            Discover our collection of unique, ethically-made bracelets and earrings designed to reflect your inner beauty.
          </p>
          <div 
            style={{
              animationDelay: "0.4s"
            }} 
            className="flex flex-wrap gap-4 animate-fade-in"
          >
            <Button size="lg" className="bg-anahata-terracotta hover:bg-anahata-brown text-white font-medium px-8">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="bg-white/80 border-anahata-terracotta text-anahata-brown hover:bg-white px-8">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;

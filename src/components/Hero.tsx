
import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToShop = () => {
    navigate('/collections/all');
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with reduced opacity */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop" 
            alt="Beautiful collection of gold and silver jewelry with gemstones and pearls arranged as a frame" 
            className="w-full h-full object-cover object-center shadow-lg opacity-60" 
          />
          <div className="absolute inset-0 bg-white bg-opacity-40"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/50 p-10 rounded-xl shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* New jewelry collection image */}
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1630794892434-e8b6ba7fd630?q=80&w=1932&auto=format&fit=crop" 
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
                <Button 
                  size="lg" 
                  className="bg-anahata-terracotta hover:bg-anahata-brown text-white font-medium px-8 py-6 text-lg"
                  onClick={navigateToShop}
                >
                  Shop Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/80 border-anahata-terracotta text-anahata-brown hover:bg-white px-8 py-6 text-lg"
                  onClick={scrollToAbout}
                >
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

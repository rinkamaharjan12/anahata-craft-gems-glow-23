
import React from 'react';
const Hero = () => {
  return <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/ce87eabb-262f-44b8-b7a9-e31cfdd61b7c.png" alt="Elegant jewelry display with pearls and gold earrings" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      {/* Overlay Images Container */}
      <div className="absolute inset-0 z-1 flex items-center justify-center pointer-events-none">
        <div className="relative w-4/5 md:w-3/4 flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Pearl Bracelets Image */}
          <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1740&auto=format&fit=crop" alt="Beautiful pearl bracelets collection" className="w-full h-auto object-contain opacity-90 shadow-2xl rounded-lg" />
          </div>
          
          {/* Pearl Earrings Image */}
          <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1611644233886-385e90cf9a20?q=80&w=1887&auto=format&fit=crop" alt="Beautiful pearl earrings collection" className="w-full h-auto object-contain opacity-90 shadow-2xl rounded-lg" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl font-serif font-medium mb-6 animate-fade-in text-black md:text-5xl">
            Handcrafted Jewelry For Your Soul
          </h1>
          <p style={{
          animationDelay: "0.2s"
        }} className="text-lg mb-8 opacity-90 animate-fade-in text-black md:text-2xl">
            Discover our collection of unique, ethically-made bracelets and earrings designed to reflect your inner beauty.
          </p>
          {/* Buttons have been removed */}
        </div>
      </div>
    </section>;
};
export default Hero;

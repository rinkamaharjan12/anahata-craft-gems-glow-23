
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-anahata-brown mb-4">Our Story</h2>
          <div className="h-1 w-20 bg-anahata-terracotta mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="w-full md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1566345984367-57483fb53bd1?q=80&w=2370&auto=format&fit=crop" 
              alt="Artisan crafting jewelry" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="w-full md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1631541911232-aaf11d6e4f3a?q=80&w=1887&auto=format&fit=crop"
              alt="Handcrafted earrings" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-2xl font-serif text-anahata-brown mb-4">Handcrafted with Love</h3>
            <p className="text-gray-700 mb-4">
              Anahata Craft was born from a passion for creating beautiful, meaningful jewelry that connects with the soul. Each piece is handcrafted with intention and love, using ethically sourced materials.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder, Maya, started creating jewelry as a form of meditation and self-expression. What began as a personal journey evolved into Anahata Craft, named after the heart chakra which represents love, balance, and compassion.
            </p>
            <p className="text-gray-700">
              Today, our small team of artisans continues this tradition, creating unique pieces that help you express your individuality while honoring sustainable and ethical practices.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
              <div className="mb-6 sm:mb-0 sm:mr-10 text-center">
                <span className="block text-3xl font-serif text-anahata-terracotta mb-2">100%</span>
                <span className="text-sm uppercase tracking-wider text-gray-600">Handmade</span>
              </div>
              <div className="mb-6 sm:mb-0 sm:mr-10 text-center">
                <span className="block text-3xl font-serif text-anahata-terracotta mb-2">5+</span>
                <span className="text-sm uppercase tracking-wider text-gray-600">Years of Craft</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-anahata-terracotta mb-2">1000+</span>
                <span className="text-sm uppercase tracking-wider text-gray-600">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

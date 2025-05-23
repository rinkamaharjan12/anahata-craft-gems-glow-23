
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCategory from '@/components/ProductCategory';
import FeaturedProducts from '@/components/FeaturedProducts';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  // Bracelet products data
  const braceletProducts = [
    {
      name: "Ocean Wave Beaded Bracelet",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
      isNew: true
    },
    {
      name: "Golden Lotus Charm Bracelet",
      price: "$42.99",
      image: "https://images.unsplash.com/photo-1609245340409-cad2474ab1d5?q=80&w=1887&auto=format&fit=crop",
      isBestseller: true
    },
    {
      name: "Aventurine Healing Stone Bracelet",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1965&auto=format&fit=crop"
    },
    {
      name: "Bamboo Silver Cuff Bracelet",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1626784215021-2e39ccad6da1?q=80&w=1932&auto=format&fit=crop"
    },
    // New bracelets added below
    {
      name: "Amethyst Protection Bracelet",
      price: "$45.99",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1887&auto=format&fit=crop"
    },
    {
      name: "Lotus Gemstone Wrap Bracelet",
      price: "$38.99",
      image: "https://images.unsplash.com/photo-1631729779674-1b0e6ae3010f?q=80&w=1887&auto=format&fit=crop",
      isNew: true
    },
    {
      name: "Chakra Balance Beaded Bracelet",
      price: "$37.99",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Moonstone Meditation Bracelet",
      price: "$52.99",
      image: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1964&auto=format&fit=crop",
      isBestseller: true
    }
  ];
  
  // Earring products data
  const earringProducts = [
    {
      name: "Boho Leaf Drop Earrings",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1631541911232-aaf11d6e4f3a?q=80&w=1887&auto=format&fit=crop",
      isNew: true
    },
    {
      name: "Turquoise Moon Hoops",
      price: "$36.99",
      image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1770&auto=format&fit=crop",
      isBestseller: true
    },
    {
      name: "Wooden Geometric Studs",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1589405858862-2ac9cbbff8c5?q=80&w=1780&auto=format&fit=crop"
    },
    {
      name: "Celestial Crystal Danglers",
      price: "$38.99",
      image: "https://images.unsplash.com/photo-1651047908022-3023e12e657d?q=80&w=1888&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Product Categories */}
      <ProductCategory
        id="bracelets"
        title="Bracelets Collection"
        description="Our handcrafted bracelets blend natural elements with artisanal craftsmanship. Each piece is designed to enhance your natural beauty and connect with your spirit."
        image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1965&auto=format&fit=crop"
        link="#"
        reverse={false}
      />
      
      {/* Featured Bracelets */}
      <FeaturedProducts
        title="Featured Bracelets"
        viewAllLink="#"
        products={braceletProducts}
      />
      
      {/* Earrings Category */}
      <ProductCategory
        id="earrings"
        title="Earrings Collection"
        description="Express your unique style with our collection of handcrafted earrings. From subtle studs to statement pieces, find the perfect accent for any occasion."
        image="https://images.unsplash.com/photo-1631541911232-aaf11d6e4f3a?q=80&w=1887&auto=format&fit=crop"
        link="#"
        reverse={true}
      />
      
      {/* Featured Earrings */}
      <FeaturedProducts
        title="Featured Earrings"
        viewAllLink="#"
        products={earringProducts}
      />
      
      {/* About Section */}
      <About />
      
      {/* Newsletter */}
      <Newsletter />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

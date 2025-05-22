
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
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88552?q=80&w=1974&auto=format&fit=crop",
      isNew: true
    },
    {
      name: "Golden Lotus Charm Bracelet",
      price: "$42.99",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1925&auto=format&fit=crop",
      isBestseller: true
    },
    {
      name: "Aventurine Healing Stone Bracelet",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1576723663993-d6c28d8a2180?q=80&w=1935&auto=format&fit=crop"
    },
    {
      name: "Bamboo Silver Cuff Bracelet",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=2148&auto=format&fit=crop"
    }
  ];
  
  // Earring products data
  const earringProducts = [
    {
      name: "Boho Leaf Drop Earrings",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfbfc8?q=80&w=1974&auto=format&fit=crop",
      isNew: true
    },
    {
      name: "Turquoise Moon Hoops",
      price: "$36.99",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1974&auto=format&fit=crop",
      isBestseller: true
    },
    {
      name: "Wooden Geometric Studs",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1625908729414-240db62bf66c?q=80&w=1966&auto=format&fit=crop"
    },
    {
      name: "Celestial Crystal Danglers",
      price: "$38.99",
      image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?q=80&w=1974&auto=format&fit=crop"
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
        image="https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1964&auto=format&fit=crop"
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


import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCategory from '@/components/ProductCategory';
import FeaturedProducts from '@/components/FeaturedProducts';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Blogs from '@/components/Blogs';

const Index = () => {
  // Bracelet products data
  const braceletProducts = [
    {
      name: "Ocean Wave Beaded Bracelet",
      price: "$34.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png",
      isNew: true
    },
    {
      name: "Golden Lotus Charm Bracelet",
      price: "$42.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png",
      isBestseller: true
    },
    {
      name: "Aventurine Healing Stone Bracelet",
      price: "$39.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png"
    },
    {
      name: "Bamboo Silver Cuff Bracelet",
      price: "$49.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png"
    },
    // New bracelets added below
    {
      name: "Amethyst Protection Bracelet",
      price: "$45.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png"
    },
    {
      name: "Lotus Gemstone Wrap Bracelet",
      price: "$38.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png",
      isNew: true
    },
    {
      name: "Chakra Balance Beaded Bracelet",
      price: "$37.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png"
    },
    {
      name: "Moonstone Meditation Bracelet",
      price: "$52.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png",
      isBestseller: true
    }
  ];
  
  // Earring products data
  const earringProducts = [
    {
      name: "Boho Leaf Drop Earrings",
      price: "$29.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png",
      isNew: true
    },
    {
      name: "Turquoise Moon Hoops",
      price: "$36.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png",
      isBestseller: true
    },
    {
      name: "Wooden Geometric Studs",
      price: "$24.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png"
    },
    {
      name: "Celestial Crystal Danglers",
      price: "$38.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png"
    },
    // Adding new earrings
    {
      name: "Lotus Petal Drop Earrings",
      price: "$32.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png",
      isNew: true
    },
    {
      name: "Golden Bamboo Hoops",
      price: "$41.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png"
    },
    {
      name: "Rose Quartz Healing Studs",
      price: "$34.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png"
    },
    {
      name: "Chakra Gemstone Danglers",
      price: "$43.99",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png",
      isBestseller: true
    }
  ];

  // Blog posts data for homepage
  const blogPosts = [
    {
      id: "how-to-cleanse-your-crystals",
      title: "How to Cleanse and Charge Your Crystal Jewelry",
      excerpt: "Learn the best practices for maintaining the energy of your crystal jewelry with these simple cleansing techniques.",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png",
      category: "Care Guide",
      date: "May 15, 2025"
    },
    {
      id: "healing-properties-of-amethyst",
      title: "The Healing Properties of Amethyst in Jewelry",
      excerpt: "Discover the calming and protective benefits of wearing amethyst in your daily life.",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png",
      category: "Crystal Properties",
      date: "May 8, 2025"
    },
    {
      id: "sustainable-jewelry-practices",
      title: "Our Commitment to Sustainable Jewelry Practices",
      excerpt: "How Anahata Craft ensures our jewelry production respects both people and planet.",
      image: "/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png",
      category: "Sustainability",
      date: "April 22, 2025"
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
        image="/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png"
        link="/collections/bracelets"
        reverse={false}
      />
      
      {/* Featured Bracelets */}
      <FeaturedProducts
        title="Featured Bracelets"
        viewAllLink="/collections/bracelets"
        products={braceletProducts}
      />
      
      {/* Earrings Category */}
      <ProductCategory
        id="earrings"
        title="Earrings Collection"
        description="Express your unique style with our collection of handcrafted earrings. From subtle studs to statement pieces, find the perfect accent for any occasion."
        image="/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png"
        link="/collections/earrings"
        reverse={true}
      />
      
      {/* Featured Earrings */}
      <FeaturedProducts
        title="Featured Earrings"
        viewAllLink="/collections/earrings"
        products={earringProducts}
      />
      
      {/* Blog Section */}
      <Blogs 
        title="From Our Journal"
        posts={blogPosts}
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

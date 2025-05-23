
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
      image: "https://images.unsplash.com/photo-1612208476115-9121259fa67f?q=80&w=1964&auto=format&fit=crop"
    },
    {
      name: "Lotus Gemstone Wrap Bracelet",
      price: "$38.99",
      image: "https://images.unsplash.com/photo-1630018548696-e1900d3da82b?q=80&w=1780&auto=format&fit=crop",
      isNew: true
    },
    {
      name: "Chakra Balance Beaded Bracelet",
      price: "$37.99",
      image: "https://images.unsplash.com/photo-1613144577041-398938f0e4c6?q=80&w=1780&auto=format&fit=crop"
    },
    {
      name: "Moonstone Meditation Bracelet",
      price: "$52.99",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1780&auto=format&fit=crop",
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
    },
    // Adding new earrings
    {
      name: "Lotus Petal Drop Earrings",
      price: "$32.99",
      image: "https://images.unsplash.com/photo-1575863438850-e83e39f9512a?q=80&w=1931&auto=format&fit=crop",
      isNew: true
    },
    {
      name: "Golden Bamboo Hoops",
      price: "$41.99",
      image: "https://images.unsplash.com/photo-1611105222834-1f2be7949599?q=80&w=1885&auto=format&fit=crop"
    },
    {
      name: "Rose Quartz Healing Studs",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1965&auto=format&fit=crop"
    },
    {
      name: "Chakra Gemstone Danglers",
      price: "$43.99",
      image: "https://images.unsplash.com/photo-1602752250015-52934bc45613?q=80&w=1974&auto=format&fit=crop",
      isBestseller: true
    }
  ];

  // Blog posts data for homepage
  const blogPosts = [
    {
      id: "how-to-cleanse-your-crystals",
      title: "How to Cleanse and Charge Your Crystal Jewelry",
      excerpt: "Learn the best practices for maintaining the energy of your crystal jewelry with these simple cleansing techniques.",
      image: "https://images.unsplash.com/photo-1612447392029-db64e5cd56a1?q=80&w=1964&auto=format&fit=crop",
      category: "Care Guide",
      date: "May 15, 2025"
    },
    {
      id: "healing-properties-of-amethyst",
      title: "The Healing Properties of Amethyst in Jewelry",
      excerpt: "Discover the calming and protective benefits of wearing amethyst in your daily life.",
      image: "https://images.unsplash.com/photo-1620001796685-adf7110fe2a5?q=80&w=1964&auto=format&fit=crop",
      category: "Crystal Properties",
      date: "May 8, 2025"
    },
    {
      id: "sustainable-jewelry-practices",
      title: "Our Commitment to Sustainable Jewelry Practices",
      excerpt: "How Anahata Craft ensures our jewelry production respects both people and planet.",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop",
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
        image="https://images.unsplash.com/photo-1626784215021-2e39ccad6da1?q=80&w=1932&auto=format&fit=crop"
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
        image="https://images.unsplash.com/photo-1631541911232-aaf11d6e4f3a?q=80&w=1887&auto=format&fit=crop"
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

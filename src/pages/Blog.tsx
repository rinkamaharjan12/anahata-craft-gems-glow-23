
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

// Blog data
const blogPosts = [
  {
    id: "how-to-cleanse-your-crystals",
    title: "How to Cleanse and Charge Your Crystal Jewelry",
    excerpt: "Learn the best practices for maintaining the energy of your crystal jewelry with these simple cleansing techniques.",
    image: "https://images.unsplash.com/photo-1591977733835-e46416051b49?q=80&w=1887&auto=format&fit=crop",
    category: "Care Guide",
    date: "May 15, 2025",
    featured: true
  },
  {
    id: "healing-properties-of-amethyst",
    title: "The Healing Properties of Amethyst in Jewelry",
    excerpt: "Discover the calming and protective benefits of wearing amethyst in your daily life.",
    image: "https://images.unsplash.com/photo-1609129318559-a036a97ee8c7?q=80&w=1887&auto=format&fit=crop",
    category: "Crystal Properties",
    date: "May 8, 2025",
    featured: true
  },
  {
    id: "sustainable-jewelry-practices",
    title: "Our Commitment to Sustainable Jewelry Practices",
    excerpt: "How Anahata Craft ensures our jewelry production respects both people and planet.",
    image: "https://images.unsplash.com/photo-1621110614914-4bf1af9a3bc7?q=80&w=1887&auto=format&fit=crop",
    category: "Sustainability",
    date: "April 22, 2025",
    featured: true
  },
  {
    id: "styling-tips-for-summer",
    title: "How to Style Your Handcrafted Jewelry for Summer",
    excerpt: "Get inspired with our favorite ways to pair your Anahata pieces with summer outfits.",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1887&auto=format&fit=crop",
    category: "Style Guide",
    date: "April 12, 2025"
  },
  {
    id: "chakra-balancing-with-jewelry",
    title: "Chakra Balancing: Using Jewelry for Energy Alignment",
    excerpt: "Understanding how different gemstones can help balance your chakras and enhance wellbeing.",
    image: "https://images.unsplash.com/photo-1622161405908-568ef598f90c?q=80&w=1887&auto=format&fit=crop",
    category: "Spiritual Wellness",
    date: "March 30, 2025"
  },
  {
    id: "behind-the-scenes-artisans",
    title: "Behind the Scenes: Meet Our Artisan Craftspeople",
    excerpt: "The skilled hands and creative minds behind each piece of Anahata Craft jewelry.",
    image: "https://images.unsplash.com/photo-1617796110636-cc51a908326c?q=80&w=1887&auto=format&fit=crop",
    category: "Meet the Team",
    date: "March 18, 2025"
  },
  {
    id: "seasonal-gemstone-guide",
    title: "Seasonal Gemstone Guide: Choosing the Perfect Stone",
    excerpt: "How to select gemstones that align with each season's energy and your personal needs.",
    image: "https://images.unsplash.com/photo-1598467557298-8d472e5a72fe?q=80&w=1887&auto=format&fit=crop",
    category: "Crystal Properties",
    date: "March 5, 2025"
  },
  {
    id: "layering-necklaces-guide",
    title: "The Art of Layering: Creating the Perfect Necklace Stack",
    excerpt: "Tips and tricks for mastering the layered jewelry trend with our adjustable pieces.",
    image: "https://images.unsplash.com/photo-1626784215021-2e39ccad6da1?q=80&w=1932&auto=format&fit=crop",
    category: "Style Guide",
    date: "February 20, 2025"
  }
];

const Blog = () => {
  // Filter featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-anahata-light">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif text-anahata-brown mb-4">Our Journal</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Insights, guides, and stories about crystal healing, sustainable practices,
            and the art of handcrafted jewelry.
          </p>
        </div>
      </section>
      
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="bg-white py-12">
          <div className="container">
            <h2 className="text-2xl font-serif text-anahata-brown mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow group h-full">
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs uppercase font-medium text-anahata-terracotta">{post.category}</span>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-serif font-medium mb-2 group-hover:text-anahata-terracotta transition-colors">{post.title}</h3>
                      <p className="text-gray-600 text-sm">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* All Posts */}
      <section className="bg-anahata-light py-16">
        <div className="container">
          <h2 className="text-2xl font-serif text-anahata-brown mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow group h-full">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase font-medium text-anahata-terracotta">{post.category}</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-serif font-medium mb-2 group-hover:text-anahata-terracotta transition-colors">{post.title}</h3>
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;

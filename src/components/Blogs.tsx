
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

interface BlogsProps {
  title: string;
  posts: BlogPost[];
}

const Blogs = ({ title, posts }: BlogsProps) => {
  return (
    <section className="bg-anahata-light py-16">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-serif text-anahata-brown">{title}</h2>
          <Link to="/blog" className="group inline-flex items-center text-anahata-terracotta hover:text-anahata-brown transition-colors">
            View all articles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
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
  );
};

export default Blogs;

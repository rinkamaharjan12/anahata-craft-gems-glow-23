
import React from 'react';
import { Button } from "@/components/ui/button";

interface ProductCategoryProps {
  title: string;
  description: string;
  image: string;
  link: string;
  id: string;
  reverse?: boolean;
}

const ProductCategory = ({ title, description, image, link, id, reverse }: ProductCategoryProps) => {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
          <div className="w-full md:w-1/2">
            <img 
              src="/lovable-uploads/4df5781e-b537-416f-b605-9df6ea5a3081.png" 
              alt={title} 
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg hover-scale"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-anahata-brown mb-4">{title}</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-lg">
              {description}
            </p>
            <Button 
              className="bg-anahata-sage hover:bg-anahata-brown text-white border-none px-8 py-6"
              asChild
            >
              <a href={link}>Shop Collection</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;

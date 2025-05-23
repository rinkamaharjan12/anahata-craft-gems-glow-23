
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface FeaturedProductsProps {
  title: string;
  viewAllLink: string;
  products: {
    name: string;
    price: string;
    image: string;
    isNew?: boolean;
    isBestseller?: boolean;
  }[];
}

const FeaturedProducts = ({
  title,
  viewAllLink,
  products
}: FeaturedProductsProps) => {
  const navigate = useNavigate();
  
  // Handle the view all click
  const handleViewAll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(`View all products in category: ${title}`);
    
    if (viewAllLink !== "#") {
      navigate(viewAllLink);
    } else {
      // For demo purposes, we'll just scroll to the section
      const sectionId = title.toLowerCase().replace(/ /g, '-');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Use grid for small screens, carousel for large screens with many products
  const showCarousel = products.length > 4;

  return (
    <section id={title.toLowerCase().replace(/ /g, '-')} className="py-16 bg-anahata-cream bg-opacity-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 md:mb-0 text-amber-800">{title}</h2>
          <Button variant="outline" className="border-anahata-brown text-anahata-brown hover:bg-anahata-brown hover:text-white self-start md:self-auto" asChild>
            <a href={viewAllLink || "#"} onClick={handleViewAll}>View All</a>
          </Button>
        </div>
        
        {showCarousel ? (
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <ProductCard 
                    name={product.name} 
                    price={product.price} 
                    image={product.image} 
                    isNew={product.isNew} 
                    isBestseller={product.isBestseller} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 md:mt-12">
              <CarouselPrevious className="static mx-2 transform-none translate-y-0" />
              <CarouselNext className="static mx-2 transform-none translate-y-0" />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard 
                key={index} 
                name={product.name} 
                price={product.price} 
                image={product.image} 
                isNew={product.isNew} 
                isBestseller={product.isBestseller} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;

import React from 'react';
import ProductCard from './ProductCard';
import { Button } from "@/components/ui/button";
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
  // Handle the view all click
  const handleViewAll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (viewAllLink === "#") {
      e.preventDefault();
      console.log(`View all products in category: ${title}`);
      // This would typically navigate to a category page
      // In the future, this could be implemented with React Router
    }
  };
  return <section className="py-16 bg-anahata-cream bg-opacity-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 md:mb-0 text-amber-800">{title}</h2>
          <Button variant="outline" className="border-anahata-brown text-anahata-brown hover:bg-anahata-brown hover:text-white self-start md:self-auto" asChild>
            <a href={viewAllLink} onClick={handleViewAll}>View All</a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => <ProductCard key={index} name={product.name} price={product.price} image={product.image} isNew={product.isNew} isBestseller={product.isBestseller} />)}
        </div>
      </div>
    </section>;
};
export default FeaturedProducts;
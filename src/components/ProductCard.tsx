
import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard = ({ name, price, image, isNew, isBestseller }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  
  // Generate a product ID based on name
  const productId = name.toLowerCase().replace(/\s+/g, '-');
  
  // Handle product image click
  const handleImageClick = () => {
    console.log(`Product clicked: ${name}`);
    toast({
      title: "Product Selected",
      description: `You selected ${name} - ${price}`,
    });
    // In a real app, this would navigate to the product detail page
  };

  // Handle wishlist toggle
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click
    setIsWishlisted(!isWishlisted);
    
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${name} was ${isWishlisted ? "removed from" : "added to"} your wishlist`,
    });
    
    console.log(`${isWishlisted ? "Removed from" : "Added to"} wishlist: ${name}`);
  };
  
  // Handle add to cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click
    
    // Create product data
    const product = {
      id: productId,
      name,
      price,
      image
    };
    
    // Dispatch a custom event to add the item to the cart
    const event = new CustomEvent('add-to-cart', { detail: product });
    window.dispatchEvent(event);
    
    console.log(`Added to cart: ${name}`);
  };
  
  // Handle quick view
  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click
    setIsQuickViewOpen(true);
    console.log(`Quick view: ${name}`);
  };

  return (
    <div className="product-card group relative flex flex-col overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={name} 
          className="product-image w-full h-[300px] object-cover cursor-pointer"
          onClick={handleImageClick}
        />
        
        {/* Badge */}
        {isNew && (
          <div className="absolute top-2 left-2 bg-anahata-terracotta text-white text-xs font-medium px-2 py-1 rounded">
            New
          </div>
        )}
        {isBestseller && (
          <div className="absolute top-2 left-2 bg-anahata-gold text-white text-xs font-medium px-2 py-1 rounded">
            Bestseller
          </div>
        )}
        
        {/* Quick actions */}
        <div className="absolute -bottom-10 left-0 right-0 bg-white bg-opacity-90 py-2 flex justify-center opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            className="mx-2 text-anahata-brown hover:text-anahata-terracotta transition-colors flex items-center gap-1"
            onClick={handleQuickView}
          >
            <Eye size={16} />
            Quick view
          </button>
          <div className="w-px bg-gray-300"></div>
          <button 
            className="mx-2 text-anahata-brown hover:text-anahata-terracotta transition-colors flex items-center gap-1"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} />
            Add to cart
          </button>
        </div>
      </div>
      
      {/* Wishlist Button */}
      <button 
        className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={handleWishlistToggle}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart 
          size={16} 
          className={`${isWishlisted ? "fill-anahata-terracotta text-anahata-terracotta" : "text-anahata-brown hover:text-anahata-terracotta"} transition-colors`} 
        />
      </button>
      
      {/* Product Info */}
      <h3 className="text-lg font-medium text-anahata-brown cursor-pointer hover:text-anahata-terracotta transition-colors" onClick={handleImageClick}>{name}</h3>
      <p className="text-anahata-terracotta font-medium">{price}</p>
      
      {/* Quick View Dialog */}
      <Dialog open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-center">
              <img src={image} alt={name} className="w-full max-h-[300px] object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-anahata-terracotta font-medium">{price}</p>
              <p className="text-muted-foreground">
                This is a quick view of the product. In a complete implementation, 
                this would show more details about the product.
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setIsQuickViewOpen(false)}>
              Close
            </Button>
            <Button onClick={(e) => {
              handleAddToCart(e);
              setIsQuickViewOpen(false);
            }}>
              Add to Cart
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductCard;

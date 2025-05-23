
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";

// Define the cart item interface
interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Listen for custom add-to-cart events
  useEffect(() => {
    const handleAddToCart = (event: CustomEvent) => {
      const product = event.detail;
      
      setCartItems(prevItems => {
        // Check if item already exists in cart
        const existingItem = prevItems.find(item => item.id === product.id);
        
        if (existingItem) {
          // Update quantity if item already exists
          return prevItems.map(item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          );
        } else {
          // Add new item with quantity 1
          return [...prevItems, { ...product, quantity: 1 }];
        }
      });
      
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    };

    window.addEventListener('add-to-cart' as any, handleAddToCart);
    
    return () => {
      window.removeEventListener('add-to-cart' as any, handleAddToCart);
    };
  }, []);

  // Calculate total items in cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  // Calculate subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return total + (price * item.quantity);
  }, 0);

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  return <header className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300", isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4")}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="h-10 w-10 mr-2 overflow-hidden rounded-full border-2 border-anahata-gold">
            <img src="https://images.unsplash.com/photo-1611644233886-385e90cf9a20?q=80&w=100&auto=format&fit=crop" alt="Anahata Craft Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-slate-950">
            Anahata<span className="drop-shadow-sm text-slate-950">Craft</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
            Home
          </Link>
          <a href="#bracelets" className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
            Bracelets
          </a>
          <a href="#earrings" className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
            Earrings
          </a>
          <Link to="/blog" className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
            Blog
          </Link>
          <a href="#about" className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
            About
          </a>
          <a href="#contact" className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
            <Search size={20} />
          </button>
          <button className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
            <User size={20} />
          </button>
          <Popover>
            <PopoverTrigger asChild>
              <button className="relative text-anahata-gold hover:text-anahata-terracotta transition-colors">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-anahata-terracotta text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
              <div className="p-4 border-b">
                <h3 className="font-medium">Your Cart ({cartItemCount})</h3>
              </div>
              <div className="max-h-72 overflow-y-auto">
                {cartItems.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground">
                    Your cart is empty
                  </div>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-3 p-3 border-b">
                      <div className="w-12 h-12 shrink-0 rounded-md overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.price} × {item.quantity}
                        </p>
                      </div>
                      <button 
                        className="text-muted-foreground hover:text-destructive" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
              <div className="p-4 border-t">
                <div className="flex justify-between font-medium mb-4">
                  <span>Subtotal</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                <Button className="w-full bg-anahata-terracotta hover:bg-anahata-brown">
                  Checkout
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-anahata-gold" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-white py-4 shadow-md">
          <div className="container flex flex-col space-y-4">
            <Link to="/" className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
              Home
            </Link>
            <a href="#bracelets" className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
              Bracelets
            </a>
            <a href="#earrings" className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
              Earrings
            </a>
            <Link to="/blog" className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
              Blog
            </Link>
            <a href="#about" className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
              About
            </a>
            <a href="#contact" className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-4 pt-2">
              <button className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
                <Search size={20} />
              </button>
              <button className="text-anahata-gold hover:text-anahata-terracotta transition-colors">
                <User size={20} />
              </button>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="relative text-anahata-gold hover:text-anahata-terracotta transition-colors">
                    <ShoppingCart size={20} />
                    <span className="absolute -top-2 -right-2 bg-anahata-terracotta text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-0">
                  <div className="p-4 border-b">
                    <h3 className="font-medium">Your Cart ({cartItemCount})</h3>
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {cartItems.length === 0 ? (
                      <div className="p-4 text-center text-muted-foreground">
                        Your cart is empty
                      </div>
                    ) : (
                      cartItems.map(item => (
                        <div key={item.id} className="flex items-center gap-3 p-3 border-b">
                          <div className="w-10 h-10 shrink-0 rounded-md overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.price} × {item.quantity}
                            </p>
                          </div>
                          <button 
                            className="text-muted-foreground hover:text-destructive" 
                            onClick={() => removeFromCart(item.id)}
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="p-4 border-t">
                    <div className="flex justify-between font-medium mb-4">
                      <span>Subtotal</span>
                      <span>${cartSubtotal.toFixed(2)}</span>
                    </div>
                    <Button className="w-full bg-anahata-terracotta hover:bg-anahata-brown">
                      Checkout
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>}
    </header>;
};

export default Navbar;

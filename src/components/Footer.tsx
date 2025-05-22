import React from 'react';
import { cn } from "@/lib/utils";
const footerLinks = [{
  title: 'Shop',
  links: [{
    name: 'Bracelets',
    href: '#bracelets'
  }, {
    name: 'Earrings',
    href: '#earrings'
  }, {
    name: 'New Arrivals',
    href: '#'
  }, {
    name: 'Best Sellers',
    href: '#'
  }, {
    name: 'Sale',
    href: '#'
  }]
}, {
  title: 'Customer Care',
  links: [{
    name: 'Contact Us',
    href: '#contact'
  }, {
    name: 'FAQs',
    href: '#'
  }, {
    name: 'Shipping & Returns',
    href: '#'
  }, {
    name: 'Care Instructions',
    href: '#'
  }, {
    name: 'Size Guide',
    href: '#'
  }]
}, {
  title: 'About',
  links: [{
    name: 'Our Story',
    href: '#about'
  }, {
    name: 'Materials',
    href: '#'
  }, {
    name: 'Sustainability',
    href: '#'
  }, {
    name: 'Ethical Practices',
    href: '#'
  }, {
    name: 'Blog',
    href: '#'
  }]
}];
const Footer = () => {
  return <footer className="bg-anahata-brown text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif">
              Anahata<span className="text-zinc-50">Craft</span>
            </h2>
            <p className="text-sm text-gray-300 max-w-xs">
              Handcrafted jewelry designed to connect with your soul, made with love and intention.
            </p>
            <div>
              <p className="text-sm text-gray-300 mb-1">© 2025 Anahata Craft</p>
              <p className="text-xs text-gray-400">All rights reserved</p>
            </div>
          </div>
          
          {/* Links Columns */}
          {footerLinks.map(column => <div key={column.title}>
              <h3 className="text-lg font-medium mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map(link => <li key={link.name}>
                    <a href={link.href} className={cn("text-sm text-gray-300 hover:text-white transition-colors", "inline-block after:content-[''] after:block after:w-0 after:h-0.5", "after:bg-anahata-terracotta hover:after:w-full after:transition-all")}>
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <a href="#" className="hover:text-white mr-4 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white mr-4 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <div>
            <span>Made with ♥ for your soul</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
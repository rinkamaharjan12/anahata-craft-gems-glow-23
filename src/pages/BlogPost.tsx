import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Blog data - same as in Blog.tsx
const blogPosts = [
  {
    id: "how-to-cleanse-your-crystals",
    title: "How to Cleanse and Charge Your Crystal Jewelry",
    excerpt: "Learn the best practices for maintaining the energy of your crystal jewelry with these simple cleansing techniques.",
    image: "https://images.unsplash.com/photo-1591977733835-e46416051b49?q=80&w=1887&auto=format&fit=crop",
    category: "Care Guide",
    date: "May 15, 2025",
    content: `
      <p>Crystal jewelry isn't just beautiful—it carries energy that can affect our wellbeing. To keep your crystal pieces working at their energetic best, regular cleansing is essential. Here are our favorite methods:</p>
      
      <h3>Moonlight Bath</h3>
      <p>Place your crystal jewelry on a windowsill or outdoor space where it can bathe in the light of the full moon. Leave overnight to cleanse negative energies and recharge with lunar energy. This method is gentle and effective for most crystals.</p>
      
      <h3>Smudging with Sage</h3>
      <p>Pass your jewelry through the smoke of burning sage or palo santo. The smoke clears stagnant energy and purifies the crystals. Always use this method in a well-ventilated area.</p>
      
      <h3>Sound Cleansing</h3>
      <p>Using sound waves from singing bowls or bells can effectively clear energy from crystal jewelry. Simply ring the bell or bowl near your pieces for 30-60 seconds with the intention of clearing their energy.</p>
      
      <h3>Water Cleansing (For Water-Safe Crystals Only)</h3>
      <p>Some crystals can be safely rinsed under running water to cleanse their energy. Remember, many crystals are water-soluble or can be damaged by water, so always check if your specific crystal is water-safe first.</p>
      
      <h3>Salt Bed Rest</h3>
      <p>Place your jewelry on a bed of sea salt overnight. The salt absorbs negative energy. Be careful with this method as some softer crystals can be scratched by salt.</p>
      
      <h3>When to Cleanse Your Jewelry</h3>
      <p>We recommend cleansing your crystal jewelry:</p>
      <ul>
        <li>When you first receive it</li>
        <li>After wearing it during a stressful or negative experience</li>
        <li>When you feel its energy has become dull or heavy</li>
        <li>During the full moon, as part of a monthly practice</li>
      </ul>
      
      <p>Regular cleansing ensures that your Anahata Craft jewelry remains a powerful tool for your spiritual wellbeing and continues to shine with beautiful energy for years to come.</p>
    `,
    featured: true
  },
  {
    id: "healing-properties-of-amethyst",
    title: "The Healing Properties of Amethyst in Jewelry",
    excerpt: "Discover the calming and protective benefits of wearing amethyst in your daily life.",
    image: "https://images.unsplash.com/photo-1609129318559-a036a97ee8c7?q=80&w=1887&auto=format&fit=crop",
    category: "Crystal Properties",
    date: "May 8, 2025",
    content: `
      <p>Amethyst, with its stunning purple hues, has been treasured for centuries not only for its beauty but also for its powerful healing properties. At Anahata Craft, we incorporate this magnificent crystal in many of our pieces to bring its benefits to your everyday life.</p>
      
      <h3>The Spiritual Protector</h3>
      <p>Known as a natural tranquilizer, amethyst is believed to dispel negativity and create a protective shield around the wearer. It's excellent for those who feel energetically vulnerable or who interact with many different energies throughout their day.</p>
      
      <h3>Calming the Mind</h3>
      <p>One of amethyst's most celebrated properties is its ability to calm an overactive mind. Wearing amethyst jewelry can help soothe anxiety, reduce stress, and promote clearer thinking—perfect for those high-pressure workdays or stressful situations.</p>
      
      <h3>Supporting Intuition</h3>
      <p>Amethyst is strongly connected to the crown and third eye chakras, making it a powerful aid for enhancing intuition and spiritual awareness. Many of our customers report feeling more in tune with their inner wisdom when regularly wearing amethyst pieces.</p>
      
      <h3>Improving Sleep Quality</h3>
      <p>Struggling with insomnia or restless sleep? Amethyst has been used for centuries to promote peaceful sleep and protect against nightmares. Try wearing an amethyst bracelet before bed or keeping an amethyst piece near your pillow.</p>
      
      <h3>Physical Healing Support</h3>
      <p>While we always recommend seeking proper medical care for health concerns, many crystal healers suggest that amethyst may support healing for headaches, hormonal imbalances, and immune system function.</p>
      
      <h3>How to Choose Your Amethyst Piece</h3>
      <p>When selecting an amethyst jewelry piece, trust your intuition. The piece that draws your eye most strongly is often the one whose energy resonates best with your current needs. In our collection, you'll find amethyst in various forms—from delicate bracelets to statement earrings—each handcrafted to maximize the crystal's natural beauty and energy.</p>
      
      <p>Remember that while wearing your amethyst jewelry regularly allows you to benefit from its properties throughout the day, it's important to cleanse and recharge it periodically to maintain its energetic potency.</p>
    `,
    featured: true
  },
  {
    id: "sustainable-jewelry-practices",
    title: "Our Commitment to Sustainable Jewelry Practices",
    excerpt: "How Anahata Craft ensures our jewelry production respects both people and planet.",
    image: "https://images.unsplash.com/photo-1621110614914-4bf1af9a3bc7?q=80&w=1887&auto=format&fit=crop",
    category: "Sustainability",
    date: "April 22, 2025",
    content: `
      <p>At Anahata Craft, sustainability isn't just a buzzword—it's woven into every aspect of our business. We believe beautiful jewelry shouldn't come at the cost of our planet or its people. Here's how we're committed to making a positive impact:</p>
      
      <h3>Ethically Sourced Materials</h3>
      <p>Every gemstone, bead, and metal component in our jewelry is carefully sourced from suppliers who share our commitment to ethical practices. We personally visit many of our suppliers to ensure fair labor conditions and environmental responsibility.</p>
      
      <h3>Artisanal Small-Batch Production</h3>
      <p>Unlike mass-produced jewelry, each Anahata piece is handcrafted in small batches by skilled artisans earning fair wages. This approach not only ensures exceptional quality but also reduces waste and supports traditional craftsmanship.</p>
      
      <h3>Plastic-Free Packaging</h3>
      <p>Our packaging is 100% plastic-free and made from recycled or sustainably harvested materials. From our hemp jewelry pouches to our recycled paper gift boxes, we've eliminated single-use plastics from our entire supply chain.</p>
      
      <h3>Upcycled Elements</h3>
      <p>Many of our designs incorporate upcycled materials, from reclaimed metals to vintage beads. By giving new life to existing materials, we reduce the demand for new resource extraction while creating pieces with unique character and history.</p>
      
      <h3>Carbon-Conscious Shipping</h3>
      <p>We offset the carbon footprint of every shipment through investments in verified climate protection projects. Our local deliveries are made via bicycle courier or electric vehicles whenever possible.</p>
      
      <h3>Repair & Renewal Program</h3>
      <p>We believe in creating jewelry that lasts a lifetime. That's why we offer a repair service for all our pieces, encouraging customers to repair rather than replace. This commitment to longevity is at the heart of truly sustainable fashion.</p>
      
      <h3>Looking Forward</h3>
      <p>Our sustainability journey is ongoing. We're constantly researching new materials, techniques, and partnerships to further reduce our environmental impact while increasing our positive social contribution. We welcome your suggestions and questions about our practices—together, we can continue to evolve what sustainable jewelry means.</p>
      
      <p>When you choose an Anahata Craft piece, you're not just adorning yourself with beauty—you're supporting a vision of a more mindful, sustainable approach to adornment that honors both humanity and our precious planet.</p>
    `,
    featured: true
  }
  // ... other blog posts content would be added here
];

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-3xl font-serif mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't seem to exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container text-center text-white">
            <span className="text-sm uppercase font-medium tracking-wider mb-2 inline-block bg-anahata-terracotta px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif mb-2 max-w-4xl mx-auto">{post.title}</h1>
            <p className="text-sm opacity-90">{post.date}</p>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <article className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <Button variant="outline" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Link>
          </Button>
          
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </article>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPost;

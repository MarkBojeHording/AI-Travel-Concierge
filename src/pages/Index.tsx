import HeroSection from "@/components/HeroSection";
import ChatWidget from "@/components/ChatWidget";
import MasonryGrid from "@/components/MasonryGrid";
import InteractiveMap from "@/components/InteractiveMap";
import QuizSection from "@/components/QuizSection";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // TODO: Implement search functionality with backend integration
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Personalization Quiz */}
      <QuizSection />
      
      {/* Travel Concierge Section */}
      <section id="travel-concierge" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Personal 
              <span className="bg-gradient-tropical bg-clip-text text-transparent">
                Travel Concierge
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Let our AI-powered travel assistant help you discover amazing destinations tailored to your preferences. 
              Search by activity, location, or simply describe your dream vacation.
            </p>
            
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />
          </div>
          
          {/* Results */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                {searchQuery ? `Results for "${searchQuery}"` : "Trending Destinations"}
              </h3>
              <p className="text-muted-foreground">
                {searchQuery 
                  ? "Here are the best matches for your search" 
                  : "Discover the most popular travel destinations and experiences, handpicked by our travel experts"
                }
              </p>
            </div>
            <MasonryGrid />
          </div>
        </div>
      </section>
      
      {/* Interactive Map */}
      <InteractiveMap />
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;

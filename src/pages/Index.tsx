import HeroSection from "@/components/HeroSection";
import ChatWidget from "@/components/ChatWidget";
import MasonryGrid from "@/components/MasonryGrid";
import InteractiveMap from "@/components/InteractiveMap";
import QuizSection from "@/components/QuizSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Personalization Quiz */}
      <QuizSection />
      
      {/* Destinations Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Trending 
              <span className="bg-gradient-tropical bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most popular travel destinations and experiences, handpicked by our travel experts
            </p>
          </div>
          <MasonryGrid />
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

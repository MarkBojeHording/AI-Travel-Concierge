import { Button } from "@/components/ui/button";
import { MapPin, Plane, Compass } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Beautiful tropical destination" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="w-4 h-4 bg-accent rounded-full shadow-glow" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse delay-1000">
        <div className="w-3 h-3 bg-secondary rounded-full shadow-glow" />
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
        <div className="w-5 h-5 bg-primary-glow rounded-full shadow-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8 flex justify-center space-x-4 opacity-80">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
            <Compass className="w-6 h-6 text-white" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Your Journey
          <span className="block bg-gradient-to-r from-accent-glow to-secondary-glow bg-clip-text text-transparent">
            Begins Here
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover extraordinary destinations, plan perfect itineraries, and create unforgettable memories with our AI-powered travel concierge.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="hero-btn px-12 py-6 text-lg font-semibold bg-gradient-ocean hover:shadow-glow transition-bounce"
          >
            Start Exploring
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="hero-btn-outline px-12 py-6 text-lg font-semibold bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-bounce"
          >
            Plan Your Trip
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 opacity-90">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50K+</div>
            <div className="text-white/80">Destinations</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">1M+</div>
            <div className="text-white/80">Happy Travelers</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">99%</div>
            <div className="text-white/80">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
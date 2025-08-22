import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Share2, Heart } from "lucide-react";
import { useState } from "react";
import SocialShare from "./SocialShare";
import WeatherWidget from "./WeatherWidget";

interface RecommendationCardProps {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  rating: number;
  duration: string;
  price: string;
  category: string;
}

const RecommendationCard = ({
  title,
  location,
  description,
  image,
  rating,
  duration,
  price,
  category
}: RecommendationCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showShare, setShowShare] = useState(false);

  return (
    <Card className="travel-card masonry-item group cursor-pointer">
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
        
        {/* Floating Actions */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-smooth">
          <Button
            size="icon"
            variant="outline"
            className="w-8 h-8 bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="w-8 h-8 bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              setShowShare(!showShare);
            }}
          >
            <Share2 className="w-4 h-4 text-gray-600" />
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-gradient-tropical">
            {category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-card-foreground mb-1">{title}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
          <div className="flex items-center ml-4">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium ml-1">{rating}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
          <div className="font-semibold text-primary">
            {price}
          </div>
        </div>

        {/* Weather Widget */}
        <WeatherWidget location={location} className="mb-4" />

        {/* Social Share */}
        {showShare && (
          <div className="mb-4 p-3 bg-muted rounded-lg">
            <SocialShare 
              title={title}
              description={description}
              url={`${window.location.origin}/destination/${title.toLowerCase().replace(/\s+/g, '-')}`}
              image={image}
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            className="flex-1 transition-bounce hover:shadow-card"
          >
            Learn More
          </Button>
          <Button 
            className="flex-1 bg-gradient-ocean transition-bounce hover:shadow-ocean"
          >
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default RecommendationCard;
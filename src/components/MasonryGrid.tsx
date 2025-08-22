import { useState, useEffect } from "react";
import RecommendationCard from "./RecommendationCard";

interface Destination {
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

// Mock data for destinations
const mockDestinations: Destination[] = [
  {
    id: '1',
    title: 'Santorini Sunset Views',
    location: 'Santorini, Greece',
    description: 'Experience the world-famous sunset from Oia with its iconic blue-domed churches and dramatic cliff-side views. A magical evening awaits.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
    rating: 4.9,
    duration: '3-4 hours',
    price: 'From $85',
    category: 'Scenic'
  },
  {
    id: '2',
    title: 'Kyoto Temple Walk',
    location: 'Kyoto, Japan',
    description: 'Discover ancient temples, traditional gardens, and serene bamboo forests in Japan\'s cultural heart.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop',
    rating: 4.8,
    duration: 'Full day',
    price: 'From $120',
    category: 'Cultural'
  },
  {
    id: '3',
    title: 'Safari Adventure',
    location: 'Serengeti, Tanzania',
    description: 'Witness the great migration and spot the Big Five in one of Africa\'s most spectacular wildlife destinations.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop',
    rating: 4.9,
    duration: '5-7 days',
    price: 'From $2,400',
    category: 'Adventure'
  },
  {
    id: '4',
    title: 'Northern Lights Chase',
    location: 'Lapland, Finland',
    description: 'Hunt for the magical Aurora Borealis in the pristine wilderness of Finnish Lapland.',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=300&fit=crop',
    rating: 4.7,
    duration: '2-3 nights',
    price: 'From $450',
    category: 'Nature'
  },
  {
    id: '5',
    title: 'Machu Picchu Trek',
    location: 'Cusco, Peru',
    description: 'Journey through the ancient Inca Trail to reach the mystical lost city of Machu Picchu.',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=300&fit=crop',
    rating: 4.8,
    duration: '4-5 days',
    price: 'From $650',
    category: 'Adventure'
  },
  {
    id: '6',
    title: 'Maldives Overwater Villa',
    location: 'Maldives',
    description: 'Relax in luxury overwater bungalows surrounded by crystal-clear turquoise lagoons.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    rating: 4.9,
    duration: '5-7 nights',
    price: 'From $800/night',
    category: 'Luxury'
  },
  {
    id: '7',
    title: 'Swiss Alps Hiking',
    location: 'Zermatt, Switzerland',
    description: 'Trek through spectacular alpine meadows with the iconic Matterhorn as your backdrop.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    rating: 4.8,
    duration: '3-6 hours',
    price: 'From $65',
    category: 'Nature'
  },
  {
    id: '8',
    title: 'Bali Rice Terraces',
    location: 'Ubud, Bali',
    description: 'Explore ancient rice terraces and immerse yourself in Balinese culture and spirituality.',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop',
    rating: 4.6,
    duration: 'Half day',
    price: 'From $45',
    category: 'Cultural'
  }
];

const MasonryGrid = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading destinations
    setTimeout(() => {
      setDestinations(mockDestinations);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="masonry">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="masonry-item">
            <div className="bg-muted animate-pulse rounded-xl h-80" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="masonry">
      {destinations.map((destination) => (
        <RecommendationCard key={destination.id} {...destination} />
      ))}
    </div>
  );
};

export default MasonryGrid;
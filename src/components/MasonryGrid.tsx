import { useState } from "react";
import { useDestinations } from "@/hooks/useDestinations";
import RecommendationCard from "./RecommendationCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  rating: number;
  duration: string;
  price: string;
  category: string;
}

const MasonryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { data: destinations = [], isLoading, error, refetch } = useDestinations();

  const categories = ['all', 'Adventure', 'Cultural', 'Luxury', 'Nature', 'Scenic'];

  const filteredDestinations = selectedCategory === 'all'
    ? destinations
    : destinations.filter(dest => dest.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="space-y-6">
        {/* Category filter skeleton */}
        <div className="flex flex-wrap gap-2">
          {categories.map((_, index) => (
            <Skeleton key={index} className="h-8 w-20" />
          ))}
        </div>

        {/* Grid skeleton */}
        <div className="masonry">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="masonry-item">
              <Skeleton className="h-80 w-full rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="space-y-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Failed to load destinations. Please try again.
          </AlertDescription>
        </Alert>

        <Button
          onClick={() => refetch()}
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary/10 transition-colors"
            onClick={() => handleCategoryChange(category)}
          >
            {category === 'all' ? 'All Destinations' : category}
          </Badge>
        ))}
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
        {selectedCategory !== 'all' && ` in ${selectedCategory}`}
      </div>

      {/* Destinations Grid */}
      {filteredDestinations.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No destinations found for the selected category.
          </p>
        </div>
      ) : (
        <div className="masonry">
          {filteredDestinations.map((destination) => (
            <RecommendationCard
              key={destination.id}
              {...destination}
              title={destination.name} // Map name to title for compatibility
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MasonryGrid;

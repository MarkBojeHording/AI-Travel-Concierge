import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Users } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Where would you like to go? (e.g., 'hiking in Thailand' or 'cultural trips in Europe')" }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [quickFilters, setQuickFilters] = useState<string[]>([]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const popularSearches = [
    "Beach Paradise",
    "Mountain Adventures", 
    "City Breaks",
    "Cultural Tours",
    "Food & Wine",
    "Safari Expeditions"
  ];

  const toggleQuickFilter = (filter: string) => {
    setQuickFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Search Bar */}
      <div className="relative flex items-center bg-card rounded-xl shadow-card border border-border overflow-hidden">
        <div className="flex-1 flex items-center">
          <Search className="w-5 h-5 text-muted-foreground ml-4 mr-3" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="border-0 bg-transparent text-base flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <Button 
          onClick={handleSearch}
          className="bg-gradient-ocean text-white px-8 py-6 m-2 rounded-lg hover:shadow-ocean transition-smooth"
        >
          Explore Now
        </Button>
      </div>

      {/* Quick Filters */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <span className="text-sm text-muted-foreground mr-2">Popular:</span>
        {popularSearches.map((search) => (
          <Button
            key={search}
            variant="outline"
            size="sm"
            onClick={() => setSearchQuery(search)}
            className={`text-xs transition-smooth hover:bg-gradient-tropical hover:text-white hover:border-transparent ${
              quickFilters.includes(search) ? 'bg-gradient-tropical text-white border-transparent' : ''
            }`}
          >
            {search}
          </Button>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center justify-center p-4 bg-card rounded-lg border border-border hover:shadow-card transition-smooth cursor-pointer group">
          <MapPin className="w-5 h-5 text-primary mr-3 group-hover:text-primary-glow transition-smooth" />
          <div className="text-sm">
            <div className="font-medium text-card-foreground">Browse by Destination</div>
            <div className="text-muted-foreground">Explore by location</div>
          </div>
        </div>
        
        <div className="flex items-center justify-center p-4 bg-card rounded-lg border border-border hover:shadow-card transition-smooth cursor-pointer group">
          <Calendar className="w-5 h-5 text-primary mr-3 group-hover:text-primary-glow transition-smooth" />
          <div className="text-sm">
            <div className="font-medium text-card-foreground">Plan by Season</div>
            <div className="text-muted-foreground">Best times to travel</div>
          </div>
        </div>
        
        <div className="flex items-center justify-center p-4 bg-card rounded-lg border border-border hover:shadow-card transition-smooth cursor-pointer group">
          <Users className="w-5 h-5 text-primary mr-3 group-hover:text-primary-glow transition-smooth" />
          <div className="text-sm">
            <div className="font-medium text-card-foreground">Group Adventures</div>
            <div className="text-muted-foreground">Perfect for families</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
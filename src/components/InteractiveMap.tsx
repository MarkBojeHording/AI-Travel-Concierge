import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Layers } from "lucide-react";
import { useState } from "react";

interface MapLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: 'destination' | 'activity' | 'hotel';
}

const mockLocations: MapLocation[] = [
  { id: '1', name: 'Santorini', lat: 36.3932, lng: 25.4615, type: 'destination' },
  { id: '2', name: 'Kyoto', lat: 35.0116, lng: 135.7681, type: 'destination' },
  { id: '3', name: 'Serengeti', lat: -2.3333, lng: 34.8333, type: 'destination' },
  { id: '4', name: 'Lapland', lat: 68.0000, lng: 27.0000, type: 'destination' },
];

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [mapStyle, setMapStyle] = useState('satellite');

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Explore Destinations
            <span className="block bg-gradient-ocean bg-clip-text text-transparent">
              Around the World
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing places and plan your perfect journey with our interactive map
          </p>
        </div>

        <Card className="relative overflow-hidden shadow-ocean">
          {/* Map Controls */}
          <div className="absolute top-4 left-4 z-10 flex space-x-2">
            <Button
              size="sm"
              variant={mapStyle === 'satellite' ? 'default' : 'outline'}
              onClick={() => setMapStyle('satellite')}
              className="bg-white/90 backdrop-blur-sm"
            >
              <Layers className="w-4 h-4 mr-2" />
              Satellite
            </Button>
            <Button
              size="sm"
              variant={mapStyle === 'terrain' ? 'default' : 'outline'}
              onClick={() => setMapStyle('terrain')}
              className="bg-white/90 backdrop-blur-sm"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Terrain
            </Button>
          </div>

          {/* Map Placeholder */}
          <div className="relative h-96 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
              <p className="opacity-90">Map integration coming soon</p>
            </div>

            {/* Location Markers */}
            {mockLocations.map((location, index) => (
              <div
                key={location.id}
                className={`absolute cursor-pointer transition-bounce hover:scale-110 ${
                  index === 0 ? 'top-20 right-20' :
                  index === 1 ? 'top-32 left-32' :
                  index === 2 ? 'bottom-24 left-20' :
                  'bottom-32 right-32'
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="relative">
                  <div className="w-6 h-6 bg-accent rounded-full shadow-glow animate-pulse border-2 border-white" />
                  <div className="absolute -bottom-2 left-1/2 w-1 h-1 bg-accent rounded-full transform -translate-x-1/2" />
                </div>
                {selectedLocation?.id === location.id && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-800">{location.name}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Location Info Panel */}
          {selectedLocation && (
            <div className="p-6 bg-gradient-card border-t">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">{selectedLocation.name}</h4>
                  <p className="text-muted-foreground capitalize">{selectedLocation.type}</p>
                </div>
                <Button 
                  size="sm"
                  className="bg-gradient-ocean"
                >
                  View Details
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default InteractiveMap;
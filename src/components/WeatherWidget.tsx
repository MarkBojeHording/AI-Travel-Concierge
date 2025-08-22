import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Sun, CloudRain, Snowflake, Wind, Thermometer, Droplets } from "lucide-react";

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  description: string;
}

interface WeatherWidgetProps {
  location: string;
  className?: string;
}

const WeatherWidget = ({ location, className }: WeatherWidgetProps) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock weather data for now - replace with actual API call when API key is available
  useEffect(() => {
    const mockWeatherData: WeatherData[] = [
      {
        location: "Bali, Indonesia",
        temperature: 28,
        condition: "sunny",
        humidity: 75,
        windSpeed: 12,
        description: "Perfect for beach activities"
      },
      {
        location: "Tokyo, Japan",
        temperature: 22,
        condition: "cloudy",
        humidity: 60,
        windSpeed: 8,
        description: "Great for city exploration"
      },
      {
        location: "Paris, France",
        temperature: 18,
        condition: "rainy",
        humidity: 80,
        windSpeed: 15,
        description: "Perfect for museum visits"
      },
      {
        location: "Swiss Alps",
        temperature: 5,
        condition: "snowy",
        humidity: 90,
        windSpeed: 20,
        description: "Ideal skiing conditions"
      }
    ];

    // Simulate API call
    setTimeout(() => {
      const mockData = mockWeatherData.find(data => 
        data.location.toLowerCase().includes(location.toLowerCase())
      ) || mockWeatherData[0];
      
      setWeather(mockData);
      setLoading(false);
    }, 1000);
  }, [location]);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="w-5 h-5 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-5 h-5 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-5 h-5 text-blue-500" />;
      case 'snowy':
        return <Snowflake className="w-5 h-5 text-blue-200" />;
      default:
        return <Sun className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cloudy':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'rainy':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'snowy':
        return 'bg-blue-50 text-blue-700 border-blue-100';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (loading) {
    return (
      <Card className={`${className} animate-pulse`}>
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-muted rounded-full"></div>
            <div className="flex-1">
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!weather) return null;

  return (
    <Card className={`${className} hover:shadow-card transition-smooth`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            {getWeatherIcon(weather.condition)}
            <div>
              <div className="font-medium text-sm text-card-foreground">
                Current Weather
              </div>
              <div className="text-xs text-muted-foreground">
                {weather.location}
              </div>
            </div>
          </div>
          <Badge className={getConditionColor(weather.condition)}>
            {weather.condition}
          </Badge>
        </div>

        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="flex items-center space-x-1">
            <Thermometer className="w-3 h-3 text-muted-foreground" />
            <span className="font-medium">{weather.temperature}°C</span>
          </div>
          <div className="flex items-center space-x-1">
            <Droplets className="w-3 h-3 text-muted-foreground" />
            <span>{weather.humidity}%</span>
          </div>
          <div className="flex items-center space-x-1">
            <Wind className="w-3 h-3 text-muted-foreground" />
            <span>{weather.windSpeed}km/h</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {weather.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
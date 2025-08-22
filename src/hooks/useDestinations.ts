import { useQuery } from '@tanstack/react-query';
import { apiClient, Destination } from '@/lib/api';

export const useDestinations = () => {
  return useQuery({
    queryKey: ['destinations'],
    queryFn: () => apiClient.fetchDestinations(),
    // Use global defaults, no need to override here
  });
};

export const useDestinationsByCategory = (category?: string) => {
  return useQuery({
    queryKey: ['destinations', category],
    queryFn: async () => {
      const destinations = await apiClient.fetchDestinations();
      if (!category) return destinations;
      return destinations.filter(dest => dest.category === category);
    },
    // Use global defaults, no need to override here
  });
};

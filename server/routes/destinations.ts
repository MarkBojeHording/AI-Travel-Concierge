import { Router } from 'express';
import { base } from '../config/airtable';

const router = Router();

interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  location: string;
  rating: number;
  duration: string;
  price: string;
}

// GET /api/fetchDestinations
router.get('/fetchDestinations', async (req, res) => {
  try {
    console.log('📡 Fetching destinations from Airtable...');

    const records = await base('Destinations').select({
      view: 'Grid view'
    }).all();

    const destinations: Destination[] = records.map(record => ({
      id: record.id,
      name: record.get('Name') as string || 'Unknown Destination',
      description: record.get('Description') as string || 'No description available',
      image: record.get('Image') as string || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      category: record.get('Category') as string || 'General',
      location: record.get('Location') as string || 'Unknown Location',
      rating: parseFloat(record.get('Rating') as string) || 4.5,
      duration: record.get('Duration') as string || '1-2 days',
      price: record.get('Price') as string || 'From $100'
    }));

    console.log(`✅ Successfully fetched ${destinations.length} destinations`);

    res.json({
      success: true,
      data: destinations,
      count: destinations.length
    });

  } catch (error) {
    console.error('❌ Error fetching destinations:', error);

    // Return mock data as fallback
    const mockDestinations: Destination[] = [
      {
        id: '1',
        name: 'Santorini Sunset Views',
        location: 'Santorini, Greece',
        description: 'Experience the world-famous sunset from Oia with its iconic blue-domed churches and dramatic cliff-side views.',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
        rating: 4.9,
        duration: '3-4 hours',
        price: 'From $85',
        category: 'Scenic'
      },
      {
        id: '2',
        name: 'Kyoto Temple Walk',
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
        name: 'Safari Adventure',
        location: 'Serengeti, Tanzania',
        description: 'Witness the great migration and spot the Big Five in one of Africa\'s most spectacular wildlife destinations.',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop',
        rating: 4.9,
        duration: '5-7 days',
        price: 'From $2,400',
        category: 'Adventure'
      }
    ];

    res.status(500).json({
      success: false,
      error: 'Failed to fetch from Airtable, using fallback data',
      data: mockDestinations,
      count: mockDestinations.length
    });
  }
});

export { router as fetchDestinations };

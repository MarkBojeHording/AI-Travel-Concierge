import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import configurations with error handling
let fetchDestinations: any;
let generateResponse: any;

try {
  // Test Airtable configuration
  const { airtableConfig } = await import('./config/airtable.js');
  console.log('✅ Airtable configuration loaded:', airtableConfig);

  // Test OpenAI configuration
  const { openaiConfig } = await import('./config/openai.js');
  console.log('✅ OpenAI configuration loaded:', openaiConfig);

  // Import routes after successful configuration
  const destinationsModule = await import('./routes/destinations.js');
  const aiModule = await import('./routes/ai.js');

  fetchDestinations = destinationsModule.fetchDestinations;
  generateResponse = aiModule.generateResponse;

} catch (error) {
  console.error('❌ Configuration error:', error.message);
  console.log('📝 Please check your environment variables:');
  console.log('   - NEXT_PUBLIC_AIRTABLE_ACCESS_TOKEN');
  console.log('   - NEXT_PUBLIC_AIRTABLE_BASE_ID');
  console.log('   - OPENAI_API_KEY');
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Wrap the async initialization
const initializeServer = async () => {

// API Routes
app.use('/api', fetchDestinations);
app.use('/api', generateResponse);

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    services: {
      airtable: 'configured',
      openai: 'configured'
    }
  });
});

// Configuration check endpoint
app.get('/config', async (req, res) => {
  try {
    const { airtableConfig } = await import('./config/airtable.js');
    const { openaiConfig } = await import('./config/openai.js');

    res.json({
      airtable: airtableConfig,
      openai: openaiConfig,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});
};

// Start the server
initializeServer().catch((error) => {
  console.error('Failed to initialize server:', error);
  process.exit(1);
});

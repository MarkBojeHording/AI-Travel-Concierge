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
  const { airtableConfig } = require('./config/airtable');
  console.log('✅ Airtable configuration loaded:', airtableConfig);
  
  // Test OpenAI configuration
  const { openaiConfig } = require('./config/openai');
  console.log('✅ OpenAI configuration loaded:', openaiConfig);
  
  // Import routes after successful configuration
  const destinationsModule = require('./routes/destinations');
  const aiModule = require('./routes/ai');
  
  fetchDestinations = destinationsModule.fetchDestinations;
  generateResponse = aiModule.generateResponse;
  
} catch (error) {
  console.error('❌ Configuration error:', error.message);
  console.log('📝 Please check your environment variables:');
  console.log('   - AIRTABLE_API_KEY');
  console.log('   - AIRTABLE_BASE_ID');
  console.log('   - OPENAI_API_KEY');
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

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
app.get('/config', (req, res) => {
  try {
    const { airtableConfig } = require('./config/airtable');
    const { openaiConfig } = require('./config/openai');
    
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

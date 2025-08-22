import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error('OPENAI_API_KEY environment variable is required.');
}

// Initialize OpenAI with the API key
const openai = new OpenAI({
  apiKey: openaiApiKey,
});

export { openai };

// Export configuration for debugging
export const openaiConfig = {
  hasApiKey: !!openaiApiKey,
  // Don't expose the actual API key for security
};

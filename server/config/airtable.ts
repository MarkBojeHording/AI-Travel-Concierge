import Airtable from 'airtable';
import dotenv from 'dotenv';

dotenv.config();

const airtableAccessToken = process.env.AIRTABLE_API_KEY;
const airtableBaseId = process.env.AIRTABLE_BASE_ID;

if (!airtableAccessToken) {
  throw new Error('AIRTABLE_API_KEY environment variable is required.');
}

if (!airtableBaseId) {
  throw new Error('AIRTABLE_BASE_ID environment variable is required.');
}

// Configure Airtable with the access token
Airtable.configure({ apiKey: airtableAccessToken });

// Create and export the base instance
const base = Airtable.base(airtableBaseId);

export { base };

// Export configuration for debugging
export const airtableConfig = {
  hasApiKey: !!airtableAccessToken,
  hasBaseId: !!airtableBaseId,
  baseId: airtableBaseId,
  // Don't expose the actual API key for security
};

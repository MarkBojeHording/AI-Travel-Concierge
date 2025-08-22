#!/usr/bin/env node

const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../.env.local') });

console.log('🔍 Validating AI Travel Concierge Configuration...\n');

const requiredVars = [
  'AIRTABLE_API_KEY',
  'AIRTABLE_BASE_ID',
  'OPENAI_API_KEY'
];

const missingVars = [];
const presentVars = [];

requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (!value) {
    missingVars.push(varName);
  } else {
    presentVars.push(varName);
  }
});

console.log('✅ Present environment variables:');
presentVars.forEach(varName => {
  console.log(`   ${varName}: ${process.env[varName] ? '✓ Set' : '✗ Missing'}`);
});

if (missingVars.length > 0) {
  console.log('\n❌ Missing environment variables:');
  missingVars.forEach(varName => {
    console.log(`   ${varName}: ✗ Missing`);
  });

  console.log('\n📝 Setup Instructions:');
  console.log('1. Copy env.example to .env.local:');
  console.log('   cp env.example .env.local');
  console.log('\n2. Edit .env.local and add your API keys:');
  console.log('   - Get Airtable API key from: https://airtable.com/account');
  console.log('   - Get OpenAI API key from: https://platform.openai.com/api-keys');
  console.log('\n3. For Airtable Base ID:');
  console.log('   - Open your Airtable base');
  console.log('   - Look at the URL: https://airtable.com/appXXXXXXXXXXXXXX/...');
  console.log('   - The Base ID is the "appXXXXXXXXXXXXXX" part');

  process.exit(1);
} else {
  console.log('\n🎉 All environment variables are configured!');
  console.log('You can now start the server with: npm run dev:server');
}

import { Client } from '@elastic/elasticsearch';

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const client = new Client({
  cloud: { id: process.env.ELASTIC_CLOUD_ID },
  auth: { apiKey: process.env.ELASTIC_API_KEY }
});

const testConnection = async () => {
  try {
    const response = await client.info();
    console.log('Connection successful:', response);
  } catch (error) {
    console.error('Connection failed:', error);
  }
};

testConnection();
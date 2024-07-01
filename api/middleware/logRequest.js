import { Client } from '@elastic/elasticsearch';

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const client = new Client({
  cloud: { id: process.env.ELASTIC_CLOUD_ID },
  auth: { apiKey: process.env.ELASTIC_API_KEY }
});

const logRequest = async (req, res, next) => {
  const requestData = {
    method: req.method,
    fullUrl:`${req.protocol}://${req.get('host')}${req.originalUrl}`,
    originalUrl: req.originalUrl,
    url: req.url,
    headers: req.headers,
    body: req.body,
    timestamp: new Date().toISOString()
  };

  // Log request data asynchronously
  setImmediate(async () => {
    try {
      const response = await client.index({
        index: 'dev.jay.local.requests',
        document: requestData
      });

      if (response.result !== 'created') {
        console.error('Failed to send data to Elasticsearch:', response.body);
      }
    } catch (error) {
      console.error('Error sending data to Elasticsearch:', error);
    }
  });

  next();
};

export default logRequest;

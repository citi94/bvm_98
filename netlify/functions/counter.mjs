import fs from 'fs';
import path from 'path';

export default async (req, context) => {
  const countFile = '/tmp/visitor_count.json';
  
  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
      }
    });
  }
  
  try {
    let count = 0;
    
    // Try to read existing count
    try {
      if (fs.existsSync(countFile)) {
        const data = fs.readFileSync(countFile, 'utf8');
        const parsed = JSON.parse(data);
        count = parsed.count || 0;
      }
    } catch (e) {
      // If file doesn't exist or is corrupted, start from 0
      count = 0;
    }
    
    // Increment counter
    count++;
    
    // Save new count
    try {
      fs.writeFileSync(countFile, JSON.stringify({ count, lastVisit: new Date().toISOString() }));
    } catch (e) {
      console.error('Error writing count file:', e);
    }
    
    // Return the count
    return new Response(JSON.stringify({ 
      count: count,
      formatted: count.toString().padStart(6, '0')
    }), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json'
      }
    });
    
  } catch (error) {
    console.error('Counter error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    });
  }
};
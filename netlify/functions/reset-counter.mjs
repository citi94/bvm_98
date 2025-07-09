import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const store = getStore("visitor-metrics");
  
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
    // Reset counter to 0
    await store.set("visitor-count", "0");
    
    // Return confirmation
    return new Response(JSON.stringify({ 
      message: "Counter reset to 0",
      count: 0,
      formatted: "000000"
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
    console.error('Reset counter error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    });
  }
};
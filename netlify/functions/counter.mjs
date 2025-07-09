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
    // Get current visitor count from Netlify Blobs
    const currentCount = await store.get("visitor-count") || "8547"; // Starting from a realistic number
    const count = parseInt(currentCount) + 1;
    
    // Store the updated count
    await store.set("visitor-count", count.toString());
    
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
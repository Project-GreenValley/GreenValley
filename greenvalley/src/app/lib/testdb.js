const { Pool } = require('pg');

// Your database URI
// "postgresql://postgres.iwabblvxcsqybyufmkwx:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres";
const myURI = "postgresql://postgres.qjzxsxtctxkpptkqhjxc:Vwnh6Jw5MxbG1VQr@aws-0-us-east-2.pooler.supabase.com:5432/postgres";



const URI = process.env.PG_URI || myURI;

// Create a new Pool
const pool = new Pool({
  connectionString: URI,
  ssl: {
    rejectUnauthorized: false, // Allow self-signed certificates (needed for some Supabase instances)
  }
});

// Test the connection
async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Successfully connected to the database!');
    client.release(); // Release the client back to the pool
  } catch (error) {
    console.error('Database connection failed:', error.message);
  } finally {
    pool.end(); // Close the pool to exit the script
  }
}

// Run the test
testConnection();
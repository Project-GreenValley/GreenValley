// lib/db.ts
const { Pool } = require ('pg');
const dotenv = require('dotenv');
dotenv.config(); // ✅ loads variables from .env.local (if not auto-loaded)
const pool = new Pool({
  connectionString:
    'postgresql://postgres.qjzxsxtctxkpptkqhjxc:Vwnh6Jw5MxbG1VQr@aws-0-us-east-2.pooler.supabase.com:5432/postgres',
  //   ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

module.exports = {
  // query: (text: string, params:params, callback: object) => {
  query: (text: string, params: any, callback: object) => {
    console.log('executed query', text);
    // return pool.query(text, params, callback)
    return pool.query(text, params, callback);
  },
};
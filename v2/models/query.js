// import dotenv from 'dotenv';
// import { Pool } from 'pg';

// dotenv.config();

// const env = process.env.NODE_ENV;
// const database_url = env === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL;

// const pool = new Pool({
//   connectionString: database_url,
// });

// export default {
//   query(text, params) {
//     return new Promise(() => {
//       pool.query(text, params);
//     });
//   },
// };

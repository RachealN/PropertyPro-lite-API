import dotenv from 'dotenv';

dotenv.config();


const env = process.env.NODE_ENV;
const database_url = env === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL;

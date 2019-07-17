import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const env = process.env.NODE_ENV;
const database_url = env === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: database_url,
});

pool.on('connect', () => {
  console.log('Connected to propertypro lite db Successfully');
});


// eslint-disable-next-line import/prefer-default-export
export const createTables = async () => {
  const userTables = `CREATE TABLE IF NOT EXISTS users
    (   id SERIAL PRIMARY KEY    NOT NULL,
    firstName   VARCHAR(255)     NOT NULL,
    lastName    VARCHAR(255)     NOT NULL,
    address     VARCHAR(255)     NOT NULL,
    email       VARCHAR(255)     NOT NULL,
    password    VARCHAR(255)     NOT NULL,
    isAdmin     BOOLEAN    NOT NULL)`;


  const propertyTables = `CREATE TABLE IF NOT EXISTS properties
  (   id SERIAL PRIMARY KEY    NOT NULL,
  price   FLOAT    NOT NULL,
  city      VARCHAR(100)     NOT NULL,
  state     VARCHAR(25)     NOT NULL,
  address    VARCHAR(255)     NOT NULL,
  phoneNumber  INTEGER  NOT NULL,
  status VARCHAR(100)  DEFAULT 'availlable',
  reason     VARCHAR(255)     NOT NULL,
  description      VARCHAR(255)     NOT NULL,
  createdOn  TIMESTAMP DEFAULT NOW())`;


  await pool.query(userTables, (err, res) => {
    if (err) {
      console.log(err);

    }
    console.log(res);
  });
  await pool.query(propertyTables, (err, res) => {
    if (err) {
      console.log(err);

    }
    console.log(res);
  });
};


require('make-runnable');

export default pool;

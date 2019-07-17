import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = {
  user: process.env.DB_USER,
  password: process.env.BD_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,

};

const pool = new Pool(connectionString);


pool.on('connect', () => {
  console.log('Connected to booklib db Successfully');
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
    isAdmin     BOOLEAN    NOT NULL
              )`;


  const propertyTables = `CREATE TABLE IF NOT EXISTS properties
  (   id SERIAL PRIMARY KEY    NOT NULL,
  price   FLOAT    NOT NULL,
  city      VARCHAR(100)     NOT NULL,
  state     VARCHAR(25)     NOT NULL,
  address    VARCHAR(255)     NOT NULL,
  phoneNumber  INTEGER  NOT NULL,
  status VARCHAR(100)  DEFAULT 'sold',
  createdOn  TIMESTAMP DEFAULT NOW(),
  ownerEmail     VARCHAR(255)     NOT NULL,
  ownerPhoneNumber      INTEGER     NOT NULL
  
  

            )`;

  const flagTables = `CREATE TABLE IF NOT EXISTS flags
    (   id SERIAL PRIMARY KEY,
    propertyId   VARCHAR(255)     NOT NULL,
    createdOn  TIMESTAMP DEFAULT NOW(),
    reason     VARCHAR(255)     NOT NULL,
    description      VARCHAR(255)     NOT NULL
    

              )`;
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
  await pool.query(flagTables, (err, res) => {
    if (err) {
      console.log(err);

    }
    console.log(res);

  });
};


pool.on('remove', () => {
  process.exit(0);
});

require('make-runnable');

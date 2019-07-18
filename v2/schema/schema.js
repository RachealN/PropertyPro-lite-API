import bcrypt from 'bcryptjs';
import pool from '../models/db';


 const Userschema = (values) => {
  const query = 'INSERT INTO users(firstName,lastName, address, email, password, isAdmin) VALUES($1,$2,$3,$4,$5,$6) RETURNING *';
  try { return pool.query(query, values); } catch (error) {
    return (0);
  }
};

const checkEmail = (data) => {
  const queryEmail = `SELECT * FROM users WHERE email ='${data}'`;
  try { return pool.query(queryEmail); } catch (error) {
    console.log(error)
    return (0);
  }
};

export default {Userschema,checkEmail};

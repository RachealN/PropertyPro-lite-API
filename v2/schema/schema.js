import bcrypt from 'bcryptjs';
import pool from '../models/db';


const Userschema = async (values) => {
  const query = 'INSERT INTO users(firstName,lastName, address, email, password, isAdmin) VALUES($1,$2,$3,$4,$5,$6) RETURNING *';
  try { return await pool.query(query, values); } catch (error) {
    return (0);
  }
};

const loginSchema = async(loginValues) => {
  const loginQuery = `SELECT * FROM users WHERE email  = '${loginValues.email}' and password= '${loginValues.password}'` ;
  try { return await pool.query(loginQuery); } catch (error) {
    console.log(error)
    return (0);
  }
};


const checkEmail = async(data) => {
  const queryEmail = `SELECT * FROM users WHERE email ='${data}'`;
  try { return await pool.query(queryEmail); } catch (error) {
    console.log(error)
    return (0);
  }
};

const updateAdvert = async(data,id) => {
  const updateId = 
  `UPDATE properties set price=$1,city=$2,state=$3,address=$4,status=$5,type=$6 WHERE id = '${id}' RETURNING * `;
  try { return await pool.query(updateId,data); } catch (error) {
    console.log(error)
    return (0);
  }
};

const markPro = async(marks,id) => {
  const mark = `UPDATE properties set status=$1 WHERE id ='${id}' RETURNING *`;
  try {
   return await pool.query(mark,marks ); } catch (error) {
    console.log(error)
    return (0);
  }
};

const propertySchema = (values) => {
  const propQuery = 'INSERT INTO properties(price,city, state, address, status,type) VALUES($1,$2,$3,$4,$5,$6) RETURNING *';
  try { return pool.query(propQuery, values); } catch (error) {
    return (0);
  }
};

export default {Userschema,checkEmail,propertySchema,loginSchema,updateAdvert,markPro};

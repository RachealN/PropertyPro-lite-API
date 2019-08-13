import pool from '../models/db';



const checkImage = async(pic) =>{
  const queryImage = `SELECT * FROM properties WHERE image_url = '${pic}'`;
  try { return await pool.query(queryImage); } catch (error) {
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

const getProperty = async(id) => {
  const getId = `SELECT * FROM properties  WHERE id = '${id}' RETURNING * `;
  try { return await pool.query(getId); } catch (error) {
    console.log(error)
    return (0);
  }
};

const getAllProperty = async() => {
  const getPro = `SELECT * FROM properties * `;
  try { return await pool.query(getPro); } catch (error) {
    console.log(error)
    return (0);
  }
};

const deleteProp = async(id) => {
  const getId = `DELETE FROM properties  WHERE id = '${id}' RETURNING *`;
  try { return await pool.query(getId); } catch (error) {
    console.log(error)
    return (0);
  }
};


const markStatus  = async(marked,id) => {
  const markId = `UPDATE properties set status=$1 WHERE id = '${id}' RETURNING * `;
  try { return await pool.query(markId,marked); } catch (error) {
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

export default {checkImage,propertySchema,updateAdvert,markStatus,getProperty,deleteProp,getAllProperty};

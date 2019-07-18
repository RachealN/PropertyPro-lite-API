import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import pool from '../models/db';
import schemaValues from '../schema/schema';
import Validations from '../middleware/validation';


class UserDb {
  // create user account
  static async registerUsers(req, res) {
    const { error } = Validations.registerValidations(req.body);
    if (error) {
      return {
        'status': 400,
        'message': error.details[0].message,
      };
    }
    const value = await schemaValues.checkEmail(req.body.email);
    console.log('uuuuuuuuuuu',value.rows.length)
    if (value.rows.length > 0) {
      return res.status(400).send({ 'status': 400, 'error': 'User already exists' });
    }
    const data = [req.body.firstname, req.body.lastname, req.body.address, req.body.email, req.body.password, req.body.isadmin];
    const {rows}  =  await schemaValues.Userschema(data);
    const user = rows[0];
    const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: 86400, // expires in 24 hours
    });

    res.status(201).json({
      status: 201,
      message: 'success',
      data: {
        token,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        address: user.address,
        isadmin: user.isadmin,
      },
    });


  }
}
export default UserDb;
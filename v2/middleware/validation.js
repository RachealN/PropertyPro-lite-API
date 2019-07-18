// const Joi = require('joi');

// const properties = require('../controllers/property');
import Joi from 'joi';

class Validations {
  // validate post property details
  registerValidations(postData) {
    const schema = {
      firstname: Joi.string().min(3).max(15).required(),
      lastname: Joi.string().min(3).max(25).required(),
      address: Joi.string().min(5).max(25).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(3).max(15).required(),
      isadmin: Joi.bool().valid(true, false).required(),
    };
    return Joi.validate(postData, schema);
  }


}

const validate = new Validations();
// module.exports = validate;
export default validate;

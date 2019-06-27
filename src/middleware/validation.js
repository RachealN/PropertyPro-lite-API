const Joi = require('joi');

const properties = require('../controllers/property');

class Validations{
    postValidation(postData){
        const schema = {
            status:Joi.string().min(4).required(),
            price:Joi.number().required(),
            state:Joi.string().min(3).required(),
            city:Joi.string().min(3).required(),
            address:Joi.string().min(5).required(),
            type:Joi.string().required(),
            image_url:Joi.string().required()
        };
    return Joi.validate(postData,schema);
    }

    markValidation(markData){
        const schema = {
            status:Joi.string().min(4).required()
        };
    return Joi.validate(markData,schema);
    }

    signupValidation(signupData){
        const schema = {
            email: Joi.string().email().required(),
            firstName: Joi.string().min(3).max(15).required(),
            lastName: Joi.string().min(3).max(25).required(),
            password: Joi.string().min(6).max(15).required(),
            phoneNumber: Joi.number().positive().required(),
            address: Joi.string().min(5).max(25).required(),
            isAdmin:Joi.bool().valid(true, false).required(),

        };
        return Joi.validate(signupData,schema)
    }
}

const validate = new Validations();
module.exports = validate;
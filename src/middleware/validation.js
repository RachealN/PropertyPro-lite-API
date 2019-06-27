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
        const schema ={
            status:Joi.string().min(4).required()
        };
    return Joi.validate(markData,schema);
    }
}

const validate = new Validations();
module.exports = validate;
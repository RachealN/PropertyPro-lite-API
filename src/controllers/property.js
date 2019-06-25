const {Properties,propertyArray} = require('../models/property')
const Validations = require('../middleware/validation')

class PropertyController{
    static viewProperties(req,res){
        return{
            "status":"success",
            "data":propertyArray
        };
    }

    static postProperty(req,res){

        const {error} = Validations.postValidation(req.body);
		if(error){
		return {
            "status":400,
            "message":error.details[0].message  
                };
                    
            }
        const data = new Properties({
            Id:propertyArray.length + 1,
            owner:propertyArray.length + 1,
            status:req.body.status,
            price:req.body.price,
            state:req.body.state,
            city:req.body.city,
            address:req.body.address,
            type:req.body.type,
            created_on: new Date(),
            image_url:req.body.image_url
            
        });
        propertyArray.push(data);
                return{
                    "status":"success",
                    data

                };

    }
}

module.exports = PropertyController
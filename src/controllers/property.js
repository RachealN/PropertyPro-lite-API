import {Properties,propertyArray} from '../models/property';
import Validations from '../middleware/validation';

class PropertyController{
    //view all properties
    static viewProperties(req,res){
        return{
            "status":"success",
            "data":propertyArray
        };
    }
    //create a new property
    static postProperty(req,res){
    //validate post property function
        const {error} = Validations.postValidation(req.body);
        if(error){
            return {
                "status":400,
                "message":error.details[0].message  
                    };
                        
                }
        const property = new Properties({
            // Id:propertyArray.length + 1,
            // owner:propertyArray.length + 1,
            status:req.body.status,
            price:req.body.price,
            state:req.body.state,
            city:req.body.city,
            address:req.body.address,
            type:req.body.type,
            created_on: new Date(),
            image_url:req.body.image_url
            
        });
        propertyArray.push(property);
                return{
                    "status":"success",
                    "data":property

                };

    }
    //view aspecific property
    static viewSpecificProperty(req,res){
        const view_id = propertyArray.find(check_id => check_id.Id === parseInt(req.params.id));

        if(!view_id){
            return{
                "status":"error",
                "Error":"Id not found"
            };
        }
        return{
            "status":"success",
            "data":view_id
        }
    }
    //mark property as sold
    static  markProperty(req,res){
    //validate mark property details as sold
        const {error} = Validations.markValidation(req.body);
        if(error){
            return {
                "status":400,
                "message":error.details[0].message  
                    };
                        
                }
        const Property = propertyArray.find(check_id =>check_id.Id === parseInt(req.params.id));

        if(Property){
            (Property.status = req.body.status)
            return{
                "status":"success",
                "data":Property
            };
        }
    return{
        "status":"Error",
        "Error":"property_id not found"
    }
}
    //delete property
    static deleteProperty(req,res){
        const view_id = propertyArray.find(check_id => check_id.Id === parseInt(req.params.id));
    if(!view_id){
        return{
            "status":"error",
            "Error":"Property_id not found"
        };
    }
    const index = propertyArray.indexOf(view_id);
    propertyArray.splice(index,1);
    return{
        "status":"success",
        "message":"deleted succesfully",
        "data":view_id,
        
        
    };
    }
    //update property
    static updateProperty(req,res){
    //validate update property
        const {error} = Validations.postValidation(req.body);
        if(error){
            return {
                "status":400,
                "message":error.details[0].message  
                    };
                        
                }
        const newProperty = propertyArray.find(check_id => check_id.Id ===parseInt(req.params.id));
        
        if(newProperty){
            (newProperty.status = req.body.status, newProperty.price = req.body.price, newProperty.state = req.body.state,
            newProperty.city = req.body.city, newProperty.address = req.body.address, newProperty.type = req.body.type,
            newProperty.image_url = req.body.image_url)
            

            return{
                "status":"success",
                "data":newProperty
            };
        }
        return{
            "status":"Error",
            "Error":"property_id not found"
        }
    }

    
}


export default PropertyController;
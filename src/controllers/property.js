import {Properties,propertyArray} from '../models/property';
import Validations from '../middleware/validation';
import cloudinary from 'cloudinary';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dvgrmblh2/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'cakgs8ec';
cloudinary.config({
    cloud_name: 'dvgrmblh2',
    api_key: '946915525975576',
    api_secret: 'T2ssd6NXKPjWaSkmd3tjd_OrRYM',
  });

class PropertyController{
    //view all properties
    static viewProperties(req,res){
        return{
            "status":200,
            "message":"Properties are succesfully retrieved",
            "data":propertyArray
        };
    }
    //create a new property
    static postProperty(req,res){
    //validate post property function
        // const {error} = Validations.postValidation(req.body);
        // if(error){
        //     return {
        //         "status":400,
        //         "message":error.details[0].message  
        //             };
                        
        //         }
        
        const propertyResult = propertyArray.find(props => req.body === props);
        if(propertyResult) return{
                    "status":404,
                    "Message":"Property with that image already exists"
                };
        else{
       
        const image = req.files.image.path;
        cloudinary.uploader.upload(image, (result, error) => {
            if (error) {
                responses.response(res, 404, error, true);
              }
            
            
        const property = new Properties({
            Id:propertyArray.length + 1,
            owner:propertyArray.length + 1,
            status:req.body.status,
            price:req.body.price,
            state:req.body.state,
            city:req.body.city,
            address:req.body.address,
            type:req.body.type,
            created_on: new Date(),
            image_url:result.url,
            
        });
        console.log("result:",result)
        propertyArray.push(property);
        console.log(property);
            return res.status(201).json ({
                    "status":201,
                    "message":"property succesfully created",
                    "data":property

                });
            })

    }
}
    //view aspecific property
    static viewSpecificProperty(req,res){
        console.log(res);
        const view_id = propertyArray.find(check_id => check_id.Id === parseInt(req.params.id));

        if(!view_id){
            return res.status(404).json({
                "status":404,
                "messsage":" PropertyId not found"
            });
        }
        return{
            "status":200,
            "message":"Property successfully retrieved",
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
                "status":200,
                "message":"property status successfully edited ",
                "data":Property
            };
        }
        return res.status(404).json({
            "status":404,
            "messsage":" PropertyId not found"
        });
}
    //delete property
    static deleteProperty(req,res){
        const view_id = propertyArray.find(check_id => check_id.Id === parseInt(req.params.id));
    if(!view_id){
        return res.status(404).json({
            "status":404,
            "messsage":" PropertyId not found"
        });
    }
    const index = propertyArray.indexOf(view_id);
    propertyArray.splice(index,1);
    return{
        "status":200,
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
                "status":201,
                "message":"succesfully updated",
                "data":newProperty
            };
        }
        return res.status(404).json({
            "status":404,
            "messsage":" PropertyId not found"
        });
    }

    
}


export default PropertyController;
import h from '../schema/schema';
import Validations from '../middleware/validation';


class PropertyDb{
    static async createProperty(req, res){
        
        const { error } = Validations.createValidation(req.body);
        if (error) {    
        return res.status(400).json ({
            'status': 400,
            'message': error.details[0].message,
        });
        }else{
           
        const data = [req.body.price, req.body.city, req.body.state, req.body.address, req.body.status,req.body.type];
        const {rows}  =  await h.propertySchema (data);
        const prop = rows[0];
        res.status(201).json({
            status: 201,
            message: 'success',
            data: {
              price: prop.price,
              city: prop.city,
              state: prop.state,
              address: prop.address,
              phonenumber: prop.phonenumber,
              status:prop.status,
              type:prop.type
            },

        });
    }
    
    }

}

export default PropertyDb;
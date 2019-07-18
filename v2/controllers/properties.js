import pro from '../schema/schema';
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
        const {rows}  =  await pro.propertySchema (data);
        const prop = rows[0];
        res.status(201).json({
            status: 201,
            message: 'success',
            data: {
              id:prop.id,
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
    static async updateProperty(req, res){
        
        const { error } = Validations.createValidation(req.body);
        if (error) {    
        return res.status(400).json ({
            'status': 400,
            'message': error.details[0].message,
        });
        }else{
            const updateData = [req.body.price, req.body.city, req.body.state, req.body.address, req.body.status,req.body.type];
            console.log("++++++++",updateData)
            const {rows}  =  await pro.updateAdvert (updateData);
            console.log("--------",rows)
            
            const patchData = rows;
            
            
            return res.status(201).json({
                status: 201,
                message: 'success',
                data: {
                price: updateData[0],
                city: updateData[1],
                state: updateData[2],
                address: updateData[3],
                phonenumber: updateData[4],
                status:updateData[5],
                type:updateData[6],
                },

        });
        }

}
}
export default PropertyDb;
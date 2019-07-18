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
            const {price,city,state,address,status,type} = req.body
            const updateData = [price,city,state,address,status,type];
            const updatedData  =  await pro.updateAdvert (updateData,req.params.id);
        
            return res.status(201).json({
                status: 201,
                message: 'success',
                data:updatedData.rows[0]
                    
                

        });
        }

}
        static async getAllProperty(req, res){
                const get_all =  await pro.getAllProperty ();
            
                return res.status(201).json({
                    status: 201,
                    message: 'success',
                    data:get_all
            });
        

        }

        static async markProperty(req, res){
            
        const { error } = Validations.markValidation(req.body);
        if (error) {    
        return res.status(400).json ({
            'status': 400,
            'message': error.details[0].message,
        });
        }else{
            const {status} = req.body
            const markData = [status];
            const marked =  await pro.getProperty (markData,req.params.id);

            return res.status(201).json({
                status: 201,
            message: 'success',
            data: {
            status: marked.rows[0]
            
            },

    });
    }

}

static async getProperty(req, res){
        const {status} = req.body
        const markData = [status];
        const marked =  await pro.markPro (markData,req.params.id);

        return res.status(201).json({
            status: 201,
        message: 'success',
        data: {
        status: marked.rows[0]
        
        },

});

}
static async deleteProperty(req, res){
    await pro.deleteProp(req.params.id);

    return res.status(201).json({
        status: 201,
    message: 'deleted succesfully',
    data: {},

});

}

}
export default PropertyDb;
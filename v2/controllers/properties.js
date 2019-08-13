import pro from '../schema/proSchema';
import Validations from '../middleware/validation';
import Authorization from '../middleware/auth';
import cloudinary from 'cloudinary';

// const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dvgrmblh2/image/upload';
// const CLOUDINARY_UPLOAD_PRESET = 'cakgs8ec';
// cloudinary.config({
//     cloud_name: 'dvgrmblh2',
//     api_key: '946915525975576',
//     api_secret: 'T2ssd6NXKPjWaSkmd3tjd_OrRYM',
//   });

const{ CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET}=process.env;
cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});


class PropertyDb{
    static async createProperty(req, res){
        
        // const { error } = Validations.createValidation(req.body);
        // if (error) {    
        // return res.status(400).json ({
        //     'status': 400,
        //     'message': error.details[0].message,
        // });
        // }else
        {
        
        const pic = await pro.checkImage(req.body.image_url);
        console.log('kkkkkkkkkkkkk',pic.rows.length)
        if (pic.rows.length > 0){
            return res.status(400).send({ 'status':400, 'error':'Image already exists'});
        }

        const image = await req.files.image.path;
        console.log('mmmmmmmmmmmmmmmmmmmmmmmm',image)
        cloudinary.uploader.upload(image, async(result, error) => {
            if (error) {
                responses.response(res, 404, error, true);
              }
              
        const data = [req.body.price, req.body.city, req.body.state, req.body.address, req.body.status,req.body.type];
        console.log(data)
        const {rows}  =   pro.propertySchema (data);
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
              type:prop.type,
              image_url:result.url
            },
        
        
        });
    
    
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
            console.log(updateData);
            const updatedData  =  await pro.updateAdvert (updateData,req.params.id);
        
            return res.status(201).json({
                status: 201,
                message: 'success',
                data:updatedData.rows[0]
                    
                

        });
        }

}
        static async getAll(req,res){
                const get_all =  await pro.getAllProperty();
                return res.status(200).json({
                    status: 200,
                    message: 'success',
                    data:get_all.rows
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
            const marked =  await pro.markStatus(markData,req.params.id);

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

        return res.status(200).json({
            status: 200,
            message: 'success',
        data: {
        status: marked.rows[0]
        
        },

});

}
static async deleteProperty(req, res){
    await pro.deleteProp(req.params.id);

    return res.status(200).json({
        status: 200,
    message: 'deleted succesfully',
    
});

}

}
export default PropertyDb;
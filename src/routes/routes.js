import express from 'express';
import connect from 'connect-multiparty';
import fileUpload from 'express-fileuploader';
import PropertyController from '../controllers/property';
import UserController from '../controllers/user';
import Authorization from '../middleware/auth';


const router = express.Router();
const app = express();
const connection = connect();


router.get('/api/property',Authorization.verifyToken,(req,res) =>{
    res.json(PropertyController.viewProperties(req,res));
});

router.post('/api/property',connection,Authorization.verifyToken,(req,res) =>{
    PropertyController.postProperty(req,res);
});

router.get('/api/property/:id',Authorization.verifyToken,(req,res) =>{
    res.json(PropertyController.viewSpecificProperty(req,res));
});

router.patch('/api/property/:id/sold',Authorization.verifyToken,(req,res) =>{
    res.status(201).json(PropertyController.markProperty(req,res));
});

router.delete('/api/property/:id',Authorization.verifyToken,(req,res) =>{
    res.json(PropertyController.deleteProperty(req,res));
});


router.patch('/api/property/:id',Authorization.verifyToken,(req,res) =>{
    res.status(201).json(PropertyController.updateProperty(req,res));
});


//user routes
router.post('/api/auth/signUp',(req,res)=>{
    res.status(201).json(UserController.signUp(req,res));
});

router.post('/api/auth/signIn',(req,res) =>{
    res.status(201).json(UserController.login(req,res));
});

router.get('/api/users',Authorization.verifyToken,(req,res) =>{
    res.json(UserController.getUsers(req,res));
});

router.get('/api/users/:id',(req,res) =>{
    res.json(UserController.getUser(req,res));
});

router.delete('/api/users/:id',(req,res) =>{
    res.json(UserController.deleteUser(req,res));
});

router.put('/api/users/:id',(req,res) =>{
    res.status(201).json(UserController.updateUser(req,res));
});

router.patch('/api/users/:id',(req,res) =>{
    res.status(201).json(UserController.patchUser(req,res));
});



// module.exports= router;
export default router;
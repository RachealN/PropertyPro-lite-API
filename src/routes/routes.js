const express = require('express');
const router = express.Router();

const app = express()

const PropertyController = require('../controllers/property')
const UserController = require('../controllers/user')
const Authorization = require('../middleware/auth')


router.get('/api/property',(req,res) =>{
    res.json(PropertyController.viewProperties(req));
});

router.post('/api/property',(req,res) =>{
    res.status(201).json(PropertyController.postProperty(req));
});

router.get('/api/property/:id',(req,res) =>{
    res.json(PropertyController.viewSpecificProperty(req));
});

router.patch('/api/property/:id/sold',(req,res) =>{
    res.status(201).json(PropertyController.markProperty(req));
});

router.delete('/api/property/:id',(req,res) =>{
    res.json(PropertyController.deleteProperty(req));
});


router.patch('/api/property/:id',(req,res) =>{
    res.status(201).json(PropertyController.updateProperty(req));
});

router.post('/api/auth/signUp',(req,res)=>{
    res.status(201).json(UserController.signUp(req));
});

router.post('/api/auth/signIn',(req,res) =>{
    res.status(201).json(UserController.login(req));
});

router.get('/api/users',(req,res) =>{
    res.json(UserController.getUsers(req));
});

router.post('/api/users',(req,res) =>{
    res.status(201).json(UserController.createUser(req));
});



module.exports= router;
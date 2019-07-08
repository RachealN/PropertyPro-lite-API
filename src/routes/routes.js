// const express = require('express');
// const router = express.Router();

// const app = express()

// const PropertyController = require('../controllers/property')
// const UserController = require('../controllers/user')
// const Authorization = require('../middleware/auth')
import express from 'express';
// import router from 'express.Router()';
// import app from 'express';
import PropertyController from '../controllers/property';
import UserController from '../controllers/user';
import Authorization from '../middleware/auth';

const router = express.Router();
const app = express()

//property routes
router.get('/api/property',Authorization.verifyToken,(req,res) =>{
    res.json(PropertyController.viewProperties(req));
});

router.post('/api/property',Authorization.verifyToken,(req,res) =>{
    res.status(201).json(PropertyController.postProperty(req));
});

router.get('/api/property/:id',Authorization.verifyToken,(req,res) =>{
    res.json(PropertyController.viewSpecificProperty(req));
});

router.patch('/api/property/:id/sold',Authorization.verifyToken,(req,res) =>{
    res.status(201).json(PropertyController.markProperty(req));
});

router.delete('/api/property/:id',Authorization.verifyToken,(req,res) =>{
    res.json(PropertyController.deleteProperty(req));
});


router.patch('/api/property/:id',Authorization.verifyToken,(req,res) =>{
    res.status(201).json(PropertyController.updateProperty(req));
});


//user routes
router.post('/api/auth/signUp',(req,res)=>{
    res.status(201).json(UserController.signUp(req));
});

router.post('/api/auth/signIn',(req,res) =>{
    res.status(201).json(UserController.login(req));
});

router.get('/api/users',Authorization.verifyToken,(req,res) =>{
    res.json(UserController.getUsers(req));
});

router.get('/api/users/:id',(req,res) =>{
    res.json(UserController.getUser(req));
});

router.delete('/api/users/:id',(req,res) =>{
    res.json(UserController.deleteUser(req));
});

router.put('/api/users/:id',(req,res) =>{
    res.status(201).json(UserController.updateUser(req));
});

router.patch('/api/users/:id',(req,res) =>{
    res.status(201).json(UserController.patchUser(req));
});



// module.exports= router;
export default router;
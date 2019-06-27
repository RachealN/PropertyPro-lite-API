const express = require('express');
const router = express.Router();

const app = express()

const PropertyController = require('../controllers/property')

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


module.exports= router;
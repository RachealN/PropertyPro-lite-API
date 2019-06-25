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


module.exports= router;
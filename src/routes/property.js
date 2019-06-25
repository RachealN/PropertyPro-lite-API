const express = require('express');
const router = express.Router();

const app = express()

const PropertyController = require('../controllers/property')

router.get('/api/property',(req,res) =>{
    res.json(PropertyController.viewProperties(req));
});


module.exports= router;
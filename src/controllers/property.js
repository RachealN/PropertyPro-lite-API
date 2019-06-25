const {Properties,propertyArray} = require('../models/property')

class PropertyController{
    static viewProperties(req,res){
        return{
            "status":200,
            "data":propertyArray
        };
    }
}

module.exports = PropertyController
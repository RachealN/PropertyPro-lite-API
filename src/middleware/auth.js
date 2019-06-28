const jwt = require('jsonwebtoken');
const  UserController = require('../controllers/user')
const {Users,userArray} = require('../models/user')

class Authorization {
    static verifyToken(req,res){
        console.log(req.headers)
        if(!req.headers.authorization){
            return res.status(403).json({
                    "status":403,
                    "message":"No authorization token provided"
                })
                } 
        const token = req.headers.authorization.split(" ")[1]
                if ({token}){
                    jwt.verify(req.token,"heymaynameisracheal", (err, authUser) => {
                        console.log(req.authUser)
                        if(err) {
                            return res.status(200).json({
                                "status":200,
                                "success":"true",
                                "message":"succefully authenticated",token
                                
                                
                            })
                        }next();
                    })
                }else{
                    return res.status(403).json({
                        "status":403,
                        "success":"false",
                        "message":"No authorization token provided"
                    })
                }
            }

            static requireAdmin(req,res,next){
                const User = userArray.find(e => e.userId===parseInt(req.params.email));
                    if(User){
                        return res.status(200).json({
                            "status":200,
                            "success":"true",
                            "message":"Authorized to perform this function",User
                        })
                    }
                    if(!User){
                        return res.status(401).json({
                            "status":401,
                            "success":"false",
                            "message":"You cannot perform this function"
                        })
                    }
                    if(!User.admin){
                        return res.status(401).json({
                            "status":401,
                            "success":"false",
                            "message":"user exists but is no admin user"
                        })
                    }next();
        
                }
        }

module.exports = Authorization
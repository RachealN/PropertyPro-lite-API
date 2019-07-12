import jwt from 'jsonwebtoken';


class Authorization {
    //function to verify token
    static verifyToken(req,res,next){
        console.log(req.headers)
    //check headers for token
        if(!req.headers.authorization){
            return res.status(403).json({
                    "status":403,
                    "message":"No authorization token provided"
                })
                } 
    //if everything is good, save to request for use in other routes
        const token = req.headers.authorization.split(" ")[1]
                if ({token}){
                    jwt.verify(req.token,"heymaynameisracheal", (err, authUser) => {
                        console.log(req.authUser)
                        if(token) {
                            return next();
                            
                        }
                    })
                }else{
        // if there is no token
        // return an error
                    return res.status(403).json({
                        "status":403,
                        "success":"false",
                        "message":"No authorization token provided"
                    })
                }
            }
            //function to check if the user is admin
            static requireAdmin(req,res,next){
                const isAdmin = false
            //if everything is okay, save to request for use in the other routes
                if(req.body.isAdmin){
                    return next();
                }
            //if the current_user is not admin, return error
                if(!isAdmin){
                    return res.status(401).json({
                        "success":401,
                        "message":"Only administrators are authorized to perform this operation!"
                    })
                }
                }
            
                
            
        }

// module.exports = Authorization
export default Authorization;
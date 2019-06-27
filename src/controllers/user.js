const {Users,userArray} = require('../models/user')
const Validations = require('../middleware/validation')
const jwt = require('jsonwebtoken')



class UserController{
    static signUp(req,res){
        const {error} = Validations.signupValidation(req.body);
        if(error){
            return {
                "status":400,
                "message":error.details[0].message  
                    };
                        
                }
        const userResult = userArray.find(user => req.body.email === user.email);
		if(userResult) return{
			"status":400,
			"Error":"User with this email already exist"
		};
		
		else{
			const newUser = new Users ({
                Id:userArray.length + 1,
                email:req.body.email,
				firstName:req.body.firstName,
                lastName:req.body.lastName,
                password:req.body.password,
				phoneNumber:req.body.phoneNumber,
				address:req.body.address,
				isAdmin:req.body.isAdmin
	
					});
					
			userArray.push(newUser);
			const token = jwt.sign({newUser}, "heymaynameisracheal",{  expiresIn: 1440 });
			return [{
				"status":"Success",
				"data":newUser,token
				
				
			}];

		}

    }
    
    static login(req,res){
		const {error} = Validations.signinValidation(req.body);
		if(error){
			return {
				"status":400,
			  	"message":error.details[0].message  
		  };
			
		}
		const  {email,password}  =  req.body;
		const user = userArray.find(e =>(email === e.email && password === e.password ));
		if (user ){
			const token = jwt.sign({user}, "heymaynameisracheal",{  expiresIn: 1440 });
			return {
                "status":"Success",
                "data":user
				
			};
		}else if(!user){
			return {
				"status":"Error",
				"Error":"Authentication failed! You are not register in the system"
			}

		}else{
            return{
                "status":"error",
                "Error":"wrong credetilas"
            }
        }
	}


    }


    module.exports = UserController
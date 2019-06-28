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
	static getUsers(req,res) {
		return {
			"status":"success",
			"data":userArray
		}

	}

	static createUser(req,res){
			const {error} = Validations.signupValidation(req.body);
			if(error){
				return {
					"status":400,
					"message":error.details[0].message  
						};
							
					}
		const data = new Users ({
			Id:userArray.length + 1,
			email:req.body.email,
			firstName:req.body.firstName,
			lastName:req.body.lastName,
			password:req.body.password,
			phoneNumber:req.body.phoneNumber,
			address:req.body.address,
			isAdmin:req.body.isAdmin
			

				});
				
		userArray.push(data);
			return {
				"status":"success",
				"data":data
				
			};
		}

		static getUser(req,res){
			const get_id = userArray.find(check_id => check_id.Id===parseInt(req.params.id));
				
				if(!get_id){
					return{
					"status":"Error",
					"Error":"userId not found"
			   };
			}
			   return {
				"status":"success",
				"data":get_id
			}
			}

			static deleteUser(req,res){
				const get_id = userArray.find(check_id => check_id.Id === parseInt(req.params.id));
			if (!get_id) {
				return{
					"status":"Error",
					"Error":"userId not found"	
				};
			}
				const index=userArray.indexOf(get_id);
				userArray.splice(index,1);
				return{
					"status":"success",
					"data":get_id
				};
		
		
			}

			static updateUser(req,res){

				const {error} = Validations.signupValidation(req.body);
				if(error){
					return {
						"status":400,
						"message":error.details[0].message  
							};
								
						}
				const newUser = userArray.find(check_id => check_id.Id===parseInt(req.params.id));
					
				if(newUser){
						(newUser.email = req.body.email, newUser.firstName = req.body.firstName, newUser.lastName = req.body.lastName, newUser.password = req.body.password,
							newUser.phoneNumber = req.body.phoneNumber, newUser.address = req.body.address, newUser.isAdmin = req.body.isAdmin)
						return{
						"status":"success",
						"data":newUser
				};
				}
				return {
					"status":"Error",
					"Error":"user with that id is not found",
			
				}
				}

			static patchUser(req,res){

				const {error} = Validations.editValidation(req.body);
				if(error){
					return {
							"status":400,
							"message":error.details[0].message  
								};
									
							}
				const editUser = userArray.find(check_id => check_id.Id===parseInt(req.params.id));
						
				if(editUser){
							( editUser.firstName = req.body.firstName, editUser.lastName = req.body.lastName, editUser.address = req.body.address)
							return{
							"status":"success",
							"data":editUser
					};
					}
					return {
						"status":"Error",
						"Error":"user with that id is not found",
				
					}
					}
	
				
				

			
			
			
			
	
	


    }


    module.exports = UserController

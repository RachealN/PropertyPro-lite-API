import {Users,userArray} from '../models/user';
import Validations from '../middleware/validation';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import omit from 'omit'



class UserController{
	//create user account
    static signUp(req,res){
	//validate user signup details
        const {error} = Validations.signupValidation(req.body);
        if(error){
            return {
                "status":400,
                "message":error.details[0].message  
                    };       
                }
		//check if the user already exists
        const userResult = userArray.find(user => req.body.email === user.email);
		if(userResult) return{
			"status":400,
			"Error":"User with this email already exist"
		};
		else{
		//if the user doesnot exist, create a signup a new user
		const {password:hide} = req.body
		const newUser = new Users ({
                Id:userArray.length + 1,
                email:req.body.email,
				firstName:req.body.firstName,
				lastName:req.body.lastName,
				password:bcrypt.hashSync(hide,10),
				phoneNumber:req.body.phoneNumber,
				address:req.body.address,
				isAdmin:req.body.isAdmin
					});
			userArray.push(newUser);
			//create a token
			const token = jwt.sign({newUser}, "heymaynameisracheal",{  expiresIn: 1440 });
			const{password,...hideKeys} = newUser
			// console.log(hideKeys)
			return [{
				"status":201,
				"message":"User succesfully created",
				"data":hideKeys,token
			}];
		}
    }
    //login a user
    static login(req,res){
	//validate user login details
		const {password:hide} = req.body
		const {error} = Validations.signinValidation(req.body);
		if(error){
			return {
				"status":400,
			  	"message":error.details[0].message  
		  };
			
		}
		const  {email}  =  req.body;
		const user = userArray.find(e =>{ return email === e.email && bcrypt.compareSync(hide,e.password)});
		const{password, ...hideKey} = user
		console.log(hideKey)

		if (user ){
			const token = jwt.sign({user}, "heymaynameisracheal",{  expiresIn: 1440 });
			return {
				"status":200,
				"message":"succesfully logged In",
                "data":hideKey,token
				
			};
		}else if(!user){
			return {
				"status":401,
				"message":"Authentication failed! You are not register in the system"
			}

		}else{
            return{
                "status":401,
                "messsage":"wrong credetilas"
            }
		}
	}
	//get all users
	static getUsers(req,res) {
		return {
			"status":200,
			"message":"Users succesfully retrieved",
			"data":userArray
		}

	}
	
		//get a specific user
		static getUser(req,res){
			const get_id = userArray.find(check_id => check_id.Id===parseInt(req.params.id));
				
				if(!get_id){
					return {
						"status":404,
						"messsage":" PropertyId not found"
					};
			}
			   return {
				"status":200,
				"message":"User succesfully retrieved",
				"data":get_id
			}
			}
		//delete a user
			static deleteUser(req,res){
				const get_id = userArray.find(check_id => check_id.Id === parseInt(req.params.id));
			if (!get_id) {
				return {
					"status":404,
					"messsage":" PropertyId not found"
				};
			}
				const index=userArray.indexOf(get_id);
				userArray.splice(index,1);
				return{
					"status":200,
					"message":"user succesfully deleted",
					"data":get_id
				};
		
		
			}
			//update a user
			static updateUser(req,res){
				//validate update user
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
						"status":201,
						"message":"user succesfully updated",
						"data":newUser
				};
				}
				return {
					"status":404,
					"messsage":" PropertyId not found"
				};
				}
			//Edit a user
			static patchUser(req,res){
				//validate a patch user function
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
							"status":201,
							"message":"user is successfully edited",
							"data":editUser
					};
					}
					return {
						"status":404,
						"messsage":" PropertyId not found"
					};
					}
	
				
				

			
			
			
			
	
	


    }


	export default UserController;
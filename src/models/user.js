const userArray= []
    
    class Users{
        constructor({
            Id,
            email,
            firstName,
            lastName,
            password,
            phoneNumber,
            address,
            isAdmin
            
    
        }){
            this.Id = Id;
            this.email = email,
            this.firstName = firstName;
            this.lastName = lastName;
            this.password = password,
            this.phoneNumber = phoneNumber,
            this.address = address;
            this.isAdmin = isAdmin

        }
    
        
    }
    

module.exports = {Users,userArray};

    
    
    
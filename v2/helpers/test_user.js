
  let makeEmail = (length)=> {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  const userEmail = makeEmail(5)+'@gmail.com';
  const adminEmail = makeEmail(5)+'@gmail.com';
  
const token = 'efhqhhwwwWHDWUEQ bccaddddsaa'

const signupAdmin = {
    email:adminEmail,
    firstName:'tumu',
    lastName:'Rita',
    password:'hey@1234',
    address:'Kampala',
    isAdmin:true
}

const signupUser ={
    email:userEmail,
    firstName:'Namaara',
    lastName:'Racheal',
    password:'hey@1234',
    address:'Kampala',
    isAdmin:false
    
}

const loginAdmin = {
    email: adminEmail, 
    password: '1234567'
}

const loginUser = {
    email:'user@gmail.com',
    password:'heyhere'
}

export default {loginUser,loginAdmin,signupUser,signupAdmin,makeEmail,token}
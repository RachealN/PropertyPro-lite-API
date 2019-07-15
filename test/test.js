import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server'
import {Users,userArray} from '../src/models/user'
import jwt from 'jsonwebtoken';
import fs from 'fs'

// const storagePath = 'C:/Users/MARCUS/Desktop/PropertyPro Lite API/test/andela.png'
const should = chai.should();
const {expect} = chai.expect;

chai.use(chaiHttp);

const signupCredentials = {
    email:'racheal@gmail.com',
    firstName:'Namaara',
    lastName:'Racheal',
    password:'hey@1234',
    phoneNumber:'075463741',
    address:'Kampala',
    isAdmin:true
}
const loginCredentials = {
    email:'racheal@gmail.com',
    password:'hey@1234'
}

const propertyDetails = {
    status:'sold',
    price:'10.01',
    state:'Uganda',
    city:'kampala',
    address:'Entebbe',
    image_url:''
}

const markDetails ={
    status:'sold'
}

const editDetails = {
    firstName:'Namaara',
    lastName:'Racheal',
    address:'Kampala'
}

const token = 'dcgcajhacsah'
const user = userArray.find(user => req.body.email === user.email);


describe('GET/api/property', () =>{
    it('should return all properties',() =>{
        chai.request(server)
        .get('/api/property')
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');
            
        });
    });
});

// describe('POST/api/property',() =>{
//     it('should return a new property advert created',() =>{
//         chai.request(server)
//         .post('/api/property')
//         .field(propertyDetails)
//         .field('status','available')
//         .field('state','uganda')
//         .field('city','kampala')
//         .field('address','Entebbe')
//         .field('type','3bedroom')
//         .field('price','10.0')
//         .attach('image','test/andela.pg')
//         .attach('image', fs.readFileSync(storagePath), 'andela.png')
//         .set('Authorization', 'Bearer ' + token)
//         .end((err,res) =>{
//             chai.expect(res.body).to.be.a('object');
//             chai.expect(res.body.status).to.be.equal('success');
//             chai.expect(res.body.data).to.have.key('image_url','status','city','address','state','price','type');
//             chai.expect(res.body.data.image_url).to.be.a('string');
//             chai.expect(res.body.data.city).to.equal('Kampala');
//             chai.expect(res.body.data.state).to.equal('uganda');
//             chai.expect(res.body,data.address).to.equal('entebbe');
//             chai.expect(res.body.data.price).to.equal('10.0');
//             chai.expect(res.body.data.type).to.equal('3bedrooms');
//             chai.expect(res.body.data).to.equal('available');
//             chai.expect(res.statusCode).to.be.equal(201);
//             chai.expect(res.body).to.have.property('status');
//             chai.expect(res.type).to.be.equal('application/json');

//         });
//     });
//     // it('should not create property with empty address fields',() =>{
//     //     chai.request(server)
//     //     .post('/api/property')
//     //     .field(propertyDetails)
//     //     .field('status','available')
//     //     .field('state','uganda')
//     //     .field('city','kampala')
//     //     .field('address','Entebbe')
//     //     .field('type','3bedroom')
//     //     .field('price','10.0')
//     //     .attach('image', fs.readFileSync(storagePath), 'andela.png')
//     //     .set('Authorization', 'Bearer ' + token)
    //     .end((err,res) =>{
    //         chai.expect(res).to.have.status(400);
    //         chai.expect(res.body.status).to.be.equal('error');
    //         chai.expect(res.body.message).to.equal('\"address\" is not allowed to be empty');
    //     });

    // });
    // it('should not create property with empty status fields',() =>{
    //     chai.request(server)
    //     .post('/api/property')
    //     .field(propertyDetails)
    //     .field('status','available')
    //     .field('state','uganda')
    //     .field('city','kampala')
    //     .field('address','Entebbe')
    //     .field('type','3bedroom')
    //     .field('price','10.0')
    //     .attach('image', fs.readFileSync(storagePath), 'andela.png')
    //     .set('Authorization', 'Bearer ' + token)
    //     .end((err,res) =>{
    //         chai.expect(res).to.have.status(400);
    //         chai.expect(res.body.status).to.be.equal('error');
    //         chai.expect(res.body.message).to.equal('\"status\" is not allowed to be empty');
    //     });

    // });
    // it('should not create property with empty state fields',() =>{
    //     chai.request(server)
    //     .post('/api/property')
    //     .field(propertyDetails)
    //     .field('status','available')
    //     .field('state','uganda')
    //     .field('city','kampala')
    //     .field('address','Entebbe')
    //     .field('type','3bedroom')
    //     .field('price','10.0')
    //     .attach('image', fs.readFileSync(storagePath), 'andela.png')
    //     .set('Authorization', 'Bearer ' + token)
    //     .end((err,res) =>{
    //         chai.expect(res).to.have.status(400);
    //         chai.expect(res.body.status).to.be.equal('error');
    //         chai.expect(res.body.message).to.equal('\"state\" is not allowed to be empty');
    //     });

    // });

    // it('should not create property with empty city fields',() =>{
    //     chai.request(server)
    //     .post('/api/property')
    //     .field(propertyDetails)
    //     .field('status','available')
    //     .field('state','uganda')
    //     .field('city','kampala')
    //     .field('address','Entebbe')
    //     .field('type','3bedroom')
    //     .field('price','10.0')
    //     .attach('image', fs.readFileSync(storagePath), 'andela.png')
    //     .set('Authorization', 'Bearer ' + token)
    //     .end((err,res) =>{
    //         chai.expect(res).to.have.status(400);
    //         chai.expect(res.body.status).to.be.equal('error');
    //         chai.expect(res.body.message).to.equal('\"city\" is not allowed to be empty');
    //     });

    // });
    // it('should not create property with empty type fields',() =>{
    //     chai.request(server)
    //     .post('/api/property')
    //     .field(propertyDetails)
    //     .field('status','available')
    //     .field('state','uganda')
    //     .field('city','kampala')
    //     .field('address','Entebbe')
    //     .field('type','3bedroom')
    //     .field('price','10.0')
    //     .attach('image', fs.readFileSync(storagePath), 'andela.png')
    //     .set('Authorization', 'Bearer ' + token)
    //     .end((err,res) =>{
    //         chai.expect(res).to.have.status(400);
    //         chai.expect(res.body.status).to.be.equal('error');
    //         chai.expect(res.body.message).to.equal('\"type\" is not allowed to be empty');
    //     });

    // });
    // it('should not create property with empty price fields',() =>{
    //     chai.request(server)
    //     .post('/api/property')
    //     .field(propertyDetails)
    //     .field('status','available')
    //     .field('state','uganda')
    //     .field('city','kampala')
    //     .field('address','Entebbe')
    //     .field('type','3bedroom')
    //     .field('price','10.0')
    //     .attach('image', fs.readFileSync(storagePath), 'andela.png')
    //     .set('Authorization', 'Bearer ' + token)
    //     .end((err,res) =>{
    //         chai.expect(res).to.have.status(400);
    //         chai.expect(res.body.status).to.be.equal('error');
    //         chai.expect(res.body.message).to.equal('\"price\" is not allowed to be empty');
    //     });

    // });
    // it('should not create property with empty image_url fields',() =>{
    //     chai.request(server)
    //     .post('/api/property')
    //     .field(propertyDetails)
    //     .field('status','available')
    //     .field('state','uganda')
    //     .field('city','kampala')
    //     .field('address','Entebbe')
    //     .field('type','3bedroom')
    //     .field('price','10.0')
    //     .attach('image', fs.readFileSync(storagePath), 'andela.png')
    //     .set('Authorization', 'Bearer ' + token)
    //     .end((err,res) =>{
    //         chai.expect(res).to.have.status(400);
    //         chai.expect(res.body.status).to.be.equal('error');
    //         chai.expect(res.body.message).to.equal('\"image_url\" is not allowed to be empty');
    //     });

    // });
//     it('should create property without a token in the headers',() =>{
//         chai.request(server)
//         .post('/api/property')
//         .field(propertyDetails)
//         .field('status','available')
//         .field('state','uganda')
//         .field('city','kampala')
//         .field('address','Entebbe')
//         .field('type','3bedroom')
//         .field('price','10.0')
//         .attach('image', fs.readFileSync(storagePath), 'andela.png')
//         .set('Authorization', 'Bearer ' + token)
//         .end((err,res) =>{
//             chai.expect(res).to.have.status(403);
//             chai.expect(res.body.status).to.be.equal('error');
//             chai.expect(res.body.message).to.equal('No authorization token provided');
//         });

//     });
// });



describe('GET/api/property/:id',() =>{
    it('should return a specific property advert', () =>{
        chai.request(server)
        .get('/api/property/:id')
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');
        });
    });
});

describe('PATCH/api/property/:id/sold',() =>{
    it('should return a property marked as sold',() =>{
        chai.request(server)
        .patch('/api/property/:id/sold')
        .set('Authorization', 'Bearer ' + token)
        .send(markDetails)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');
        });
    });
});

describe('DELETE/api/property/:id',() =>{
    it('should return a deleted property advert',() =>{
        chai.request(server)
        .delete('/api/property/:id')
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');
        });
    });
});

describe('PATCH/api/property/:id',() =>{
    it('should return updated property data',() =>{
        chai.request(server)
        .patch('/api/property/:id')
        .send(propertyDetails)
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');
        });
    });
});

describe('POST/api/auth/signUp',() =>{
    it('should respond with a registered user with valid credentials',() =>{
        chai.request(server)
        .post('/api/auth/signUp')
        .send(signupCredentials)
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.have.an('array');
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.type).to.be.equal('application/json');
        });
    });
    

});
describe('POST/api/auth/signUp',() =>{
    it('should not signup a user with already exist email',(done) =>{
        chai.request(server)
        .post('/api/auth/signUp')
        .set('Authorization', 'Bearer ' + token)
        .send(signupCredentials)
        .then((res) =>{
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.body).to.be.an('object');
            chai.expect(res.type).to.be.equal('application/json');
            done();

        })
        .catch(err => done(err));
    });
    
});


describe('POST/api/auth/signIn', () =>{
	it('it should login  a user', () =>{
		chai.request(server)
		.post('/api/auth/signIn')
		.send(loginCredentials)
		.end((err,res) =>{
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.body).to.be.an('object');
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');
		});
		
	});
    it('should not signin a user with wrong credentials',() =>{
        chai.request(server)
        .post('/api/auth/signIn')
        .send({
            email:'racgmailcom',
            password:14253
        })
        .end((err,res) =>{
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.body).to.be.an('object');
            chai.expect(res.type).to.be.equal('application/json');
        });
    });

});

describe('verifyToken',() =>{
    it('it should respond with  authorisation header',function (){
        const token = jwt.sign({user}, "heymaynameisracheal",{  expiresIn: 1440 });
        chai.request(server)
        .get('/api/auth/signUp')
        .set('Authorization', 'Bearer ' + token)
        .end(function(err,res){
            chai.expect(res.body).to.be.a('object');
            if(err) return done(err);
        });
    });
});


describe('GET/api/users',() =>{
    it('should return all users in the system', () =>{
        chai.request(server)
        .get('/api/users')
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.type).to.be.equal('application/json');
            chai.expect(res.body).to.have.property('status');
            
        });
    });
});

describe(' GET/api/users/:id', () => {
    it('should return a single user', () => {
      chai.request(server)
        .get('/api/users/:id')
        .set('Authorization', 'Bearer ' + token)
        .end((err, res) => {
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.statusCode).to.be.equal(200);
          chai.expect(res.body).to.have.property('status');
        });
    });
  });

  describe('DELETE/api/users/:id',() =>{
    it('should return a deleted user details',() =>{
        chai.request(server)
        .delete('/api/user/:id')
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            
        });
    });
});

describe('PUT/api/users/:id', () => {
    it('should return updated user details', () => {
      chai.request(server)
        .get('/api/users/:id')
        .send(signupCredentials)
        .set('Authorization', 'Bearer ' + token)
        .end((err, res) => {
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.type).to.be.equal('application/json');
        
        });
    });
  });

  describe('PATCH/api/users/:id', () => {
    it('should return patched/edited user details', () => {
      chai.request(server)
        .get('/api/users/:id')
        .send(editDetails)
        .set('Authorization', 'Bearer ' + token)
        .end((err, res) => {
          chai.expect(res.body).to.be.a('object');
          chai.expect(res.type).to.be.equal('application/json');
          chai.expect(res.body).to.have.property('status');
          
        });
    });
  });


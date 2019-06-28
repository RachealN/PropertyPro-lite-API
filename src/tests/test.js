const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const {Users,userArray} = require('../models/user')
const jwt = require('jsonwebtoken');

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
    image_url:'https://pictures/image.png'
}

const markDetails ={
    status:'sold'
}

const authToken = 'dcgcajhacsah'
const user = userArray.find(user => req.body.email === user.email);


describe('GET/api/property', () =>{
    it('should return all properties',() =>{
        chai.request(server)
        .get('/api/property')
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.type).to.be.equal('application/json');
        });
    });
});

describe('POST/api/property',() =>{
    it('should return a new property advert created',() =>{
        chai.request(server)
        .post('/api/property')
        .send(propertyDetails)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.type).to.be.equal('application/json');

        });
    });
});

describe('GET/api/property/:id',() =>{
    it('should return a specific property advert', () =>{
        chai.request(server)
        .get('/api/property/:id')
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.type).to.be.equal('application/json');
        });
    });
});

describe('PATCH/api/property/:id/sold',() =>{
    it('should return a property marked as sold',() =>{
        chai.request(server)
        .patch('/api/property/:id/sold')
        .send(markDetails)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.type).to.be.equal('application/json');
        });
    });
});

describe('DELETE/api/property/:id',() =>{
    it('should return a deleted property advert',() =>{
        chai.request(server)
        .delete('/api/property/:id')
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.type).to.be.equal('application/json');
        });
    });
});

describe('PATCH/api/property/:id',() =>{
    it('should return updated property data',() =>{
        chai.request(server)
        .patch('/api/property/:id')
        .send(propertyDetails)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.type).to.be.equal('application/json');
        });
    });
});

describe('POST/api/auth/signUp',() =>{
    it('should respond with a registered user with valid credentials',(done) =>{
        chai.request(server)
        .post('/api/auth/signUp')
        .send(signupCredentials)
        .end((err,res) =>{
            
            chai.expect(res.body).to.have.an('array');
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.type).to.be.equal('application/json');
    
           
            done();
        });
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
            chai.expect(res.type).to.be.equal('application/json');
		});
		
	});
});

describe('verifyToken',() =>{
    it('it should respond with  authorisation header',function (done){
        const token = jwt.sign({user}, "heymaynameisracheal",{  expiresIn: 1440 });
        chai.request(server)
        .get('/api/auth/signUp')
        .set('Authorization',authToken)
        .end(function(err,res){
            chai.expect(res.body).to.be.a('object');
            if(err) return done(err);
            done();
        });
    });
});


describe('GET/api/users',() =>{
    it('should return all users in the system', () =>{
        chai.request(server)
        .get('/api/users')
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.type).to.be.equal('application/json');
        });
    });
});

describe('POST/api/users',() =>{
    it('should respond with a new created user',(done) =>{
        chai.request(server)
        .post('/api/users')
        .send(signupCredentials)
        .end((err,res) =>{
            chai.expect(res.body).to.have.an('object');
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.type).to.be.equal('application/json');
    
           
            done();
        });
    });
});

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../server');

const should = chai.should();
const {expect} = chai.expect;

chai.use(chaiHttp);

const userCredentials = {
	email:'racheal@gmail.com',
	password:'hey@1234'
}

const token = 'dcgcajhacsah'


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
        .send({
            email:'racheal@gmail.com',
            firstName:'Namaara',
            lastName:'Racheal',
            password:'hey@1234',
            phoneNumber:'075463741',
            address:'Kampala',
            isAdmin:true
        })
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
		.send(userCredentials)
		.end((err,res) =>{
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.body).to.be.an('object');
            chai.expect(res.type).to.be.equal('application/json');
		});
		
	});
});


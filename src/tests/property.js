const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../server');

const should = chai.should();
const {expect} = chai.expect;

chai.use(chaiHttp);

describe('view all properties', () =>{
    it('should return all properties',() =>{
        chai.request(server)
        .get('/api/property')
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
        });
    });
});

describe('create a new property advert',() =>{
    it('should return a new property advert created',() =>{
        chai.request(server)
        .post('/api/property')
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(201);

        });
    });
});

describe('view a specific property advert',() =>{
    it('should return a specific property advert', () =>{
        chai.request(server)
        .get('/api/property/:id')
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
        });
    });
});

describe('mark property as sold',() =>{
    it('should return a property marked as sold',() =>{
        chai.request(server)
        .patch('/api/property/:id/sold')
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(201);
        });
    });
});

describe('delete a property advert',() =>{
    it('should return a delete advert',() =>{
        chai.request(server)
        .delete('/api/property/:id')
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
        });
    });
});

describe('update property data',() =>{
    it('should return updated data',() =>{
        chai.request(server)
        .patch('/api/property/:id')
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(201);
        });
    });
});

describe('signup a user',() =>{
    it('should sign up user with valid credentials',() =>{
        chai.request(server)
        .post('/api/auth/signUp')
        .send({
            email:"racheal@gmail.com",
            firstName:"Namaara",
            lastName:"Racheal",
            password:"hey@1234",
            PhoneNumber:"0756789341",
            kampala:"Kampala",
            isAdmin:true

        })
        .end((err,res) =>{
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.body).to.have.an('array');
        });
    });
});


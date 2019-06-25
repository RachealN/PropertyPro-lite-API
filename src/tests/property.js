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


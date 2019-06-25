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


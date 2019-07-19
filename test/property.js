import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import {token,markDetails,propertyDetails} from '../v2/helpers/test_pro'


const{ expect } = chai;

chai.use(require('chai-http'));




describe('All property routes', () => {
    it('should return all properties',() =>{
        chai.request(server)
        .get('/api/property')
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');
            
        });
    });

    it('should return a specific property advert', () =>{
        chai.request(server)
        .get('/api/property/:id')
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');
        });
    });

    it('should return a property marked as sold',() =>{
        chai.request(server)
        .patch('/api/property/:id/sold')
        .set('Authorization', 'Bearer ' + token)
        .send(markDetails)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');
        });
    });
    

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

    
    it('should post property',() =>{
        chai.request(server)
        .post('/api/property')
        .send(propertyDetails)
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.have.an('array');
            chai.expect(res.statusCode).to.be.equal(201);
            chai.expect(res.type).to.be.equal('application/json');
        });
    });

    it('should fetch the property', (done) => {
        chai.request(server)
          .patch('/api/property/1/sold')
          .set('Authorization', 'Bearer ' + token)
          .send()
          .end((err, res) => {
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.statusCode).to.be.equal(200);
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');
          });
      });
    

    it('should return updated property data',() =>{
        chai.request(server)
        .patch('/api/property/:id')
        .send(propertyDetails)
        .set('Authorization', 'Bearer ' + token)
        .end((err,res) =>{
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');
        });
    });

it('should get the property', (done) => {
    chai.request(server)
      .get('/api/property/1')
      .set('Authorization', 'Bearer ' + token)
      .send()
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.body.status.should.equal(200);
        return done();
      });
  });


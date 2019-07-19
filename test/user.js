import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken'
import server from '../server';
import {loginUser,loginAdmin,signupUser,signupAdmin,token} from '../v2/helpers/test_user'


const{ expect } = chai;

chai.use(require('chai-http'));
let userToken;
let adminToken;

describe('All User routes', () => {

  //register user
  it('should signup a user with valid details', async() => {
    chai.request(server)
      .post('/api/auth/register')
      .send({signupAdmin})
      .then((res) => {
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('data').to.be.an('object');
        done();
      })
      .catch(err => done(err));
  });});

  it('should enter valid first name', (done) => {
    const user = {signupUser};
    chai.request(server)
      .post('/api/auth/register')
      .send(user)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('data').to.be.an('object');
        done();
      });
  });
  
      
  
  

  
  it('should login admin', (done) => {
    chai.request(server)
      .post('/api/auth/login')
      .send({ loginAdmin })
      .set('Authorization', 'Bearer ' + token)
      .then((res) => {
            chai.expect(res.body).to.be.a('object');
            chai.expect(res.body).to.have.property('status');
            chai.expect(res.type).to.be.equal('application/json');
        done();
      })
      .catch(error => done(error));
  });
  it('should enter valid address', (done) => {
    chai.request(server)
      .post('/api/auth/register')
      .send(signupUser)
      .end((err, res) => {
        chai.expect(res.body).to.be.a('object');
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.type).to.be.equal('application/json');
      done();
    })
    .catch(error => done(error));
  });

//Login User
it('should login user', (done) => {
  chai.request(server)
    .post('/api/auth/login')
    .send({loginUser})
    .set('Authorization', 'Bearer ' + token)
    .then((res) => {
      chai.expect(res.body).to.have.property('status');
      chai.expect(res.type).to.be.equal('application/json');
      done();
    })
    .catch(error => done(error));
});

it('should not login user with invalid details', (done) => {
  chai.request(server)
    .post('/api/auth/login')
    .send({ email: 'admin@gmail', password: 'xxxx' })
    .then((res) => {
     
      chai.expect(res.type).to.be.equal('application/json');
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status');
      done();
    })
    .catch(error => done(error));
});


it('should respond with a registered user with valid credentials',(done) =>{
  chai.request(server)
  .post('/api/auth/signUp')
  .send(signupUser)
  .set('Authorization', 'Bearer ' + token)
  .end((err,res) =>{
      chai.expect(res.body).to.have.an('object');
      chai.expect(res.type).to.be.equal('application/json');
      done();
  });
});

describe('POST/api/auth/register',() =>{
  it('should not signup a user with already exist email',(done) =>{
      chai.request(server)
      .post('/api/auth/signUp')
      .set('Authorization', 'Bearer ' + token)
      .send(loginUser)
      .then((res) =>{
      
          chai.expect(res.body).to.be.an('object');
          chai.expect(res.type).to.be.equal('application/json');
          done();

      })
      .catch(err => done(err));
  });
  
});

it('should enter valid email', (done) => {
  const user = { loginUser};
  chai.request(server)
    .post('/api/auth/register')
    .send(user)
    .end((err, res) => {
      expect(res.body).to.be.an('array');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('data').to.be.an('object');
        done();
    });
});



import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import {loginUser,loginAdmin,signupUser,signupAdmin,makeEmail,token} from '../v2/helpers/test_user'


const{ expect } = chai;

chai.use(require('chai-http'));

describe('All property routes', () => {
  it('should signup a user with valid details',() => {
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
  });
});

it('should create a new user', (done) => {
  const user = {
    email: 'racheal@gmail.com',
    firstname: 'namaara',
    lastname: 'racheal',
    password: 'heythere',
    phoneNumber: '078456734',
    address: 'kigali',
  };
  chai.request(server)
    .post('/api/auth/register')
    .send(user)
    .end((err, res) => {
      chai.expect(res.body).to.have.an('array');
      chai.expect(res.statusCode).to.be.equal(201);
      chai.expect(res.type).to.be.equal('application/json');
    });
});

it('should not signup a user with already exist email',(done) =>{
  chai.request(server)
  .post('/api/auth/signUp')
  .set('Authorization', 'Bearer ' + token)
  .send('ssdfg@gmail.com')
  .then((res) =>{
      chai.expect(res.body).to.be.an('object');
      
      done();

  })
  .catch(err => done(err));
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
          
          done();

      })
      .catch(err => done(err));
  });
  
});


it('should signup user', (done) => {
  chai.request(server)
    .post('/api/auth/register')
    .send({signupUser})
    .set('Authorization', 'Bearer ' + token)
    .then((res) => {
      chai.expect(res.body).to.be.a('object');
      chai.expect(res.body).to.have.property('status');
      chai.expect(res.type).to.be.equal('application/json');
      done();
    })
    .catch(error => done(error));
});






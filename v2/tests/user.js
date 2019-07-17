import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import Credentials from '../v2/helpers/test_helpers'

chai.use(require('chai-http'));

let makeEmail = (length)=> {
  var result           = '';
  var characters       = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

describe('All User routes', () => {

  //register user
  it('should signup a user with valid details', (done) => {
    chai.request(app)
      .post('/api/auth/signup')
      .send({Credentials})
      .then((res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('data');
        expect(res.body).to.have.property('data').to.be.an('object');
        done();
      })
      .catch(err => done(err));
  });});

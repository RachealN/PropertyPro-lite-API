import express from 'express';
import PropertyDb from '../controllers/properties';
import Authorization from '../middleware/auth';
import connect from 'connect-multiparty';

const routee = express.Router();
const app = express();
const connection = connect();

routee.post('/api/property',PropertyDb.createProperty,connection);
routee.patch('/api/property/:id',Authorization.verifyToken, PropertyDb.updateProperty);
routee.patch('/api/property/:id/sold', PropertyDb.markProperty);
routee.get('/api/property/:id', Authorization.verifyToken,PropertyDb.getProperty);
routee.delete('/api/property/:id',PropertyDb.deleteProperty);
routee.get('/api/property',PropertyDb.getAll);



export default routee;
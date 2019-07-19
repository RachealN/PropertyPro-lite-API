import express from 'express';
import PropertyDb from '../controllers/properties';
import Authorization from '../middleware/auth';

const routee = express.Router();
const app = express();

routee.post('/api/property',Authorization.verifyToken,Authorization.requireAdmin,PropertyDb.createProperty,);
routee.patch('/api/property/:id',Authorization.verifyToken,Authorization.requireAdmin, PropertyDb.updateProperty);
routee.patch('/api/property/:id/sold',Authorization.verifyToken,Authorization.requireAdmin, PropertyDb.markProperty);
routee.get('/api/property/:id', Authorization.verifyToken,PropertyDb.getProperty);
routee.delete('/api/property/:id', Authorization.verifyToken,Authorization.requireAdmin,PropertyDb.deleteProperty);
routee.get('/api/property',Authorization.verifyToken,PropertyDb.getAllProperty,Authorization);



export default routee;
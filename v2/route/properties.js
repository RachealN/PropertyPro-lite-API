import express from 'express';
import PropertyDb from '../controllers/properties';

const routee = express.Router();
const app = express();

routee.post('/api/property', PropertyDb.createProperty);
routee.patch('/api/property/:id', PropertyDb.updateProperty);


export default routee;
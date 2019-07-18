import express from 'express';
import PropertyDb from '../controllers/properties';

const routee = express.Router();
const app = express();

routee.post('/api/property', PropertyDb.createProperty);


export default routee;
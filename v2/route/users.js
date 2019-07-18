import express from 'express';
import UserDb from '../controllers/users';
import PropertyDb from '../controllers/properties';


const route = express.Router();
const app = express();

route.post('/api/auth/register', UserDb.registerUsers);


export default route;
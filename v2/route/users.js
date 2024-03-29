import express from 'express';
import UserDb from '../controllers/users';


const route = express.Router();
const app = express();

route.post('/api/auth/register', UserDb.registerUsers);
route.post('/api/auth/login', UserDb.loginUser);


export default route;
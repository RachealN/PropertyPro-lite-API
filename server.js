import { Server } from 'tls';
import express from 'express';
import bodyParser from 'body-parser';
import Pool from './v2/models/db';

import route from './v2/route/users';
import routee from './v2/route/properties';

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use('/', route);
app.use('/', routee);

// app.use('/', routes);
app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to PropertyPro lite app' }));


const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));

console.log(`app: ${app.get('env')}`);



export default app;

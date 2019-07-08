import routes from './src/routes/routes';
import express from 'express';
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json());
app.use(express.json());

app.use('/',routes)
app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to PropertyPro lite app' }));


const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));


export default app;

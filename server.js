const express = require('express')

const app = express()
app.use(express.json());

app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to PropertyPro lite app' }));


const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app
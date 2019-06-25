'use strict';

var routes = require('./src/routes/property');
var resolveSoa = require('dns');
var express = require('express');
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use('/', routes);
app.get('/', function (req, res) {
  return res.status(200).send({ message: 'Welcome to PropertyPro lite app' });
});

var port = process.env.PORT || 8081;
app.listen(port, function () {
  return console.log('Listening on port ' + port + '...');
});

module.exports = app;
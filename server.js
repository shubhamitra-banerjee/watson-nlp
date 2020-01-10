// load environment properties from a .env file for local development
require('dotenv').config();
const app = require('./app.js');

const port = process.env.PORT || 3000;
//const request = require('request');
//var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
//	ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port);
console.log('listening at:', port); // eslint-disable-line

//app.listen(port,ip);

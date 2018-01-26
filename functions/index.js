const functions = require('firebase-functions');
const express = require('express');
const projects = require('./routes/projects');
const workexp = require('./routes/workexp');
const captchacheck = require('./routes/captchacheck');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/projects', projects);
app.use('/workexp', workexp);
app.use('/captchacheck', captchacheck);

exports.app = functions.https.onRequest(app);
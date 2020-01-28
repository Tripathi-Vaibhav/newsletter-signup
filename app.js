// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extented: true}));

app.listen(3000, function() {
  console.log("Server running on port 3000");
});

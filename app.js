// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  var f= req.body.fname;
  var l= req.body.lname;
  var e= req.body.email;
  // 419548220020dbc1a0a1003cee22abfe-us4 api key
  //8571735389 list key

  var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/8571735389",
    method: "POST",
    headers: {
      "Authorization": "Vaibhav 419548220020dbc1a0a1003cee22abfe-us4"
    }
  };

  request(options, function(error, response, body) {
    if(error){
      console.log(error);
    }
    else{
      console.log(response.statusCode);
    }
  });
});

app.listen(3000, function() {
  console.log("Server running on port 3000");
});

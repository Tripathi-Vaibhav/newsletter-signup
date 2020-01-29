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

  var data = {
    members: [
      { email_address: e,
        status: "subscribed",
        merge_fields: {
            FNAME: f,
            LNAME: l
        }
      } ]
  };

  var json = JSON.stringify(data);

  var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/8571735389",
    method: "POST",
    headers: {
      "Authorization": "Vaibhav 419548220020dbc1a0a1003cee22abfe-us4"
    },
    body: json
  };

  request(options, function(error, response, body) {
    if(error){
      res.sendFile(__dirname + "/failure.html");
    }
    else{
      if(response.statusCode === 200)
        res.sendFile(__dirname + "/success.html");

      else
        res.sendFile(__dirname + "/failure.html");
    }
  });
});

app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server running on port 3000");
});

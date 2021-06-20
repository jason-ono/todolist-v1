// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// integrating EJS
  // https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// storage for all tasks
var items = [];

// this is necessary to start parsing the body of POST request
app.use(bodyParser.urlencoded({extended: true}));

// "Use EJS as the view engine"
app.set("view engine", "ejs");

app.get("/", function(req, res){
  var today = new Date();

  var options = {
    year: "numeric",
    month: "numeric"
  };

  // day = today.toLocaleString();

  /*
  old version

  var day = "";

  if (today.getDay() === 6 || today.getDay() === 0){
    day = "weekend";
  } else {
    day = "weekday";
  }
  */

  // this is what gets passed to .ejs file
  res.render("list", {
    dayType: today,
    itemList: items
  });
});

// cataches the form input
app.post("/", function(req, res){
  var task = req.body.taskName;

  // register this new task to the items
  items.push(task);

  // now, triggers app.get for home route
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
})

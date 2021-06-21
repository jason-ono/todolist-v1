// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// integrating EJS
  // https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// storage for all tasks
var items = [];
var workItems = [];

// this is necessary to start parsing the body of POST request
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// "Use EJS as the view engine"
app.set("view engine", "ejs");

// form on .ejs redirects herre
app.get("/", function(req, res){

  // this is what gets passed to .ejs file
  res.render("list", {
    listTitle: "General",
    itemList: items
  });
});

// /work GET
app.get("/work", function(req, res){
  res.render("list", {
    listTitle: "Work",
    itemList: workItems
  });
});

/*
  cataches the form input
  since this is the .ejs for both general & work,
  this should handle the two categories differently
*/
app.post("/", function(req, res){
  var task = req.body.taskName;

  // list is the name attached to the button in .ejs file
  if(req.body.list == "Work"){
    workItems.push(task);
    // redirect to the same page
    res.redirect("/work")
  }else{
    items.push(task);
    res.redirect("/")
  }
});





app.listen(3000, function(){
  console.log("Server started on port 3000");
})







/*

DOESNT work, the form on .ejs file redirects to the root

// work task POST req
app.post("/work", function(req, res){
  var workTask = req.body.taskName;

  // register this new task to the items
  workItems.push(workTask);

  // now, triggers app.get for home route
  res.redirect("/work");
});*/

/*
before deleting date module

var today = new Date();

var options = {
  year: "numeric",
  month: "numeric"
};
*/

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

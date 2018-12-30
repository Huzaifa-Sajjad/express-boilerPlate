const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/routes");

//Initializing the Express Application
const app = express();
//Setting up PUG as default templating language
app.set("view engine","pug");
//Connection for mongoDB
mongoose.connect('mongodb://localhost:27017/hello');
//Initializing Body-Parser 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Setting up static server
app.use("/static",express.static("public"));
//Redirecting the routes
app.use("/",router);
//Middle ware for 404
app.use((req,res,next)=>{
  let error = new Error("Page Not Found!");
  error.status = 404;
  return next(error);
});
//Catching and throwing errors
app.use((err,req,res,next)=>{
  return res.send(err);
});
//Setting up the express server
app.listen(3000,()=>{console.log("Express App Running on port 3000")});


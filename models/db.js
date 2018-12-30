const mysql = require("mysql");

let conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"hello"
});

conn.connect(function(err){
  if(err)
    console.log(err);
  else
    console.log("Connected to MYSQL DB");
});

module.exports = conn;
let path = require("path")
let express=require("express");
let db=require("../db.js");
let bodyParser=require("body-parser");
require("dotenv").config();
let app=express();

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())


module.exports=app;

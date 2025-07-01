<<<<<<< HEAD
let express=require("express");
let db=require("../db.js");
let bodyParser=require("body-parser");
require("dotenv").config();
let app=express();

app.set("view engine","ejs");
app.use(express.static,("public"));
app.use(bodyParser.urlencoded({extended:true}))


module.exports=app;
=======
let express = require("express")
let bodyParser = require("body-parser")
let msql = require("msql2")
let router = require.Router()
let app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json)
app.set("views engine","ejs")

module.exports = app
>>>>>>> 9e65d505d3be7138499fc702a28ee5863f2168a1

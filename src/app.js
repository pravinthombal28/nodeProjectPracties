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
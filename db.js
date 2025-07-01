let mysql=require("mysql2");
let express=require("express");
require("dotenv").config();

let conn=mysql.createConnection({
    host:process.env.db_host,
    password:process.env.db_password,
    user:process.env.db_user,
    database:process.env.db_database
})

conn.connect=(req,res)=>{
    if(err){
        console.log("database is not connect..");
    }
    else{
        console.log("Database is Connected......");
    }
}

module.exports=conn;
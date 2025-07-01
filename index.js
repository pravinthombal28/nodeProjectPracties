let app=require("./src/app.js");


app.listen(process.env.server_port=3000,(req,res)=>{
    console.log("Server started......");
})


var express=require('express')
var app=express()
const port=process.env.PORT || 3001
app.get("/",(req,res)=>{
    res.send("Hello User")
})
var server=app.listen(port,function(){
//console.log("Server started ")
})
module.exports=server

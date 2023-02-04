const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const qr=require("qrcode");

const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


// cont qr=
app.get("/",(req,res,next)=>{
    res.render("index");
})


app.post("/scan",(req,res,next)=>{
    const url=req.body.url;

    if(url.length===0){
        
    }
})

app.listen(8080,(req,res)=>{
    console.log("Sever is Up and Running!");
})
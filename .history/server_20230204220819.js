const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const qr=require("qrcode");

const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


// cont qr=



app.listen(8080,())
const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const qr=require("qrcode");

const app=express();
app.set("view engine","ejs");
app.use(body)
// cont qr=
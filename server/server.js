var express=require("express");
var bodyParser=require('body-parser');
var app = express();
var path = require('path');
var http = require('http');
app.get("/",function(req,res){
  console.log("success");
  res.status(200).json("hiiiiii");
});

app.get("/index/",function(req,res){
  console.log("success",req.query);
  res.status(200).json("Index Text");
});
app.post("/index/post/",function(req,res){
  console.log("success",req.body);
  res.status(200).json("Index Log Text Link");
});
app.put("/index/put/",function(req,res){
  console.log("success",req.body);
  res.status(200).json("Index Log Text Link");
});
app.delete("/index/delete/",function(req,res){
  console.log("success",req.body);
  res.status(200).json("Index Log Text Link");
});
// res.end('Hello World!');
app.listen(8080);
console.log('Server running on http://localhost:8080');
